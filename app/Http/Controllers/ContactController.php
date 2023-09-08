<?php

namespace App\Http\Controllers;

use App\Mail\SendMail;
use App\Models\ContactModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use Yajra\DataTables\Facades\DataTables;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{

    public function save(Request $request)
    {

        // $req = $request->all();
        // $gCaptcha = $req['g-recaptcha-response'];
        // $gCaptchaStatus = verify_captcha($gCaptcha);
        // if ($gCaptchaStatus) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:500',
            'phone_number' => 'required|numeric',
            'message' => 'required|max:500'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
                'message' => 'Failed to submit contact form. Please try again',
                'redirect' => '0'
            ]);
        } else {
            $data = new ContactModel();
            $data->name = sanitizeInput($request->name);
            $data->email = sanitizeInput($request->email);
            $data->phone = sanitizeInput($request->phone_number);
            $data->msg = sanitizeInput($request->message);


            try {
                $save_status = $data->save();
                $mail_data = [
                    "subject" => "Contact Form Data",
                    "data" => $request->toArray(),
                    "path" => array(),
                    "view" => 'emails.contact-mail'
                ];
                Mail::to(companyEmail())->send(new SendMail($mail_data));


                return response()->json([
                    'status' => true,
                    'errors' => "",
                    'message' => 'Contact form submitted successfully.',
                    'redirect' => '0'
                ]);

            } catch (\Throwable $th) {
                return response()->json([
                    'status' => false,
                    'errors' => '',
                    'message' => 'Contact form not submitted. Please try again.',
                    'redirect' => '0'
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


    public function adminIndex()
    {

        return view('admin.view-contact');
    }


    function getContactData(Request $request)
    {

        if ($request->ajax()) {
            $data = DB::table('contacts')->get();
            return DataTables::of($data)->addIndexColumn()
                ->addColumn('action', function ($data) {
                    $id = $data->id;

                    $btn = "
                    <div class='dropdown action-dropdown'>
                    <button class='btn dropdown-toggle text-primary' type='button'
                        data-bs-toggle='dropdown'>
                        <span class='fas fa-ellipsis-h fs--1'></span>
                    </button>
                    <div class='dropdown-menu border py-2'>

                        <a class='dropdown-item' href='#!'
                            onclick=single_deleteConfirm('contacts',[$id],'false','','')><i
                                class='fas fa-trash text-danger'></i>
                            Delete</a>
                    </div>
                </div>
                    ";
                    return $btn;
                })
                ->addColumn('checkbox', function ($data) {
                    $checkbox = $data->id;
                    return $checkbox;
                })

                ->rawColumns(['action', 'checkbox'])
                ->toJson();
        }

        return view('admin.view-contact');
    }
}