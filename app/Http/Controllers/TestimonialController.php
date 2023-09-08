<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Yajra\DataTables\Facades\DataTables;
use Illuminate\Support\Facades\Validator;

class TestimonialController extends Controller
{
    public function addTestimonial()
    {
        return view('admin.add-testimonial');
    }

    public function addTestimonialSave(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => "required",
            'testimonial' => "required"
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
                'message' => 'Failed to add testimonial. Please try again',
                'redirect' => '0'
            ]);
        } else {
            $data = new Testimonial();
            $data->testi_id =  uid_generator();
            $data->name = trim($request->name);
            $data->texti_text =  trim($request->testimonial);

            $save_status = $data->save();

            if ($save_status === true) {
                return response()->json([
                    'status' => true,
                    'errors' => "",
                    'message' => 'Testimonial added successfully.',
                    'redirect' => '0'
                ]);
            } else {
                return response()->json([
                    'status' => false,
                    'errors' => '',
                    'message' => 'Failed to add testimonial. Please try again.',
                    'redirect' => '0'
                ]);
            }
        }
    }


    public function viewTestimonial(Request $request)
    {

        if ($request->ajax()) {
            $data = DB::table('testimonials')->orderBy('id', 'desc')->get();
            return DataTables::of($data)->addIndexColumn()
                ->addColumn('action', function ($data) {
                    $id = $data->id;
                    $edit = route('admin.editTestimonial', $id);
                    $btn = "
                            <div class='dropdown action-dropdown'>
                                    <button class='btn dropdown-toggle' type='button'
                                        data-bs-toggle='dropdown'>
                                        <span class='fas fa-ellipsis-h fs--1 text-primary'></span>
                                    </button>
                                    <div class='dropdown-menu border py-2'>
                                       
                                        <a class='dropdown-item' href='$edit'  ><i
                                                class='fas fa-edit text-primary'></i>
                                            Edit</a>
                                        <a class='dropdown-item' href='#!'
                                            onclick=single_deleteConfirm('testimonials',[$id],'false','','')><i
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

        return view('admin.view-testimonial');
    }

    public function editTestimonial($id)
    {
        $data = Testimonial::where('id', '=', $id)->get();
        return view('admin.edit-testimonial')->with(compact('data'));
    }

    public function updateTestimonial(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => "required",
            'testimonial' => "required"
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
                'message' => 'Failed to add testimonial. Please try again',
                'redirect' => '0'
            ]);
        } else {
            $data = Testimonial::where('id', '=', $id)->get();
            $data[0]->name = trim($request->name);
            $data[0]->texti_text =  trim($request->testimonial);

            $save_status = $data[0]->save();

            if ($save_status === true) {
                return response()->json([
                    'status' => true,
                    'errors' => "",
                    'message' => 'Testimonial updated successfully.',
                    'redirect' => '0'
                ]);
            } else {
                return response()->json([
                    'status' => false,
                    'errors' => '',
                    'message' => 'Failed to update testimonial. Please try again.',
                    'redirect' => '0'
                ]);
            }
        }
    }
}
