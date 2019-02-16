#ifndef __MCUio_H__
#define __MCUio_H__

#include "driver.h"
#include "device.h"
#include "i2c-dev.h"
#include "esp_log.h"
#include "esp_system.h"
#include "freertos/event_groups.h"
#include "kidbright32.h"

#define MCUio_POLLING_MS 100

class MCUio : public Device {
	private:
		enum {
			s_detect, 
			s_reset,
			s_running, 
			s_error, 
			s_wait
		} state;
		TickType_t tickcnt;
		
		I2CDev *i2c;

	public:
		// constructor
		MCUio(int bus_ch, int dev_addr);
		// override
		void init(void);
		void process(Driver *drv);
		int prop_count(void);
		bool prop_name(int index, char *name);
		bool prop_unit(int index, char *unit);
		bool prop_attr(int index, char *attr);
		bool prop_read(int index, char *value);
		bool prop_write(int index, char *value);
		
		// method
		void pinMode(uint8_t pin, uint8_t mode) ;
		void digitalWrite(uint8_t pin, uint8_t value) ;
		int digitalRead(uint8_t pin) ;
		int analogRead(uint8_t pin) ;
		void analogWrite(uint8_t pin, uint8_t value) ;
		void tone(uint8_t pin, int frequency) ;
		void noTone(uint8_t pin) ;
		void servo(uint8_t pin, uint8_t angle) ;
		
};

#endif
