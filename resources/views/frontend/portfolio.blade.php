@extends('frontend.main')
@section('main-sec')
    <main class="main__content_wrapper">

        <div class="bread-crumb">
            <strong class="bread-crumb-title">Portfolo</strong>
        </div>

        <section class="portfolio-section">
            <section class="container">

                <div class="section__heading mb-50">
                    <h1 class="section__heading--title mb-10 text-center"> Portfolio </h1>
                </div>

                <div class="row mt-5">
                    @if (count($data) > 0)
                        @foreach ($data as $single_data)
                            <div class="col-lg-4 col-md-6 col-12 mb-5 d-flex justify-content-center">
                                <div class="portfolio-card">
                                    <div class="portfolio-image">
                                        @php
                                            $img = json_decode($single_data->img, true);
                                            echo getMediaFile($img[0]['file_id']);
                                        @endphp
                                    </div>
                                    <div class="portfolio-content">

                                        <span class="portfolio-title">
                                            {{ $single_data->title }}
                                        </span>

                                        <p class="portfolio-desc">
                                            {{ $single_data->des }}
                                        </p>

                                        <button type="button" onclick="showPortfolio('{{ $single_data->id }}')"
                                            class="portfolio-action">
                                            Read More
                                            <span aria-hidden="true">
                                                →
                                            </span>
                                        </button>
                                    </div>

                                </div>
                            </div>
                        @endforeach
                    @endif


                </div>

            </section>
        </section>


    </main>
@endsection
