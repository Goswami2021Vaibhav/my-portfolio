$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
    },
});
function getWebsiteUrl() {
    return location.protocol + "//" + location.host;
}

let websiteUrl = getWebsiteUrl();

// window.addEventListener('load', (event) => {
//     setTimeout(() => {
//         $('.loading-box').hide()
//     }, 1000);

// })

if (localStorage.getItem("theme") != null) {
    let Theme = localStorage.getItem("theme");

    if (Theme == "dark-theme") {
        $(".html").addClass(Theme).removeClass("white-theme");
        $("#theme-change-btn").html(` <i class="bx bx-sun"></i>`);
        $("#theme-change-btn").attr("data-bs-title", "Switch to light mode");
    } else {
        $(".html").addClass(Theme).removeClass("dark-theme");
        $("#theme-change-btn").html(` <i class="bx bx-moon"></i>`);
        $("#theme-change-btn").attr("data-bs-title", "Switch to dark mode");
    }
} else {
    localStorage.setItem("theme", "dark-theme");
}

if (localStorage.getItem("sideBar") != null) {
    let sideBar = localStorage.getItem("sideBar");
    if (sideBar == "toogleOff") {
        $(".logo-sm").addClass("d-none");
        $(".logo-big").removeClass("d-none");
        $(".wrapper").removeClass("toggled");
    } else if (sideBar == "toogleOn") {
        $(".logo-sm").removeClass("d-none");
        $(".logo-big").addClass("d-none");
        $(".wrapper").addClass("toggled");
    }
}

function changeTheme() {
    if (localStorage.getItem("theme") == "white-theme") {
        localStorage.setItem("theme", "dark-theme");
        $("#theme-change-btn").html(`<i class="bx bx-sun"></i>`);
        $("#theme-change-btn").attr("data-bs-title", "Switch to light mode");
    } else {
        localStorage.setItem("theme", "white-theme");
        $("#theme-change-btn").html(` <i class="bx bx-moon"></i>`);
        $("#theme-change-btn").attr("data-bs-title", "Switch to dark mode");
    }

    window.location.reload();
}

function showCheckboxSelectedItems(id, selected) {
    $("#" + id).html(`<span  > ${selected} - Selected</span>`);
}

function progressBtn(width, btn_text) {
    let loadingBtn2 = `
    <button class="btn btn-primary" type="button" style="width: ${width} ;">
    <div class="d-flex justify-content-center align-items-center">
        <span class="spinner-border spinner-border-sm"></span>
        <span class='mx-2'>
             ${btn_text}
        </span>
    </div>
    </button>
    `;
    return loadingBtn2;
}

// image viewer

function imageViewer(event) {
    let src = event.target.src;
    $("#full-image").attr("src", src);
    $("#profile-image-viewer").show();
}
function modalImageViewer(src) {
    let imagesrc = src;
    $("#full-image").attr("src", imagesrc);
    $("#profile-image-viewer").show();
}
$("#profile-image-viewer .profile-close").click(function () {
    $("#profile-image-viewer").hide();
});

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

function successConfirm(content, location) {
    $.confirm({
        icon: "fas fa-check-circle ",
        title: "Successful",
        type: "green",
        content: content,
        typeAnimated: true,
        draggable: false,
        theme: "modern",
        columnClass: "m",
        buttons: {
            ok: {
                text: "Ok",
                btnClass: "btn-green",
                action: function () {
                    if (location == "self") {
                        window.location.reload();
                    } else {
                        window.location.href = location;
                    }
                },
            },
        },
    });
}

function dangerConfirm(content, location) {
    $.confirm({
        icon: "fas fa-times-circle ",
        title: "Failed",
        type: "red",
        content: content,
        typeAnimated: true,
        draggable: false,
        theme: "modern",
        columnClass: "m",
    });
}

function success_noti(msg) {
    Lobibox.notify("success", {
        pauseDelayOnHover: true,
        size: "mini",
        rounded: true,
        icon: "fas fa-check-circle",
        delayIndicator: true,
        continueDelayOnInactiveTab: false,
        position: "top right",
        msg: msg,
    });
}

function danger_noti(msg) {
    Lobibox.notify("error", {
        pauseDelayOnHover: true,
        size: "mini",
        rounded: true,
        delayIndicator: true,
        icon: "fas fa-times-circle",
        continueDelayOnInactiveTab: false,
        position: "top right",
        msg: msg,
    });
}
// ===================== Alert and confirm End =====================

