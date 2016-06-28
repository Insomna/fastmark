/* © Yurii Shuvalov 2016. https://github.com/Insomna
The code is distributed under the MIT license */
(function($){
  $.fn.fastmark = function(options){
    //Set default props
    var settings = $.extend({
          self            : true,
          selfclass       : 'active',
          controlledclass : 'open',
          event           : 'click',
          preventdefault  : true
        }, options);

    //Catch event
    this.bind(settings.event, function(e){
      //Get data-attrs in object
      var cData = $(this).data();

      //If props changed by data-attr 
      if(!('self' in cData)) cData.self = settings.self;
      if(!('preventdefault' in cData)) cData.preventdefault = settings.preventdefault;
      if(!cData.selfclass) cData.selfclass = settings.selfclass;
      if(!cData.controlledclass) cData.controlledclass = settings.controlledclass;

      //If need self-class replace
      if(cData.self)
        $(this).hasClass(cData.selfclass) ? $(this).removeClass(cData.selfclass) : $(this).addClass(cData.selfclass);

      //If need to control other DOM-element
      if(cData.controlled)
        $(cData.controlled).hasClass(cData.controlledclass) ?
          $(cData.controlled).removeClass(cData.controlledclass)
          :
          $(cData.controlled).addClass(cData.controlledclass);

      //If need change self HTML
      if(cData.selfreplace){
        var _selfreplace = $(this).html();
        $(this).html(cData.selfreplace);
        cData.selfreplace = _selfreplace;
      }

      //Reset default behavior 
      if(cData.preventdefault)
        e.preventDefault();

    });
    //Return jQuery Obj
    return this;
  };
})(jQuery);