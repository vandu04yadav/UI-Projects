
$ (document).ready(function(){

  // $('.fakeScroll').fakeScroll();
  
        
      

  



  var b=1;

  $(".ham").click(function(){
    $(".left-section")
    if(b==1){


    $(".left-section").animate({
      width:"0px"
    });
    $(".left-section").css('display','none');
    $(".right-section").addClass('col-lg-12');
    $(".right-section").removeClass('col-lg-9');
    $(".right-section").removeClass('col-xl-9');
    $(".grap1").css('width','280px');
    $(".graph2").css('width','740px');
    $(".graph3").css('width','380px');
    $(".graph4").css('width','380px');
    b++;
   }
   else{
    $(".left-section").css('display','block');
    $(".right-section").addClass('col-lg-9');
    $(".right-section").addClass('col-xl-9');
    $(".right-section").removeClass('col-lg-12');
    $(".grap1").css('width','200px');
    $(".graph2").css('width','500px');
    $(".graph3").css('width','300px');
    $(".graph4").css('width','300px');
    
    b=1;

   }
    });
   

  });


  



  

  

 
  

  $('.numcount').counterUp({
    delay:1,
    time:100
});


  abc();
  // chart();
  // chart1();
  // speedo();

  $(".accordian").slideUp();
  $(".left-section").animate({
    height:'90px'
  });
// });
  var a=1;
$(".hamburger1").click(function(){
    $(".left-section")
    if(a==1){
    $(".left-section").animate({
      height:'100vh'
    });
    
        $(".accordion").slideDown();
        a++;
    }
    else{
        $(".left-section").animate({
          height:'90px'
        });
        $(".accordion").slideUp();
        // height:'90px'
        a=1;
    }

});





$('.wedd-icon').owlCarousel({
   
  autoplay:true,
  autoplayTimeout:2000,
  loop:true,
  items:2,
  
  // animateOut:'fadeOut',
  
  responsive:{
      320:{
          items:1
      },
      768:{
          items:3
      },
      992:{
          items:1
      },
      1200:{
          items:2
      }
  }
});










//  function chart(){
var options = {
          series: [{
          name: 'Likes',
          data: [ 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
        }],
          chart: {
        // width: 480,
          height: 250,
          type: 'line',
        },
        stroke: {
          width: 7,
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
          tickAmount: 5,
          labels: {
            formatter: function(value, timestamp, opts) {
              return opts.dateFormatter(new Date(timestamp), 'dd MMM')
            }
          }
        },
        // title: {
        //   text: 'Social Media',
        //   align: 'left',
        //   style: {
        //     fontSize: "14px",
        //     color: '#666'
        //   }
        // },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            gradientToColors: [ '#FDD835'],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
          },
        },
        markers: {
          size: 4,
          colors: ["#FFA41B"],
          strokeColors: "#fff",
          strokeWidth: 2,
          hover: {
            size: 7,
          }
        },
        yaxis: {
          min: -10,
          max: 40,
          title: {
            text: 'Engagement',
          },

        },legend:{show:true,floating:true,fontSize:'15',position:'left',labels:{useSeriesColors:true}},
        // responsive:[{breakpont:768,Option:{horizo}}]
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
      

        

//graph3

// function chart1(){
        var options = {
            series: [{
            // name: 'Servings',
           
            data: [22, 43, 21, 33, 45, 31, 87, 65, 35]
          }],
            annotations: {
            points: [{
              x: 'Bananas',
              seriesIndex: 5,
            //   label: {
            //     borderColor: '#775DD0',
            //     offsetY: 0,
            //     style: {
            //       color: '#fff',
            //       background: '#775DD0',
            //     },
            //     text: 'Bananas are good',
            //   }
            }]
          },
          chart: {
            height: 140,
            type: 'bar',
          },
        //   plotOptions: {
        //     bar: {
        //       borderRadius: 10,
        //       columnWidth: '90%',
        //     }
        //   },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: 3
          },
          
        //   grid: {
        //     row: {
        //       colors: ['#fff', '#f2f2f2']
        //     }
        //   },

        
        //   xaxis: {
        //     labels: {
        //       rotate: -45
        //     },
        //     categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',
        //       'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'
        //     ],
        //     tickPlacement: 'on'
        //   },

         
          fill: {
            // type: 'gradient',
            gradient: {
            //   shade: 'light',
            //   type: "horizontal",
            //   shadeIntensity: 0.25,
            //   gradientToColors: undefined,
            //   inverseColors: true,
            //   opacityFrom: 0.85,
            //   opacityTo: 0.85,
            //   stops: [50, 0, 100]
            },
          }
          };
        
  
          var chart = new ApexCharts(document.querySelector("#chart1"), options);
          chart.render();

        // }
//graph4 pie

          var options = {
            series: [44, 55, 13, 33],
            chart: {
            width: 235,
            type: 'donut',
          },
          dataLabels: {
            enabled: false
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                show: false
              }
            }
          }],
          legend: {
           
            position: 'right',
            offsetY: 0,
           
            height: 100,
           
          }
          };
  
          var chart = new ApexCharts(document.querySelector("#chart3"), options);
          chart.render();
        
        
          function appendData() {
          var arr = chart.w.globals.series.slice()
          arr.push(Math.floor(Math.random() * (50 - 1 + 1)) + 1)
          return arr;
        }
        
        function removeData() {
          var arr = chart.w.globals.series.slice()
          arr.pop()
          return arr;
        }
        
        function randomize() {
          return chart.w.globals.series.map(function() {
              return Math.floor(Math.random() * (50 - 1 + 1)) + 1
          })
        }
        
        function reset() {
          return options.series
        }
        
        document.querySelector("#randomize").addEventListener("click", function() {
          chart.updateSeries(randomize())
        })
        
        document.querySelector("#add").addEventListener("click", function() {
          chart.updateSeries(appendData())
        })
        
        document.querySelector("#remove").addEventListener("click", function() {
          chart.updateSeries(removeData())
        })
        
        document.querySelector("#reset").addEventListener("click", function() {
          chart.updateSeries(reset())
        })
        

        // pie


        function abc(){

          var options = {
          series: [76, 67, 61, 90],
          chart: {
          height: 390,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: '30%',
              background: 'transparent',
              image: undefined,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
              }
            }
          }
        },
        colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
        labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
        legend: {
          show: true,
          floating: true,
          fontSize: '16px',
          position: 'center',
          offsetX: 160,
          offsetY: 15,
          labels: {
            useSeriesColors: true,
          },
          markers: {
            size: 0
          },
          formatter: function(seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
          },
          itemMargin: {
            vertical: 10
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
                show: false
            }
          }
        }]
        };

        var chart = new ApexCharts(document.querySelector("#chart10"), options);
        chart.render();
        }

        AOS.init();

          
        
   





        
       
      
      
      
        
      
      