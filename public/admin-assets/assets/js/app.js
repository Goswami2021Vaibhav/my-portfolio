$(function () {
	"use strict";

	$(".mobile-search-icon").on("click", function () {
		$(".search-bar").addClass("full-search-bar")
	}),

		$(".search-close").on("click", function () {
			$(".search-bar").removeClass("full-search-bar")
		}),

		$(".mobile-toggle-menu").on("click", function () {
			$(".wrapper").addClass("toggled")
		}),


		$(".toggle-icon").click(function () {
			$(".wrapper").hasClass("toggled") ? ($(".wrapper").removeClass("toggled"), localStorage.setItem('sideBar', 'toogleOff')) : ($(".wrapper").addClass("toggled"), localStorage.setItem('sideBar', 'toogleOn'))
			window.location.reload();
		}),
		$(function () {
			if ($(".wrapper").hasClass('toggled')) {
				$(".sidebar-wrapper").hover(function () {

					$('.logo-big').removeClass('d-none')
					$('.logo-sm').addClass('d-none')
					$(".wrapper").addClass("sidebar-hovered")
				}, function () {
					$('.logo-big').addClass('d-none')
					$('.logo-sm').removeClass('d-none')
					$(".wrapper").removeClass("sidebar-hovered")
				})
			}
		}),


		$(document).ready(function () {
			$(window).on("scroll", function () {
				$(this).scrollTop() > 300 ? $(".back-to-top").fadeIn() : $(".back-to-top").fadeOut()
			}), $(".back-to-top").on("click", function () {
				return $("html, body").animate({
					scrollTop: 0
				}, 600), !1
			})
		}),

		$(function () {
			$("#menu").metisMenu()
		})

	$(function () {
		$('[data-bs-toggle="tooltip"]').tooltip();
	})



	$(function () {
		$(".order-toggle-btn").on("click", function () {
			$(".order-wrapper").toggleClass("order-toggled")
		})
	})
	$(function () {
		$(".order-toggle-btn-mobile").on("click", function () {
			$(".order-wrapper").removeClass("order-toggled")
		})
	})

});


