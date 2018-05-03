//Event saat link di klik
$('.scroll').on('click', function(e) {
	//Ambil Nilai Href
	var tujuan=$(this).attr('href');
	//Baca Elemen
	var elemenTujuan=$(tujuan);
	//Scroll Event
	$('html , body').animate({
  		scrollTop: elemenTujuan.offset().top - 50
 	}, 1000, 'easeInOutExpo');
	e.preventDefault();
});