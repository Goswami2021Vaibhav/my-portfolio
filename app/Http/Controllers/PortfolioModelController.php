<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PortfolioModel;
use Yajra\DataTables\Facades\DataTables;
use Illuminate\Support\Facades\Validator;

class PortfolioModelController extends Controller
{
    public function addPortfolio(Request $request)
    {
        return view('admin.add-portfolio');
    }
    public function addPortfolioSave(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => "required",
            'img' => "required",
            'des' => "required",
            'content' => "required"
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
                'message' => 'Failed to add portfolio. Please try again',
                'redirect' => '0'
            ]);
        } else {
            $data = new PortfolioModel();
            $data->title = sanitizeInput($request->title);
            $data->img = $request->img;
            $data->des = sanitizeInput($request->des);
            $data->content = htmlentities($request->content);

            try {
                $data->save();
                return response()->json([
                    'status' => true,
                    'errors' => "",
                    'message' => 'Portfolio added successfully.',
                    'redirect' => '0'
                ]);
            } catch (\Throwable $th) {
                return response()->json([
                    'status' => false,
                    'errors' => '',
                    'message' => 'Failed to add portfolio. Please try again.',
                    'redirect' => '0'
                ]);
            }

        }
    }


    public function editPortfolio($id)
    {
        $data = PortfolioModel::find($id);
        return view('admin.edit-portfolio')->with(compact('data'));
    }
    public function updatePortfolio(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'title' => "required",
            'img' => "required",
            'des' => "required",
            'content' => "required"
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
                'message' => 'Failed to update portfolio. Please try again',
                'redirect' => '0'
            ]);
        } else {
            $data = PortfolioModel::find($id);
            $data->title = sanitizeInput($request->title);
            $data->img = $request->img;
            $data->des = sanitizeInput($request->des);
            $data->content = htmlentities($request->content);

            try {
                $data->save();
                return response()->json([
                    'status' => true,
                    'errors' => "",
                    'message' => 'Portfolio updated successfully.',
                    'redirect' => '0'
                ]);
            } catch (\Throwable $th) {
                return response()->json([
                    'status' => false,
                    'errors' => $th,
                    'message' => 'Failed to update portfolio. Please try again.',
                    'redirect' => '0'
                ]);
            }

        }
    }

    public function viewPortfolio(Request $request)
    {
        if ($request->ajax()) {
            $data = PortfolioModel::orderBy('id', 'desc')->get();
            return DataTables::of($data)->addIndexColumn()
                ->addColumn('action', function ($data) {
                    $id = $data->id;
                    $edit = route('admin.editPortfolio', $id);
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
                                            onclick=single_deleteConfirm('portfolio',[$id],'false','','')><i
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
                ->editColumn('content', function ($data) {

                    return "<a href='' target='_blank' class='text-primary'>View</a>";
                })
                ->editColumn('img', function ($data) {
                    $img = json_decode($data->img, true);
                    return getMediaFile($img[0]['file_id']);
                })
                ->editColumn('created_at', function ($data) {

                    return showDateTime($data->created_at);
                })
                ->editColumn('updated_at', function ($data) {

                    return showDateTime($data->updated_at);
                })

                ->rawColumns(['action', 'checkbox', 'content', 'img'])
                ->toJson();
        }
        return view('admin.show-portfolio');
    }

    public function frontendPortfolio()
    {
        $data = PortfolioModel::orderBy('id', 'desc')->get();
        return view('frontend.portfolio')->with(compact('data'));
    }

    public function getPortfolioData(Request $request)
    {
        $id = sanitizeInput($request->id);
        $data = PortfolioModel::find($id);
        if (!is_null($data)) {
            $img = json_decode($data->img, true);
            $src = getMediaFile($img[0]['file_id']);
            return response()->json([
                'status' => true,
                'img' => $src,
                'content' => html_entity_decode($data->content)
            ]);
        } else {
            return response()->json([
                'status' => false
            ]);
        }
    }
}