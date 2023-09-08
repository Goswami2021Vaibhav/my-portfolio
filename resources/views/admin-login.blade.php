 @extends('main')
 @section('main-section')


     @if (Session::has('abcdefgh'))
         @php
             $token = session()->get('abcdefgh');
             $verification = verifyLogin($token);
             $status = $verification['status'];
             $data = $verification['data'];
         @endphp
         @if ($status == 1 || $status === true)
             @php
                 $role = $data['role'];
             @endphp

             @if ($role == 'ADMIN')
                 <script>
                     window.location.href = "/admin/dashboard"
                 </script>
             @endif
         @endif
     @endif

     <div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
         <div class="container">
             <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                 <div class="col mx-auto">
                     <div class="card mb-0">
                         <div class="card-body">

                             @if (!Session::has('abcdefgh'))
                                 @if (!Session::get('otp'))
                                     <div class="p-4">
                                         
                                         <div class="text-center mb-4">

                                             <h5 class="mb-0">Please log in to your account</h5>
                                         </div>
                                         <div class="form-body">
                                             <form class="row g-3" id="form1"
                                                 onsubmit="uploadData1('form1', '{{ route('login-check') }}', 'alert-box1', 'btn-box1', event)"
                                                 enctype="multipart/form-data">
                                                 @csrf
                                                 <div class="col-12">
                                                     <div id="alert-box1"></div>
                                                 </div>
                                                 <div class="col-12">
                                                     <label class="form-label">Username</label>
                                                     <input type="text" class="form-control"
                                                         placeholder="Enter your username" name="username">
                                                     <p class="form-feedback invalid-feedback" data-name="username"></p>
                                                 </div>
                                                 <div class="col-12">
                                                     <label class="form-label">Password</label>
                                                     <div class="input-group" id="show_hide_password">
                                                         <input type="password" class="form-control border-end-0"
                                                             name="password" placeholder="Enter Password">
                                                         <a href="javascript:;" class="input-group-text bg-transparent">
                                                             <i class='bx bx-hide'></i>
                                                         </a>
                                                         <p class="form-feedback invalid-feedback" data-name="password"></p>
                                                     </div>
                                                 </div>
                                                 <div class="col-12 d-flex justify-content-center">
                                                     <div class="g-recaptcha" data-sitekey="6LdplgkoAAAAAOrqtdoINVOFWOCPkEVFt2SVXmNf"></div>
                                                 </div>

                                                 <div class="col-12 text-center"> <a
                                                         href="{{ route('showPasswordResetPage') }}">Forgot
                                                         Password ?</a>
                                                 </div>
                                                 <div class="col-12">
                                                     <div class="d-grid" id="btn-box1">
                                                         <button type="submit" class="btn btn-primary">Sign in</button>
                                                     </div>
                                                 </div>

                                             </form>
                                         </div>
                                     </div>
                                 @else
                                     <div class="p-4">
                                         <div class="mb-3 text-center">
                                             <img src="{{ asset('admin-assets/assets/images/logo-icon.png') }}"
                                                 width="60" alt="" />
                                         </div>
                                         <div class="row flex-between-center">
                                             <div class="col-12">
                                                 <h3>Device Verification</h3>
                                             </div>
                                         </div>
                                         <script>
                                             function reset_login_form() {
                                                 $.ajax({
                                                     type: "get",
                                                     url: "/reset-otp-verification",
                                                     success: function(response) {
                                                         var json_response = JSON.parse(response);
                                                         if (json_response[0] == 'false') {
                                                             console.log(json_response[1]);
                                                             window.location.reload();
                                                         }
                                                     }
                                                 });
                                             }
                                             setTimeout(reset_login_form, 600000);
                                         </script>
                                         <form method="POST" action="{{ route('login-otp-verification') }}">
                                             @csrf
                                             <div class="mb-3">
                                                 @if (Session::get('msg'))
                                                     <p class="border-bottom  pt-2 pb-2" style="font-size: 14px">
                                                         {!! Session::get('msg') !!}</p>
                                                 @endif

                                             </div>
                                             <div class="mb-3">
                                                 <div class="d-flex justify-content-between">
                                                     <label class="form-label" for="card-password">Enter Otp</label>
                                                 </div>
                                                 <input class="form-control" name="otp" type="number" required
                                                     placeholder="XXXXXX" />
                                                 @error('otp')
                                                     <span class="text-danger"
                                                         style="font-size: 13px">{{ $message }}</span>
                                                 @enderror
                                             </div>

                                             <div class="mb-3 d-flex justify-content-center align-items-center">
                                                 <button class="btn btn-primary d-block w-50 m-2" type="submit"
                                                     name="submit">Log in
                                                 </button>
                                                 <button class="btn btn-danger d-block w-50 m-2" type="button"
                                                     onclick="reset_login_form()">Cancel
                                                 </button>
                                             </div>
                                         </form>
                                     </div>
                                 @endif
                             @elseif (Session::has('abcdefgh'))
                                 <div class="col-12 d-flex justify-content-center align-items-center">
                                     <div>
                                         <div class="d-flex justify-content-center align-items-center">
                                             <img src="{{ asset('admin-assets/assets/images/gif/spiner.svg') }}"
                                                 height="100p">
                                         </div>
                                         <p class="text-center mt-3 mb-3">Redirecting...</p>
                                     </div>
                                 </div>
                             @endif

                         </div>
                     </div>
                 </div>
             </div>
             <!--end row-->
         </div>
     </div>
 @endsection
