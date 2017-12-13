// var userData = document.getElementById('userData').getContext('2d');

// var chart = new Chart(userData, {
//     type: 'bar',
//     options: {
//         legend: false
//     }
// });

// var userData = document.getElementById('userData').getContext('2d');

// var chart = new Chart(userData, {
//     type: 'bar',
//     data: {
//         labels: ["Messenger", "WhatsApp", "Facebook"],
//         datasets: [{
//             backgroundColor: ['rgba(0,0,255,0.7)', 'rgba(0,255,0,0.7)', 'rgba(0,0,255,0.7)'],
//             borderColor: 'rgba(0,0,0, 0.6)',
//             borderWidth: 1,
//             data: [1.2, 1.3, 2.1],
//         }]
//     },
//     options: {
//         legend: false
//     }
// });

var machineLearning = document.getElementById('machineLearning').getContext('2d');

var myLineChart = new Chart(machineLearning, {
    type: 'line',
    data: {
        labels: ["2013", "2014", "2015", "2016", "2017"],
        yAxisID: 'Voice recognition',
        datasets: [{
            borderColor: 'rgba(0,0,0, 0.6)',
            borderWidth: 1,
            pointRadius: 0,
            fill: false,
            borderColor: 'red',
            borderWidth: 2,
            data: [77, 86, 91, 93.5, 95],
        },
        {
            borderColor: 'rgba(0,0,0, 0.6)',
            borderWidth: 1,
            pointRadius: 0,
            fill: false,
            borderDash: [3,3],
            borderColor: 'rgba(66, 134, 244, 0.7)',
            borderWidth: 2,
            data: [95, 95, 95, 95, 95],
        }]
    },
    options: {
        legend: false,
        title: {
            display: true,
            text: 'Google Voice Recognition'
            }
    }
});

// var annualFund = document.getElementById('annualFund').getContext('2d');

// var chart = new Chart(annualFund, {
//     type: 'bar',
//     data: {
//         labels: ["2012", "2013", "2014", "2015", "2016"],
//         datasets: [{
//             backgroundColor: ['#8bd1f9', '#46b9fc', '#3e4df9', '#3b5998', '#020a68'],
//             borderColor: 'rgba(0,0,0, 0.6)',
//             borderWidth: 1,
//             data: [0.75, 1.3, 2.6, 3.7, 4.8],
//         }]
//     },
//     options: {
//         legend: false,
//         title: {
//             display: true,
//             text: 'Machine Learning Annual Funding'
//             }
//     }
// });

var chatApps = document.getElementById('chatApps').getContext('2d');

var myLineChart = new Chart(chatApps, {
    type: 'line',
    data: {
        labels: ["2013", "2014", "2015", "2016", "2017"],
        yAxisID: 'Voice recognition',
        datasets: [{
            borderColor: 'rgba(0,0,0, 0.6)',
            borderWidth: 1,
            pointRadius: 0,
            fill: false,
            borderColor: '#e59f12',
            borderWidth: 2,
            data: [0.6, 1.2, 2.2, 2.9, 3.5],
        },
        {
            borderColor: 'rgba(0,0,0, 0.6)',
            borderWidth: 1,
            pointRadius: 0,
            fill: false,
            borderColor: 'rgba(66, 134, 244, 0.7)',
            borderWidth: 2,
            data: [1.1, 1.6, 2, 2.5, 3],
        }]
    },
    options: {
        legend: false,
        title: {
            display: true,
            text: 'Chat Overtakes Social Media'
            }
    }
});