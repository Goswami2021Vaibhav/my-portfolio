<?php

namespace App\Http\Controllers;

use App\Models\BlogComments;
use App\Models\MediaModel;
use App\Models\ProductVariationModel;
use Illuminate\Http\Request;

class AjaxRequestController extends Controller
{
    public function ajaxRequest(Request $request)
    {

        if ($request->has('isset_get_modal_media')) {
            $mediaData =  MediaModel::orderBy('id', 'desc')
                ->get();
            $data = [];
            if (count($mediaData) != 0) {
                foreach ($mediaData as $single_media) {
                    $url =  asset('mystorage/media/' . $single_media->img_name);
                    $id = $single_media->id;
                    array_push($data, ['id' => $id, 'url' => $url]);
                }
                return response()->json([
                    'status' => true,
                    'media' => $data
                ]);
            } else {
                return response()->json([
                    'status' => false,
                    'media' => $data
                ]);
            }
        }

        if ($request->has('isset_blog_comment_status')) {
            $comment_id = $request->comment_id;
            $commentData = BlogComments::where('id', '=', $comment_id)->get();
            if (count($commentData) != 0) {
                $status = $commentData[0]->status;
                if ($status == 0) {
                    $commentData[0]->status = 1;
                    $saveStatus = $commentData[0]->save();
                } else {
                    $commentData[0]->status = 0;
                    $saveStatus = $commentData[0]->save();
                }
                if ($saveStatus === true) {
                    return response()->json([
                        'status' => true,
                        'message' => 'Status Updated Successfully',
                        'redirect' => ''
                    ]);
                } else {
                    return response()->json([
                        'status' => false,
                        'message' => 'Failed to updated status',
                        'redirect' => ''
                    ]);
                }
            } else {
                return response()->json([
                    'status' => false,
                    'message' => 'Failed to updated status',
                    'redirect' => ''
                ]);
            }
        }
    }

    // frontend ajax started 

    public function frontAjaxRequest(Request $request)
    {
        if ($request->has('isset_check_payment_status')) {
            if (session()->has('status_payment_id')) {
                return response()->json([
                    'status' => true,
                    'redirect' => route('frontend.SubscriptionStatus')
                ]);
            } else {
                return response()->json([
                    'status' => false,
                    'redirect' => '#'
                ]);
            }
        }
    }
}
