$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
    },
});

function progressBtn() {
    let loadingBtn2 = `
    <button class="contact__button primary__btn"> <span class="spinner-border spinner-border-lg"></span>
    <span class='mx-2'>
    </span> Sending...</button>
    
    `;
    return loadingBtn2;
}

// ===================== Alert and confirm Start =====================
function showAlert(type, dismiss = true, msg) {
    if (dismiss == true) {
        var alert = `<div class="alert alert-${type} border-0 bg-${type} alert-dismissible fade show p-2">
        <div class="text-white px-2">   ${msg}</div>
        <button type="button" class="btn-close pb-2" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
    } else {
        var alert = `<div class="alert alert-${type} border-0 bg-${type} fade show p-2">
        <div class="text-white px-2">   ${msg}</div>`;
    }
    return alert;
}
// ===================== Alert and confirm End =====================

function uploadData1(formid, route, alertBox, btn, event) {
    event.preventDefault();

    var form = document.getElementById(formid);
    var formData = new FormData(form); // get form data

    var btn_box_html = $("#" + btn).html(); // get button box html
    $("#" + btn).html(progressBtn()); // set button box html in processing state

    $("#" + alertBox).html(""); // remove html of alert box
    $("#" + formid + " [class*='is-invalid']").removeClass("is-invalid"); // remove invalid class from all form fields
    $.ajax({
        type: "post",
        url: route,
        data: formData,
        contentType: false,
        processData: false,
        success: function (response) {

            $("#" + btn).html(btn_box_html); // reset button box html
            if (response["status"] == false) {
                let alert_msg = showAlert("danger", false, response["message"]);
                $("#" + alertBox).html(alert_msg);

                let errors_key = Object.keys(response["errors"]);
                for (var i = 0; i < errors_key.length; i++) {
                    let errors_msg = response["errors"][errors_key[i]];
                    let formField = $(
                        "#" + formid + " [name='" + errors_key[i] + "']"
                    );
                    formField.addClass("is-invalid");
                    let form_feedback = $(
                        "#" +
                        formid +
                        " .form-feedback[data-name='" +
                        errors_key[i] +
                        "']"
                    );
                    form_feedback.html(errors_msg[0]);
                }
            } else {

                $("#" + alertBox).html(
                    showAlert("success", false, response["message"])
                );
                $("#" + formid + " [class*='is-invalid']").removeClass(
                    "is-invalid"
                );
                form.reset();

                if (response['redirect'] != '0') {
                    window.location.href = response['redirect']
                }
            }
        },
    });
}
function showPortfolio(id) {
    $('#portfolio-modal').modal('show')
    $.ajax({
        type: "post",
        url: "/get-portfolio-data",
        data: {
            id: id
        },
        success: function (response) {
            console.log(response)
            if (response['status']) {
                $('#portfolio-main-img').html(`${response['img']}`)
                $('#portfolio-content').html(`${response['content']}`)
            }
        }
    });
}