// ===================== Preloader Show Start =====================

function Preloader(display) {
    if (display == "flex") {
        $("html").css("overflow", "hidden");
        $(".preloader-box").removeClass("d-none").addClass("d-flex");
    } else if (display == "none") {
        $("html").css("overflow", "auto");
        $(".preloader-box").removeClass("d-flex").addClass("d-none");
    }
}
// ===================== Preloader Show End =====================

window.onload = (event) => {
    let alertMessage = localStorage.getItem("alertMessage");
    let alertBoxId = localStorage.getItem("alertBoxId");
    let alertCount = localStorage.getItem("alertCount");

    if (alertMessage != null && alertBoxId != null && alertCount != null) {
        if (alertCount == 0) {
            success_noti(alertMessage);
            let alert_msg = showAlert("success", false, alertMessage);
            $("#" + alertBoxId).html(alert_msg);
            localStorage.setItem("alertCount", "1");
        } else {
            localStorage.removeItem("alertMessage");
            localStorage.removeItem("alertBoxId");
            localStorage.removeItem("alertCount");
        }
    }
};

function uploadData1(formid, route, alertBox, btnBox, event) {
    event.preventDefault();

    var form = document.getElementById(formid);
    var formData = new FormData(form); // get form data

    let loadBtn = progressBtn("100%", "");

    var btn_box_html = $("#" + btnBox).html(); // get button box html
    $("#" + btnBox).html(loadBtn); // set button box html in processing state

    $("#" + alertBox).html(""); // remove html of alert box
    $("#" + formid + " [class*='is-invalid']").removeClass("is-invalid"); // remove invalid class from all form fields
    $.ajax({
        type: "post",
        url: route,
        data: formData,
        contentType: false,
        processData: false,
        success: function (response) {
            

            $("#" + btnBox).html(btn_box_html); // reset button box html
            if (response["status"] == false) {
                danger_noti(response["message"]);
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
                localStorage.setItem("alertMessage", response["message"]);
                localStorage.setItem("alertBoxId", alertBox);
                localStorage.setItem("alertCount", "0");
                $("#" + formid + " [class*='is-invalid']").removeClass(
                    "is-invalid"
                );
                form.reset();
                window.location.reload();
            }
        },
    });
}

function uploadData2(formid, route, alertBox, btnBox, event) {
    event.preventDefault();

    for (instance in CKEDITOR.instances) {
        CKEDITOR.instances[instance].updateElement();
    }

    var form = document.getElementById(formid);
    var formData = new FormData(form); // get form data

    let loadBtn = progressBtn("100%", "Processing...");

    var btn_box_html = $("#" + btnBox).html(); // get button box html
    $("#" + btnBox).html(loadBtn); // set button box html in processing state

    $("#" + alertBox).html(""); // remove html of alert box
    $("#" + formid + " [class*='is-invalid']").removeClass("is-invalid"); // remove invalid class from all form fields
    $.ajax({
        type: "post",
        url: route,
        data: formData,
        contentType: false,
        processData: false,
        success: function (response) {
            console.log(response);

            $("#" + btnBox).html(btn_box_html); // reset button box html
            if (response["status"] == false) {
                danger_noti(response["message"]);
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
                localStorage.setItem("alertMessage", response["message"]);
                localStorage.setItem("alertBoxId", alertBox);
                localStorage.setItem("alertCount", "0");
                $("#" + formid + " [class*='is-invalid']").removeClass(
                    "is-invalid"
                );
                form.reset();
                window.location.reload();
            }
        },
    });
}

function deleteConfirm(
    input_id,
    server_side_table,
    file_true_false,
    file_name_arr,
    file_path
) {
    let delete_input = $("#" + input_id).val();
    let delete_input_arr = delete_input.split(",");

    let senddata = {
        table: server_side_table,
        data: delete_input_arr,
        file: file_true_false,
        file_name: file_name_arr,
        file_path: file_path,
    };

    $.confirm({
        icon: "fas fa-exclamation-triangle ",
        title: "Danger",
        content: "Are you sure you want to delete the data ?",
        type: "red",
        typeAnimated: true,
        draggable: false,
        theme: "modern",
        columnClass: "m",
        buttons: {
            delete: {
                text: "Delete",
                btnClass: "btn-red",
                action: function () {
                    Preloader("flex");
                    $.ajax({
                        type: "get",
                        url: "/admin/deleteall",
                        data: senddata,
                        success: function (response) {
                            let status = response["status"];
                            if (status === true) {
                                Preloader("none");
                                successConfirm(
                                    response["message"],
                                    response["redirect"]
                                );
                            } else {
                                Preloader("none");
                                dangerConfirm(
                                    response["message"],
                                    response["redirect"]
                                );
                            }
                        },
                    });
                },
            },
            cancel: function () { },
        },
    });
}

