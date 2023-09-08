<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class DeleteAllController extends Controller
{
    function deleteAll(Request $request)
    {

        $table = $request['table'];
        $data = $request['data'];
        $file_true_false = $request['file'];
        $file_name = $request['file_name'];
        $file_path = $request['file_path'];

        $deleted_rows = 0;


        for ($i = 0; $i < count($data); $i++) {

            $fileData = DB::table("$table")->where('id', '=', $data[$i])->get();
            $delete = DB::table("$table")->where('id', '=', $data[$i])->delete();
            $file_path = "mystorage/media/";
            if ($file_true_false == 'true') {
                if (count($fileData) != 0) {
                    $img_name = $fileData[0]->img_name;
                    if (file_exists($file_path . '/' . $img_name)) {
                        unlink($file_path . '/' . $img_name);
                    }
                }
            }
            $deleted_rows++;
            $msg = "data deleted permanentally";
        }

        if ($deleted_rows != 0) {
            return response()->json([
                'status' => true,
                'message' => "$deleted_rows $msg",
                'redirect' => 'self'
            ]);
        } else {
            return response()->json([
                'status' => false,
                'message' => "Failed to deleted data",
                'redirect' => '#'
            ]);
        }
    }
}
