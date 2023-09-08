<?php

use Illuminate\Support\Facades\DB;

function encodeData($json_data)
{
    $token = base64_encode($json_data);
    for ($i = 0; $i < 5; $i++) {
        $token = base64_encode($token);
    }

    return $token;
}

function decodeData($encodedData)
{
    $decoded = base64_decode($encodedData);
    for ($i = 0; $i < 5; $i++) {
        $decoded = base64_decode($decoded);
    }

    return $decoded;
}

function verifyLogin($token)
{
    $json_data = decodeData($token);
    $data = json_decode($json_data, true);
    $user_id = $data['user_id'];
    $email = $data['email'];
    $role = $data['role'];

    $check = DB::table('logins')->where([
        ['user_id', '=', $user_id],
        ['email', '=', $email],
        ['role', '=', $role],
    ])->count();

    if ($check != 0) {
        return ['status' => true, 'data' => $data];
    } else {
        return ['status' => false, 'data' => $data];
    }
}


function loginData($token)
{
    $verification = verifyLogin($token);
    $data = $verification['data'];
    return $data;
}


function companyEmail()
{
  
    return "goswamivaibhav72@gmail.com";
}

function print_pre($data)
{
    echo "<pre>";
    print_r($data);
    echo "</pre>";
}

function uid_generator()
{
    $gen_uid = strtoupper(substr(md5(mt_rand(10000, 10000000000)), 22));
    return $gen_uid;
}

function showDate($date)
{
    if (!is_null($date) || $date != '') {
        return date_format(date_create($date), 'd-M-Y');
    } else {
        return '';
    }
}
function showTime($time)
{
    if (!is_null($time) || $time != '') {
        return date_format(date_create($time), 'g:i A');
    } else {
        return '';
    }
}
function showDateTime($datetime)
{
    if (!is_null($datetime) || $datetime != '') {
        return date_format(date_create($datetime), 'd-M-Y, g:i A');
    } else {
        return '';
    }
}

function seo_friendly_url($string)
{
    $string = str_replace(array('[\', \']'), '', $string);
    $string = preg_replace('/\[.*\]/U', '', $string);
    $string = preg_replace('/&(amp;)?#?[a-z0-9]+;/i', '-', $string);
    $string = htmlentities($string, ENT_COMPAT, 'utf-8');
    $string = preg_replace('/&([a-z])(acute|uml|circ|grave|ring|cedil|slash|tilde|caron|lig|quot|rsquo);/i', '\\1', $string);
    $string = preg_replace(array('/[^a-z0-9]/i', '/[-]+/'), '-', $string);
    return strtolower(trim($string, '-'));
}


function verify_captcha($gcaptcha)
{
    $secrect = '6LdplgkoAAAAABD_AbQqVxPxLF1JsAJ1-2zWy7Ns';
    $ip = $_SERVER['REMOTE_ADDR'];
    $url = 'https://www.google.com/recaptcha/api/siteverify?secret=' . urlencode($secrect) .  '&response=' . urlencode($gcaptcha) . '&remoteip=' . $ip;

    $api_content = file_get_contents($url);
    $api_response = json_decode($api_content);


    if ($api_response->success === true) {
        return true;
    } else {
        return false;
    }
}


function getAllState()
{
    $data = DB::table('states')->orderBy('name', 'asc')->get();
    $states  = '';
    foreach ($data as $single_state) {
        $states .= "<option value='$single_state->name'>$single_state->name</option>";
    }

    return $states;
}
function new_fileName($file_name)
{
    $new_file_ext = pathinfo($file_name, PATHINFO_EXTENSION);
    $new_name = substr(md5($file_name) . mt_rand(1000, 10000), 22) . '.' . $new_file_ext;
    return $new_name;
}


function removeFileExtension($path, $file_name)
{
    $get_extension = pathinfo($path, PATHINFO_EXTENSION);
    $length =   strlen($get_extension);
    if ($length == 3) {
        $extension_from_string =  substr($file_name, -4);
    } elseif ($length == 4) {
        $extension_from_string = substr($file_name, -5);
    }
    return  str_replace($extension_from_string, '', $file_name);
}

function IND_num_format($number)
{
    $decimal = (string)($number - floor($number));
    $money = floor($number);
    $length = strlen($money);
    $delimiter = '';
    $money = strrev($money);

    for ($i = 0; $i < $length; $i++) {
        if (($i == 3 || ($i > 3 && ($i - 1) % 2 == 0)) && $i != $length) {
            $delimiter .= ',';
        }
        $delimiter .= $money[$i];
    }

    $result = strrev($delimiter);
    $decimal = preg_replace("/0\./i", ".", $decimal);
    $decimal = substr($decimal, 0, 3);

    if ($decimal != '0') {
        $result = $result . $decimal;
    }

    return $result;
}