function single_deleteConfirm(
    server_side_table,
    delete_input_arr,
    file_true_false,
    file_name_arr,
    file_path
) {
    let senddata = {
        table: server_side_table,
        data: delete_input_arr,
        file: file_true_false,
        file_name: file_name_arr,
        file_path: file_path,
    };

    $.confirm({
        icon: "fas fa-exclamation-triangle ",
        title: "Danger",
        content: "Are you sure you want to delete the data ?",
        type: "red",
        typeAnimated: true,
        draggable: false,
        theme: "modern",
        columnClass: "m",
        buttons: {
            delete: {
                text: "Delete",
                btnClass: "btn-red",
                action: function () {
                    Preloader("flex");
                    $.ajax({
                        type: "get",
                        url: "/admin/deleteall",
                        data: senddata,
                        success: function (response) {
                            let status = response["status"];
                            if (status === true) {
                                Preloader("none");
                                successConfirm(
                                    response["message"],
                                    response["redirect"]
                                );
                            } else {
                                Preloader("none");
                                dangerConfirm(
                                    response["message"],
                                    response["redirect"]
                                );
                            }
                        },
                    });
                },
            },
            cancel: function () { },
        },
    });
}

function deletePermanentally(
    input_id,
    server_side_table,
    file_true_false,
    file_name_arr,
    file_path
) {
    let delete_input = $("#" + input_id).val();
    let delete_input_arr = delete_input.split(",");

    let senddata = {
        delete: "1",
        table: server_side_table,
        data: delete_input_arr,
        file: file_true_false,
        file_name: file_name_arr,
        file_path: file_path,
    };

    $.confirm({
        icon: "fas fa-exclamation-triangle ",
        title: "Danger",
        content: "Are you sure you want to delete the data permanentally ?",
        type: "red",
        typeAnimated: true,
        draggable: false,
        theme: "modern",
        columnClass: "m",
        buttons: {
            delete: {
                text: "Delete",
                btnClass: "btn-red",
                action: function () {
                    Preloader("flex");
                    $.ajax({
                        type: "get",
                        url: "/admin/deleteall",
                        data: senddata,
                        success: function (response) {
                            let status = response["status"];
                            if (status === true) {
                                Preloader("none");
                                successConfirm(
                                    response["message"],
                                    response["redirect"]
                                );
                            } else {
                                Preloader("none");
                                dangerConfirm(
                                    response["message"],
                                    response["redirect"]
                                );
                            }
                        },
                    });
                },
            },
            cancel: function () { },
        },
    });
}

function restoreDeletedData(
    input_id,
    server_side_table,
    file_true_false,
    file_name_arr,
    file_path
) {
    let delete_input = $("#" + input_id).val();
    let delete_input_arr = delete_input.split(",");

    let senddata = {
        restore: "1",
        table: server_side_table,
        data: delete_input_arr,
        file: file_true_false,
        file_name: file_name_arr,
        file_path: file_path,
    };

    $.confirm({
        icon: "fas fa-exclamation-triangle ",
        title: "Restore",
        content: "Are you sure you want to restore the data ?",
        type: "blue",
        typeAnimated: true,
        draggable: false,
        theme: "modern",
        columnClass: "m",
        buttons: {
            delete: {
                text: "Restore",
                btnClass: "btn-blue",
                action: function () {
                    Preloader("flex");
                    $.ajax({
                        type: "get",
                        url: "/admin/deleteall",
                        data: senddata,
                        success: function (response) {
                            let status = response["status"];
                            if (status === true) {
                                Preloader("none");
                                successConfirm(
                                    response["message"],
                                    response["redirect"]
                                );
                            } else {
                                Preloader("none");
                                dangerConfirm(
                                    response["message"],
                                    response["redirect"]
                                );
                            }
                        },
                    });
                },
            },
            cancel: function () { },
        },
    });
}

function copy_link(link) {
    navigator.clipboard.writeText(link);
    round_alert("success", "Link copied");
}

// ===============Modal Media System Start ==============

