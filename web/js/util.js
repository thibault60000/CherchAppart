
$(document).ready(function(){

    var city = [
        {latLng: [50.6329700, 3.0585800], name: 'Lille'},
        {latLng: [50.291, 2.7775], name: 'Arras'},
        {latLng: [49.9000000, 2.3000000], name: 'Amiens'},
        {latLng: [49.56667, 3.61667], name: 'Laon'},
        {latLng: [49.4296, 2.0819], name: 'Beauvais'}
    ];

    var count = 0 ;

    var map = $('#france-map').vectorMap({
        map: 'fr_regions_2016_mill',
        backgroundColor: 'none',
        zoomStep: '8',
        zoomOnScroll: false,
        markers: city.map(function(h){ return {name: h.name, latLng: h.latLng} }),

        labels: {
            regions: {
                render: function(code, event){
                    return event;
                },

            },
            markers: {
                render: function(index){
                    return city[index].name;
                },
                offsets: function(index){
                    return [20, -15];
                }
            }
        },
        markerStyle: {
            initial: {
                fill: '#FFF',
                stroke: '#000',
                "stroke-width": "4",
                r: '15'
            },
            hover: {
                cursor: 'pointer',
                fill: '#FFF',
                "fill-opacity" : "0.7",
                stroke: '#000',
                "stroke-opacity": "0.7",
                "stroke-width": "4",
                r: '15'
            }
        },
        regionLabelStyle: {
            initial: {
                fill: '#B90E32'
            },
            hover: {
                fill: 'black',
                opacity:1
            }
        },
        markerLabelStyle: {
            initial: {
                'font-family': 'Arial',
                'font-size': '20',
                cursor: 'default',
                fill: '#FFF',
            }
        },
        series:{
            regions:[{
                values:{
                    'FR-F':  '#4198C6', // Centre
                    'FR-GF': '#81B5CF', // Guyane Francaise
                    'FR-H':  '#4198C6', // Corse
                    'FR-E':  '#4198C6', // Bretagne
                    'FR-X1': '#307193', // Bourgogne Franche Comte
                    'FR-MQ': '#307193', // Martinique
                    'FR-YT': '#81B5CF', // Mayotte
                    'FR-X2': '#307193', // Aquitaine Limousin Poitou Charentes
                    'FR-X3': '#81B5CF', // Normandy
                    'FR-X4': '#4198C6', // Alsance Champagne Ardenne Lorraine
                    'FR-X5': '#81B5CF', // Languedoc Roussillon Midi Pyrenees
                    'FR-X6': '#307193', // Nord Pas De Calais Picardie
                    'FR-X7': '#5c81c6', // Auvergne Rhone Alpes
                    'FR-R':  '#5c81c6', // Pays De La Loire
                    'FR-GP': '#5c81c6', // Guadeloupe
                    'FR-U':  '#4198C6', // PACA
                    'FR-J':  '#5c81c6', // Ile de France
                    'FR-RE': '#5c81c6'  // Reunion
                },

            }]

        },
        regionStyle: {
            initial: {
                "fill-opacity": 1,
                stroke: "none",
                "stroke-width": 0,
                "stroke-opacity": 1
            },
            hover: {
                "fill-opacity": 0.8,
                cursor: "pointer"
            }
        },

        onRegionClick: function(e, code, isSelected, selectedRegions){

            if(count == 0){
                // $('.jvectormap-zoomout').css('background-color', $('#france-map').vectorMap('get','mapObject').series.regions[0].values[code]);
                $('#france-map').vectorMap('get','mapObject').setFocus({region: code, animate: true});// Zoom sur la région
                $('.jvectormap-tip').css('opacity','0'); // Désactive les infos bulles
                setTimeout(function(){ $('.jvectormap-marker').css('display','block').css('opacity','1'); }, 800); // Active les villes après 0.8secondes
                $('.jvectormap-zoomout').addClass("zoomCheck"); // Affiche le bouton retour
            }
            count++;
        },

        onRegionOver: function(e, code){
            if($('.jvectormap-zoomout').hasClass("zoomCheck")){
                e.preventDefault();
            }
            else{
                $('#france-map').vectorMap('get','mapObject').params.regionStyle.hover['fill-opacity'] = "0.8";
            }

        },
        onMarkerClick: function(e, code){
            $('#modaleMap').addClass('open');

            $('.dataCity').text('Ville : ' + city[code].name + '   | Lat/Lng : ' + city[code].latLng);
        }

    });



    $(".jvectormap-zoomout" ).click(function() {
        if($('.jvectormap-zoomout').hasClass("zoomCheck")){
            $('.jvectormap-zoomout').removeClass("zoomCheck");
            $('.jvectormap-marker').addClass('appear');
            $('.jvectormap-tip').css('opacity','1'); //
            $('.jvectormap-marker').css('display','none').css('opacity','0');
            count = 0;
        }

    });
    $(".jvectormap-retour" ).click(function() {
        $('#modaleMap').removeClass('open');
        if($('.jvectormap-zoomout').hasClass("zoomCheck")){
            $('.jvectormap-zoomout').removeClass("zoomCheck");
            $('.jvectormap-marker').addClass('appear');
            $('.jvectormap-tip').css('opacity','1');
            $('.jvectormap-marker').css('display','none').css('opacity','0');
            count = 0;
        }

    });


});

