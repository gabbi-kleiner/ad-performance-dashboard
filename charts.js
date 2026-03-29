const campaigns = ["TikTok Awareness", "Instagram Retargeting", "YouTube Pre-Roll"];
const cpmData = [5.8, 5.8, 5.8];
const ctrData = [0.026, 0.049, 0.009];
const roasData = [3.02, 5.07, 1.48];

const cpmChart = new Chart(document.getElementById("cpmChart"), {
    type: 'bar',
    data: {
        labels: campaigns,
        datasets: [{
            label: 'CPM ($)',
            data: cpmData,
            backgroundColor: 'rgba(54, 162, 235, 0.6)'
        }]
    }
});

const ctrChart = new Chart(document.getElementById("ctrChart"), {
    type: 'bar',
    data: {
        labels: campaigns,
        datasets: [{
            label: 'CTR (%)',
            data: ctrData.map(d => d * 100),
            backgroundColor: 'rgba(255, 206, 86, 0.6)'
        }]
    }
});

const roasChart = new Chart(document.getElementById("roasChart"), {
    type: 'bar',
    data: {
        labels: campaigns,
        datasets: [{
            label: 'ROAS',
            data: roasData,
            backgroundColor: 'rgba(75, 192, 192, 0.6)'
        }]
    }
});