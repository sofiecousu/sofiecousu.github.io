new Chartist.Line('#ct-chart', {
  labels: ['2004', '2005', '2006', '2007', '2008','2009','2010','2011','2012','2013','2014'],
  series: [
    [52, 48, 49, 53, 56,58,60,61,63,64,64],
    [29, 32, 32, 29, 25,24,21,19,20,17,16],
    [15, 15, 14, 13, 14,13,13,15,13,15,14]
  ]
}, {
  fullWidth: true,
  chartPadding: {
    right: 40
  }
});

new Chartist.Bar('#ct-chart2', {
  labels: ['A great way to meet people', 'Socially acceptable', 'People previously viewed it negatively', 'Safer than meeting at a bar'],
  series: [
    [77, 87, 76, 51],
    [74, 83, 84, 45],
    [76, 85, 80, 48],
    
  ]
}, {
  // Default mobile configuration
  stackBars: true,
  axisX: {
    labelInterpolationFnc: function(value) {
      return value.split(/\s+/).map(function(word) {
        return word[0];
      }).join('');
    }
  },
  axisY: {
    offset: 20
  }
}, [
  // Options override for media > 400px
  ['screen and (min-width: 400px)', {
    reverseData: true,
    horizontalBars: true,
    axisX: {
      labelInterpolationFnc: Chartist.noop
    },
    axisY: {
      offset: 60
    }
  }],
  // Options override for media > 800px
  ['screen and (min-width: 800px)', {
    stackBars: false,
    seriesBarDistance: 10
  }],
  // Options override for media > 1000px
  ['screen and (min-width: 1000px)', {
    reverseData: false,
    horizontalBars: false,
    seriesBarDistance: 15
  }]
]);



new Chartist.Bar('#ct-chart3', {
  labels: ['Passionately in love', 'Actively seeking love', 'Wants to get married', 'Have once met a partner online', 'have had sex on the first date', 'Have had a one night stand',],
  series: [31, 12.7, 34.5, 21, 4.1, 58.1,]
}, {
  distributeSeries: true
});

document.getElementById('ct-chart').style.visibility = "hidden";
document.getElementById('ct-chart2').style.visibility = "hidden";
document.getElementById('ct-chart3').style.visibility = "hidden";


function myFunction() {
  document.getElementById('ct-chart').style.visibility="visible";
  document.getElementById('ct-chart2').style.visibility="visible";
  document.getElementById('ct-chart3').style.visibility="visible";

}
