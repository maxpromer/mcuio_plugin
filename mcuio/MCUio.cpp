#ifndef __MCUio_CPP__
#define __MCUio_CPP__

#include "MCUio.h"

MCUio::MCUio(int bus_ch, int dev_addr) {
	channel = bus_ch;
	address = dev_addr;
	polling_ms = MCUio_POLLING_MS;
}

void MCUio::init(void) {
	/*
	// Reset speed of I2C
	i2c_config_t conf;

	conf.mode = I2C_MODE_MASTER;
	conf.sda_io_num = CHAIN_SDA_GPIO;
	conf.sda_pullup_en = GPIO_PULLUP_ENABLE;
	conf.scl_io_num = CHAIN_SCL_GPIO;
	conf.scl_pullup_en = GPIO_PULLUP_ENABLE;
	conf.master.clk_speed = 100E3;

	i2c_param_config(I2C_NUM_1, &conf);
	*/
	
	// Set new timeout of i2c
	i2c_set_timeout(I2C_NUM_1, 50000);
	
	state = s_detect;
}

int MCUio::prop_count(void) {
	return 0;
}

bool MCUio::prop_name(int index, char *name) {
	// not supported
	return false;
}

bool MCUio::prop_unit(int index, char *unit) {
	// not supported
	return false;
}

bool MCUio::prop_attr(int index, char *attr) {
	// not supported
	return false;
}

bool MCUio::prop_read(int index, char *value) {
	// not supported
	return false;
}

bool MCUio::prop_write(int index, char *value) {
	// not supported
	return false;
}

void MCUio::process(Driver *drv) {
	i2c = (I2CDev *)drv;
	
	switch (state) {
		case s_detect:
			// detect i2c device
			if (i2c->detect(channel, address) == ESP_OK) {	
				uint8_t data[] = { 0xFF, 0 };
				if (i2c->write(channel, address, data, 2) == ESP_OK) {
					// get current tickcnt
					tickcnt = get_tickcnt();
					
					state = s_reset;
				} else {
					state = s_error;
				}
			} else {
				state = s_error;
			}
			break;
		
		case s_reset:
			// wait polling_ms timeout
			if (is_tickcnt_elapsed(tickcnt, 100)) {
				// set initialized flag
				initialized = true;
				// clear error flag
				error = false;

				state = s_running;
			}
			break;
		
		case s_running: {
			if (i2c->detect(channel, address) != ESP_OK) {
				state = s_error;
			}
			break;
		}

		case s_error:
			// set error flag
			error = true;
			// clear initialized flag
			initialized = false;
			// get current tickcnt
			tickcnt = get_tickcnt();
			// goto wait and retry with detect state
			state = s_wait;
			break;

		case s_wait:
			// wait polling_ms timeout
			if (is_tickcnt_elapsed(tickcnt, polling_ms)) {
				state = s_detect;
			}
			break;
	}
}

void MCUio::pinMode(uint8_t pin, uint8_t mode) {
	if (error) return;
	
	uint8_t data[] = { (uint8_t)(pin + 1), mode };
	i2c->write(channel, address, data, 2);
}

void MCUio::digitalWrite(uint8_t pin, uint8_t value) {
	if (error) return;
	
	// Set pin to OUTPUT
	this->pinMode(pin, 1);
	
	uint8_t data[] = { (uint8_t)(pin + 21), value };
	i2c->write(channel, address, data, 2);
}

int MCUio::digitalRead(uint8_t pin) {
	if (error) return 0;
	
	// Set pin to INPUT
	this->pinMode(pin, 0);
	
	uint8_t reg = pin + 21;
	uint8_t data = 0;
	i2c->read(channel, address, &reg, 1, &data, 1);

	return data;
}

int MCUio::analogRead(uint8_t pin) {
	if (error) return 0;
	
	// Set pin to INPUT
	this->pinMode(pin, 0);
	
	uint8_t reg = (pin - 14) * 2 + 41;
	uint8_t data[2];
	i2c->read(channel, address, &reg, 1, data, 2);
	
	return data[0] | (data[1]<<8);
}

void MCUio::analogWrite(uint8_t pin, uint8_t value) {
	if (error) return;
	
	// Set pin to OUTPUT
	this->pinMode(pin, 1);
	
	uint8_t addr = 0;
	if (pin == 3) addr = 53;
	else if (pin == 5) addr = 54;
	else if (pin == 6) addr = 55;
	else if (pin == 9) addr = 56;
	else if (pin == 10) addr = 57;
	else if (pin == 11) addr = 58;
	
	uint8_t data[] = { addr, value };
	i2c->write(channel, address, data, 2);
}

void MCUio::tone(uint8_t pin, int frequency) {
	if (error) return;
	
	// Set pin to OUTPUT
	this->pinMode(pin, 1);
	
	uint8_t data[] = { 
		59, (uint8_t)((frequency>>8)&0xFF),
		60, (uint8_t)(frequency&0xFF),
		61, (uint8_t)((pin&0x0F)|0x10)
	};
	i2c->write(channel, address, data, 6);
}

void MCUio::noTone(uint8_t pin) {
	if (error) return;
	
	/*
	// Set pin to OUTPUT
	this->pinMode(pin, 1);
	*/
	
	uint8_t data[] = { 61, (uint8_t)(pin&0x0F) };
	i2c->write(channel, address, data, 2);
}

void MCUio::servo(uint8_t pin, uint8_t angle) {
	if (error) return;
	
	// Set pin to OUTPUT
	this->pinMode(pin, 1);
	
	uint8_t addr = 0;
	if (pin == 2) addr = 62;
	else if (pin == 4) addr = 63;
	else if (pin == 7) addr = 64;
	else if (pin == 8) addr = 65;
	else if (pin == 12) addr = 66;
	else if (pin == 13) addr = 67;
	else if (pin == 14) addr = 68;
	else if (pin == 15) addr = 69;
	else if (pin == 16) addr = 70;
	else if (pin == 17) addr = 71;
	
	uint8_t data[] = { addr, angle };
	i2c->write(channel, address, data, 2);
}


#endif
