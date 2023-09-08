<?php

use App\Http\Controllers\Login;
use App\Http\Controllers\PortfolioModelController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;
use App\Http\Controllers\MetaController;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DeleteAllController;
use App\Http\Controllers\AdminIndexController;
use App\Http\Controllers\AjaxRequestController;
use App\Http\Controllers\TestimonialController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::controller(IndexController::class)->name('frontend.')->group(function () {
    Route::get('/', 'index')->name('index');
});


Route::get('/cache', function () {
    Artisan::call('cache:clear');
    dd('cache cleard successfully');
});
Route::get('/route-cache', function () {
    Artisan::call('route:cache');
    dd('route cache successfully');
});



Route::controller(ContactController::class)->name('frontend.')->group(function () {
    Route::post('/contact', 'save')->name('contact-save');
});

Route::controller(PortfolioModelController::class)->name('frontend.')->group(function () {
    Route::get('/portfolio', 'frontendPortfolio')->name('frontendPortfolio');
    Route::post('/get-portfolio-data', 'getPortfolioData')->name('getPortfolioData');
});

// =================== Admin Dashboard Started =================

// [================== Login Page Route  Start ==================]
// [================== Login Page Route  Start ==================]

Route::controller(Login::class)->group(function () {
    Route::get('/ad-min', 'index')->name('login-view');
    Route::post('/ad-min', 'login')->name('login-check');
    Route::post('/otp-verification', 'loginOtpVerification')->name('login-otp-verification');
    Route::get('/reset-otp-verification', 'resetOtpVerification')->name('reset-otp-verification');

    // ================== Reset Passowrd =============
    Route::get('/reset-password', 'showPasswordResetPage')->name('showPasswordResetPage');
    Route::post('/reset-password', 'passwordResetCheckUser')->name('passwordResetCheckUser');
    Route::post('/reset-password-otp-check', 'passwordResetOtpCheck')->name('passwordResetOtpCheck');
    Route::get('/cancel-reset-password', 'cancelPasswordReset')->name('cancelPasswordReset');
    Route::post('/update-passwordd', 'updatePassword')->name('updatePassword');
    Route::get('/goto-login', 'GotoLogin')->name('GotoLogin');
});


// [================== Login Page Route  End ==================]
// [================== Login Page Route  End ==================]


Route::middleware('adminLogin')->group(function () {

    // ********************* Delete All Controller Start **********************
    Route::controller(DeleteAllController::class)->prefix('admin')->name('admin.')->group(function () {
        Route::get('/deleteall', 'deleteAll')->name('deleteAll');
    });
    // ********************* Delete All Controller End **********************

    // ******************* Admin Contact Route Start *************
    Route::controller(ContactController::class)->prefix('admin')->name('admin.')->group(function () {
        Route::get('/contact', 'adminIndex')->name('contactIndex');
        Route::get('/contact-datatable-data', 'getContactData')->name('getContactData');
    });
    // ******************* Admin Contact Route End *************


    Route::controller(AjaxRequestController::class)->prefix('admin')->name('admin.')->group(function () {
        Route::post('/ajax-request', 'ajaxRequest')->name('ajaxRequest');
    });


    Route::controller(TrashController::class)->prefix('admin')->name('admin.')->group(function () {
        Route::get('/trash/{trash_of}', 'Trash')->name('Trash');
        Route::get('/get-trash-data', 'getTrashData')->name('getTrashData');
    });

    // ============ Media route start ============
    Route::controller(MediaController::class)->prefix('admin')->name('admin.')->group(function () {
        Route::get('/add-media', 'index')->name('addMediaIndex');
        Route::post('/add-media', 'save')->name('saveMediaIndex');
        Route::get('/show-media', 'mediaIndex')->name('mediaIndex');
        Route::get('/edit-media/{id}', 'editMedia')->name('editMedia');
        Route::post('/edit-media/{id}', 'updateMedia')->name('updateMedia');
        Route::get('/media-datatable-data', 'getMediaData')->name('getMediaData');
    });
    // ============ Media route End ============

    // ***************** Admin Index Page  Route Start**************************

    Route::controller(AdminIndexController::class)->prefix('admin')->name('admin.')->group(function () {
        Route::get('/dashboard', 'index')->name('indexView');
        Route::get('/logout', 'logout')->name('logout');
    });

    // ***************** Admin Index Page  Route End**************************




    Route::controller(MetaController::class)->prefix('admin')->name('admin.')->group(function () {
        Route::get('/add-meta', 'index')->name('addMeta');
        Route::post('/add-meta', 'save')->name('addMetaSave');
        Route::get('/view-meta', 'show')->name('showMeta');
        Route::get('/edit-meta/{id}', 'editMeta')->name('editMeta');
        Route::post('/edit-meta/{id}', 'updateMeta')->name('updateMeta');
    });


    Route::controller(TestimonialController::class)->prefix('admin')->name('admin.')->group(function () {
        Route::get('/add-testimonial', 'addTestimonial')->name('addTestimonial');
        Route::post('/add-testimonial', 'addTestimonialSave')->name('addTestimonialSave');
        Route::get('/view-testimonial', 'viewTestimonial')->name('viewTestimonial');
        Route::get('/edit-testimonial/{id}', 'editTestimonial')->name('editTestimonial');
        Route::post('/edit-testimonial/{id}', 'updateTestimonial')->name('updateTestimonial');
    });
    Route::controller(PortfolioModelController::class)->prefix('admin')->name('admin.')->group(function () {
        Route::get('/add-portfolio', 'addPortfolio')->name('addPortfolio');
        Route::post('/save-portfolio', 'addPortfolioSave')->name('addPortfolioSave');
        Route::get('/view-portfolio', 'viewPortfolio')->name('viewPortfolio');
        Route::get('/edit-portfolio/{id}', 'editPortfolio')->name('editPortfolio');
        Route::post('/update-portfolio/{id}', 'updatePortfolio')->name('updatePortfolio');
    });
});

// [================== Adming Route End ==================]
// [================== Adming Route End ==================]
