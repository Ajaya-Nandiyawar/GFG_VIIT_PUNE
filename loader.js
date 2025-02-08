$(document).ready(function() {
  var h = window.innerHeight;
  $('.page-overlay').css('height', h);
  
  var al = 0;
  function progressSim() {
      $('.text p').text(al + '%');
      if(al >= 100) {
          clearInterval(sim);
      }
      al++;
  }
  
  var sim = setInterval(progressSim, 50);
  
  // Hide main content initially
  $('body > *:not(.page-overlay):not(.inside)').css('opacity', '0');
  
  setTimeout(function() {
      $('.page-overlay').fadeOut(500);
      $('.inside').fadeIn(500).delay(1000).fadeOut(500, function() {
          $('body > *:not(.page-overlay):not(.inside)').animate({
              opacity: 1
          }, 500);
      });
  }, 5500);
});