function checkMedia(media_id) {
    let multiple = localStorage.getItem("multiple");
    if (multiple == "false") {
        $(".modalone-checkbox").prop("checked", false);
        if ($("#" + media_id).prop("checked")) {
            $("#" + media_id).prop("checked", false);
        } else {
            $("#" + media_id).prop("checked", true);
        }
    } else {
        if ($("#" + media_id).prop("checked")) {
            $("#" + media_id).prop("checked", false);
        } else {
            $("#" + media_id).prop("checked", true);
        }
    }
}

function selectMedia(modal_id) {
    let final_input = localStorage.getItem("finalInput");
    let to = localStorage.getItem("img_box");

    $("#" + final_input).val("");
    $("#" + to)
        .find("img")
        .remove();

    let selectedMediaArr = [];
    let modalCheckbox = $(".modalone-checkbox");
    modalCheckbox.each(function () {
        if ($(this).prop("checked")) {
            let dataurl = $(this).attr("data-url");
            let value = $(this).val();
            $("#" + to).append(
                `<img src='${dataurl}' style='max-height:200px'>`
            );
            let jsonData = {
                file_id: value,
            };
            selectedMediaArr.push(jsonData);
        }
    });

    $("#" + final_input).attr("value", JSON.stringify(selectedMediaArr));
    $(".modalone-checkbox").prop("checked", false);
    $("#" + modal_id).modal("hide");
}

function cancelMedia(modal_id) {
    let final_input = localStorage.getItem("finalInput");
    let to = localStorage.getItem("img_box");
    $("#" + final_input).val("");
    $("#" + to)
        .find("img")
        .remove();
    $(".modalone-checkbox").prop("checked", false);
    $("#" + modal_id).modal("hide");
}

function setMediaSelection(final_input, img_box, multiple) {
    $("#media-modal-img-box").html("");

    $.ajax({
        type: "Post",
        url: "/admin/ajax-request",
        data: {
            isset_get_modal_media: true,
        },
        success: function (response) {
            let status = response["status"];
            let media = response["media"];

            if (status === true) {
                media.forEach((e) => {
                    let id = e["id"];
                    let url = e["url"];
                    $("#media-modal-img-box").append(`
                    <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-2 modal-col">
                    <div class="modal-img modal-one-img">
                        <input type="checkbox" name="media-img" class="form-check-input modalone-checkbox"
                            value="${id}" id="mediaone${id}"
                            data-url="${url}">
                        <img src="${url}">
                        <div class="media-overlay"
                            onclick="checkMedia('mediaone${id}','img')"></div>
                       
                        <a href="#"
                            onclick="modalImageViewer('${url}')"
                            class="text-success view-media-btn"><i class="fa-solid fa-eye"></i></a>
                     </div>
                   </div>
                      `);
                });
            }
            show_modal("media-modal-one");
        },
    });

    localStorage.setItem("finalInput", final_input);
    localStorage.setItem("img_box", img_box);
    localStorage.setItem("multiple", multiple);
}

$.each($(".btn-success .fa-file-excel"), function () {
    $(this).parent().attr({
        "data-bs-toggle": "tooltip",
        "data-bs-placement": "auto",
        "data-bs-title": "Export",
    });
});

function show_modal(modal_id) {
    $("#" + modal_id).modal("show");
}

function fullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        $("#fullscreen-icon")
            .removeClass("bx-fullscreen")
            .addClass("bx-exit-fullscreen");
    } else if (document.exitFullscreen) {
        document.exitFullscreen();
        $("#fullscreen-icon")
            .removeClass("bx-exit-fullscreen")
            .addClass("bx-fullscreen");
    }
}

function exportSetting(db_table, modal_id, action) {
    $.ajax({
        type: "post",
        url: "/admin/ajax-request",
        data: {
            isset_get_year_data_for_export: true,
            table: db_table,
        },
        success: function (response) {
            let status = response["status"];
            let data = response["data"];
            console.log(data);
            if (status === true) {
                show_modal(modal_id);
                $("#year-select").html(data);
                $("#export-setting-form").attr("action", action);
            }
        },
    });
}

function showDocuments(uid) {
    $.ajax({
        type: "post",
        url: "/admin/ajax-request",
        data: {
            isset_show_staff_document: true,
            uid: uid,
        },
        success: function (response) {
            if (response["status"] === true) {
                $("#document-data-row").html(response["data"]);
                show_modal("document-modal");
            }
        },
    });
}

