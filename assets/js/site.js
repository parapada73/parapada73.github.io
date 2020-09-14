$(function(){
	'use strict';
	
	document.querySelector('#gnb-mobile-show').addEventListener('click', function(e){
		document.querySelector('#gnb-mobile-hide').classList.remove('c-dp-none');
		this.classList.add('c-dp-none');
		document.querySelector('body').classList.add('c-backdrop');
		document.querySelector('#gnb-mobile').classList.add('c-zx-1');
		document.querySelector('#gnb-mobile-menu').classList.remove('c-dp-none');
	});
	
	document.querySelector('#gnb-mobile-hide').addEventListener('click', function(e){
		document.querySelector('#gnb-mobile-show').classList.remove('c-dp-none');
		this.classList.add('c-dp-none');
		document.querySelector('body').classList.remove('c-backdrop');
		document.querySelector('#gnb-mobile').classList.remove('c-zx-1');
		document.querySelector('#gnb-mobile-menu').classList.add('c-dp-none');
	});
	
	$('.main._carosel-1').slick({
		arrows: false,
		dots: true,
		autoplay: false,
		fade: true
	});
	
	Array.prototype.forEach.call(document.querySelectorAll('.gnb[data-menu-stat]'), function (item) {
		item.addEventListener('click', function(e) {
			var stat = '';
			var menu_node = this.parentNode.parentNode;
			
			if(this.getAttribute('data-menu-stat') === 'less') {
				stat = 'more';
				menu_node.querySelector('[data-menu]').classList.remove('c-dp-none');
			} else {
				stat = 'less';
				menu_node.querySelector('[data-menu]').classList.add('c-dp-none');
			}
			
			this.setAttribute('data-menu-stat', stat);
		})
	});
});