let ctx = document.getElementById('myChart').getContext('2d');
let labels = ['Completed', 'Full complete', 'Unfinished', 'Approved'];
let colorHex = ['#253D5B', '#71FF6A', '#FE6454', '#52FFC7'];

let myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [{
      data: [30, 10, 40, 20],
      backgroundColor: colorHex
    }],
    labels: labels
	
  },
  options: {
    responsive: true,
	
    legend: {
      position: 'bottom' /*Pone los labels abajo del chart*/,
	  
    },
    plugins: {
      datalabels: {
        color: '#fff',
        anchor: 'end',
        align: 'start',
        offset: -10,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: 'bold',
          size: '15'
        },
        formatter: (value) => {
          return value + ' %';
        }
      }
    }
  }
})