/* 
 * Page Setup Garbages
 */

$(function () {
	const theme = localStorage.getItem('theme') === 'dark' 
		|| (!('theme' in localStorage) 
		&& window.matchMedia('(prefers-color-scheme: dark)').matches)
		? 'dark' : 'light';
	
	document.querySelector('html').dataset.theme = theme;
	localStorage.setItem('theme', theme);
	
	setTimeout(() => document.querySelector('html').className = '', 100);

	const checkContentFade = (initial) => {
		$('.scroll-hidden').each(function() {
			const topOfElem = $(this).position().top;
			const bottomOfWindow = $(window).scrollTop() + $(window).height();
			
			if (!initial && bottomOfWindow > topOfElem)
				return $(this).animate({ 'opacity': 1 }, 1500);
			else if (initial && bottomOfWindow > topOfElem)
				return $(this).css('opacity', 1);
		});
	}

	checkContentFade(true);

	$(window).scroll(function() {
		checkContentFade();
	});

	$('.easter-egg').click(function(e) {
		alert('You found an Easter Egg!');
	})

	$('#theme-switcher').click(function(e) {
		const theme = document.querySelector('html').dataset.theme === 'dark'? 'light' : 'dark';

		document.querySelector('html').dataset.theme = theme;
		localStorage.setItem('theme', theme);
	});
});
