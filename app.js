$(document).ready(function() {

  $('.hidden').fadeIn(2000).removeClass('hidden');

  $('.parallax').scroll(function () {
    var scrollPos = $(this).scrollTop();
    $('#nav').find('li').removeClass('active');
    $('#nav').find('li').removeClass('a');
    $('#nav').find('li').removeClass('w');
    $('#nav').find('li').removeClass('c');
    if(scrollPos >= 2500) {
      $('#nav').find('li').addClass('c')
      $('#nav').find('#c').addClass('active');
    }
    else if(scrollPos >= 1610) {
      $('#nav').find('li').addClass('w');
      $('#nav').find('#w').addClass('active');
    } 
    else if(scrollPos >= 710) {
      $('#nav').find('li').addClass('a');
      $('#nav').find('#a').addClass('active');
    }
  });

  $('#nav').localScroll({target: '.parallax'});
});

$(function() {      
    $('.title').hide();
    $('.close').hide();
    $('.display').hide();
    $('.inactive').find('.title').show();
    $('.project').hover(function() {
      if(!($(this).hasClass('inactive'))) {
        $(this).find('.preview').hide();
        $(this).find('.title').fadeIn(200);
      }
    },    
    function(){
      if(!($(this).hasClass('inactive'))) {
        $(this).find('.title').hide();
        $(this).find('.preview').show();
      }
    });

    $('.project').click(function() {
      if(!($(this).hasClass('inactive'))) {
        var num = $(this).attr('id');
        $('.list').fadeOut(500);
        var newinfo = $('.options').find("#"+num).html();
        $('.display').html(newinfo);
        $('.display').delay(500).fadeIn(500);
        $('.close').delay(500).fadeIn(500);
      }
    })

    $('.close').click(function() {
      $('.options').hide();
      $('.display').fadeOut(500);
      $('.list').delay(500).fadeIn(500);
      $(this).fadeOut(500);
    })
});
