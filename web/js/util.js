
/* CherchAppart JS utils file
	Thibault JP / Stanislas A */

(function($) {





	/**
	 * Génère une liste de lien dans la nav sur mobile
	 * @return {jQuery} jQuery object.
	 */

	$.fn.navList = function() {

		var	$this = $(this);
			$a = $this.find('a'),
			b = [];

		$a.each(function() {

			var	$this = $(this),
				indent = Math.max(0, $this.parents('li').length - 1),
				href = $this.attr('href'),
				target = $this.attr('target');
				funct = "openBurgerMobile()";

			b.push(
				'<a ' +
					'class="link depth-' + indent + '"' +
					( (typeof target !== 'undefined' && target != '') ? ' target="' + target + '"' : '') +
					( (typeof href !== 'undefined' && href != '') ? ' href="' + href + '"' : '') + 'onclick="' + funct + '"' +
				'>' +
					'<span class="indent-' + indent + '"></span>' +
					$this.text() +
				'</a>'
			);

		});

		return b.join('');

	};



	/**
	 * Panel-ify an element.
	 * @param {object} userConfig User config.
	 * @return {jQuery} jQuery object.
	 */
	$.fn.panel = function(userConfig) {

		// No elements?
			if (this.length == 0)
				return $this;

		// Multiple elements?
			if (this.length > 1) {

				for (var i=0; i < this.length; i++)
					$(this[i]).panel(userConfig);

				return $this;

			}

		// Vars.
			var	$this = $(this),
				$body = $('body'),
				$window = $(window),
				id = $this.attr('id'),
				config;

		// Config.
			config = $.extend({

				// Delay.
					delay: 0,

				// Hide panel on link click.
					hideOnClick: false,

				// Hide panel on escape keypress.
					hideOnEscape: false,

				// Hide panel on swipe.
					hideOnSwipe: false,

				// Reset scroll position on hide.
					resetScroll: false,

				// Reset forms on hide.
					resetForms: false,

				// Side of viewport the panel will appear.
					side: null,

				// Target element for "class".
					target: $this,

				// Class to toggle.
					visibleClass: 'visible'

			}, userConfig);

			// Expand "target" if it's not a jQuery object already.
				if (typeof config.target != 'jQuery')
					config.target = $(config.target);

		// Panel.

			// Methods.
				$this._hide = function(event) {

					// Already hidden? Bail.
						if (!config.target.hasClass(config.visibleClass))
							return;

					// If an event was provided, cancel it.
						if (event) {

							event.preventDefault();
							event.stopPropagation();

						}

					// Hide.
						config.target.removeClass(config.visibleClass);

					// Post-hide stuff.
						window.setTimeout(function() {

							// Reset scroll position.
								if (config.resetScroll)
									$this.scrollTop(0);

							// Reset forms.
								if (config.resetForms)
									$this.find('form').each(function() {
										this.reset();
									});

						}, config.delay);

				};

			// Vendor fixes.
				$this
					.css('-ms-overflow-style', '-ms-autohiding-scrollbar')
					.css('-webkit-overflow-scrolling', 'touch');

			// Hide on click.
				if (config.hideOnClick) {

					$this.find('a')
						.css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');

					$this
						.on('click', 'a', function(event) {

							var $a = $(this),
								href = $a.attr('href'),
								target = $a.attr('target');

							if (!href || href == '#' || href == '' || href == '#' + id)
								return;

							// Cancel original event.
								event.preventDefault();
								event.stopPropagation();

							// Hide panel.
								$this._hide();

							// Redirect to href.
								window.setTimeout(function() {

									if (target == '_blank')
										window.open(href);
									else
										window.location.href = href;

								}, config.delay + 10);

						});

				}

			// Event: Touch stuff.
				$this.on('touchstart', function(event) {

					$this.touchPosX = event.originalEvent.touches[0].pageX;
					$this.touchPosY = event.originalEvent.touches[0].pageY;

				})

				$this.on('touchmove', function(event) {

					if ($this.touchPosX === null
					||	$this.touchPosY === null)
						return;

					var	diffX = $this.touchPosX - event.originalEvent.touches[0].pageX,
						diffY = $this.touchPosY - event.originalEvent.touches[0].pageY,
						th = $this.outerHeight(),
						ts = ($this.get(0).scrollHeight - $this.scrollTop());

					// Hide on swipe?
						if (config.hideOnSwipe) {

							var result = false,
								boundary = 20,
								delta = 50;

							switch (config.side) {

								case 'left':
									result = (diffY < boundary && diffY > (-1 * boundary)) && (diffX > delta);
									break;

								case 'right':
									result = (diffY < boundary && diffY > (-1 * boundary)) && (diffX < (-1 * delta));
									break;

								case 'top':
									result = (diffX < boundary && diffX > (-1 * boundary)) && (diffY > delta);
									break;

								case 'bottom':
									result = (diffX < boundary && diffX > (-1 * boundary)) && (diffY < (-1 * delta));
									break;

								default:
									break;

							}

							if (result) {

								$this.touchPosX = null;
								$this.touchPosY = null;
								$this._hide();

								return false;

							}

						}

					// Prevent vertical scrolling past the top or bottom.
						if (($this.scrollTop() < 0 && diffY < 0)
						|| (ts > (th - 2) && ts < (th + 2) && diffY > 0)) {

							event.preventDefault();
							event.stopPropagation();

						}

				});

			// Event: Prevent certain events inside the panel from bubbling.
				$this.on('click touchend touchstart touchmove', function(event) {
					event.stopPropagation();
				});

			// Event: Hide panel if a child anchor tag pointing to its ID is clicked.
				$this.on('click', 'a[href="#' + id + '"]', function(event) {

					event.preventDefault();
					event.stopPropagation();

					config.target.removeClass(config.visibleClass);

				});

		// Body.

			// Event: Hide panel on body click/tap.
				$body.on('click touchend', function(event) {
					$this._hide(event);
				});

			// Event: Toggle.
				$body.on('click', 'a[href="#' + id + '"]', function(event) {

					event.preventDefault();
					event.stopPropagation();

					config.target.toggleClass(config.visibleClass);

				});

		// Window.

			// Event: Hide on ESC.
				if (config.hideOnEscape)
					$window.on('keydown', function(event) {

						if (event.keyCode == 27)
							$this._hide(event);

					});

		return $this;

	};

	/**
	 * Apply "placeholder" attribute polyfill to one or more forms.
	 * @return {jQuery} jQuery object.
	 */
	$.fn.placeholder = function() {

		// Browser natively supports placeholders? Bail.
			if (typeof (document.createElement('input')).placeholder != 'undefined')
				return $(this);

		// No elements?
			if (this.length == 0)
				return $this;

		// Multiple elements?
			if (this.length > 1) {

				for (var i=0; i < this.length; i++)
					$(this[i]).placeholder();

				return $this;

			}

		// Vars.
			var $this = $(this);

		// Text, TextArea.
			$this.find('input[type=text],textarea')
				.each(function() {

					var i = $(this);

					if (i.val() == ''
					||  i.val() == i.attr('placeholder'))
						i
							.addClass('polyfill-placeholder')
							.val(i.attr('placeholder'));

				})
				.on('blur', function() {

					var i = $(this);

					if (i.attr('name').match(/-polyfill-field$/))
						return;

					if (i.val() == '')
						i
							.addClass('polyfill-placeholder')
							.val(i.attr('placeholder'));

				})
				.on('focus', function() {

					var i = $(this);

					if (i.attr('name').match(/-polyfill-field$/))
						return;

					if (i.val() == i.attr('placeholder'))
						i
							.removeClass('polyfill-placeholder')
							.val('');

				});

		// Password.
			$this.find('input[type=password]')
				.each(function() {

					var i = $(this);
					var x = $(
								$('<div>')
									.append(i.clone())
									.remove()
									.html()
									.replace(/type="password"/i, 'type="text"')
									.replace(/type=password/i, 'type=text')
					);

					if (i.attr('id') != '')
						x.attr('id', i.attr('id') + '-polyfill-field');

					if (i.attr('name') != '')
						x.attr('name', i.attr('name') + '-polyfill-field');

					x.addClass('polyfill-placeholder')
						.val(x.attr('placeholder')).insertAfter(i);

					if (i.val() == '')
						i.hide();
					else
						x.hide();

					i
						.on('blur', function(event) {

							event.preventDefault();

							var x = i.parent().find('input[name=' + i.attr('name') + '-polyfill-field]');

							if (i.val() == '') {

								i.hide();
								x.show();

							}

						});

					x
						.on('focus', function(event) {

							event.preventDefault();

							var i = x.parent().find('input[name=' + x.attr('name').replace('-polyfill-field', '') + ']');

							x.hide();

							i
								.show()
								.focus();

						})
						.on('keypress', function(event) {

							event.preventDefault();
							x.val('');

						});

				});

		// Events.
			$this
				.on('submit', function() {

					$this.find('input[type=text],input[type=password],textarea')
						.each(function(event) {

							var i = $(this);

							if (i.attr('name').match(/-polyfill-field$/))
								i.attr('name', '');

							if (i.val() == i.attr('placeholder')) {

								i.removeClass('polyfill-placeholder');
								i.val('');

							}

						});

				})
				.on('reset', function(event) {

					event.preventDefault();

					$this.find('select')
						.val($('option:first').val());

					$this.find('input,textarea')
						.each(function() {

							var i = $(this),
								x;

							i.removeClass('polyfill-placeholder');

							switch (this.type) {

								case 'submit':
								case 'reset':
									break;

								case 'password':
									i.val(i.attr('defaultValue'));

									x = i.parent().find('input[name=' + i.attr('name') + '-polyfill-field]');

									if (i.val() == '') {
										i.hide();
										x.show();
									}
									else {
										i.show();
										x.hide();
									}

									break;

								case 'checkbox':
								case 'radio':
									i.attr('checked', i.attr('defaultValue'));
									break;

								case 'text':
								case 'textarea':
									i.val(i.attr('defaultValue'));

									if (i.val() == '') {
										i.addClass('polyfill-placeholder');
										i.val(i.attr('placeholder'));
									}

									break;

								default:
									i.val(i.attr('defaultValue'));
									break;

							}
						});

				});

		return $this;

	};

	/**
	 * Moves elements to/from the first positions of their respective parents.
	 * @param {jQuery} $elements Elements (or selector) to move.
	 * @param {bool} condition If true, moves elements to the top. Otherwise, moves elements back to their original locations.
	 */
	$.prioritize = function($elements, condition) {

		var key = '__prioritize';

		// Expand $elements if it's not already a jQuery object.
			if (typeof $elements != 'jQuery')
				$elements = $($elements);

		// Step through elements.
			$elements.each(function() {

				var	$e = $(this), $p,
					$parent = $e.parent();

				// No parent? Bail.
					if ($parent.length == 0)
						return;

				// Not moved? Move it.
					if (!$e.data(key)) {

						// Condition is false? Bail.
							if (!condition)
								return;

						// Get placeholder (which will serve as our point of reference for when this element needs to move back).
							$p = $e.prev();

							// Couldn't find anything? Means this element's already at the top, so bail.
								if ($p.length == 0)
									return;

						// Move element to top of parent.
							$e.prependTo($parent);

						// Mark element as moved.
							$e.data(key, $p);

					}

				// Moved already?
					else {

						// Condition is true? Bail.
							if (condition)
								return;

						$p = $e.data(key);

						// Move element back to its original location (using our placeholder).
							$e.insertAfter($p);

						// Unmark element as moved.
							$e.removeData(key);

					}

			});

	};

})(jQuery);


