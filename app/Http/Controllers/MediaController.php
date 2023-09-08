<?php

namespace App\Http\Controllers;

use App\Models\MediaModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Yajra\DataTables\Facades\DataTables;
use Illuminate\Support\Facades\Validator;


class MediaController extends Controller
{
    public function index()
    {
        return view('admin.add-media');
    }

    public function save(Request $request)
    {

        $validator = Validator::make($request->all(), [
            "file" => "required"
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
                'message' => 'Failed to add media',
                'redirect' => '0'
            ]);
        } else {
            $n = 0;
            foreach ($request->file as $signle_file) {
                $file_name = $signle_file->getClientOriginalName();
                $new_photo = new_fileName($file_name);
                $signle_file->move('mystorage/media/', $new_photo);
                $saveData = new MediaModel();
                $saveData->img_name = $new_photo;
                $saveStatus = $saveData->save();
                if ($saveStatus === true) {
                    $n++;
                }
            }

            if ($n != 0) {
                return response()->json([
                    'status' => true,
                    'errors' => '',
                    'message' => 'Media added successfully',
                    'redirect' => '0'
                ]);
            } else {
                return response()->json([
                    'status' => false,
                    'errors' => '',
                    'message' => 'Failed to add media',
                    'redirect' => '0'
                ]);
            }
        }
    }

    public function mediaIndex()
    {
        return view('admin.view-media');
    }

    public function editMedia(Request $request, $id)
    {
        $data = MediaModel::where('id', '=', $id)->get();
        return view('admin.edit-media')->with(compact('data'));
    }


    public function updateMedia(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            "img_name" => "required",

        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
                'message' => 'Failed to add media',
                'redirect' => '0'
            ]);
        } else {

            $saveData = MediaModel::find($id);
            $media_name = $saveData->img_name;
            if ($media_name != $request->img_name) {
                $get_extension = pathinfo('mystorage/media/' . $media_name, PATHINFO_EXTENSION);
                $old_name = 'mystorage/media/' . $media_name;
                $new_name = 'mystorage/media/' . $request->img_name . '.' . $get_extension;
                $new_photo = $request->img_name . '.' . $get_extension;
            } else {
                $new_photo = $media_name;
            }


            $checkFileName = MediaModel::where('img_name', '=', $new_photo)->WhereNot('id', '=', $id)->get();
            if (count($checkFileName) != 0) {
                return response()->json([
                    'status' => false,
                    'errors' => '',
                    'message' => 'Duplicate file name',
                    'redirect' => '0'
                ]);
            } else {

                $saveData->img_name = $new_photo;
                $saveData->alt = trim($request->alt);
                $saveData->title = trim($request->title);
                $saveData->caption = trim($request->caption);
                $saveData->description = trim($request->description);

                $saveStatus = $saveData->save();
                if ($saveStatus === true) {

                    if ($media_name != $request->img_name) {
                        rename($old_name, $new_name);
                    }

                    return response()->json([
                        'status' => true,
                        'errors' => '',
                        'message' => 'Media updated successfully',
                        'redirect' => '0'
                    ]);
                } else {
                    return response()->json([
                        'status' => false,
                        'errors' => '',
                        'message' => 'Failed to update media',
                        'redirect' => '0'
                    ]);
                }
            }
        }
    }

    public function getMediaData(Request $request)
    {
        if ($request->ajax()) {
            $data = DB::table('media')->orderBy('id', 'desc')->get();
            return DataTables::of($data)->addIndexColumn()
                ->addColumn('action', function ($data) {
                    $id = $data->id;
                    $edit_url = route("admin.editMedia", $id);
                    $image_url = asset('mystorage/media/' . $data->img_name);
                    $btn = "
                        <div class='dropdown action-dropdown'>
                                <button class='btn dropdown-toggle' type='button'
                                    data-bs-toggle='dropdown'>
                                    <span class='fas fa-ellipsis-h fs--1 text-primary'></span>
                                </button>
                                <div class='dropdown-menu border py-2'>
                                    <a class='dropdown-item'
                                        href='$edit_url'><i
                                            class='fas fa-edit text-primary'></i> Edit</a>
                                    <a class='dropdown-item' href='#!'
                                        onclick=single_deleteConfirm('media',[$id],'true','','')><i
                                            class='fas fa-trash text-danger'></i>
                                        Delete</a>
                                    <a class='dropdown-item' href='#!' onclick=copy_link('$image_url')><i
                                            class='fas fa-link text-primary'></i>
                                        Copy link</a>
                                      
                                </div>
                            </div>
                    ";
                    return $btn;
                })
                ->addColumn('checkbox', function ($data) {
                    $checkbox = $data->id;
                    return $checkbox;
                })
                ->addColumn('img_name', function ($data) {
                    $image_url = asset('mystorage/media/' . $data->img_name);
                    $url =   asset('mystorage/media/' . $data->img_name);

                    $media = "<a href='$url' target='_blank'><img src='$image_url' style='height:40px'></a>";
                    return $media;
                })
                ->editColumn('created_at', function ($data) {
                    return showDateTime($data->created_at);
                })
                ->rawColumns(['action', 'checkbox', 'img_name', 'created_at'])
                ->toJson();
        }

        return view('admin.view-media');
    }
}
