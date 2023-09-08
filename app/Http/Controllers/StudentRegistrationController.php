<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StudentRegistration;
use Yajra\DataTables\Facades\DataTables;
use Illuminate\Support\Facades\Validator;


class StudentRegistrationController extends Controller
{
    public function studentRegistration(Request $request)
    {

        $validator = Validator::make($request->all(), [
            "full_name" => "required",
            "phone_number" => "required|numeric",
            "terms_and_conditions" => "required",
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
                'message' => 'Registration failed. please try again ',
                'redirect' => '0'
            ]);
        } else {
            $data = new StudentRegistration();
            $data->name = sanitizeInput($request->full_name);
            $data->phone = sanitizeInput($request->phone_number);
            $data->email = sanitizeInput($request->email);

            if ($data->save()) {
                return response()->json([
                    'status' => true,
                    'errors' => '',
                    'message' => 'Thank you for registering. We will contact you shortly ',
                    'redirect' => '0'
                ]);
            } else {
                return response()->json([
                    'status' => false,
                    'errors' => '',
                    'message' => 'Registration failed. please try again ',
                    'redirect' => '0'
                ]);
            }
        }
    }




    public function showRegistrationData(Request $request)
    {
        if ($request->ajax()) {
            $data = StudentRegistration::orderBy('id', 'desc')->get();
            return DataTables::of($data)->addIndexColumn()
                ->addColumn('action', function ($data) {
                    $id = $data->id;

                    $btn = "
                        <div class='dropdown action-dropdown'>
                             <button class='btn dropdown-toggle text-primary' type='button'
                                 data-bs-toggle='dropdown'>
                                 <span class='fas fa-ellipsis-h fs--1 text-primary'></span>
                              </button>
                                <div class='dropdown-menu border py-2'>
                                
                                    <a class='dropdown-item' href='#!'
                                        onclick=single_deleteConfirm('student_registration',[$id],'false','','')><i
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

                ->editColumn('created_at', function ($data) {
                    return showDateTime($data->created_at);
                })
                ->editColumn('updated_at', function ($data) {
                    return showDateTime($data->updated_at);
                })


                ->rawColumns(['action', 'checkbox'])
                ->toJson();
        }

        return view('admin.show-registered-student');
    }
}
