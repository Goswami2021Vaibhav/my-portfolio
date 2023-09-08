<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Mail\SendMail;
use App\Models\LoginModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Symfony\Contracts\Service\Attribute\Required;


class Login extends Controller
{

    public function index()
    {
        session()->forget(['reset_otp', 'registered_email', 'newpass', 'password_updated']);
        return view('admin-login');

    }

    public function login(Request $request)
    {

        // $req = $request->all();
        // $gCaptcha = $req['g-recaptcha-response'];
        // $gCaptchaStatus = verify_captcha($gCaptcha);
        // if ($gCaptchaStatus) {
        $validator = Validator::make($request->all(), [
            'username' => 'required',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
                'message' => 'Failed to login',
                'redirect' => '0'
            ]);
        } else {
            $username = $request->username;
            $password = $request->password;
            $get_user_data = LoginModel::where('email', '=', $username)->get();

            if (count($get_user_data) != 0) {
                $user_data = $get_user_data->toArray();
                $role = $user_data[0]['role'];
                if (password_verify($password, $user_data[0]['password'])) {
                    if ($user_data[0]['two_fa_email'] == 'YES' && $user_data[0]['two_fa_phone'] != 'YES') {
                        $email = $user_data[0]['email'];

                        $email_char_arr = str_split($email);
                        $email_hash = $email_char_arr[0];
                        for ($i = 1; $i <= count($email_char_arr); $i++) {
                            if ($email_char_arr[$i] == "@") {
                                $email_hash .= '@gmail.com';
                                break;
                            } else {
                                $email_hash .= '*';
                            }
                        }
                        $msg = "We just sent your authentication code via email to <b>$email_hash</b>. The code will expire in 10 minute.";
                        // otp
                        $otp = mt_rand(100000, 1000000);
                        session()->put('otp', $otp);
                        session()->put('msg', $msg);
                        session()->put('username', $username);

                        $mail_data = [
                            "subject" => "Device verification otp",
                            "otp" => $otp,
                            "path" => array(),
                            "view" => 'emails.login-email'
                        ];
                        Mail::to($email)->send(new SendMail($mail_data));

                        return response()->json([
                            'status' => true,
                            'errors' => '',
                            'message' => 'Please verify your device',
                            'redirect' => ''
                        ]);
                    } elseif ($user_data[0]['two_fa_phone'] == 'YES' && $user_data[0]['two_fa_email'] != 'YES') {
                    } elseif ($user_data[0]['two_fa_email'] == 'YES' && $user_data[0]['two_fa_phone'] == 'YES') {
                    } else {
                        $data = json_encode(['user_id' => $user_data[0]['user_id'], 'email' => $username, 'role' => $role]);
                        $abcdefgh = encodeData($data);
                        session()->put('abcdefgh', $abcdefgh);
                        // session()->put('loginStatus', 'true');
                        // session()->put('role', $role);
                        // session()->put('user_id', $user_data[0]['user_id']);
                        return response()->json([
                            'status' => true,
                            'errors' => '',
                            'message' => 'Login Successfully',
                            'redirect' => ''
                        ]);
                    }
                } else {
                    return response()->json([
                        'status' => false,
                        'errors' => array('password' => array('Password Incorrect')),
                        'message' => 'Incorrect Password',
                        'redirect' => ''
                    ]);
                }
            } else {
                return response()->json([
                    'status' => false,
                    'errors' => array('username' => array('Username Incorrect')),
                    'message' => 'Incorrect Username',
                    'redirect' => ''
                ]);
            }
        }
        // } else {
        //     return response()->json([
        //         'status' => false,
        //         'errors' => '',
        //         'message' => 'Captcha verification failed.',
        //         'redirect' => '0'
        //     ]);
        // }
    }

    public function loginOtpVerification(Request $request)
    {
        $validator = $request->validate([
            'otp' => 'required|integer '
        ]);

        $Session_otp = session()->get('otp');
        $username = session()->get('username');
        $form_otp = $request->otp;

        if ($Session_otp == $form_otp) {
            $get_user_data = LoginModel::where('email', '=', $username)->get();
            if (count($get_user_data) != 0) {
                $user_data = $get_user_data->toArray();
                $role = $user_data[0]['role'];
                $user_id = $user_data[0]['user_id'];

                $data = json_encode(['user_id' => $user_id, 'email' => $username, 'role' => $role]);
                $abcdefgh = encodeData($data);
                session()->put('abcdefgh', $abcdefgh);

                // session()->put('loginStatus', 'true');
                // session()->put('role', $role);
                // session()->put('user_id', $user_id);

                session()->forget(['otp', 'msg', 'username']);

                return redirect()->back()->with('true', 'Login Successfully');
            } else {
                return redirect()->back()->with('false', 'Something went wrong. Please try again later');
            }
        } else {
            return redirect()->back()->with('false', 'Incorrect otp');
        }
    }

    public function resetOtpVerification()
    {
        $response = array();
        session()->forget(['otp', 'msg', 'username']);
        array_push($response, 'false', 'Otp validity has been ended. Please try again.');

        echo json_encode($response);
    }


    public function showPasswordResetPage()
    {
        return view('reset-password');
    }


    public function passwordResetCheckUser(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'registered_email' => 'required',

        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
                'message' => 'Incorrect Registered Email',
                'redirect' => '0'
            ]);
        } else {
            $registered_email = $request->registered_email;
            $get_user_data = LoginModel::where('email', '=', $registered_email)->get();

            if (count($get_user_data) != 0) {

                $otp = mt_rand(100000, 1000000);
                $mail_data = [
                    "subject" => "Device Verification",
                    "otp" => $otp,
                    "path" => array(),
                    "view" => 'emails.login-email'
                ];
                Mail::to($registered_email)->send(new SendMail($mail_data));

                $msg = "We just sent an opt to your registered email. Please verify your device.";
                session()->put('reset_otp', $otp);
                session()->put('registered_email', $registered_email);
                session()->put('msg', $msg);

                return response()->json([
                    'status' => true,
                    'errors' => '',
                    'message' => 'We just sent an opt to your registered email. Please verify your device',
                    'redirect' => ''
                ]);
            } else {
                return response()->json([
                    'status' => false,
                    'errors' => array('registered_email' => array('Incorrect Registered Email')),
                    'message' => 'Incorrect Registered Email',
                    'redirect' => '0'
                ]);
            }
        }
    }

    public function passwordResetOtpCheck(Request $request)
    {
        $validator = $request->validate([
            'otp' => 'required|integer '
        ]);

        $Session_otp = session()->get('reset_otp');
        $form_otp = $request->otp;

        if ($Session_otp == $form_otp) {
            session()->put('newpass', true);
            session()->put('msg', "Create New Password");
            return response()->json([
                'status' => true,
                'errors' => '',
                'message' => 'Create New Password',
                'redirect' => ''
            ]);
        } else {
            return response()->json([
                'status' => false,
                'errors' => array('otp' => array('Incorrect otp')),
                'message' => 'Incorrect otp',
                'redirect' => '0'
            ]);
        }
    }

    public function updatePassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'password' => 'required',
            'confirm_password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
                'message' => 'Faild to updated password',
                'redirect' => '0'
            ]);
        } else {
            if ($request->password == $request->confirm_password) {
                $newPassword = Hash::make($request->password);
                $registered_email = session()->get('registered_email');
                $getUser = LoginModel::where('email', '=', $registered_email)->get();
                $getUser[0]->password = $newPassword;
                $saveStatus = $getUser[0]->save();
                if ($saveStatus === true) {
                    session()->forget(['reset_otp', 'registered_email', 'newpass', 'msg']);
                    session()->put('password_updated', true);
                    return response()->json([
                        'status' => true,
                        'errors' => '',
                        'message' => 'Password updated successfully',
                        'redirect' => ''
                    ]);
                } else {
                    return response()->json([
                        'status' => false,
                        'errors' => '',
                        'message' => 'Failed to update password',
                        'redirect' => '0'
                    ]);
                }
            } else {
                return response()->json([
                    'status' => false,
                    'errors' => array('confirm_password' => array('Password and confirm password should be same')),
                    'message' => 'Faild to updated password',
                    'redirect' => '0'
                ]);
            }
        }
    }

    public function cancelPasswordReset()
    {
        session()->forget(['reset_otp', 'registered_email', 'msg', 'newpass']);
        return redirect()->back();
    }


    public function GotoLogin()
    {
        session()->forget(['password_updated']);
        return view('admin-login');
    }
}