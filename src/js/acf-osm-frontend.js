(function( $, arg ){
	var options = arg.options;
	$.fn.extend({
		acf_leaflet:function() {

			return this.each( function( i, el ){
				if ( $(this).data( 'acf-osm-map' ) ) {
					return;
				}
				var data = $(this).data(),
					e = $.Event({
						type: 'acf-osm-map-create'
					});

				$(this).trigger( e );

				if ( e.isDefaultPrevented() ) {
					return;
				}

				$(this).height(data.height);

				var map = L.map( this, {
					scrollWheelZoom: false,
					center: [ data.mapLat, data.mapLng ],
					zoom: data.mapZoom
				} ),
				maxzoom = 100;

				$(this).trigger('acf-osm-map-init', map );

				$.each(data.mapLayers,function(i,provider_key){

					if ( 'string' !== typeof provider_key ) {
						return;
					}
					var layer_config = options.layer_config[ provider_key.split('.')[0] ] || { options: {} },
						layer = L.tileLayer.provider( provider_key, layer_config.options ).addTo( map );

					layer.providerKey = provider_key;

					if ( !! layer.options.maxZoom ) {
						maxzoom = Math.min( layer.options.maxZoom, maxzoom )
					}
				});
				map.setMaxZoom( maxzoom );
				$.each(data.mapMarkers,function(i,markerData){
					// add markers
					var marker = L.marker( L.latLng( markerData.lat * 1, markerData.lng * 1 ), {
							title: markerData.label
						})
						.bindTooltip( markerData.label )
						.addTo( map );

				});

				$(this).data( 'acf-osm-map', map );

				$(this).trigger('acf-osm-map-created', map );

			});
		}
	});
	$.extend({
		acf_leaflet:function() {
			$('[data-map="leaflet"]').acf_leaflet();
		}
	});

	$.acf_leaflet();

})(jQuery,acf_osm);
