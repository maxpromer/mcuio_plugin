Blockly.JavaScript['mcuio_wait_ready'] = function(block) {
	var code = 'while(DEV_I2C1.MCUio(0, 0x08).error) vTaskDelay(50 / portTICK_RATE_MS);\n';
	return code;
};

Blockly.JavaScript['mcuio_digital_read'] = function(block) {
	var dropdown_pin = block.getFieldValue('pin');
	var code = 'DEV_I2C1.MCUio(0, 0x08).digitalRead(' + dropdown_pin + ')';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['mcuio_digital_write'] = function(block) {
	var dropdown_pin = block.getFieldValue('pin');
	var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
	var code = 'DEV_I2C1.MCUio(0, 0x08).digitalWrite(' + dropdown_pin + ', ' + value_value + ');\n';
	return code;
};

Blockly.JavaScript['mcuio_analog_write'] = function(block) {
	var dropdown_pin = block.getFieldValue('pin');
	var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
	var code = 'DEV_I2C1.MCUio(0, 0x08).analogWrite(' + dropdown_pin + ', ' + value_value + ');\n';
	return code;
};

Blockly.JavaScript['mcuio_analog_read'] = function(block) {
	var dropdown_pin = block.getFieldValue('pin');
	var code = 'DEV_I2C1.MCUio(0, 0x08).analogRead(' + dropdown_pin + ')';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['mcuio_servo'] = function(block) {
	var dropdown_pin = block.getFieldValue('pin');
	var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
	var code = 'DEV_I2C1.MCUio(0, 0x08).servo(' + dropdown_pin + ', ' + value_value + ');\n';
	return code;
};

Blockly.JavaScript['mcuio_motor'] = function(block) {
	var dropdown_n = block.getFieldValue('n');
	var dropdown_dir = block.getFieldValue('dir');
	var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
	var code = '';
	code += 'DEV_I2C1.MCUio(0, 0x08).analogWrite(' + (dropdown_n == 1 ? '5' : '3') + ', ' + (dropdown_dir == 1 ? value_value : '0') + ');\t';
	code += 'DEV_I2C1.MCUio(0, 0x08).analogWrite(' + (dropdown_n == 1 ? '6' : '11') + ', ' + (dropdown_dir == 1 ? '0' : value_value) + ');\n';
	return code;
};
