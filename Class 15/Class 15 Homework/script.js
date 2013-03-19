  // Background Color Script 

  $(document).ready(function() {

  $("#button").toggle(
      function () {
        $(".slideshow img").css('background-color', 'yellow');
      },
      function () {
        $(".slideshow img").css('background-color', 'red');
      },
      function () {
        $(".slideshow img").css('background-color', 'papayawhip');
      });
});
  </script>

 <script>
  $(document).ready(function() {

  $("#button").toggle(
      function () {
        $("#background").css('background-color', 'blue');
      },
      function () {
        $("#background").css('background-color', 'brown');
      },
      function () {
        $("#background").css('background-color', '#e4e4e2');
      });
});
  </script>

  <script>
    $(document).ready(function() {
    $('.slideshow').cycle({
    fx: 'fade',
  });
});
  </script>

  // Slider Script 
  <script>
    $(document).ready(function() {
    $("#slider").slider({
      max: 328,
      min: 50,
      change: function(event, ui){
      $("img").html(ui.value);
      $("img").css("height", ui.value)
      $("img").css("width", ui.value)
      }
    });
  });
  