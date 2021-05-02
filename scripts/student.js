document.addEventListener('DOMContentLoaded', function () {
  const chart = Highcharts.chart('container', {
      chart: {
          type: 'areaspline'
      },
      title: {
          text: 'Term 2- Average'
      },
      xAxis: {
          categories: ['Eng', 'Kis', 'Math','Bio', 'Phyc', 'Chem','His', 'Bs']
      },
      yAxis: {
          title: {
              text: 'Subjects Marks'
          }
      },
      series: [{
          name: 'Jane',
          data: [62, 51, 59, 36, 55, 58, 72, 48]
      }, {
          name: 'John',
          data: [45, 67, 43, 70, 50, 48, 60, 81]
      }]
  });
});