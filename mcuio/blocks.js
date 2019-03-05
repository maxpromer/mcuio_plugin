Blockly.Blocks['mcuio_wait_ready'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.MCUIO_WAIT_READY_MESSAGE,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": Blockly.Msg.MCUIO_WAIT_READY_TOOLTIP,
			"helpUrl": "https://www.ioxhop.com/"
		});
	}
};

Blockly.Blocks['mcuio_digital_write'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.MCUIO_DIGITAL_WRITE_MESSAGE,
			"args0": [{
				"type": "field_dropdown",
				"name": "pin",
				"options": [
					[ "D0", "7" ],
					[ "D1", "8" ],
					[ "D2", "9" ],
					[ "D3", "10" ],
					[ "D4", "12" ],
					[ "D5", "13" ],
					[ "A0", "14" ],
					[ "A1", "15" ],
					[ "A2", "16" ],
					[ "A3", "17" ]
				]
			}, {
				"type": "input_value",
				"name": "value",
				"check": [
					"Boolean",
					"Number"
				]
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": Blockly.Msg.MCUIO_DIGITAL_WRITE_TOOLTIP,
			"helpUrl": "https://www.ioxhop.com/"
		});
	}
};

Blockly.Blocks['mcuio_digital_read'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.MCUIO_DIGITAL_READ_MESSAGE,
			"args0": [{
				"type": "field_dropdown",
				"name": "pin",
				"options": [
					[ "D0", "7" ],
					[ "D1", "8" ],
					[ "D2", "9" ],
					[ "D3", "10" ],
					[ "D4", "12" ],
					[ "D5", "13" ],
					[ "A0", "14" ],
					[ "A1", "15" ],
					[ "A2", "16" ],
					[ "A3", "17" ]
				]
			}],
			"output": null,
			"colour": 180,
			"tooltip": Blockly.Msg.MCUIO_DIGITAL_READ_TOOLTIP,
			"helpUrl": "https://www.ioxhop.com/"
		});
	}
};

/*
Blockly.Blocks['mcuio_analog_write'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.MCUIO_ANALOG_WRITE_MESSAGE,
			"args0": [ {
				"type": "field_dropdown",
				"name": "pin",
				"options": [
					[ "3", "3" ],
					[ "5", "5" ],
					[ "6", "6" ],
					[ "11", "11" ]
				]
			}, {
				"type": "input_value",
				"name": "value",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": Blockly.Msg.MCUIO_ANALOG_WRITE_TOOLTIP,
			"helpUrl": "https://www.ioxhop.com/"
		});
	}
};
*/

Blockly.Blocks['mcuio_analog_read'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.MCUIO_ANALOG_READ_MESSAGE,
			"args0": [{
				"type": "field_dropdown",
				"name": "pin",
				"options": [
					[ "A0", "14" ],
					[ "A1", "15" ],
					[ "A2", "16" ],
					[ "A3", "17" ]
				]
			}],
			"inputsInline": true,
			"output": null,
			"colour": 180,
			"tooltip": Blockly.Msg.MCUIO_ANALOG_READ_TOOLTIP,
			"helpUrl": "https://www.ioxhop.com/"
		});
	}
};

Blockly.Blocks['mcuio_servo'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.MCUIO_SERVO_MESSAGE,
			"args0": [{
				"type": "field_dropdown",
				"name": "pin",
				"options": [
					[ "D0", "7" ],
					[ "D1", "8" ],
					[ "D2", "9" ],
					[ "D3", "10" ],
					[ "D4", "12" ],
					[ "D5", "13" ],
					[ "A0", "14" ],
					[ "A1", "15" ],
					[ "A2", "16" ],
					[ "A3", "17" ]
				]
			}, {
				"type": "input_value",
				"name": "value",
				"check": [
					"Boolean",
					"Number"
				]
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": Blockly.Msg.MCUIO_SERVO_TOOLTIP,
			"helpUrl": "https://www.ioxhop.com/"
		});
	}
};

Blockly.Blocks['mcuio_motor'] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.MCUIO_MOTOR_MESSAGE,
			"args0": [{
				"type": "field_dropdown",
				"name": "n",
				"options": [
					[ "1", "1" ],
					[ "2", "2" ]
				]
			}, {
				"type": "field_dropdown",
				"name": "dir",
				"options": [
					[ Blockly.Msg.MCUIO_MOTOR_FORWARD, "1" ],
					[ Blockly.Msg.MCUIO_MOTOR_BACKWARD, "2" ]
				]
			}, {
				"type": "input_value",
				"name": "value",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": Blockly.Msg.MCUIO_MOTOR_TOOLTIP,
			"helpUrl": "https://www.ioxhop.com/"
		});
	}
};