function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#blah').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#fos_user_profile_form_imageFile").change(function() {
    readURL(this);
});

$("#fos_user_registration_form_imageFile").change(function() {
    readURL(this);


});


$(".editIdBtn" ).click(function() {

	if( $("#fos_user_profile_form_username").hasClass("enable") &&  $("#fos_user_profile_form_email").hasClass("enable")){
        $("#fos_user_profile_form_username").removeClass("enable");
        $("#fos_user_profile_form_username").prop("disabled",true);
			$("#fos_user_profile_form_email").removeClass("enable");
        	$("#fos_user_profile_form_email").prop("disabled",true);
				$(".imageFileRegister label").removeClass("enable");
       				 $(".imageFileRegister label").prop("disabled",true);
       				 $(".photoProfileEditContent img").removeClass("enable");
        $(".editIdBtn i").addClass("fa-pencil-square").removeClass("fa-times")

	}
	else{
        $("#fos_user_profile_form_username").addClass("enable");
        $("#fos_user_profile_form_username").prop("disabled",false);
			$("#fos_user_profile_form_email").addClass("enable");
        	$("#fos_user_profile_form_email").prop("disabled",false);
				$(".imageFileRegister label").addClass("enable");
					$(".imageFileRegister label").prop("disabled",false);
        				$(".photoProfileEditContent img").addClass("enable");
		$(".editIdBtn i").addClass("fa-times").removeClass("fa-pencil-square");

	}
});





