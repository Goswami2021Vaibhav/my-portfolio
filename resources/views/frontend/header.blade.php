 <!doctype html>
 <html lang="en">


 <head>
     <meta charset="utf-8">


     <meta name="viewport" content="width=device-width, initial-scale=1">
     <link rel="shortcut icon" href="{{ asset('favicon.ico') }}" type="image/x-icon">
     <meta name="csrf-token" content="{{ csrf_token() }}">
     {{-- ------- Dynamic Meta Started ------------  --}}

     @php
         // Program to display URL of current page.
         if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') {
             $link = 'https';
         } else {
             $link = 'http';
         }
         
         // Here append the common URL characters.
         $link .= '://';
         
         // Append the host(domain name, ip) to the URL.
         $link .= $_SERVER['HTTP_HOST'];
         
         // Append the requested resource location to the URL
         $link .= $_SERVER['REQUEST_URI'];
         
         $metaData = DB::table('meta')
             ->where('url', '=', "$link")
             ->get();
         
     @endphp
     @if (count($metaData) != 0)
         <title>{{ $metaData[0]->title }}</title>
         <meta name="keywords" content="{{ $metaData[0]->keywords }}">
         <meta name="description" content="{{ $metaData[0]->description }}">
         <meta property="og:title" content="{{ $metaData[0]->og_title }}" />
         <meta property="og:description" content="{{ $metaData[0]->og_description }}" />
         <meta property="og:url" content="{{ $metaData[0]->og_url }}" />
         <meta property="og:image" content="{{ $metaData[0]->og_image_url }}">
         <meta name="twitter:title" content="{{ $metaData[0]->twitter_title }}">
         <meta name="twitter:description" content="{{ $metaData[0]->twitter_des }}">
         <meta name="twitter:image" content="{{ $metaData[0]->twitter_img_url }}">
         <meta property="og:type" content="{{ $metaData[0]->page_topic }}" />
     @endif

     @php
         if (count($metaData) != 0) {
             echo $metaData[0]->js_schema;
         }
     @endphp


     <meta property="site_name" content="Vaibhav Goswami" />
     <meta property="og:site_name" content="Vaibhav Goswami" />

     <meta name="domainType" content=".in" />
     <meta name="Googlebot" content="Index, Follow" />
     <meta name="YahooSeeker" content="INDEX, FOLLOW" />
     <meta name="msnbot" content="INDEX, FOLLOW" />
     <meta name="rating" content="Safe For Kids" />
     <meta name="robots" content="all" />
     <meta name="revisit-after" content="daily" />
     <meta name="classification" content="Software Development" />
     <meta name="distribution" content="Global" />
     <meta name="copyright" content="Copyright 2023 vaibhavgoswami.in - All Rights Reserved" />

     <meta http-equiv='Expires' content='0'>
     <meta http-equiv='Pragma' content='no-cache'>
     <meta http-equiv='Cache-Control' content='no-cache'>
     <meta name='fb:page_id' content=''>
     <meta name="twitter:card" content="summery_large_image" />
     <meta name="twitter:site" content="" />
     <meta name="twitter:creator" content="" />


     {{-- ------- Dynamic Meta End ------------  --}}



     <link rel="shortcut icon" type="image/x-icon" href="{{ asset('assets/img/favicon.ico') }}">

     <!-- ======= All CSS Plugins here ======== -->
     <link rel="stylesheet" href="{{ asset('assets/css/plugins/swiper-bundle.min.css') }}">
     <link
         href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&amp;display=swap"
         rel="stylesheet">

     <!-- Plugin css -->
     <link rel="stylesheet" href="{{ asset('assets/css/vendor/bootstrap.min.css') }}">

     <!-- Custom Style CSS -->
     <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">

     <!-- Dark css here -->
     <link rel="stylesheet" href="{{ asset('assets/css/dark.css') }}">
 
     <script>
         // On page load or when changing themes, best to add inline in `head` to avoid FOUC
         if (localStorage.getItem("theme-color") === "dark" || (!("theme-color" in localStorage) && window.matchMedia(
                 "(prefers-color-scheme: dark)").matches)) {
             document.documentElement.classList.add("dark");
         }
         if (localStorage.getItem("theme-color") === "light") {
             document.documentElement.classList.remove("dark");
         }
     </script>

 </head>

 <body class="bg-dark_primary_bg">

     <!-- Preloader start -->
     <div id="preloader">
         <div class="loader--border"></div>
     </div>
     <!-- Preloader end -->

     <button class="light__dark--btn style__fixed" id="light__to--dark">
         <svg class="dark--mode__icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
             <title>Moon</title>
             <path
                 d="M264 480A232 232 0 0132 248c0-94 54-178.28 137.61-214.67a16 16 0 0121.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0121.06 21.06C442.28 426 358 480 264 480z">
             </path>
         </svg>
         <svg class="light--mode__icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
             <title>Sunny</title>
             <path
                 d="M256 118a22 22 0 01-22-22V48a22 22 0 0144 0v48a22 22 0 01-22 22zM256 486a22 22 0 01-22-22v-48a22 22 0 0144 0v48a22 22 0 01-22 22zM369.14 164.86a22 22 0 01-15.56-37.55l33.94-33.94a22 22 0 0131.11 31.11l-33.94 33.94a21.93 21.93 0 01-15.55 6.44zM108.92 425.08a22 22 0 01-15.55-37.56l33.94-33.94a22 22 0 1131.11 31.11l-33.94 33.94a21.94 21.94 0 01-15.56 6.45zM464 278h-48a22 22 0 010-44h48a22 22 0 010 44zM96 278H48a22 22 0 010-44h48a22 22 0 010 44zM403.08 425.08a21.94 21.94 0 01-15.56-6.45l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.55 37.56zM142.86 164.86a21.89 21.89 0 01-15.55-6.44l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.56 37.55zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z">
             </path>
         </svg>
     </button>

     <!-- Start header area -->
     <header class="header__section  header__transparent">
         <div class="header__sticky">
             <div class="container">
                 <div class="main__header d-flex justify-content-between align-items-center">
                     <div class="main__logo">
                         <h1 class="main__logo--title"><a class="main__logo--link"
                                 href="{{ route('frontend.index') }}">
                                 <img class="main__logo--img logo_light"
                                     src="{{ asset('assets/img/nav-log.webp') }}" alt="logo-img">
                                 <img class="main__logo--img logo_dark"
                                     src="{{ asset('assets/img/nav-log-white.webp') }}" alt="logo-img">
                             </a></h1>
                     </div>
                     <div class="offcanvas__header--menu__open ">
                         <a class="offcanvas__header--menu__open--btn" href="javascript:void(0)" data-offcanvas>
                             <svg xmlns="http://www.w3.org/2000/svg"
                                 class="ionicon offcanvas__header--menu__open--svg" viewBox="0 0 512 512">
                                 <path fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                     stroke-miterlimit="10" stroke-width="32"
                                     d="M80 160h352M80 256h352M80 352h352" />
                             </svg>
                             <span class="visually-hidden">Offcanvas Menu Open</span>
                         </a>
                     </div>
                     <div class="main__header--right d-flex align-items-center d-none d-lg-block">
                         <div class="header__menu menu_border--none">
                             <nav class="header__menu--navigation">
                                 <ul class="header__menu--wrapper d-flex">
                                     <li class="header__menu--items">
                                         <a class="header__menu--link" href="{{ route('frontend.index') }}">Home
                                         </a>
                                     </li>
                                     <li class="header__menu--items">
                                         <a class="header__menu--link"
                                             href="{{ route('frontend.index') }}#about">About </a>
                                     </li>
                                     <li class="header__menu--items">
                                         <a class="header__menu--link"
                                             href="{{ route('frontend.index') }}#servives">Service </a>
                                     </li>
                                     <li class="header__menu--items">
                                         <a class="header__menu--link"
                                             href="{{ route('frontend.frontendPortfolio') }}">Portfolio </a>
                                     </li>

                                     <li class="header__menu--items">
                                         <a class="header__menu--link"
                                             href="{{ route('frontend.index') }}#contact">Contact </a>
                                     </li>
                                 </ul>
                             </nav>
                         </div>
                         {{-- <button class="primary__btn download__btn">
                             <svg class="download__btn--svg" xmlns="http://www.w3.org/2000/svg" width="24"
                                 height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                 <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                 <polyline points="7 10 12 15 17 10"></polyline>
                                 <line x1="12" y1="15" x2="12" y2="3"></line>
                             </svg>
                             Download CV
                         </button> --}}
                     </div>
                 </div>
             </div>
         </div>
     </header>
     <!-- End header area -->

     <!-- Start Offcanvas header menu -->
     <div class="offcanvas__header">
         <div class="offcanvas__inner">
             <div class="offcanvas__logo">
                 <a class="offcanvas__logo_link" href="{{ route('frontend.index') }}">
                     <img src="{{ asset('assets/img/nav-log.webp') }}" class="logo-white" alt="Logo-img"
                         width="158" height="36">
                     <img src="{{ asset('assets/img/nav-log-white.webp') }}" class="logo-dark" alt="Logo-img"
                         width="158" height="36">
                 </a>
                 <button class="offcanvas__close--btn" data-offcanvas>close</button>
             </div>
             <nav class="offcanvas__menu">
                 <ul class="offcanvas__menu_ul">
                     <li class="offcanvas__menu_li">
                         <a class="offcanvas__menu_item" href="{{ route('frontend.index') }}">Home</a>
                     </li>
                     <li class="offcanvas__menu_li">
                         <a class="offcanvas__menu_item" href="{{ route('frontend.index') }}#about">About</a>
                     </li>
                     <li class="offcanvas__menu_li">
                         <a class="offcanvas__menu_item" href="{{ route('frontend.index') }}#servives">Services</a>
                     </li>
                     <li class="offcanvas__menu_li">
                         <a class="offcanvas__menu_item"
                             href="{{ route('frontend.frontendPortfolio') }}">Portfolio</a>
                     </li>

                     <li class="offcanvas__menu_li"><a class="offcanvas__menu_item"
                             href="{{ route('frontend.index') }}#contact">Contact</a></li>
                 </ul>
                 <div class="social__share d-flex justify-content-center align-items-center mt-5">

                     <ul class="social__share--wrapper d-flex">
                         <li class="social__share--child"><a class="social__share--link"
                                 href="https://www.facebook.com/vaibhavgiri.giri.14" target="_blank">
                                 <i class="fa-brands fa-facebook"></i>
                             </a>
                         </li>
                         <li class="social__share--child"><a class="social__share--link"
                                 href="https://github.com/Goswami2021Vaibhav" target="_blank">
                                 <i class="fa-brands fa-github"></i>
                             </a>
                         </li>
                         <li class="social__share--child"><a class="social__share--link"
                                 href="https://www.linkedin.com/in/vaibhav-goswami-8604a6214" target="_blank">
                                 <i class="fa-brands fa-linkedin-in"></i>
                             </a>
                         </li>
                         <li class="social__share--child"><a class="social__share--link"
                                 href="https://www.instagram.com/goswami2020vaibhav/" target="_blank">
                                 <i class="fa-brands fa-instagram"></i>
                             </a>
                         </li>
                     </ul>
                 </div>
                 <div class="d-flex justify-content-center align-items-center mt-5">
                     <a class="btn hero__content--btn"
                         href="https://api.whatsapp.com/send?phone=+917518445857&text=Hi%20Vaibhav%20Goswami"
                         target="_blank"><i class="fa-brands fa-whatsapp"></i>
                         Whatsapp</a>
                 </div>
             </nav>
         </div>
     </div>
     <!-- End Offcanvas header menu -->
