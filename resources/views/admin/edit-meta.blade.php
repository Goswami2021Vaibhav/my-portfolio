 


@extends('admin.main')
@push('title')
    <title>Add Meta</title>
@endpush

@section('main-section')
    <div class="page-wrapper">
        <div class="page-content">

            <div class="card p-0">
                <div class="card-body p-0">
                    <div class="page-breadcrumb d-none d-sm-flex align-items-center border px-3 pt-2 pb-2 bg-light ">
                        <div class="breadcrumb-title pe-3">Meta</div>
                        <div class="ps-3">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb mb-0 p-0">
                                    <li class="breadcrumb-item"><a href="{{ route('admin.indexView') }}"><i
                                                class="bx bx-home-alt"></i></a>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">Add Meta</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-12">

                        <form method="POST" id="Meta-form"
                        onsubmit="uploadData1('Meta-form','{{ route('admin.updateMeta', $data[0]->id) }}', 'alert-box', 'btn-box-1', event)"
                        class="mx-3 p-3" enctype="multipart/form-data">
                        @csrf
                        <div id="alert-box"></div>
                        <div class="row">
                            <div class="col-lg-6 mb-3">
                                <label class="form-label">Url</label>
                                <input type="text" name="url" class="form-control" required
                                    placeholder="Enter url" value="{{ html_entity_decode($data[0]->url) }}">
                                <p class="form-feedback invalid-feedback" data-name="url"></p>
                            </div>
                            <div class="col-lg-6 mb-3">
                                <label class="form-label">Title</label>
                                <input type="text" name="title" class="form-control" required
                                    placeholder="Page Title" value="{{ $data[0]->title }}">
                                <p class="form-feedback invalid-feedback" data-name="title"></p>
                            </div>
                            <div class="col-lg-6 mb-3">
                                <label class="form-label">Keywords</label>
                                <input type="text" name="Keywords" class="form-control" required
                                    placeholder="Keywords" value="{{ $data[0]->keywords }}">
                                <p class="form-feedback invalid-feedback" data-name="Keywords"></p>
                            </div>
                            <div class="col-lg-6 mb-3">
                                <label class="form-label">Page Type / Page Topic</label>
                                <input type="text" name="page_topic" class="form-control" required
                                    placeholder="Page Topic" value="{{ $data[0]->page_topic }}">
                                <p class="form-feedback invalid-feedback" data-name="page_topic"></p>
                            </div>

                            <div class="col-lg-6 mb-3">
                                <label class="form-label">Distribution</label>
                                <select name="distribution" class="form-control" required>
                                    <option value="{{ $data[0]->distribution }}">{{ $data[0]->distribution }}</option>
                                    <option value="Global">Global</option>
                                    <option value="Local">Local</option>
                                    <option value="IU">IU</option>
                                </select>
                                <p class="form-feedback invalid-feedback" data-name="language"></p>
                            </div>


                            <div class="col-lg-6 mb-3">
                                <label class="form-label">Og Url</label>
                                <input type="text" name="og_url" class="form-control" required placeholder="Og Url"
                                    value="{{ $data[0]->og_url }}">
                                <p class="form-feedback invalid-feedback" data-name="og_url"></p>
                            </div>
                            <div class="col-lg-6 mb-3">
                                <label class="form-label">Og Title</label>
                                <input type="text" name="og_title" class="form-control" required
                                    placeholder="Og Title" value="{{ $data[0]->og_title }}">
                                <p class="form-feedback invalid-feedback" data-name="og_title"></p>
                            </div>
                            <div class="col-lg-6 mb-3">
                                <label class="form-label">Og Image Url</label>
                                <input type="text" name="og_img_url" class="form-control" required
                                    placeholder="Og Image Url" value="{{ $data[0]->og_image_url }}">
                                <p class="form-feedback invalid-feedback" data-name="og_img_url"></p>
                            </div>


                            <div class="col-lg-6 mb-3">
                                <label class="form-label">Twitter Title</label>
                                <input type="text" name="twitter_title" class="form-control" required
                                    placeholder="Twitter Title" value="{{ $data[0]->twitter_title }}">
                                <p class="form-feedback invalid-feedback" data-name="twitter_title"></p>
                            </div>
                            <div class="col-lg-6 mb-3">
                                <label class="form-label">Twitter Image Url</label>
                                <input type="text" name="twitter_img_url" class="form-control" required
                                    placeholder="Twitter Image Url" value="{{ $data[0]->twitter_img_url }}">
                                <p class="form-feedback invalid-feedback" data-name="twitter_img_url"></p>
                            </div>
                            <div class="col-lg-6 mb-3">
                                <label class="form-label">Decription</label>
                                <textarea name="decription" class="form-control" required>{{ $data[0]->description }}</textarea>
                                <p class="form-feedback invalid-feedback" data-name="decription"></p>
                            </div>
                            <div class="col-lg-6 mb-3">
                                <label class="form-label">Og Description</label>
                                <textarea name="og_decription" class="form-control" required>{{ $data[0]->og_description }}</textarea>
                                <p class="form-feedback invalid-feedback" data-name="og_description"></p>
                            </div>
                            <div class="col-lg-6 mb-3">
                                <label class="form-label">Twitter Description</label>
                                <textarea name="twitter_description" class="form-control" required> {{ $data[0]->twitter_des }}</textarea>
                                <p class="form-feedback invalid-feedback" data-name="twitter_description"></p>
                            </div>
                            <div class="col-lg-6 mb-3">
                                <label class="form-label">Schema</label>
                                <textarea name="schema" class="form-control">{{ $data[0]->js_schema }}</textarea>
                                <p class="form-feedback invalid-feedback" data-name="schema"></p>
                            </div>
                        </div>

                        <div class="mb-3" id="btn-box-1">
                            <button class="btn btn-primary" type="submit" name="create"
                                style="width:100% ; font-size:15px"> Update </button>
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
