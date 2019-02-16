
Blockly.Blocks['mcuio_wait_ready'] = {
	init: function() {
		this.jsonInit({
			"message0": "MCUio wait ready",
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": "Wait arduino ready",
			"helpUrl": "https://www.ioxhop.com/"
		});
	}
};

Blockly.Blocks['mcuio_digital_write'] = {
	init: function() {
		this.jsonInit({
			"message0": "digital write pin %1 to %2",
			"args0": [{
				"type": "field_dropdown",
				"name": "pin",
				"options": [
					[ "0", "0" ],
					[ "1", "1" ],
					[ "2", "2" ],
					[ "3", "3" ],
					[ "4", "4" ],
					[ "5", "5" ],
					[ "6", "6" ],
					[ "7", "7" ],
					[ "8", "8" ],
					[ "9", "9" ],
					[ "10", "10" ],
					[ "11", "11" ],
					[ "12", "12" ],
					[ "13", "13" ],
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
			"tooltip": "Write digital value to any pin on Arduino",
			"helpUrl": "https://www.ioxhop.com/"
		});
	}
};

Blockly.Blocks['mcuio_digital_read'] = {
	init: function() {
		this.jsonInit({
			"message0": "digital read pin %1",
			"args0": [{
				"type": "field_dropdown",
				"name": "pin",
				"options": [
					[ "0", "0" ],
					[ "1", "1" ],
					[ "2", "2" ],
					[ "3", "3" ],
					[ "4", "4" ],
					[ "5", "5" ],
					[ "6", "6" ],
					[ "7", "7" ],
					[ "8", "8" ],
					[ "9", "9" ],
					[ "10", "10" ],
					[ "11", "11" ],
					[ "12", "12" ],
					[ "13", "13" ],
					[ "A0", "14" ],
					[ "A1", "15" ],
					[ "A2", "16" ],
					[ "A3", "17" ]
				]
			}],
			"output": null,
			"colour": 180,
			"tooltip": "Read digital value to any pin on Arduino",
			"helpUrl": "https://www.ioxhop.com/"
		});
	}
};

Blockly.Blocks['mcuio_analog_write'] = {
	init: function() {
		this.jsonInit({
			"message0": "analog write pin %1 to %2",
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
			"tooltip": "Write analog value to some pin on Arduino",
			"helpUrl": "https://www.ioxhop.com/"
		});
	}
};

Blockly.Blocks['mcuio_analog_read'] = {
	init: function() {
		this.jsonInit({
			"message0": "analog read pin %1",
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
			"tooltip": "Read analog value to some pin on Arduino",
			"helpUrl": "https://www.ioxhop.com/"
		});
	}
};

Blockly.Blocks['mcuio_servo'] = {
	init: function() {
		this.jsonInit({
			"message0": "servo pin %1 set to %2",
			"args0": [{
				"type": "field_dropdown",
				"name": "pin",
				"options": [
					[ "2", "2" ],
					[ "4", "4" ],
					[ "7", "7" ],
					[ "8", "8" ],
					[ "12", "12" ],
					[ "13", "13" ],
					[ "A0", "A0" ],
					[ "A1", "A1" ],
					[ "A2", "A2" ],
					[ "A3", "A3" ]
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
			"tooltip": "Write servo value to any pin on Arduino",
			"helpUrl": "https://www.ioxhop.com/"
		});
	}
};
