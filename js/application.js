$(document).ready(function() {
  var menuToggle;
  menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass('show');
  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function() {
      if ($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });
});

$(document).ready(function() {
  $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart', function(e) {
    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
    e.preventDefault();
  });
});

$(document).ready(function() {
  var greeting, hour_of_day;
  greeting = $('#greeting');
  hour_of_day = new Date().getHours();
  if (hour_of_day > 12 && hour_of_day < 17) {
    greeting.text("Good Afternoon,");
  } else if (hour_of_day > 17 || hour_of_day < 4) {
    greeting.text("Good Evening,");
  } else {
    greeting.text("Good Morning,");
  }
  $('.hero-content').fadeIn(700);
});

// ---
// generated by coffee-script 1.9.2
