(function ($, window, document, undefined) {
  "use strict";
  var pluginName = 'simpleAccordion',
  defaults = {
      multiple: false,
      speedOpen: 300,
      speedClose: 150,
      easingOpen: null,
      easingClose: null,
      headClass: 'accordion-header',
      bodyClass: 'accordion-body',
      openClass: 'open',
      defaultOpenClass: 'default-open',
      cbClose: null, //function (e, $this) {},
      cbOpen: null //function (e, $this) {}
  };
  function Accordion(element, options) {
      this.$el = $(element);
      this.options = $.extend({}, defaults, options);
      this._defaults = defaults;
      this._name = pluginName;
      if (typeof this.$el.data('multiple') !== 'undefined') {
          this.options.multiple = this.$el.data('multiple');
          } else {
          this.options.multiple = this._defaults.multiple;
      }
      this.init();
  }
  Accordion.prototype = {
      init: function () {
          var o = this.options,
          $headings = this.$el.children('.' + o.headClass);
          $headings.on('click', {_t:this}, this.headingClick);
          $headings.filter('.' + o.defaultOpenClass).first().click();
      },
      headingClick: function (e) {
          var $this = $(this),
          _t = e.data._t,
          o = _t.options,
          $headings = _t.$el.children('.' + o.headClass),
          $currentOpen = $headings.filter('.' + o.openClass);
          if (!$this.hasClass(o.openClass)) {
              if ($currentOpen.length && o.multiple === false) {
                  $currentOpen.removeClass(o.openClass).next('.' + o.bodyClass).slideUp(o.speedClose, o.easingClose, function () {
                      if ($.isFunction(o.cbClose)) {
                          o.cbClose(e, $currentOpen);
                      }
                      $this.addClass(o.openClass).next('.' + o.bodyClass).slideDown(o.speedOpen, o.easingOpen, function () {
                          if ($.isFunction(o.cbOpen)) {
                              o.cbOpen(e, $this);
                          }
                      });
                  });
                  } else {
                  $this.addClass(o.openClass).next('.' + o.bodyClass).slideDown(o.speedOpen, o.easingOpen, function () {
                      $this.removeClass(o.defaultOpenClass);
                      if ($.isFunction(o.cbOpen)) {
                          o.cbOpen(e, $this);
                      }
                  });
              }
              } else {
              $this.removeClass(o.openClass).next('.' + o.bodyClass).slideUp(o.speedClose, o.easingClose, function () {
                  if ($.isFunction(o.cbClose)) {
                      o.cbClose(e, $this);
                  }
              });
          }
      }
  };
  $.fn[pluginName] = function (options) {
      return this.each(function () {
          if (!$.data(this, 'plugin_' + pluginName)) {
              $.data(this, 'plugin_' + pluginName,
              new Accordion(this, options));
          }
      });
  };
}(jQuery, window, document));


