@extends('admin.main')
@push('title')
    <title>Add Portfolio</title>
@endpush

@section('main-section')
    <div class="page-wrapper">
        <div class="page-content">

            <div class="card p-0">
                <div class="card-body p-0">
                    <div class="page-breadcrumb d-none d-sm-flex align-items-center border px-3 pt-2 pb-2 bg-light ">
                        <div class="breadcrumb-title pe-3">Portfolio</div>
                        <div class="ps-3">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb mb-0 p-0">
                                    <li class="breadcrumb-item"><a href="{{ route('admin.indexView') }}"><i
                                                class="bx bx-home-alt"></i></a>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">Add Portfolio</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 p-0 mt-4">
                <div class="card">
                    <div class="card-header border-bottom">
                        <h6 class="text-primary" style="font-size: 16px">Add Portfolio</h6>
                    </div>
                    <div class="card-body">

                        <form method="POST" id="Portfolio-form"
                            onsubmit="uploadData2('Portfolio-form','{{ route('admin.addPortfolioSave') }}', 'alert-box', 'btn-box-1', event)"
                            class="mx-3 p-3" enctype="multipart/form-data">
                            @csrf
                            <div id="alert-box"></div>
                            <div class="row">

                                <div class="col-12 mb-3">
                                    <label class="form-label"> Title</label>
                                    <input type="text" name="title" class="form-control" required
                                        placeholder="Enter Portfolio Title">
                                    <p class="form-feedback invalid-feedback" data-name="title"></p>
                                </div>

                                <div class="col-12 mb-3">
                                    <label class="form-label">Feature Image </label>
                                    <div class="border border-dashed p-3">
                                        <div class="selected-media-box" id="selected-media-box">
                                            <input type="hidden" id="final-selected-media-input" name="img"
                                                value="">
                                        </div>
                                        <div class="d-flex justify-content-center align-items-center mt-2">
                                            <a style="background-color: transparent" href="javascript:;"
                                                data-bs-toggle="modal" data-bs-target="#media-modal-one"
                                                onclick="setMediaSelection('final-selected-media-input','selected-media-box',false)">
                                                <img src="{{ asset('admin-assets/assets/images/icons/attachment.png') }}">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 mb-3">
                                    <label class="form-label"> Short Description</label>
                                    <textarea name="des"   class="form-control"></textarea>
                                    <p class="form-feedback invalid-feedback" data-name="des"></p>
                                </div>
                                <div class="col-12 mb-3">
                                    <label class="form-label"> Content</label>
                                    <textarea name="content" id="editor" cols="30" rows="10" class="form-control"></textarea>
                                    <p class="form-feedback invalid-feedback" data-name="content"></p>
                                </div>
                            </div>

                            <div class="mb-3" id="btn-box-1">
                                <button class="btn btn-primary" type="submit" name="create"
                                    style="width:100% ; font-size:15px"> Add </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    </div>

    @push('scripts')
    @endpush
@endsection
