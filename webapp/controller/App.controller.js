sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/ui/model/json/JSONModel'
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("UI5_Tile_Demo.controller.App", {
		onInit: function() {
			var oDataModel = new JSONModel();
			oDataModel.setProperty("/results", [{
				description: "NEW CREATE BY JOB",
				title: "New Feed"
			}, {
				description: "NEW CREATE BY JOB2",
				title: "New Feed2"
			}]);
			this.getView().setModel(oDataModel, "oDataModel");

		}
	});
});