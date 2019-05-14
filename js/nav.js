$(document).ready(function () {
	$(".menu-toggle").click(function (e) {
		$(".menu-toggle").toggleClass("open");
		$(".menu").toggleClass("nav-open");
	});
    $("nav a").click(function (e) {
		$(".menu-toggle").toggleClass("open");
		$(".menu").toggleClass("nav-open");
	});
});
