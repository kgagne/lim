var app = {
		header 		: {
			width		: $('.header').width(),
			height		: $('.header').height()
		},
		footer 		: {
			width		: $('.footer').width(),
			height		: $('.footer').height()
		},
		viewport	: function(elem){
			elem.css({ 'height' : $(window).height() - (app.header.height + app.footer.height) + 'px' })
		}
	}
$(function(){
	app.viewport($('.content'))
})