 <div class="modal fade" id="register-modal" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog"
     aria-labelledby="modalTitleId" aria-hidden="true">
     <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
         <div class="modal-content">
             <div class="modal-header">
                 <h5 class="modal-title" id="modalTitleId">Register For A Free Trial/Demo</h5>
                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
             <div class="modal-body">
                 <!-- ===============>> account start here <<================= -->
                 <section class="account">
                     <div class="container-fluid">
                         <div class="account__wrapper" data-aos="fade-up" data-aos-duration="800">
                             <div class="row g-4">
                                 <div class="col-lg-12">
                                     <div class="account__content">

                                         <!-- account form -->
                                         {{-- <form method="post" class="account__form" id="reg-form"
                                           action=""> --}}
                                         <form method="post" class="account__form" id="reg-form"
                                             onsubmit="registeration('reg-form','{{ route('frontend.studentRegistration') }}','reg-alert','reg-btn',event)">
                                             @csrf
                                             <div class="row g-4">
                                                 <div id="reg-alert"></div>
                                                 <div class="col-lg-12">
                                                     <div class="input-group">
                                                         <input type="text" class="form-control" name="full_name"
                                                             placeholder="Enter Name" required>
                                                         <p class="form-feedback invalid-feedback"
                                                             data-name="full_name"></p>
                                                     </div>
                                                 </div>
                                                 <div class="col-lg-12">
                                                     <div class="input-group">
                                                         <input type="email" class="form-control" name="email"
                                                             placeholder="Enter Email ( Optional )" data-name="email">
                                                         <p class="form-feedback invalid-feedback" data-name="email">
                                                     </div>
                                                 </div>
                                                 <div class="col-lg-12">
                                                     <div class="input-group">
                                                         <input type="number" class="form-control" name="phone_number"
                                                             placeholder="Enter Mobile Number" required
                                                             onkeyup="validatePhoneNumber(this.value, 'reg-submit', event)">
                                                     </div>
                                                     <p class="form-feedback invalid-feedback text-danger phone-validation"
                                                         data-name="phone_number"></p>
                                                 </div>


                                             </div>
                                             <div class="account__form-passcheck">
                                                 <div class="form-check">
                                                     <input type="checkbox" class="form-check-input"
                                                         name="terms_and_conditions" value="terms" id="terms-check">
                                                     <label for="terms-check" class="text-danger">
                                                         Agree to our <a href="{{ route('frontend.termsConditions') }}"
                                                             class="text-primary">
                                                             terms & conditions</a>
                                                     </label>
                                                     <p class="form-feedback invalid-feedback"
                                                         data-name="terms_and_conditions">
                                                     </p>
                                                 </div>

                                             </div>
                                             <div id="reg-btn">

                                                 <button type="submit"
                                                     class="trk-btn trk-btn--border trk-btn--secondary1 d-block mt-4"
                                                     id="reg-submit">Submit</button>
                                             </div>
                                         </form>


                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </section>
                 <!-- ===============>> account end here <<================= -->

             </div>

         </div>
     </div>
 </div>



 {{-- buy now modal started  --}}


 <div class="modal fade" id="buy-now-modal" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false"
     role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
     <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
         <div class="modal-content">
             <div class="modal-header">
                 <h5 class="modal-title" id="modalTitleId">Buy Annual Subscription</h5>
                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
             <div class="modal-body">
                 <!-- ===============>> account start here <<================= -->
                 <section class="account">
                     <div class="container-fluid">
                         <div class="account__wrapper" data-aos="fade-up" data-aos-duration="800">
                             <div class="row g-4">
                                 <div class="col-lg-12">
                                     <div class="account__content">

                                         <!-- account form -->
                                         {{-- <form method="post" class="account__form" id="reg-form"
                                       action="{{ route('frontend.studentsSubscription') }}"> --}}
                                         <form method="post" class="account__form" id="buy-form"
                                             onsubmit="uploadData1('buy-form','{{ route('frontend.studentsSubscription') }}','buy-alert','buy-btn',event)">
                                             @csrf
                                             <div class="row g-4">
                                                 <div id="buy-alert"></div>
                                                 <div class="col-lg-12">
                                                     <div class="input-group">
                                                         <input type="text" class="form-control" name="full_name"
                                                             placeholder="Enter Name" required>
                                                         <p class="form-feedback invalid-feedback"
                                                             data-name="full_name"></p>
                                                     </div>
                                                 </div>
                                                 <div class="col-lg-12">
                                                     <div class="input-group">
                                                         <select name="class_name" required class="form-control">
                                                             <option value="">Select Class</option>
                                                             @php
                                                                 $getclass = DB::table('subscription_amount')
                                                                     ->orderBy('id', 'asc')
                                                                     ->get();
                                                                 
                                                             @endphp
                                                             @if (count($getclass) > 0)
                                                                 @foreach ($getclass as $single_class)
                                                                     <option value="{{ $single_class->class }}">
                                                                         {{ $single_class->class }}
                                                                     </option>
                                                                 @endforeach
                                                             @endif
                                                         </select>
                                                         <p class="form-feedback invalid-feedback"
                                                             data-name="class_name">
                                                         </p>
                                                     </div>
                                                 </div>
                                                 <div class="col-lg-12">
                                                     <div class="input-group">
                                                         <input type="email" class="form-control" name="email"
                                                             placeholder="Enter Email" data-name="email" required>
                                                         <p class="form-feedback invalid-feedback" data-name="email">
                                                     </div>
                                                 </div>
                                                 <div class="col-lg-12">
                                                     <div class="input-group">
                                                         <input type="number" class="form-control"
                                                             name="phone_number" placeholder="Enter Mobile Number"
                                                             required
                                                             onkeyup="validatePhoneNumber(this.value, 'buy-submit', event)">
                                                     </div>
                                                     <p class="form-feedback invalid-feedback text-danger phone-validation"
                                                         data-name="phone_number"></p>
                                                 </div>


                                             </div>
                                             <div class="account__form-passcheck">
                                                 <div class="form-check">
                                                     <input type="checkbox" class="form-check-input"
                                                         name="terms_and_conditions" value="terms" id="terms-check">
                                                     <label for="terms-check" class="text-danger">
                                                         Agree to our <a href="{{ route('frontend.termsConditions') }}"
                                                             class="text-primary">
                                                             terms & conditions</a>
                                                     </label>
                                                     <p class="form-feedback invalid-feedback"
                                                         data-name="terms_and_conditions">
                                                 </div>

                                             </div>
                                             <div id="buy-btn">

                                                 <button type="submit"
                                                     class="trk-btn trk-btn--border trk-btn--secondary1 d-block mt-4"
                                                     id="buy-submit">Submit</button>
                                             </div>
                                         </form>

                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </section>
                 <!-- ===============>> account end here <<================= -->

             </div>

         </div>
     </div>
 </div>


 <div class="modal fade" id="thankyou-modal" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false"
     role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
     <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-md" role="document">
         <div class="modal-content">
             <div class="modal-body">
                 <h4 class="text-center text-success py-5">Thank you for registering. We will contact you shortly</h4>
                 <div class="text-center mb-3">
                     <a href="" class="btn btn-secondary">Ok</a>
                 </div>
             </div>
         </div>
     </div>
 </div>