$(".make_capital").on("keyup", function () {
    let make_cap_input_val = $(this).val();
    $(this).val(make_cap_input_val.toUpperCase());
});

$.each($(".search-select"), function () {
    dselect(this, {
        search: true,
    });
});

function getQueryParams() {
    let url = window.location.href;
    const new_url = new URL(url);
    const searchParams = new_url.search;

    if (searchParams.length != 0) {
        const paramArr = url.slice(url.indexOf("?") + 1).split("&");
        const params = {};
        paramArr.map((param) => {
            const [key, val] = param.split("=");
            params[key] = decodeURIComponent(val);
        });
        return [params, searchParams];
    } else {
        return 0;
    }
}

function show_modal(id) {
    $("#" + id).modal("show");
}

function CategoryChanged(this_value, sub_category_selected) {
    $("#" + sub_category_selected).html("");
    if (this_value != "") {
        $.ajax({
            type: "POST",
            url: "/admin/ajax-request",
            data: {
                isset_category_changed: true,
                category: this_value,
            },
            success: function (response) {
                let data = response["data"];
                if (data.length != 0) {
                    data.forEach((element) => {
                        let sub_cat_id = element["sub_cat_id"];
                        let sub_category = element["sub_category"];
                        $("#" + sub_category_selected).append(`
                              <option value='${sub_cat_id}'>${sub_category}</option>      
                        `);
                    });
                }
            },
        });
    }
}

function commentStatus(url, id) {
    $.ajax({
        type: "post",
        url: url,
        data: {
            isset_blog_comment_status: true,
            comment_id: id,
        },
        success: function (response) {
            if (response["status"] === true) {
                successConfirm(response["message"], response["redirect"]);
            } else {
                dangerConfirm(response["message"], response["redirect"]);
            }
        },
    });
}

function addMoreVariationFields() {
    $("#product-variation-tbody").append(`
       <tr>
         <td style="width:20%">
         <input type="text" name="sku[]" class="form-control make_capital"
           required placeholder="SKU" onkeyup="validateSKU(this.value,event)">
         </td>
         <td style="width:15%">
             <select name="size[]" class="form-control" required>
                 <option value="">Select</option>
                 <option value="XS">XS</option>
                 <option value="S">S</option>
                 <option value="M">M</option>
                 <option value="L">L</option>
                 <option value="XL">XL</option>
                 <option value="XXL">XXL</option>
             </select>
         </td>
         <td style="width:15%">
             <select name="color[]" class="form-control" required>
                 <option value="">Select</option>
                 <option value="Red">Red</option>
                 <option value="Yellow">Yellow</option>
                 <option value="Green">Green</option>
                 <option value="Blue">Blue</option>
             </select>
         </td>
         <td style="width:20%">
             <input type="number" name="price[]" class="form-control" required
                 placeholder="Price">
         </td>
         <td style="width:15%">
         <input type="number" name="oldprice[]" class="form-control" required
             placeholder="Old Price">
         </td>
         <td style="width:15%">
             <input type="number" name="stock[]" class="form-control" required
                 placeholder="Stock">
         </td>
         <td style="width:50px">
           <button class="btn btn-danger" type="button" onclick="removeVariationFields(event)">
               <i class="fa-regular fa-minus"></i>
           </button>
         </td>
         </tr>
    `);
}

function removeVariationFields(event) {
    $(event.target).parents("tr").remove();
}

function validateSKU(this_value, event) {
    $.ajax({
        type: "POSt",
        url: "/admin/ajax-request",
        data: {
            isset_validate_sku: true,
            sku: this_value,
        },
        success: function (response) {
            if (response["status"] === true) {
                $(event.target).addClass("is-valid").removeClass("is-invalid");
            } else {
                $(event.target).addClass("is-invalid").removeClass("is-valid");
            }
        },
    });
}

function addMoreSearchKeywords(append_box) {
    $("#" + append_box).append(`
    <div class="search-keyrowd-div col-lg-4 col-md-6 mb-2 d-flex align-items-center">
      <input type="text" name="search[]" placeholder="Search Keywords"
        class="form-control" required> 
     <button class="btn btn-danger ms-2" type="button" onclick="removeMoreSearchFields(event)">
      <i class="fa-solid fa-minus"></i>
     </button>  
     </div>
    `);
}

function removeMoreSearchFields(event) {
    $(event.target).parents(".search-keyrowd-div").remove();
}
