$(document).ready(function() {
	$('.nav-tabs').button();
	$('#btn-map').button('toggle');
	$('#section-legend,#section-help').hide();
	var BikeRacks = null;
	// The Google Maps base map layer
	var Map = new TkMap({lat:42.01048,lng:-87.6652,domid:'map',init:true});
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
			if (BikeRacks === null)
			{
				BikeRacks = new TkMapSqlFusionLayer
				({
					map : Map.Map,
					tableid : '3815321',
					lat : 'Latitude',
					lng : 'Longitude',
					datacols: 'Address,Ward,CommunityName',
					where : "Ward = '49'",
					iconurl : '/img/o.png'
				});
			}
			else
			{
				BikeRacks.showLayer({});
			}
		}
		else
		{
			$('#div-bikeracks').removeClass('alert-success');
			if (BikeRacks !== null)
			{
				BikeRacks.hideLayer();
			}
		}
	});
});