@extends('admin.main')
@push('title')
    <title>Add Testimonial</title>
@endpush

@section('main-section')
    <div class="page-wrapper">
        <div class="page-content">

            <div class="card p-0">
                <div class="card-body p-0">
                    <div class="page-breadcrumb d-none d-sm-flex align-items-center border px-3 pt-2 pb-2 bg-light ">
                        <div class="breadcrumb-title pe-3"> Testimonial</div>
                        <div class="ps-3">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb mb-0 p-0">
                                    <li class="breadcrumb-item"><a href="{{ route('admin.indexView') }}"><i
                                                class="bx bx-home-alt"></i></a>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">Add Testimonial</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-12 p-0 mt-4">
                        <div class="card">
                            <div class="card-header border-bottom">
                                <h6 class="text-primary" style="font-size: 16px">Add Testimonial</h6>
                            </div>
                            <div class="card-body">
                                <form method="POST" id="Testimonial-form"
                                    onsubmit="uploadData1('Testimonial-form','{{ route('admin.addTestimonialSave') }}', 'alert-box', 'btn-box-1', event)"
                                    class="mx-3 p-3" enctype="multipart/form-data">
                                    @csrf
                                    <div id="alert-box"></div>
                                    <div class="row">
                                        <div class="col-12 mb-3">
                                            <label class="form-label">Name</label>
                                            <input type="text" name="name" class="form-control" required
                                                placeholder="Enter Name">
                                            <p class="form-feedback invalid-feedback" data-name="name"></p>
                                        </div>
                                        <div class="col-12 mb-3">
                                            <label class="form-label">Text</label>
                                            <textarea name="testimonial" class="form-control" required></textarea>
                                            <p class="form-feedback invalid-feedback" data-name="testimonial"></p>
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
        </div>
    </div>

    @push('scripts')
    @endpush
@endsection
