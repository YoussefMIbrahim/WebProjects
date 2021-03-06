let canvas = document.querySelector('#soda-chart');
console.log(canvas);
let ctx = canvas.getContext('2d');

chart = new Chart(ctx,{
    type: 'bar',
    data: {
        labels:['coke','pepsi','either','neither'],
        datasets: [{
            label:'Number of Votes',
            data: [18,14,7,10],
            backgroundColor: ['red', 'blue', 'yellow', 'green']
        }]
    },options: {
        scales: {
            yAxes: [{
                ticks:{
                    beginAtZero: true
                }
            }]
        }
    }
});