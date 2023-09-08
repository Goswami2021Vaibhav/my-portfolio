<!-- Modal Body-->
<div class="modal fade" id="media-modal-one" tabindex="-1" role="dialog" aria-labelledby="media-modal-title"
    aria-hidden="true">
    <div class="modal-dialog modal-fullscreen" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="media-modal-title">Media</h5>
            </div>
            <div class="modal-body">
                <div class="container-fluid">

                    <input type="hidden" id="mediaOneMainInput" value="">
                    <input type="hidden" id="mediaOneMediaType" value="">

                    <div class="row" id="media-modal-img-box">
                       
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" onclick="selectMedia('media-modal-one')">Done</button>
                <button type="button" class="btn btn-secondary"
                    onclick="cancelMedia('media-modal-one', 'final-selected-media-input', 'media-selected-image')">Cancel</button>
            </div>
        </div>
    </div>
</div>




<!-- ----------------------- Profile Image Modal start----------------- -->
<div id="profile-image-viewer">
    <span class="profile-close">&times;</span>
    <img class="profile-modal-content" id="full-image">
</div>
<!-- ----------------------- Profile Image Modal end----------------- -->
