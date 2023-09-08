// $.ajaxSetup({
//     headers: {
//         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//     }
// });

// function staffProfileChart(uid, chart_id) {
//     $.ajax({
//         type: "post",
//         url: "/ajax-request",
//         data: ({
//             isset_staff_profile_attendance_chart: true,
//             uid: uid
//         }),
//         success: function (response) {
//             let data = response['data'];

//             new Chart(document.getElementById(chart_id), {
//                 type: 'doughnut',
//                 data: {
//                     labels: ['Present', 'Absent', 'Work From Home', 'On Leave'],
//                     datasets: [
//                         {
//                             label: 'Attendance Details',
//                             backgroundColor: ["#28a745", "#dc3545", "#ffc107", "#007bff"],
//                             data: data
//                         }
//                     ]
//                 },
//                 options: {
//                     responsive: true,
//                     plugins: {
//                         legend: {
//                             display: true,
//                             position: 'bottom',
//                             boxWidth: 10,

//                             labels: {
//                                 boxWidth: 20
//                             }
//                         },
//                         title: {
//                             display: false,

//                         }
//                     }
//                 },

//             });
//         }
//     });

// }


// $.ajax({
//     type: "post",
//     url: "/ajax-request",
//     data: ({
//         isset_leave_overview_chart: true,
//     }),
//     success: function (response) {

//         let response_data = response['data']

//         var leave_chart = document.getElementById("leave_chart").getContext('2d');

//         var leave_chart_gradientStroke1 = leave_chart.createLinearGradient(0, 0, 0, 300);
//         leave_chart_gradientStroke1.addColorStop(0, '#ffdf40');
//         leave_chart_gradientStroke1.addColorStop(1, '#ff8359');

//         var leave_chart_gradientStroke2 = leave_chart.createLinearGradient(0, 0, 0, 300);
//         leave_chart_gradientStroke2.addColorStop(0, '#15ca20');
//         leave_chart_gradientStroke2.addColorStop(1, '#33c73c');


//         var leave_chart_gradientStroke3 = leave_chart.createLinearGradient(0, 0, 0, 300);
//         leave_chart_gradientStroke3.addColorStop(0, '#ee0979');
//         leave_chart_gradientStroke3.addColorStop(1, '#ff6a00');

//         var myChart = new Chart(leave_chart, {
//             type: 'doughnut',
//             data: {
//                 labels: ["Pending", "Approved", "Denied"],
//                 datasets: [{
//                     backgroundColor: [
//                         leave_chart_gradientStroke1,
//                         leave_chart_gradientStroke2,
//                         leave_chart_gradientStroke3,
//                     ],
//                     hoverBackgroundColor: [
//                         leave_chart_gradientStroke1,
//                         leave_chart_gradientStroke2,
//                         leave_chart_gradientStroke3,
//                     ],
//                     data: response_data,
//                     borderWidth: [0, 0, 0],

//                 }]
//             },
//             options: {
//                 maintainAspectRatio: false,
//                 plugins: {
//                     legend: {
//                         display: false
//                     }
//                 },


//             }
//         });
//     }
// });


// $.ajax({
//     type: "post",
//     url: "/ajax-request",
//     data: ({
//         isset_work_overview_chart: true,
//     }),
//     success: function (response) {

//         let response_data = response['data']

//         var work_chart = document.getElementById("work_chart").getContext('2d');

//         var work_chart_gradientStroke1 = work_chart.createLinearGradient(0, 0, 0, 300);
//         work_chart_gradientStroke1.addColorStop(0, '#ffc107');
//         work_chart_gradientStroke1.addColorStop(1, '#e2b325');

//         var work_chart_gradientStroke2 = work_chart.createLinearGradient(0, 0, 0, 300);
//         work_chart_gradientStroke2.addColorStop(0, '#0d6efd');
//         work_chart_gradientStroke2.addColorStop(1, '#4882d7');


//         var work_chart_gradientStroke3 = work_chart.createLinearGradient(0, 0, 0, 300);
//         work_chart_gradientStroke3.addColorStop(0, '#dc3545');
//         work_chart_gradientStroke3.addColorStop(1, '#d54f5c');

//         var work_chart_gradientStroke4 = work_chart.createLinearGradient(0, 0, 0, 300);
//         work_chart_gradientStroke4.addColorStop(0, '#15ca20');
//         work_chart_gradientStroke4.addColorStop(1, '#4ddf56');

//         var myChart = new Chart(work_chart, {
//             type: 'doughnut',
//             data: {
//                 labels: ["Not Started", "Running", "Delayed", "Completed"],
//                 datasets: [{
//                     backgroundColor: [
//                         work_chart_gradientStroke1,
//                         work_chart_gradientStroke2,
//                         work_chart_gradientStroke3,
//                         work_chart_gradientStroke4,
//                     ],
//                     hoverBackgroundColor: [
//                         work_chart_gradientStroke1,
//                         work_chart_gradientStroke2,
//                         work_chart_gradientStroke3,
//                         work_chart_gradientStroke4,
//                     ],
//                     data: response_data,
//                     borderWidth: [0, 0, 0, 0],

//                 }]
//             },
//             options: {
//                 maintainAspectRatio: false,
//                 plugins: {
//                     legend: {
//                         display: false
//                     }
//                 }
//             }
//         });

//     }
// });


