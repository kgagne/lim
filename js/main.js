var dom = {
	header 	: $('.header'),
	content	: $('.content'),
	footer	: $('.footer')
}
var app = {
	init : function(){
		
		//Set the size of the content viewport
		dom.content.css({ 'height' : ($(window).height() - (dom.header.height() + dom.footer.height())) + 'px' })
		
		//Initialize the navigation width
		app.sizeNav()
		//Initialize the content boxes
		app.sizeContent()
		//Bind events to navigation clicks
		app.bindNav()	
		
	},
	sizeNav : function(){
		
		//Size the navigation buttons based on amount and window width
		$('a').each(function(key, value){
			
			console.log(key + ' <=> ' + ($('.footer a').length - 1))
				
			$(this).attr('data-key', key)
			
			if(key < ($('.footer a').length - 1)){
				
				$(this).css({ 'border-right' : '1px solid rgba(0,0,0,0.2)' })
				
			}
			
		})
		
		$('.footer a').css({ 'width' : ((dom.footer.width() / $('.footer a').length) - 1) + 'px' })
		
	},
	sizeContent : function(){
		
		$('.content').html('<div class="pager">'+ $('.content').html() +'</div>')
		
		$('.content .pager').css({ 'width' : $('.footer a').length + '00%' })

		$('.content .pager .page').css({ 'width' : dom.content.width() + 'px' })
		
	},
	bindNav : function(){
		
		$('.footer a').on('click', function(){
			
			//Add transition for button animation
			$('.footer a').css({ '-webkit-transition' : 'all .1s' })
			$(this).find('div').css({ '-webkit-transition' : 'all .2s' })
			
			if($(this).hasClass('active')) return false
			
			$('.footer a').removeClass('active')
			$(this).find('div').css({ 'opacity' : '0' })
			
			$(this).addClass('active')
			$(this).find('div').css({ 'opacity' : '1' })
			
			$('.content .pager').css({ '-webkit-transition' : 'all .3s ease-out', '-webkit-transform' : 'translate3d(-'+ ((100 / $('.footer a').length) * $(this).attr('data-key')) +'%,0,0)' })
			
			$('.header h1').text($(this).attr('data-title'))
			
			return false
			
		})
		
	}
}
$(function(){
	
	app.init()
	
})