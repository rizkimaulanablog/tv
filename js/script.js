// event pada saat link di klik
$('.page-scroll').on('click', function(e){


	//ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap elemen ybs
	var elemenTujuan = $(tujuan);

	$('body').scrolltop('700');

	e.prevenDefault();


});