$(document).ready(function(){   
  $('.popup-fade').fadeOut();
    $('.slider_banner_space').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4000
      });

    $('.goods_list input[type=radio]').click(function(){
      $('.level_1').find('label').attr('id','');
      $(this).parent().attr('id','goods_list_active');
    });
    
    $('.card_1').mouseenter(function(){
     if($(this).hasClass('col1_1_label_1')){
        $(this).attr('id','color_circles_active');
        $('.col1_2_label_1').removeAttr('id','color_circles_active');
        $('.col1_3_label_1').removeAttr('id','color_circles_active');
        $('.circle_1').removeClass('col1_2_label_1');    
        $('.circle_1').removeClass('col1_3_label_1');  
        $("#boot_id_1").attr("src","img/goods/boots/1_1.png");
        $('.circle_1').addClass("col1_1_label_1");                
     }
     if($(this).hasClass('col1_2_label_1')){      
      $(this).attr('id','color_circles_active');
      $('.col1_1_label_1').removeAttr('id','color_circles_active');
      $('.col1_3_label_1').removeAttr('id','color_circles_active');
      $('.circle_1').removeClass('col1_1_label_1');    
      $('.circle_1').removeClass('col1_3_label_1'); 
      $("#boot_id_1").attr("src","img/goods/boots/1_2.png");
      $('.circle_1').addClass("col1_2_label_1"); 
    }
    if($(this).hasClass('col1_3_label_1')){      
      $(this).attr('id','color_circles_active');
      $('.col1_1_label_1').removeAttr('id','color_circles_active');
      $('.col1_2_label_1').removeAttr('id','color_circles_active');
      $('.circle_1').removeClass('col1_1_label_1');    
      $('.circle_1').removeClass('col1_2_label_1'); 
      $("#boot_id_1").attr("src","img/goods/boots/1_3.png");
      $('.circle_1').addClass('col1_3_label_1');   
    }
  });

  $('.card_2').mouseenter(function(){
    if($(this).hasClass('col1_1_label_2')){
       $(this).attr('id','color_circles_active');
       $('.col1_2_label_2').removeAttr('id','color_circles_active');
       $('.col1_3_label_2').removeAttr('id','color_circles_active');
       $('.circle_2').removeClass('col1_2_label_2');    
       $('.circle_2').removeClass('col1_3_label_2');  
       $("#boot_id_2").attr("src","img/goods/boots/2_1.png");
       $('.circle_2').addClass("col1_1_label_2");                
    }
    if($(this).hasClass('col1_2_label_2')){      
     $(this).attr('id','color_circles_active');
     $('.col1_1_label_2').removeAttr('id','color_circles_active');
     $('.col1_3_label_2').removeAttr('id','color_circles_active');
     $('.circle_2').removeClass('col1_1_label_2');    
     $('.circle_2').removeClass('col1_3_label_2'); 
     $("#boot_id_2").attr("src","img/goods/boots/2_2.png");
     $('.circle_2').addClass("col1_2_label_2"); 
   }
   if($(this).hasClass('col1_3_label_2')){      
     $(this).attr('id','color_circles_active');
     $('.col1_1_label_2').removeAttr('id','color_circles_active');
     $('.col1_2_label_2').removeAttr('id','color_circles_active');
     $('.circle_2').removeClass('col1_1_label_2');    
     $('.circle_2').removeClass('col1_2_label_2'); 
     $("#boot_id_2").attr("src","img/goods/boots/2_3.png");
     $('.circle_2').addClass('col1_3_label_2');   
   }
 });


 $('.card_3').mouseenter(function(){
  if($(this).hasClass('col1_1_label_3')){
     $(this).attr('id','color_circles_active');
     $('.col1_2_label_3').removeAttr('id','color_circles_active');
     $('.col1_3_label_3').removeAttr('id','color_circles_active');
     $('.circle_3').removeClass('col1_2_label_3');    
     $('.circle_3').removeClass('col1_3_label_3');  
     $("#boot_id_3").attr("src","img/goods/boots/3_1.png");
     $('.circle_3').addClass("col1_1_label_3");                
  }
  if($(this).hasClass('col1_2_label_3')){      
   $(this).attr('id','color_circles_active');
   $('.col1_1_label_3').removeAttr('id','color_circles_active');
   $('.col1_3_label_3').removeAttr('id','color_circles_active');
   $('.circle_3').removeClass('col1_1_label_3');    
   $('.circle_3').removeClass('col1_3_label_3'); 
   $("#boot_id_3").attr("src","img/goods/boots/3_2.png");
   $('.circle_3').addClass("col1_2_label_3"); 
 }
 if($(this).hasClass('col1_3_label_3')){      
   $(this).attr('id','color_circles_active');
   $('.col1_1_label_3').removeAttr('id','color_circles_active');
   $('.col1_2_label_3').removeAttr('id','color_circles_active');
   $('.circle_3').removeClass('col1_1_label_3');    
   $('.circle_3').removeClass('col1_2_label_3'); 
   $("#boot_id_3").attr("src","img/goods/boots/3_3.png");
   $('.circle_3').addClass('col1_3_label_3');   
 }
});


$('.card_4').mouseenter(function(){
  if($(this).hasClass('col1_1_label_4')){
     $(this).attr('id','color_circles_active');
     $('.col1_2_label_4').removeAttr('id','color_circles_active');
     $('.circle_4').removeClass('col1_2_label_4');   
     $("#boot_id_4").attr("src","img/goods/boots/4_1.png");
     $('.circle_4').addClass("col1_1_label_4");                
  }
  if($(this).hasClass('col1_2_label_4')){      
   $(this).attr('id','color_circles_active');
   $('.col1_1_label_4').removeAttr('id','color_circles_active');
   $('.circle_4').removeClass('col1_1_label_4'); 
   $("#boot_id_4").attr("src","img/goods/boots/4_2.png");
   $('.circle_4').addClass("col1_2_label_4"); 
 }
});


