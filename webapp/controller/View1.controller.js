sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("iotClient.controller.View1", {
		onInit: function() {
			this.getView().setModel(new sap.ui.model.json.JSONModel({
				vorname: "",
				nachname: "",
				team: ""

			}), "neuerAntrag");
		},

		createRecord: function() {
			var data = this.getView().getModel("neuerAntrag").oData;
			// this.getOwnerComponent().getModel().create("/T_IOT_F1B3F3605C715639D435", data,{
			// 	error:function(oError){
			// 		console.error("fehler\t>>\t",oError);
			// 	},
			// 	success:function(oData,oResponse){
			// 		console.info("hat gepasst\t>>\t", oData,oResponse);
			// 	}
			// });
			var settings = {
				"async": true,
				"crossDomain": false,
				"url": "https://iotmmss0016403060trial.hanatrial.ondemand.com/com.sap.iotservices.mms/v1/api/http/data/389786b3-7cd6-4575-811a-1f176deeec06",
				"method": "POST",
				"headers": {
					"content-type": "application/json",
					"authorization": "Bearer bb98c8b22671d17b4d14e294dbc8570",
					"cache-control": "no-cache"
				},
				"processData": false,
				"data": "{\"mode\":\"async\",\"messageType\":\"f1b3f3605c715639d435\",\"messages\":[{\"timestamp\":\"1413191650\",\"staerke\":\"6\",\"auto\":\"BENZ\"}]}"
			};

			$.ajax(settings).done(function(response) {
				console.log(response);
			});

			$.ajax(settings).done(function(response) {
				console.log(response);
			});
		}

	});

});