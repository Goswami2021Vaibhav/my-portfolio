function initServerSideDataTable(
    table_id,
    ajaxurl,
    selectedItem,
    columns,
    table_action_box,
    checkcbox = true
) {
    let checkbox_col = [
        {
            targets: 0,
            checkboxes: {
                // 'selectRow':true,
                stateSave: false,
                selectCallback: function () {
                    var selected_row = table.column(0).checkboxes.selected();
                    var selected_check_arr = [];
                    $.each(selected_row, function (index, row) {
                        selected_check_arr.push(row);
                    });
                    if (selected_check_arr.length != 0) {
                        $("#" + table_action_box + " .disabled-btn").prop(
                            "disabled",
                            false
                        );
                        $(
                            "#" +
                            table_action_box +
                            " .disabled-btn input[type=hidden]"
                        ).val(selected_check_arr);
                    } else {
                        $("#" + table_action_box + " .disabled-btn").prop(
                            "disabled",
                            true
                        );
                        $(
                            "#" +
                            table_action_box +
                            " .disabled-btn input[type=hidden]"
                        ).val("");
                    }
                    showCheckboxSelectedItems(
                        selectedItem,
                        selected_row.length
                    );
                },
            },
        },
    ];

    let options = {
        processing: true,
        serverSide: true,
        stateSave: true,
        scrollY: "550px",
        scrollCollapse: true,
        scrollX: true,
        lengthMenu: [
            [10, 25, 50, 100, 250, 500, -1],
            [10, 25, 50, 100, 250, 500, "All"],
        ],
        ajax: {
            url: ajaxurl,
            type: "GET",
            dataSrc: function (json) {
                return json.data;
            },
        },
        // 'select': {
        //     'style': 'multi'
        // },
        order: [],
        columns: columns,
    };
    if (checkcbox == true) {
        options["columnDefs"] = checkbox_col;
    }

    // if (!$.fn.DataTable.isDataTable('#' + table_id)) {
    // }
    var table = $("#" + table_id).DataTable(options);
}

function createColumn(
    col_arr,
    checkbox = true,
    action = true,
    created_at = true,
    updated_at = true,
    deleted_at = false
) {
    let checkbox_col = {
        data: "checkbox",
        name: "checkbox",
        orderable: false,
        searchable: false,
    };
    let action_col = {
        data: "action",
        name: "action",
        orderable: false,
        searchable: false,
    };

    let created_at_col = {
        data: "created_at",
        name: "created_at",
    };
    let updated_at_col = {
        data: "updated_at",
        name: "updated_at",
    };
    let deleted_at_col = {
        data: "deleted_at",
        name: "deleted_at",
    };

    let column = [];
    // adding checkbox column
    if (checkbox === true) {
        column.push(checkbox_col);
    }

    // adding array column
    col_arr.forEach((element) => {
        column.push({
            data: element,
            name: element,
        });
    });

    // adding created at column
    if (deleted_at === true) {
        column.push(deleted_at_col);
    }
    // adding created at column
    if (created_at === true) {
        column.push(created_at_col);
    }
    // adding updated at column
    if (updated_at === true) {
        column.push(updated_at_col);
    }
    // adding action column
    if (action === true) {
        column.push(action_col);
    }

    return column;
}

// MEDIA STARTED

let media_col = ["img_name", 'title', 'caption', 'alt', 'description'];
let Trash_mediaColumn = media_col;
initServerSideDataTable(
    "media-table",
    "/admin/media-datatable-data",
    "media-selected",
    createColumn(media_col),
    "media-table-action"
);

// MEDIA ENDED

// Blog Started

let blogColumn = [
    "cat_id",
    "title",
    "route_name",
    "main_pic",
    "popular",
    "status",
];
let Trash_blogColumn = blogColumn;
initServerSideDataTable(
    "blog-table",
    "/admin/blog-datatable-data",
    "blog-selected",
    createColumn(blogColumn),
    "blog-table-action"
);
// Blog Ended

// comment column started

let commentColumn = ["blog", "full_name", "email", "comment", "status"];
let Trash_commentColumn = commentColumn;
initServerSideDataTable(
    "comment-table",
    "/admin/comment-datatable-data",
    "comment-selected",
    createColumn(commentColumn),
    "comment-table-action"
);
// comment column ended

// meta column started

let metaColumn = [
    "url",
    "title",
    "keywords",
    "description",
    "og_url",
    "og_title",
    "og_image_url",
    "og_description",
    "page_topic",
    "distribution",
    "twitter_title",
    "twitter_img_url",
    "twitter_des",
];
let Trash_metaColumn = metaColumn;
initServerSideDataTable(
    "meta-table",
    "/admin/view-meta",
    "meta-selected",
    createColumn(metaColumn),
    "meta-table-action"
);
// meta column ended

// contact column started

let contactColumn = ["name", "email", "phone", "subject", "msg"];
let Trash_contactColumn = contactColumn;
// Contact DataTable Start
initServerSideDataTable(
    "contact-table",
    "/admin/contact-datatable-data",
    "contact-selected",
    createColumn(contactColumn),
    "contact-table-action"
);
// Contact DataTable End

// contact column ended

// testimonials col started
let TestimonialsCol = ["name", "texti_text"];
initServerSideDataTable(
    "testimonials-table",
    "/admin/view-testimonial",
    "testimonials-selected",
    createColumn(TestimonialsCol),
    "testimonials-table-action"
);

// testimonials col Ended

// portfolio col started
let portfolio = ["title", "img", 'des', 'content'];
initServerSideDataTable(
    "Portfolio-table",
    "/admin/view-portfolio",
    "Portfolio-selected",
    createColumn(portfolio),
    "Portfolio-table-action"
);

// portfolio col Ended