// function setInquiryChart(year) {
//     $.ajax({
//         type: "post",
//         url: "/ajax-request",
//         data: ({
//             isset_inquiry_overview_chart: true,
//             year: 2023,
//         }),
//         success: function (response) {
//             let TotalInquiry = response['Inquiry']
//             let FollowUPInquiry = response['FollowUp']
//             let SuccessfullInquiry = response['Successfull']
//             let overAllInquiry = response['overAllInquiry']
//             let overAllFollowUplet = response['overAllFollowUp']
//             let overAllSuccessfull = response['overAllSuccessfull']

//             // ========== Chart Started ==========


//             $('#overAllInquiry').html(overAllInquiry)
//             $('#overAllFollowUP').html(overAllFollowUplet)
//             $('#overAllInquirySuccessfull').html(overAllSuccessfull)


//             var inquiry_overview = document.getElementById("inquiry_overview").getContext('2d');
//             var inquiry_overview_BGgradientStroke1 = inquiry_overview.createLinearGradient(0, 0, 0, 300);
//             var inquiry_overview_BGgradientStroke2 = inquiry_overview.createLinearGradient(0, 0, 0, 300);
//             var inquiry_overview_BGgradientStroke3 = inquiry_overview.createLinearGradient(0, 0, 0, 300);

//             var inquiry_overview_gradientStroke1 = inquiry_overview.createLinearGradient(0, 0, 0, 300);
//             inquiry_overview_gradientStroke1.addColorStop(0, '#6078ea');
//             inquiry_overview_gradientStroke1.addColorStop(1, '#17c5ea');

//             var inquiry_overview_gradientStroke2 = inquiry_overview.createLinearGradient(0, 0, 0, 300);
//             inquiry_overview_gradientStroke2.addColorStop(0, '#ff8359');
//             inquiry_overview_gradientStroke2.addColorStop(1, '#ffdf40');

//             var inquiry_overview_gradientStroke3 = inquiry_overview.createLinearGradient(0, 0, 0, 300);
//             inquiry_overview_gradientStroke3.addColorStop(0, '#15ca20');
//             inquiry_overview_gradientStroke3.addColorStop(1, '#33c73c');

//             inquiry_overview_BGgradientStroke1.addColorStop(0, 'rgba(33, 125, 246, 0.216)');
//             inquiry_overview_BGgradientStroke1.addColorStop(1, 'rgba(71, 110, 161, 0.011)');

//             inquiry_overview_BGgradientStroke2.addColorStop(0, 'rgba(255, 217, 0, 0.238)');
//             inquiry_overview_BGgradientStroke2.addColorStop(1, 'rgba(255, 217, 0, 0.011)');

//             inquiry_overview_BGgradientStroke3.addColorStop(0, 'rgba(77, 255, 0, 0.123)');
//             inquiry_overview_BGgradientStroke3.addColorStop(1, 'rgba(77, 255, 0, 0.011)');


//             var myChart = new Chart(inquiry_overview, {
//                 type: 'line',
//                 data: {
//                     labels: [
//                         "January", "February", "March", "April", "May", "June", "July",
//                         "August", "September", "October", "November", "December"
//                     ],
//                     datasets: [{
//                         label: 'Inquiry',
//                         data: TotalInquiry,
//                         // data: [70, 59, 80, 81, 65, 59, 80, 81, 59, 80, 81, 65],
//                         borderColor: inquiry_overview_gradientStroke1,
//                         backgroundColor: inquiry_overview_BGgradientStroke1,
//                         pointBackgroundColor: inquiry_overview_gradientStroke1,
//                         pointHoverBackgroundColor: '#b3e0ff',
//                     },
//                     {
//                         label: 'Follow Up',
//                         data: FollowUPInquiry,
//                         // data: [65, 85, 32, 44, 96, 102, 55, 36, 64, 42, 28, 88],
//                         borderColor: inquiry_overview_gradientStroke2,
//                         backgroundColor: inquiry_overview_BGgradientStroke2,
//                         pointBackgroundColor: inquiry_overview_gradientStroke2,
//                         pointHoverBackgroundColor: "#ffff66",

//                     },
//                     {
//                         label: 'Successfull',
//                         data: SuccessfullInquiry,
//                         // data: [28, 48, 40, 42, 28, 48, 40, 19, 40, 36, 28, 48],
//                         borderColor: inquiry_overview_gradientStroke3,
//                         backgroundColor: inquiry_overview_BGgradientStroke3,
//                         pointBackgroundColor: inquiry_overview_gradientStroke3,
//                         pointHoverBackgroundColor: '#99ff99',

//                     }
//                     ]
//                 },

//                 options: {
//                     maintainAspectRatio: false,
//                     plugins: {
//                         legend: {
//                             position: 'bottom',
//                             display: true,
//                             labels: {
//                                 padding: 20,
//                                 usePointStyle: true,
//                                 pointStyle: 'circle',

//                             },


//                         },
//                     },
//                     tooltips: {
//                         displayColors: false,
//                     },
//                     borderJoinStyle: 'round',
//                     borderCapStyle: 'round',
//                     borderWidth: 2,
//                     fill: true,
//                     pointRadius: 4,
//                     tension: .4,
//                     pointHoverRadius: 8,
//                 }
//             });

//         }
//     });
// }


// setInquiryChart(2023)