 <div class="modal fade" id="portfolio-modal" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog"
     aria-labelledby="modalTitleId" aria-hidden="true">
     <div class="modal-dialog  modal-dialog-centered modal-lg" role="document">
         <div class="modal-content">

             <div class="modal-body">
                 <div class="d-flex justify-content-end mb-4">
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                 </div>
                 <div id="portfolio-main-img" class="mb-4"></div>
                 <div id="portfolio-content">

                 </div>
             </div>

         </div>
     </div>
 </div>



 <!-- Start footer section -->
 <footer class="footer footer__section footer__bg">
     <div class="container">
         <div class="main__footer d-flex justify-content-center align-items-center">
             <p class="copyright__content mb-0">Developed with <span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="currentColor" stroke="text-paragraph" stroke-width="2" stroke-linecap="round"
                         stroke-linejoin="round" class="feather feather-heart">
                         <path
                             d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                         </path>
                     </svg>
                 </span> by <span><a class="text__secondary" href="{{ route('frontend.index') }}">Vaibhav
                         Goswami</a></span>©
                 {{ date('Y') }}</p>

         </div>
     </div>
 </footer>
 <!-- End footer section -->

 <!-- Scroll top bar -->
 <button id="scroll__top"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
         <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="48"
             d="M112 244l144-144 144 144M256 120v292" />
     </svg></button>

 <!-- All Script JS Plugins here  -->
 <script src='https://code.jquery.com/jquery-3.6.1.min.js'></script>
 <script src="{{ asset('assets/js/vendor/popper.js') }}" defer="defer"></script>
 <script src="{{ asset('assets/js/vendor/bootstrap.min.js') }}" defer="defer"></script>
 <script src="{{ asset('assets/js/plugins/swiper-bundle.min.js') }}"></script>
 <script src="{{ asset('assets/js/plugins/imagesloaded.pkgd.min.js') }}"></script>

 <!-- Customscript js -->
 <script src="{{ asset('assets/js/custom.js') }}"></script>
 <script src="{{ asset('assets/js/script.js') }}"></script>
 <script src="https://www.google.com/recaptcha/api.js" async defer></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/js/all.min.js"></script>
 <!-- Dark to light js -->
 <script>
     // On page load or when changing themes, best to add inline in `head` to avoid FOUC
     if (localStorage.getItem("theme-color") === "dark" || (!("theme-color" in localStorage) && window.matchMedia(
             "(prefers-color-scheme: dark)").matches)) {
         document.getElementById("light__to--dark")?.classList.add("dark--version");
     }
     if (localStorage.getItem("theme-color") === "light") {
         document.getElementById("light__to--dark")?.classList.remove("dark--version");
     }
 </script>

 </body>

 </html>
