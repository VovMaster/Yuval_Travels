$(document).ready(function() {
   $('.button-menu').click(function(){
      $(this).toggleClass('open-nav');
   });
   $('select').ikSelect({

      autoWidth: false,
      ddFullWidth: false,
      equalWidths: false,
      dynamicWidth: false,
   });
   $('.datepicker').datepicker({
      dateFormat: "dd.mm.yy"
   });

});