function showMonth()
{
    $months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    $options = '';
    foreach ($months as $month) {
        $options .= "<option value='$month'>$month</option>";
    }

    return $options;
}


function dateDifference($to, $from)
{
    $date1 = date_create($to);
    $date2 = date_create($from);
    // substract date1 from date2
    $diff = date_diff($date1, $date2);
    return $diff->format('%R%a');
}


function yearOption($table)
{
    $data = DB::table($table)->select('year')->distinct()->get();
    $str = "<option value='All'>All</option>";
    foreach ($data as $singleData) {
        $str .= "<option value='$singleData->year'>$singleData->year</option>";
    }
    return $str;
}



function sanitizeInput($input)
{
    // Remove leading and trailing spaces
    $input = trim($input);

    // Remove HTML tags and entities
    $input = strip_tags($input);

    // Convert special characters to their HTML entities
    $input = htmlentities($input, ENT_QUOTES, 'UTF-8');

    return $input;
}
function generateId($table, $col, $three_digit_prefix)
{
    $getData  = DB::table("$table")->limit(1)->orderBy('id', 'desc')->get();
    $nextId = 0;
    if (count($getData) != 0) {
        $lastId = $getData[0]->$col;
        $lastNumber = substr($lastId, 7);
        $newNumber = (int) $lastNumber + 1;
        $nextId = $three_digit_prefix . date('Y') .  $newNumber;
    } else {
        $nextId = $three_digit_prefix . date('Y') .  '1';
    }

    return $nextId;
}


function removeExtension($img_name)
{
    $get_extension = pathinfo('mystorage/media/' . $img_name, PATHINFO_EXTENSION);
    $length = strlen($get_extension);
    if ($length == 3) {
        $extension_from_string = substr($img_name, -4);
    } elseif ($length == 4) {
        $extension_from_string = substr($img_name, -5);
    } elseif ($length == 5) {
        $extension_from_string = substr($img_name, -6);
    }
    return  $file_name = str_replace($extension_from_string, '', $img_name);
}




function getMediaFile($id)
{
    $getMedia = DB::table('media')->where('id', '=', $id)->get();
    if (count($getMedia) != 0) {
        $url = $getMedia[0]->img_name;
        $alt = $getMedia[0]->alt;
        $title = $getMedia[0]->title;
        $caption = $getMedia[0]->caption;
        $description = $getMedia[0]->description;
    } else {
        $url = '';
        $alt = '';
        $title = '';
        $caption = '';
        $description = '';
    }
    $src = asset('mystorage/media') . '/' . $url;
    return "<img decoding='async' src='$src' alt='$alt' title='$title' caption='$caption' description='$description' >";
}
function getMediaUrl($id)
{
    $getMedia = DB::table('media')->where('id', '=', $id)->get();
    if (count($getMedia) != 0) {
        $url = $getMedia[0]->img_name;
        $alt = $getMedia[0]->alt;
        $title = $getMedia[0]->title;
        $caption = $getMedia[0]->caption;
        $description = $getMedia[0]->description;
    } else {
        $url = '';
        $alt = '';
        $title = '';
        $caption = '';
        $description = '';
    }
    $src = asset('mystorage/media') . '/' . $url;
    return  [
        'src' => $src,
        'alt' => $alt,
        'title' => $title,
        'caption' => $caption,
        'des' => $description,
    ];
}

function getPortfolioCategoryName($cat_id)
{
    $data = DB::table('portfolio_category')->where('cat_id', '=', "$cat_id")->get();
    if (count($data) != 0) {
        return $data[0]->cat_name;
    } else {
        return "Not Found";
    }
}


function getBlogCategoryName($cat_id)
{
    $data = DB::table('blog_category')->where('cat_id', '=', "$cat_id")->get();
    if (count($data) != 0) {
        return $data[0]->cat_name;
    } else {
        return "Not Found";
    }
}


function showComments($blogId)
{
    $comments = DB::table('comments')->where([
        ['blog_id', '=', $blogId],
        ['status', '=', 1],
    ])
        ->orderBy('id', 'desc')
        ->get();
    if (count($comments) != 0) {
        $comment_str  = "";
        foreach ($comments as $single_comment) {
            $full_name = $single_comment->full_name;
            $date_time = showDateTime($single_comment->created_at);
            $comment = $single_comment->comment;
            $comment_str .= "
            <div class='col-sm position-relative mb-3 pb-3 border-bottom'>
               <h6 class='font-w-6'>$full_name</h6>
               <div class='comment-date'>$date_time</div>
               <p class='mb-0 mt-3'> $comment</p>
            </div>";
        }

        return $comment_str;
    } else {
        return "<h6> 0 Comments </h6>";
    }
}
