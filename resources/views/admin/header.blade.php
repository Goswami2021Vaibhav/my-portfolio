<!doctype html>
<html lang="en" class="html dark-theme">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv='Expires' content='0'>
    <meta http-equiv='Pragma' content='no-cache'>
    <meta http-equiv='Cache-Control' content='no-cache'>
    <!--favicon-->

    <link rel="icon" href="{{ asset('favicon.ico') }}" type="image/png" />

    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&amp;display=swap" rel="stylesheet">

    <link href="{{ asset('admin-assets/assets/plugins/datatable/css/dataTables.bootstrap5.min.css') }}"
        rel="stylesheet">
    <link href="{{ asset('admin-assets/assets/plugins/simplebar/css/simplebar.css') }}" rel="stylesheet" />

    <link href="{{ asset('admin-assets/assets/plugins/metismenu/css/metisMenu.min.css') }}" rel="stylesheet" />

    <link href="{{ asset('admin-assets/assets/css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('admin-assets/assets/css/bootstrap-extended.css') }}" rel="stylesheet">
    <link href="{{ asset('admin-assets/assets/css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('admin-assets/assets/css/icons.css') }}" rel="stylesheet">
    <link href="{{ asset('admin-assets/assets/css/dataTable-checkboxCss.css') }}" rel="stylesheet">
    <link href="{{ asset('admin-assets/assets/css/jquery-confirm.css') }}" rel="stylesheet">
    <link href="{{ asset('admin-assets/assets/plugins/notifications/css/lobibox.min.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('admin-assets/assets/css/dark-theme.css') }}" />
    <link rel="stylesheet" href="{{ asset('admin-assets/assets/css/custom.css') }}" />
    <link rel="stylesheet" href="{{ asset('admin-assets/assets/plugins/dselect/dselect.css') }}">
    <link rel="stylesheet" href="{{ asset('admin-assets/assets/plugins/yearpicker/yearpicker.css') }}">
    @stack('title')
    @stack('style')
</head>

<body>
    <!--wrapper-->
    <div class="wrapper">
        <!--sidebar wrapper -->
        <div class="sidebar-wrapper" data-simplebar="true">
            <div class="sidebar-header">
                <div class="w-100 d-flex justify-content-center">

                </div>

                <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
                </div>
            </div>
            <!--navigation-->
            <ul class="metismenu" id="menu">
                <li>
                    <a href="{{ route('admin.indexView') }}">
                        <div class="parent-icon"><i class='bx bx-home-circle'></i>
                        </div>
                        <div class="menu-title">Dashboard</div>
                    </a>
                </li>



                <li>
                    <a href="javascript:;" class="has-arrow">
                        <div class="parent-icon"><i class="fa-solid fa-sitemap"></i>
                        </div>
                        <div class="menu-title">Meta</div>
                    </a>
                    <ul>
                        <li> <a href="{{ route('admin.addMeta') }}"><i class="bx bx-right-arrow-alt"></i>Add
                                Meta</a>
                        </li>
                        <li> <a href="{{ route('admin.showMeta') }}"><i class="bx bx-right-arrow-alt"></i>Show Meta
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" class="has-arrow">
                        <div class="parent-icon"><i class="fa-sharp fa-regular fa-images"></i>
                        </div>
                        <div class="menu-title">Media</div>
                    </a>
                    <ul>
                        <li> <a href="{{ route('admin.addMediaIndex') }}"><i class="bx bx-right-arrow-alt"></i>Add
                                Media</a>
                        </li>
                        <li> <a href="{{ route('admin.mediaIndex') }}"><i class="bx bx-right-arrow-alt"></i>All Media
                            </a>
                        </li>
                    </ul>
                </li>

                <li>
                    <a href="javascript:;" class="has-arrow">
                        <div class="parent-icon"><i class="fa-solid fa-star-sharp-half-stroke"></i>
                        </div>
                        <div class="menu-title">Testimonials</div>
                    </a>
                    <ul>
                        <li> <a href="{{ route('admin.addTestimonial') }}"><i class="bx bx-right-arrow-alt"></i>Add
                                Testimonial</a>
                        </li>
                        <li> <a href="{{ route('admin.viewTestimonial') }}"><i class="bx bx-right-arrow-alt"></i>Show
                                Testimonial
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" class="has-arrow">
                        <div class="parent-icon"><i class="fa-solid fa-star-sharp-half-stroke"></i>
                        </div>
                        <div class="menu-title">Portfolio</div>
                    </a>
                    <ul>
                        <li> <a href="{{ route('admin.addPortfolio') }}"><i class="bx bx-right-arrow-alt"></i>Add
                                Portfolio</a>
                        </li>
                        <li> <a href="{{ route('admin.viewPortfolio') }}"><i class="bx bx-right-arrow-alt"></i>Show
                                Portfolio
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="{{ route('admin.contactIndex') }}">
                        <div class="parent-icon"><i class="fa-solid fa-messages"></i>
                        </div>
                        <div class="menu-title">Contact</div>
                    </a>
                </li>

            </ul>
            <!--end navigation-->
        </div>
        <!--end sidebar wrapper -->
        <!--start header -->
        <header>
            <div class="topbar d-flex align-items-center">
                <nav class="navbar navbar-expand">
                    <div class="mobile-toggle-menu"><i class='bx bx-menu'></i>
                    </div>

                    <div class="top-menu ms-auto">
                        <ul class="navbar-nav align-items-center">
                            <li class="nav-item">
                                <a class="nav-link" href="#" data-bs-toggle="tooltip"
                                    data-bs-title="Full Screen Mode" data-bs-placement="auto" onclick="fullScreen()"
                                    id="fullscreen-btn"> <i class='bx bx-fullscreen' id="fullscreen-icon"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link theme-change" href="#" id="theme-change-btn"
                                    onclick="changeTheme()" data-bs-toggle="tooltip"
                                    data-bs-title="Switch to dark mood" data-bs-placement="auto"> <i
                                        class='bx bx-moon'></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="user-box dropdown">
                        <a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"
                            href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="{{ asset('admin-assets/assets/images/logo-sm.png') }}" class="user-img"
                                alt="user avatar">
                            <div class="user-info ps-3">
                                <p class="user-name mb-0">Vaibhav Goswami</p>
                                <p class="designattion mb-0">Web Developer</p>
                            </div>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">

                            <li><a class="dropdown-item" href="{{ route('admin.logout') }}"><i
                                        class='bx bx-log-out-circle'></i><span>Logout</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        <!--end header -->


        @include('admin.modal')