$('.card_5').mouseenter(function(){
  if($(this).hasClass('col1_1_label_5')){
     $(this).attr('id','color_circles_active');
     $('.col1_2_label_5').removeAttr('id','color_circles_active');
     $('.col1_3_label_5').removeAttr('id','color_circles_active');
     $('.circle_5').removeClass('col1_2_label_5');    
     $('.circle_5').removeClass('col1_3_label_5');  
     $("#boot_id_5").attr("src","img/goods/boots/5_1.png");
     $('.circle_5').addClass("col1_1_label_5");                
  }
  if($(this).hasClass('col1_2_label_5')){      
   $(this).attr('id','color_circles_active');
   $('.col1_1_label_5').removeAttr('id','color_circles_active');
   $('.col1_3_label_5').removeAttr('id','color_circles_active');
   $('.circle_5').removeClass('col1_1_label_5');    
   $('.circle_5').removeClass('col1_3_label_5'); 
   $("#boot_id_5").attr("src","img/goods/boots/5_2.png");
   $('.circle_5').addClass("col1_2_label_5"); 
 }
 if($(this).hasClass('col1_3_label_5')){      
   $(this).attr('id','color_circles_active');
   $('.col1_1_label_5').removeAttr('id','color_circles_active');
   $('.col1_2_label_5').removeAttr('id','color_circles_active');
   $('.circle_5').removeClass('col1_1_label_5');    
   $('.circle_5').removeClass('col1_2_label_5'); 
   $("#boot_id_5").attr("src","img/goods/boots/5_3.png");
   $('.circle_5').addClass('col1_3_label_5');   
 }
});




  $('.heart').click(function(){
    
    if($(this).hasClass('revese_heart')){ 
      $(this).removeClass('revese_heart');
    }else{
      $(this).addClass('revese_heart');
    }
  });
  $('.to_basket_button').click(function(){
   
    if($(this).hasClass('to_basket_button_click')){ 
      $(this).html("до кошику");
      $(this).removeClass('to_basket_button_click');
      $('.basket div').css("opacity","0");
    }else{
      $(this).html("у кошику");
      $(this).addClass('to_basket_button_click');
      $('.basket div').css("opacity","1");
    }
  });

  $('.accordion-list li').click(function(){
    
    $('.accordion-list li').css("color","var(--dark)");
    $(this).css("color","var(--violet)");
  });

  let menu_button_flag = 1;
  $('.m_menu_button').click(function(){
    if(menu_button_flag == 0){      
      $('.menu_content').css("height","0px"); 
      $('.menu_content2').css("height","0px");   
      $('.content').css("filter","blur(0px)");
      $('.r2').css("transform","rotate(0deg)");        
      // $('.r2').css("width","30px");   
      // $('.r2').css("border-radius","50px");   
      // $('.r2').css("background-color","var(--violet)");   
      // $('.r2').css("margin","0px");  
      $('.r1').css("opacity","1");
      $('.r3').css("opacity","1");    
      $('.r2').removeClass("r2_2");
      $('.r2').removeClass("r2_3");  
      $(this).css("border-radius","0px");
      $(this).css("background-color","transparent");
      menu_button_flag = 1;
    }else{
      $('.menu_content').css("height","600px");   
      $('.menu_content2').css("height","225px");      
      $('.content').css("filter","blur(15px)");
      $('.r2').css("transform","rotate(45deg)"); 
      // $('.r2').css("width","17px");   
      // $('.r2').css("border-radius","0px");   
      // $('.r2').css("background-color","#FFF");        
      //$('.r2').css("margin-left","9px");   
      $('.r1').css("opacity","0");
      $('.r3').css("opacity","0");
      $('.r2').addClass("r2_2");
      $('.r2').addClass("r2_3");
      $(this).css("border-radius","50px");
      $(this).css("background-color","var(--violet)");
      menu_button_flag = 0;
    }

  });



  $('.feedback').click(function() {
		$('.popup-fade').fadeIn();
    $('.content').css("filter","blur(15px)");
    $('.mobile_header').css("filter","blur(15px)");
    $('.popup').css("visibility","visible");
		return false;
	});	

	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
    if(menu_button_flag == 1){  
      $('.content').css("filter","blur(0px)");
    }
    
    $('.mobile_header').css("filter","blur(0px)");
		return false;
	});        
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
      if(menu_button_flag == 1){  
      $('.content').css("filter","blur(0px)");
      }
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
      if(menu_button_flag == 1){  
      $('.content').css("filter","blur(0px)");
      }
			$(this).fadeOut();					
		}
	});	


  

  $('.accordion-group').simpleAccordion({
    
    multiple: false, // возможность открытия одной вкладки или всех
    speedOpen: 300, // скорость открытия вкладки
    speedClose: 150, // скорость закрытия вкладки
    easingOpen: null, // эффект плавности открытия вкладки
    easingClose: null, // эффект плавности закрытия вкладки
    headClass: 'accordion-header', // класс для заголовка вкладки
    bodyClass: 'accordion-body', // класс для тела вкладки
    openClass: 'open',  // класс для открытой вкладки, применяется к accordion-header
    defaultOpenClass: 'default-open', // класс для открытой вкладки по умолчанию
    cbClose: null, // callback-функция при закрытии вкладки - function (e, $this) {},
    cbOpen: null // callback-функция при открытии вкладки - function (e, $this) {}
    
});



});


