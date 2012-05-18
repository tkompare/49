$(document).ready(function() {
	$('.nav-tabs').button();
	$('#btn-map').button('toggle');
	$('#section-legend,#section-help').hide();
	var BusinessLicenses = null;
	// The Google Maps base map layer
	TkMap({lat:42.01048,lng:-87.6652,domid:'map',init:true});
//Open checkbox listener
	$("#btn-legend").click(function() {
		$("#section-legend").slideDown();
		$("#section-map,#section-help").slideUp();
	});
	$("#btn-map").click(function() {
		$("#section-map").slideDown();
		$("#section-legend,#section-help").slideUp();
	});
	$("#btn-help").click(function() {
		$("#section-help").slideDown();
		$("#section-legend,#section-map").slideUp();
	});
	$("#chbx-bikeracks").click(function() {
		if ($("#chbx-bikeracks").is(':checked'))
		{
			$('#div-bikeracks').addClass('alert-success');
			if (BusinessLicenses === null)
			{
				BusinessLicenses = new TkSocrataView
				({
					tableid : 'b7mg-yyns',
					domain : 'data.cityofchicago.org'
				});
				function delay()
				{
					var Data = BusinessLicenses.getData();
					console.log(Data[1].legal_name);
				}
				setTimeout(delay, 3000);
			}
			else
			{
				//Buisnesses.showLayer({});
			}
		}
		else
		{
			$('#div-bikeracks').removeClass('alert-success');
			if (BusinessLicenses !== null)
			{
				//Businesses.hideLayer();
			}
		}
	});
});