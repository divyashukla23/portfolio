const hamburger=document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu=document.querySelector('.header .nav-bar .nav-list ul');
const header=document.querySelector('.header.container');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})


// function Circlle(el){
//     $(el).circleProgress({fill: {color: 'rgb(238, 13, 170)'}})
//     .on('circle-animation-progress', function(event,progress,stepValue){
//         $(this).find('strong').text(String(stepValue.toFixed(2)).substring(2)+'%'
//         );
//      });

//     };
//     Circlle('.ring')
    $(function() {
        $('.chart').easyPieChart({
          size: 120,
          barColor: 'rgb(228, 69, 175)' ,
          scaleColor: false,
          lineWidth:10,
          trackColor: '#373737',
          lineCap: 'circle',
          animate: 2000
        });
    });
   