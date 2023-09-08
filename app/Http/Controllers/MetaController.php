<?php

namespace App\Http\Controllers;

use App\Models\MetaModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Yajra\DataTables\Facades\DataTables;
use Illuminate\Support\Facades\Validator;

class MetaController extends Controller
{
    public function index()
    {
        return view('admin.add-meta');
    }
    public function save(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "url" => "required",
            "title" => "required",
            "Keywords" => "required",
            "decription" => "required",
            "og_url" => "required",
            "og_title" => "required",
            "og_img_url" => "required",
            "og_decription" => "required"
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
                'message' => 'Failed to add meta. Please try again',
                'redirect' => '0'
            ]);
        } else {
            $data =  new MetaModel();
            $data->url = htmlentities(trim($request->url));
            $data->title = trim($request->title);
            $data->keywords = trim($request->Keywords);
            $data->description = trim($request->decription);
            $data->og_url =   htmlentities(trim($request->og_url));
            $data->og_title = trim($request->og_title);
            $data->og_image_url = htmlentities(trim($request->og_img_url));
            $data->og_description = trim($request->og_decription);
            $data->page_topic = trim($request->page_topic);
            $data->distribution = trim($request->distribution);
            $data->twitter_title = trim($request->twitter_title);
            $data->twitter_img_url = trim($request->twitter_img_url);
            $data->twitter_des = trim($request->twitter_description);
            $data->js_schema = trim($request->schema);

            $save_status = $data->save();
            if ($save_status === true) {
                return response()->json([
                    'status' => true,
                    'errors' => "",
                    'message' => 'Meta added successfully.',
                    'redirect' => '0'
                ]);
            } else {
                return response()->json([
                    'status' => false,
                    'errors' => '',
                    'message' => 'Failed to add meta. Please try again.',
                    'redirect' => '0'
                ]);
            }
        }
    }



    public function editMeta($id)
    {
        $data = MetaModel::where('id', '=', $id)->get();
        return view('admin.edit-meta')->with(compact('data'));
    }
    public  function updateMeta(Request $request, $id)
    {

        $validator = Validator::make($request->all(), [
            "url" => "required",
            "title" => "required",
            "Keywords" => "required",
            "decription" => "required",
            "og_url" => "required",
            "og_title" => "required",
            "og_img_url" => "required",
            "og_decription" => "required"
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
                'message' => 'Failed to update meta. Please try again',
                'redirect' => '0'
            ]);
        } else {
            $data =   MetaModel::where('id', '=', $id)->get();
            $data[0]->url = htmlentities(trim($request->url));
            $data[0]->title = trim($request->title);
            $data[0]->keywords = trim($request->Keywords);
            $data[0]->description = trim($request->decription);
            $data[0]->og_url =   htmlentities(trim($request->og_url));
            $data[0]->og_title = trim($request->og_title);
            $data[0]->og_image_url = htmlentities(trim($request->og_img_url));
            $data[0]->og_description = trim($request->og_decription);
            $data[0]->page_topic = trim($request->page_topic);
            $data[0]->distribution = trim($request->distribution);
            $data[0]->twitter_title = trim($request->twitter_title);
            $data[0]->twitter_img_url = trim($request->twitter_img_url);
            $data[0]->twitter_des = trim($request->twitter_description);
            $data[0]->js_schema = trim($request->schema);

            $save_status = $data[0]->save();
            if ($save_status === true) {
                return response()->json([
                    'status' => true,
                    'errors' => "",
                    'message' => 'Meta updated successfully.',
                    'redirect' => '0'
                ]);
            } else {
                return response()->json([
                    'status' => false,
                    'errors' => '',
                    'message' => 'Failed to update meta. Please try again.',
                    'redirect' => '0'
                ]);
            }
        }
    }



    public function show(Request $request)
    {
        if ($request->ajax()) {
            $data = DB::table('meta')->get();
            return DataTables::of($data)->addIndexColumn()
                ->addColumn('action', function ($data) {
                    $id = $data->id;
                    $edit = route('admin.editMeta', $id);
                    $btn = "
                    <div class='dropdown action-dropdown'>
                            <button class='btn dropdown-toggle' type='button'
                                data-bs-toggle='dropdown'>
                                <span class='fas fa-ellipsis-h fs--1 text-primary'></span>
                            </button>
                            <div class='dropdown-menu border py-2'>
                                <a class='dropdown-item'
                                    href='$edit'><i
                                        class='fas fa-edit text-primary'></i> Edit</a>
                                <a class='dropdown-item' href='#!'
                                    onclick=single_deleteConfirm('meta',[$id],'false','','')><i
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
                ->editColumn('og_image_url', function ($data) {
                    $og_image_url = $data->og_image_url;
                    return "<a href='$og_image_url' target='blank'>View</a>";
                })
                ->editColumn('url', function ($data) {
                    $url = $data->url;
                    return "<a href='$url' target='blank'>View</a>";
                })

                ->rawColumns(['action', 'checkbox', 'og_image_url', 'url'])
                ->toJson();
        }
        return view('admin.view-meta');

    }
}
