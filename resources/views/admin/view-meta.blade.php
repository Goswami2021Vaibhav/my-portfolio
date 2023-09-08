@extends('admin.main')
@push('title')
    <title>view meta </title>
@endpush
@section('main-section')
    <div class="page-wrapper">
        <div class="page-content">
            <div class="card p-0">
                <div class="card-body p-0">
                    <div class="page-breadcrumb d-none d-sm-flex align-items-center border px-3 pt-2 pb-2 bg-light ">
                        <div class="breadcrumb-title pe-3">All meta</div>
                        <div class="ps-3">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb mb-0 p-0">
                                    <li class="breadcrumb-item"><a href="{{ route('admin.indexView') }}"><i
                                                class="bx bx-home-alt"></i></a>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">meta</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 p-0 mt-4">
                        <div class="card">
                            <div class="card-header border-bottom">
                                <div class="row">
                                    <div
                                        class="col-md-4 mb-md-0 mb-2 d-flex justify-content-md-start justify-content-center align-items-center">
                                        <h6 class="text-primary" style="font-size: 16px">All meta Details</h6>
                                    </div>
                                    <div
                                        class="col-md-8 d-flex justify-content-md-end justify-content-center align-items-center">
                                        <div class="d-flex justify-content-end align-items-center" id="meta-table-action">
                                            <div class="d-flex justify-content-center align-items-center checkbox-selected"
                                                id="meta-selected">
                                                {{-- No. of Selected Item will show here  --}}
                                            </div>

                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <a href="{{ route('admin.addMeta') }}" data-bs-toggle="tooltip"
                                                    data-bs-placement="auto" data-bs-title="Add New"
                                                    class="btn btn-primary"><i class="fa-regular fa-plus"></i>
                                                </a>

                                                <button type="button" class="btn btn-danger disabled-btn"
                                                    data-bs-toggle="tooltip" data-bs-placement="auto" data-bs-title="Delete"
                                                    disabled
                                                    onclick="deleteConfirm('meta-delete-all','meta', 'false','','')"><i
                                                        class="bx bx-trash"></i>
                                                    <input type="hidden" value="" id="meta-delete-all">
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body p-0">
                                <div class="mt-2 mx-2 mb-3">
                                    <table id="meta-table" class="table table-hover table-borderless w-100 border-bottom"
                                        style="min-width: 500px">
                                        <thead class="bg-light border-0">
                                            <tr>
                                                <th></th>
                                                <th class="text-center text-nowrap">Url</th>
                                                <th class="text-center text-nowrap">Title</th>
                                                <th class="text-center text-nowrap">Keywords</th>
                                                <th class="text-center text-nowrap">Description</th>
                                                <th class="text-center text-nowrap">Og Url</th>
                                                <th class="text-center text-nowrap">Og Title</th>
                                                <th class="text-center text-nowrap">Og Image Url</th>
                                                <th class="text-center text-nowrap">Og Description</th>
                                                <th class="text-center text-nowrap">Page Topic</th>
                                                <th class="text-center text-nowrap">Distribution</th>
                                                <th class="text-center text-nowrap">Twitter Title</th>
                                                <th class="text-center text-nowrap">Twitter Img Url</th>
                                                <th class="text-center text-nowrap">Twitter Description</th>
                                                <th class="text-center text-nowrap">Created At</th>
                                                <th class="text-center text-nowrap">Updated At</th>
                                                <th class="text-center text-nowrap">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {{-- Data will load here using ajax server side . --}}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    </div>
@endsection