$(".editCoordsBtn" ).click(function() {

    if( ($("#fos_user_profile_form_adress").hasClass("enable"))
        &&  ($("#fos_user_profile_form_phone_number").hasClass("enable"))
        &&  ($("#fos_user_profile_form_postal_code").hasClass("enable"))
	    &&  ($("#fos_user_profile_form_city").hasClass("enable"))){

        $("#fos_user_profile_form_adress").removeClass("enable");
        $("#fos_user_profile_form_adress").prop("disabled",true);
        $("#fos_user_profile_form_phone_number").removeClass("enable");
        $("#fos_user_profile_form_phone_number").prop("disabled",true);
        $("#fos_user_profile_form_postal_code").removeClass("enable");
        $("#fos_user_profile_form_postal_code").prop("disabled",true);
        $("#fos_user_profile_form_city").removeClass("enable");
        $("#fos_user_profile_form_city").prop("disabled",true);

        $(".editCoordsBtn i").addClass("fa-pencil-square").removeClass("fa-times")

    }
    else{
        $("#fos_user_profile_form_adress").addClass("enable");
        $("#fos_user_profile_form_adress").prop("disabled",false);
        $("#fos_user_profile_form_phone_number").addClass("enable");
        $("#fos_user_profile_form_phone_number").prop("disabled",false);
        $("#fos_user_profile_form_postal_code").addClass("enable");
        $("#fos_user_profile_form_postal_code").prop("disabled",false);
        $("#fos_user_profile_form_city").addClass("enable");
        $("#fos_user_profile_form_city").prop("disabled",false);
        $(".editCoordsBtn i").addClass("fa-times").removeClass("fa-pencil-square");

    }
});




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

