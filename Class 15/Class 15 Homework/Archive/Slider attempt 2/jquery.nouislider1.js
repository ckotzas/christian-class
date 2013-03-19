
$(document).ready(function() {
   $(".noUiSlider").noUiSlider({
       range: [20, 100]
      ,start: [40, 80]
      ,step: 20
      ,slide: function(){
         var values = $(this).val();
         $("span").text(
            values[0] +
            " - " +
            values[1]
         );
      }
   });
});