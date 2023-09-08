@extends('main')
@section('main-section')
    <div class="authentication-forgot d-flex align-items-center justify-content-center">
        <div class="card forgot-box">
            <div class="card-body">
                @if (!Session::get('reset_otp') && !Session::get('password_updated'))
                    <div class="p-3">
                         
                        <form method="POST" id="form1"
                            onsubmit="uploadData1('form1', '{{ route('passwordResetCheckUser') }}', 'alert-box1', 'btn-box1', event)">
                            @csrf
                            <div class="text-center">
                                <img src="{{ asset('admin-assets/assets/images/icons/forgot-2.png') }}" width="100"
                                    alt="">
                            </div>
                            <h4 class="mt-5 font-weight-bold text-center">Forgot Password?</h4>
                            <p class="text-muted text-center">Enter your registered email ID to reset the password</p>
                            <div id="alert-box1"></div>
                            <div class="my-4">
                                <label class="form-label">Email Id</label>
                                <input type="email" class="form-control" name="registered_email"
                                    placeholder="example@user.com" required>
                                <p class="form-feedback invalid-feedback" data-name="registered_email">
                                </p>
                            </div>
                            <div class="d-grid gap-2">
                                <div id="btn-box1">
                                    <button type="submit" class="btn btn-primary w-100">Send</button>
                                </div>
                                <a href="{{ route('login-view') }}" class="btn btn-light"><i
                                        class="bx bx-arrow-back me-1"></i>Back
                                    to Login</a>
                            </div>
                        </form>
                    </div>
                @elseif(!Session::get('newpass') && Session::get('reset_otp') && !Session::get('password_updated'))
                    <div class="p-4">
                        <div class="text-center">
                            <img src="{{ asset('admin-assets/assets/images/icons/forgot-2.png') }}" width="100"
                                alt="">
                        </div>
                        <h4 class="mt-5 font-weight-bold text-center">Device Verification</h4>
                        <div id="alert-box2"></div>
                        <form method="POST" id="form2"
                            onsubmit="uploadData1('form2', '{{ route('passwordResetOtpCheck') }}', 'alert-box2', 'btn-box2', event)">
                            @csrf
                            <p class="text-center" style="max-width: 310px">
                                {{ Session::get('msg') }}
                            </p>
                            <div id="alert-box2">

                            </div>
                            <div class="mb-3 mt-2">
                                <div class="d-flex justify-content-between">
                                    <label class="form-label">Enter Otp </label>
                                </div>
                                <input class="form-control" name="otp" type="number" required placeholder="XXXXXX" />
                                <p class="form-feedback invalid-feedback" data-name="otp">
                                </p>
                            </div>
                            <div class="mb-3" id="btn-box2">
                                <button class="btn btn-primary d-block w-100 mt-3" type="submit"
                                    name="submit">Verify</button>
                            </div>

                            <div class="text-center">
                                <a href="{{ route('cancelPasswordReset') }}">Cancel</a>
                            </div>
                        </form>
                    </div>
                @elseif(Session::get('newpass') === true && !Session::get('password_updated'))
                    <div class="p-4" style="width:310px;">
                        <form method="POST" id="form3"
                            onsubmit="uploadData1('form3', '{{ route('updatePassword') }}', 'alert-box3', 'btn-box3', event)">
                            @csrf
                            <div class="mb-4 text-center">
                                <img src="{{ asset('admin-assets/assets/images/logo-icon.png') }}" width="60"
                                    alt="">
                            </div>
                            <div class="text-start mb-4">
                                <h5 class="">Genrate New Password</h5>
                                <div id="alert-box3"></div>
                            </div>
                            <div class="mb-3 mt-4">
                                <label class="form-label">New Password</label>
                                <input type="password" class="form-control" name="password" placeholder="Enter new password">
                                <p class="form-feedback invalid-feedback" data-name="password">
                                </p>
                            </div>
                            <div class="mb-4">
                                <label class="form-label">Confirm Password</label>
                                <input type="password" class="form-control" name="confirm_password"
                                    placeholder="Confirm password">
                                <p class="form-feedback invalid-feedback" data-name="confirm_password">
                                </p>
                            </div>
                            <div class="d-grid gap-2">
                                <div id="btn-box3">
                                    <button type="submit" class="btn btn-primary w-100">Change Password</button>
                                </div>
                                <a href="{{ route('login-view') }}" class="btn btn-light"><i
                                        class="bx bx-arrow-back mr-1"></i>Back to Login</a>
                            </div>
                        </form>
                    </div>
                @elseif (Session::get('password_updated') === true)
                <div class="p-5">
                     <h5 class="text-center text-success"> Passsword Updated Successfully
                    </h5>
                    <div class="text-center mt-3">
                        <a href="{{ route('GotoLogin') }}" class="btn btn-success">Login
                            Now</a>
                    </div>
                </div>
                   
                @endif
            </div>
        </div>
    </div>
@endsection
