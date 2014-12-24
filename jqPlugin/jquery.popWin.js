(function( $, window, document ){
	$.popWin = {
		// Default setting of this plugin.
		opts: {
			boxContent   : 'Hello popWin!',
			boxWidth     : '400px',
			boxHeight    : '200px',
			boxBgColor   : '#fff',
			boxSdColor   : '#666',
			boxFontFamily: 'Arial',
			boxFontColor : '#000'
		},

		// Show the box
		show: function( options ) {
			if (typeof options === 'string') {
				$.extend(this.opts, {
					boxContent: options
				});
			} else {
				$.extend(this.opts, options);
			}

			// Make a background for page
			$('<div id="kboxback"></div>').css({
				'position'      : 'fixed',
				'top'           : '0px',
				'left'          : '0px',
				'width'         : '100%',
				'height'        : '100%',
				'background'    : '#000',
				'z-index'       : '9999',
				'opacity'       : '0'
			}).appendTo($('body')).animate({'opacity': '.5'}, 300, 'linear');

			// The box we want to show
			$('<div id="kboxfront"></div>').css({
				'position'      : 'fixed',
				'top'           : (($(window).height() - this.opts.boxHeight.replace('px', '')) / 2) + 'px',
				'left'          : (($(window).width()  - this.opts.boxWidth.replace('px', '')) / 2) + 'px',
				'width'         : this.opts.boxWidth,
				'height'        : this.opts.boxHeight,
				'background'    : this.opts.boxBgColor,
				'margin'        : '0px',
				'padding'       : '13px 10px 10px 10px',
				'border-radius' : '9px',
				'box-shadow'    : '10px 10px 5px ' + this.opts.boxSdColor,
				'z-index'       : '10000',
				'opacity'       : '0',
				'word-wrap'     : 'break-all',
				'font-family'   : this.opts.boxFontFamily,
				'color'         : this.opts.boxFontColor
			})
			.html('<p style="line-height:1.4">' + this.opts.boxContent + '</p>').appendTo($('body'))
			.animate({'opacity': '1'}, 300, 'linear')
			.mousedown(function(event){
				var _this = $(this),
				dx = event.pageX-parseInt($(this).css("left")),
        		dy = event.pageY-parseInt($(this).css("top"));

        		$(document).bind("mousemove", function(event){
        			_this.css("cursor", "pointer");
        			var eX = event.pageX, eY = event.pageY;
        			var pX = eX - dx, pY = eY - dy;
        			pX = pX < 0 ? 0 : (pX > $(window).width() - _this.width() ? $(window).width() - _this.width() : pX);  
        			pY = pY < 0 ? 0 : (pY > $(window).height() - _this.height() ? $(window).height() - _this.height() : pY);  
					_this.css("left", pX);
					_this.css("top", pY);
        		});

        		$(document).bind("mouseup", function(){
        			$(document).unbind("mousemove");
        		})
			});
			

			// CLose button
			$('<div id="kboxclose"></div>').css({
				'position'      : 'absolute',
				'right'         : '10px',
				'top'           : '7px',
				'cursor'        : 'pointer',
				'font-family'   : 'Arial',
				'font-weight'   : 'bold',
				'color'         : '#000'
			}).html('X').appendTo($('#kboxfront')).click(function() {
				$('#kboxfront, #kboxback').animate({'opacity':'0'}, 300, 'linear', function() {
					$(this).remove();
				});
			});

			// Handle the 'ESC' key
			$(document).keyup(function( e ) {
				if (e.keyCode === 27) {
					$('#kboxfront, #kboxback').animate({'opacity':'0'}, 300, 'linear', function() {
						$(this).remove();
					});
				}
			});

			// Retset the #kboxfront's position when window is resizing...
			$(window).resize(function() {
				$('#kboxfront').css({
					'top'       : (($(window).height() - $.popWin.opts.boxHeight.replace('px', '')) / 2) + 'px',
					'left'      : (($(window).width()  - $.popWin.opts.boxWidth.replace('px', '')) / 2) + 'px'
				});
			});
		}
	};
})( jQuery, window, document);
