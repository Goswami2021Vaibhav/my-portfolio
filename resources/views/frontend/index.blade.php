@extends('frontend.main')
@section('main-sec')
    <main class="main__content_wrapper">
        <!-- Start Hero section -->



        <div class="hero__section hero__section--bg" id="home">
            <div class="container">
                <div class="hero__section--inner d-flex align-items-center">
                    <div class="hero__thumbnail position__relative">
                        <img class="hero__thumbnail--media light_img" src="{{ asset('assets/img/hero-thumbnail.webp') }}"
                            alt="img">
                        <img class="hero__thumbnail--media dark_img" src="{{ asset('assets/img/hero-man-dark.webp') }}"
                            alt="img">
                        <div class="projects__budget d-flex align-items-center">
                            <span class="projects__budget--icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-check-circle">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </span>
                            <div class="projects__budget--content">
                                <span class="projects__budget--ammount">100+</span>
                                <span class="projects__budget--text">Complete Projects</span>
                            </div>
                        </div>

                    </div>
                    <div class="hero__content">
                        <span class="hero__content--subtitle text__secondary mb-10">HELLO I'M</span>
                        <h2 class="hero__content--title mb-15">Vaibhav Goswami ! </h2>
                        <h3 class="hero__content--subtitle2 mb-20">Full stack web developer </h3>
                        <p class="hero__content--desc mb-30">I am a highly skilled full stack web developer with a strong
                            passion for creating elegant and efficient solutions. With a diverse skill set encompassing
                            front-end and back-end development, I thrive in delivering innovative web applications that meet
                            both user needs and business objectives.</p>
                        <div class="hero__content--footer d-flex align-items-center">
                            <a class="btn hero__content--btn"
                                href="https://api.whatsapp.com/send?phone=+917518445857&text=Hi%20Vaibhav%20Goswami"
                                target="_blank"><i class="fa-brands fa-whatsapp"></i>
                                Whatsapp</a>
                            <div class="social__share d-flex align-items-center">
                                <span class="social__share--title">Follow Me: </span>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Hero section -->

        <!-- Start sevices section -->
        <section class="services__section section--padding" id="servives">
            <div class="container">
                <div class="section__heading--topbar d-flex align-items-center justify-content-between mb-50">
                    <div class="section__heading max-width-580">
                        <span class="section__heading--subtitle text__secondary">CREATIVE SERVICE</span>
                        <h2 class="section__heading--title">How can i help you ?</h2>
                    </div>

                </div>
                <div class="services__section--inner">
                    <div class="row mb--n30">
                        <div class="col-lg-4 col-md-6 col-sm-6 mb-30">
                            <div class="services__card">
                                <span class="services__card--icon color1 mb-25">
                                    <i class="fa-solid icon fa-globe"></i>
                                </span>
                                <div class="services__card--content">
                                    <h3 class="services__card--title mb-15">Web Development</h3>
                                    <p class="services__card--desc mb-20">Elevate your online presence with my expert web
                                        development services. Crafted for success, your website will captivate visitors and
                                        drive results.</p>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 mb-30">
                            <div class="services__card">
                                <span class="services__card--icon color2 mb-25">
                                    <i class="fa-solid icon fa-desktop"></i>
                                </span>
                                <div class="services__card--content">
                                    <h3 class="services__card--title mb-15">Software Development</h3>
                                    <p class="services__card--desc mb-20">Elevate your digital aspirations with my freelance
                                        software development services. From code to user interface, I bring your ideas to
                                        life with precision and innovation.</p>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 mb-30">
                            <div class="services__card">
                                <span class="services__card--icon color3 mb-25">
                                    <i class="fa-solid icon fa-store"></i>
                                </span>
                                <div class="services__card--content">
                                    <h3 class="services__card--title mb-15">E-commerce Solution</h3>
                                    <p class="services__card--desc mb-20">Transforming e-commerce dreams into reality.
                                        Elevate your online business with my expertise, from sleek website design to
                                        seamless customer experiences.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 mb-30">
                            <div class="services__card">
                                <span class="services__card--icon color6 mb-25">
                                    <i class="fa-brands fa-wordpress icon"></i>
                                </span>
                                <div class="services__card--content">
                                    <h3 class="services__card--title mb-15">Wordpress Development</h3>
                                    <p class="services__card--desc mb-20">Elevate your online presence with my freelance
                                        WordPress development expertise. From custom themes to powerful plugins, I turn your
                                        vision into a captivating and functional website.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 mb-30">
                            <div class="services__card">
                                <span class="services__card--icon color4 mb-25">
                                    <i class="fa-brands icon fa-searchengin"></i>
                                </span>
                                <div class="services__card--content">
                                    <h3 class="services__card--title mb-15">SEO Services</h3>
                                    <p class="services__card--desc mb-20">Elevate your online visibility with my freelance
                                        SEO services. I optimize your digital footprint to ensure your business shines in
                                        search engine results.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 mb-30">
                            <div class="services__card">
                                <span class="services__card--icon color5 mb-25">
                                    <i class="fa-solid fa-palette icon"></i>
                                </span>
                                <div class="services__card--content">
                                    <h3 class="services__card--title mb-15">Graphic Design</h3>
                                    <p class="services__card--desc mb-20">Transform your vision into captivating visuals
                                        with my freelance graphic design services. From logos to layouts, I craft stunning
                                        designs that make your brand unforgettable.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <!-- End sevices section -->

        <!-- Start about section -->
        <section class="about__section about__section--bg section--padding" id="about">
            <div class="container">
                <div class="about__section--inner d-flex">
                    <div class="about__content">
                        <div class="section__heading mb-30">
                            <span class="section__heading--subtitle text__secondary">ABOUT ME</span>
                            <h2 class="section__heading--title">I can design & develop complete website for you</h2>
                        </div>
                        <div class="about__info">
                            <h3 class="about__info--title text__secondary mb-20">PERSONAL INFOS:</h3>
                            <ul class="about__info--wrapper d-flex">
                                <li class="about__info--items">First Name: Vaibhav</li>
                                <li class="about__info--items">Last Name: Goswami</li>
                                <li class="about__info--items">Address: India</li>
                                <li class="about__info--items">Phone: +917518445857</li>
                                <li class="about__info--items">Age: 23 Years</li>
                                <li class="about__info--items">Nationality: Indian</li>

                                <li class="about__info--items">Freelance: Available</li>
                                <li class="about__info--items">Languages: English, Hindi</li>
                                <li class="about__info--items">Email: goswamivaibhav72@gmail.com</li>
                            </ul>
                            <a class="about__btn primary__btn"
                                href="https://api.whatsapp.com/send?phone=+917518445857&text=Hi%20Vaibhav%20Goswami"><i
                                    class="fa-brands fa-whatsapp"></i>
                                Whatsapp</a>
                        </div>
                    </div>
                    <div class="about__thumbnail">
                        <div class="about__thumbnail--media position__relative">
                            <img class="position__relative  rounded" src="{{ asset('assets/img/about-me.webp') }}"
                                alt="img">
                        </div>
                        <div class="about__experience text-center">
                            <h4 class="about__experience--title title-stroke">2+</h4>
                            <span class="about__experience--subtitle">Experience Working</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End about section -->

        <!-- Start resume section -->
        <section class="resume__section section--padding">
            <div class="container">
                <div class="section__heading--topbar d-flex align-items-center justify-content-between mb-50">
                    <div class="section__heading max-width-580">
                        <span class="section__heading--subtitle text__secondary">EXPERIENCE AND EDUCATION</span>
                        <h2 class="section__heading--title">My Experience and Education</h2>
                    </div>

                </div>
                <div class="resume__section--inner d-flex">
                    <div class="resume__step">
                        <div class="border__position--style"> </div>
                        <div class="resume__items">
                            <div class="border__round"></div>
                            <div class="resume__items--inner d-flex">
                                <span class="resume__icons">
                                    <svg width="25" height="40" fill="currentColor" stroke="currentColor"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z">
                                        </path>
                                    </svg>
                                </span>
                                <div class="resume__content">
                                    <div class="resume__content--top d-flex align-items-center mb-10">
                                        <h3 class="resume__content--title">SOFTWARE DEVELOPER</h3>
                                        <span class="resume__content--subtitle">Digicrowd Solution</span>
                                    </div>

                                    <span class="resume__date">2023</span>
                                </div>
                            </div>
                        </div>
                        <div class="resume__items">
                            <div class="border__round"></div>
                            <div class="resume__items--inner d-flex">
                                <span class="resume__icons">
                                    <svg width="25" height="40" fill="currentColor" stroke="currentColor"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z">
                                        </path>
                                    </svg>
                                </span>
                                <div class="resume__content">
                                    <div class="resume__content--top d-flex align-items-center mb-10">
                                        <h3 class="resume__content--title">WEB DEVELOPERR</h3>
                                        <span class="resume__content--subtitle">Digicrowd Solution</span>
                                    </div>

                                    <span class="resume__date">2022</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="resume__step">
                        <div class="border__position--style"> </div>
                        <div class="resume__items">
                            <div class="border__round"></div>
                            <div class="resume__items--inner d-flex">
                                <span class="resume__icons">
                                    <svg width="25" height="44" fill="currentColor" stroke="currentColor"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                        <path
                                            d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z">
                                        </path>
                                    </svg>
                                </span>
                                <div class="resume__content">
                                    <div class="resume__content--top d-flex align-items-center mb-10">
                                        <h3 class="resume__content--title">B.Tech Degree</h3>
                                        <span class="resume__content--subtitle">KMCLU Lucknow </span>
                                    </div>

                                    <span class="resume__date">2023</span>
                                </div>
                            </div>
                        </div>
                        <div class="resume__items">
                            <div class="border__round"></div>
                            <div class="resume__items--inner d-flex">
                                <span class="resume__icons">
                                    <svg width="25" height="44" fill="currentColor" stroke="currentColor"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                        <path
                                            d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z">
                                        </path>
                                    </svg>
                                </span>
                                <div class="resume__content">
                                    <div class="resume__content--top d-flex align-items-center mb-10">
                                        <h3 class="resume__content--title">Intermediate</h3>
                                        <span class="resume__content--subtitle">B.N lal vocation inter college</span>
                                    </div>

                                    <span class="resume__date">2020</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <!-- End resume section -->

        <!-- Start skills Section -->
        <section class="skills__section section--padding pt-0">
            <div class="container">
                <div class="section__heading--topbar d-flex align-items-center justify-content-between mb-50">
                    <div class="section__heading max-width-580">
                        <span class="section__heading--subtitle text__secondary">SKILLS</span>
                        <h2 class="section__heading--title">My Skills</h2>
                    </div>

                </div>
                <div class="row">
                    <div class="col-lg-2 col-md-4 col-sm-3 col-6 mb-5 d-flex justify-content-center align-items-center">
                        <img src="{{ asset('assets/img/icons/html.svg') }}" class="skill-icon" alt="">
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-3 col-6 mb-5 d-flex justify-content-center align-items-center">
                        <img src="{{ asset('assets/img/icons/css.svg') }}" class="skill-icon" alt="">
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-3 col-6 mb-5 d-flex justify-content-center align-items-center">
                        <img src="{{ asset('assets/img/icons/bootstrap.svg') }}" class="skill-icon" alt="">
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-3 col-6 mb-5 d-flex justify-content-center align-items-center">
                        <img src="{{ asset('assets/img/icons/javascript.svg') }}" class="skill-icon" alt="">
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-3 col-6 mb-5 d-flex justify-content-center align-items-center">
                        <img src="{{ asset('assets/img/icons/jquery.svg') }}" class="skill-icon" alt="">
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-3 col-6 mb-5 d-flex justify-content-center align-items-center">
                        <img src="{{ asset('assets/img/icons/react.svg') }}" class="skill-icon" alt="">
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-3 col-6 mb-5 d-flex justify-content-center align-items-center">
                        <img src="{{ asset('assets/img/icons/php.svg') }}" class="skill-icon" alt="">
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-3 col-6 mb-5 d-flex justify-content-center align-items-center">
                        <img src="{{ asset('assets/img/icons/laravel.svg') }}" class="skill-icon" alt="">
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-3 col-6 mb-5 d-flex justify-content-center align-items-center">
                        <img src="{{ asset('assets/img/icons/mysql.svg') }}" class="skill-icon" alt="">
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-3 col-6 mb-5 d-flex justify-content-center align-items-center">
                        <img src="{{ asset('assets/img/icons/wordpress.svg') }}" class="skill-icon" alt="">
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-3 col-6 mb-5 d-flex justify-content-center align-items-center">
                        <img src="{{ asset('assets/img/icons/pwa.svg') }}" class="skill-icon" alt="">
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-3 col-6 mb-5 d-flex justify-content-center align-items-center">
                        <img src="{{ asset('assets/img/icons/seo.svg') }}" class="skill-icon" alt="">
                    </div>
                </div>
            </div>
        </section>
        <!-- End skills Section -->

        <!-- Start portfolio section -->
        <section class="portfolio__section portfolio__section--bg section--padding" id="portfolio">
            <div class="container">
                <div class="section__heading--topbar d-flex align-items-center justify-content-between mb-50">
                    <div class="section__heading max-width-580">
                        <span class="section__heading--subtitle text__secondary">PORTFOLIO</span>
                        <h2 class="section__heading--title">My Creative Showcase</h2>
                    </div>

                </div>
                <div class="portfolio-slider d-flex justify-content-center align-items-center">
                    <div class="swiper portfolio-swiper">
                        <div class="swiper-wrapper mb-5">
                            @php
                                $portfolio = DB::table('portfolio')
                                    ->limit(10)
                                    ->orderBy('id', 'desc')
                                    ->get();
                            @endphp
                            @if (count($portfolio) > 0)
                                @foreach ($portfolio as $single_portfolio)
                                    <div class="swiper-slide">
                                        <div class="portfolio-card">
                                            <div class="portfolio-image">
                                                @php
                                                    $img = json_decode($single_portfolio->img, true);
                                                    echo getMediaFile($img[0]['file_id']);
                                                @endphp
                                            </div>
                                            <div class="portfolio-content">

                                                <span class="portfolio-title">
                                                    {{ $single_portfolio->title }}
                                                </span>

                                                <p class="portfolio-desc">
                                                    {{ $single_portfolio->des }}
                                                </p>

                                                <button type="button"
                                                    onclick="showPortfolio('{{ $single_portfolio->id }}')"
                                                    class="portfolio-action">
                                                    Read More
                                                    <span aria-hidden="true">
                                                        →
                                                    </span>
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                @endforeach
                            @endif

                        </div>
                        <div class="testimonial__pagination swiper-pagination mt-5"></div>
                    </div>


                </div>
            </div>
        </section>
        <!-- End portfolio section -->

        <!-- Start testimonial section -->
        <section class="testimonial__section section--padding position__relative">
            <div class="container">
                <div class="section__heading text-center mb-50">
                    <span class="section__heading--subtitle text__secondary">TESTIMONIALS</span>
                    <h2 class="section__heading--title">Words from Happy Clients</h2>
                </div>
                <div class="testimonial__inner testimonial__swiper--activation swiper">
                    <div class="swiper-wrapper">

                        @php
                            $testimonial = DB::table('testimonials')
                                ->orderBy('id', 'asc')
                                ->get();
                        @endphp

                        @foreach ($testimonial as $single_testi)
                            <div class="swiper-slide">
                                <div class="testimonial__items text-center">
                                    <div class="testimonial__content mb-30">
                                        <ul class="rating__wrapper d-flex justify-content-center">
                                            <li class="rating__list"><span class="rating__icon"><svg
                                                        xmlns="http://www.w3.org/2000/svg" width="20" height="28"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <polygon
                                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                        </polygon>
                                                    </svg></span></li>
                                            <li class="rating__list"><span class="rating__icon"><svg
                                                        xmlns="http://www.w3.org/2000/svg" width="20" height="28"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <polygon
                                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                        </polygon>
                                                    </svg></span></li>
                                            <li class="rating__list"><span class="rating__icon"><svg
                                                        xmlns="http://www.w3.org/2000/svg" width="20" height="28"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <polygon
                                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                        </polygon>
                                                    </svg></span></li>
                                            <li class="rating__list"><span class="rating__icon"><svg
                                                        xmlns="http://www.w3.org/2000/svg" width="20" height="28"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <polygon
                                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                        </polygon>
                                                    </svg></span></li>
                                            <li class="rating__list"><span class="rating__icon"><svg
                                                        xmlns="http://www.w3.org/2000/svg" width="20" height="28"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <polygon
                                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                        </polygon>
                                                    </svg></span></li>
                                        </ul>
                                        <p class="testimonial__desc">{{ $single_testi->texti_text }}</p>
                                    </div>
                                    <div class="testimonial__author">
                                        <img class="testimonial__author--media"
                                            src="{{ asset('assets/img/testimonial-author-thumb.webp') }}" alt="img"
                                            height="200">
                                        <h3 class="testimonial__author--title">{{ $single_testi->name }}</h3>
                                    </div>
                                </div>
                            </div>
                        @endforeach


                    </div>
                    <div class="testimonial__pagination swiper-pagination"></div>
                </div>
            </div>
            <span class="testimonial__position--icon left">
                <svg width="260" height="260" fill="currentColor" stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                        d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z">
                    </path>
                </svg>
            </span>
            <span class="testimonial__position--icon right">
                <svg width="260" height="260" fill="currentColor" stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                        d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z">
                    </path>
                </svg>
            </span>
        </section>
        <!-- End testimonial section -->

        <!-- Start contact section -->
        <section class="contact__section contact__section--bg" id="contact">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="contact__left">
                            <div class="section__heading mb-50">
                                <span class="section__heading--subtitle text__secondary">CONTACT</span>
                                <h2 class="section__heading--title mb-10">Get In Touch </h2>
                                <p class="section__heading--desc">Streamline communication with our 'Get in Touch' contact
                                    form. Connect effortlessly and share your inquiries or feedback with us.</p>
                            </div>
                            <form class="contact__form" method="post" id="contact-form"
                                onsubmit="uploadData1('contact-form', '{{ route('frontend.contact-save') }}', 'alert-btn', 'submit-btn', event)">
                                @csrf
                                <div class="row">

                                    <div class="col-12 mb-30">
                                        <input class="contact__input--field" placeholder="Your name" name="name"
                                            type="text" required>
                                        <p class="form-feedback invalid-feedback" data-name="name"></p>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 mb-30">
                                        <input class="contact__input--field" placeholder="Your Phone Number"
                                            name="phone_number" type="number" required>
                                        <p class="form-feedback invalid-feedback" data-name="phone_number"></p>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 mb-30">
                                        <input class="contact__input--field" placeholder="Your email (Optional)"
                                            name="email" type="text">
                                        <p class="form-feedback invalid-feedback" data-name="email"></p>
                                    </div>
                                </div>
                                <textarea class="contact__textarea--field" placeholder="Message" required name="message" maxlength="500"></textarea>
                                <p class="form-feedback invalid-feedback" data-name="message"></p>

                                <div class="col-12 d-flex justify-content-center">
                                    <div class="g-recaptcha" data-sitekey="6LdplgkoAAAAAOrqtdoINVOFWOCPkEVFt2SVXmNf">
                                    </div>
                                </div>
                                <div id="submit-btn">
                                    <button class="contact__button primary__btn">Send Request</button>
                                </div>

                            </form>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="contact__info">
                            <div class="contact__info--items d-flex align-items-center">
                                <span class="contact__info--icon">
                                    <i class="fa-solid fa-phone icon"></i>
                                </span>
                                <div class="contact__info--content">
                                    <h3 class="contact__info--title">Call Me</h3>
                                    <p class="contact__info--desc">
                                        <a href="tel:+917518445857">+917518445857</a> <br>
                                    </p>
                                </div>
                            </div>
                            <div class="contact__info--items d-flex align-items-center">
                                <span class="contact__info--icon">
                                    <i class="fa-solid fa-envelope icon"></i>
                                </span>
                                <div class="contact__info--content">
                                    <h3 class="contact__info--title">Email Us</h3>
                                    <p class="contact__info--desc">
                                        <a href="mailto:goswamivaibhav72@gmail.com">goswamivaibhav72@gmail.com</a> <br>
                                    </p>
                                </div>
                            </div>
                            <div class="contact__info--items d-flex align-items-center">
                                <span class="contact__info--icon">
                                    <i class="fa-solid fa-location-dot icon"></i>
                                </span>
                                <div class="contact__info--content">
                                    <h3 class="contact__info--title">Address</h3>
                                    <p class="contact__info--desc">
                                        Ali nagar sunehra, Lucknow, Uttar Pradesh, India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End contact section -->

        <!-- Start contact map area -->
        <div class="contact__map--area">
            <div class="container">
                <iframe class="contact__map--iframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d159.94763493025675!2d80.87162114486422!3d26.78220309547084!2m3!1f334.37158274815954!2f0!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x399bfeadbd8b632f%3A0x158ebbc0b68f5023!2sCentral%20Institute%20of%20Petrochemicals%20Engineering%20and%20Technology!5e1!3m2!1sen!2sin!4v1694065455416!5m2!1sen!2sin"
                    style="border:0;" allowfullscreen="" loading="lazy"></iframe>



            </div>
        </div>
        <!-- End contact map area -->




    </main>
@endsection
