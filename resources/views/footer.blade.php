 </div>
 <!-- Bootstrap JS -->
 <script src="{{ asset('admin-assets/assets/js/bootstrap.bundle.min.js') }}"></script>
 <!--plugins-->
 <script src="{{ asset('admin-assets/assets/js/jquery.min.js') }}"></script>
 <script src="{{ asset('admin-assets/assets/plugins/simplebar/js/simplebar.min.js') }}"></script>
 <script src="{{ asset('admin-assets/assets/plugins/metismenu/js/metisMenu.min.js') }}"></script>
 <script src="{{ asset('admin-assets/assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js') }}"></script>
 <script src="{{ asset('admin-assets/assets/plugins/notifications/js/notifications.min.js') }}"></script>
 <script src="{{ asset('admin-assets/assets/plugins/notifications/js/notification-custom-script.js') }}"></script>
 <!--Password show & hide js -->

 <script src="https://www.google.com/recaptcha/api.js" async defer></script>

 <script>
     $(document).ready(function() {
         $("#show_hide_password a").on('click', function(event) {
             event.preventDefault();
             if ($('#show_hide_password input').attr("type") == "text") {
                 $('#show_hide_password input').attr('type', 'password');
                 $('#show_hide_password i').addClass("bx-hide");
                 $('#show_hide_password i').removeClass("bx-show");
             } else if ($('#show_hide_password input').attr("type") == "password") {
                 $('#show_hide_password input').attr('type', 'text');
                 $('#show_hide_password i').removeClass("bx-hide");
                 $('#show_hide_password i').addClass("bx-show");
             }
         });
     });
 </script>
 <!--app JS-->
 <script src="{{ asset('admin-assets/assets/js/app.js') }}"></script>
 <script src="{{ asset('admin-assets/assets/js/custom.js') }}"></script>
 </body>



 </html>
