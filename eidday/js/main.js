var moneyInChartDrawn = false;
var moneyOutChartDrawn = false;

$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


function drawMoneyInChart() {
  moneyInChartDrawn = true;
  var ctx = document.getElementById("moneyInChart");
  var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: ["Stalls", "Sponsors", "Donations"],
          datasets: [{
              label: 'Total In',
              data: [7590, 16500, 11491],
              backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)'
              ],
              borderColor: [
                  'white',
                  'white',
                  'white'
              ],
              borderWidth: 2
          }],
          animation:{
              animateScale:true
          }, options: {
              onAnimationComplete: function() {
                  this.showTooltip(this.segments, true);
                  
              }
      }
  }
  });
}

function drawMoneyOutChart() {
  moneyOutChartDrawn = true;
  var ctx = document.getElementById("moneyOutChart");
  var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: ["Operations", "Marketing", "GST", "Admin"],
          datasets: [{
              label: 'Total Out',
              data: [39683, 3113, 6305,777],
              backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(102,51,153,1)'
              ],
              borderColor: [
                  'white',
                  'white',
                  'white',
                  'white'
              ],
              borderWidth: 2
          }],
          animation:{
              animateScale:true
          }, options: {
                            onAnimationComplete: function() {
                  this.showTooltip(this.segments, true);
                  
              }
      }
  }
  });
}

function isScrolledIntoView(elem)
{
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function(){
   if (isInView($('#moneyInChart'))) {
      //fire whatever you what
      if (!moneyInChartDrawn) {
      drawMoneyInChart();
    }
  }

  if (isInView($('#moneyOutChart'))) {
    if (!moneyOutChartDrawn) {
      drawMoneyOutChart();
    }
  }
})

function isInView(elem){
   return $(elem).offset().top - $(window).scrollTop() < $(elem).height() ;
}
