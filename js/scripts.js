$(document).ready(function() {
    $("button#begin").click(function() {
      $("div#introduction-slide").hide();
      $("div#quiz-slide").show();
    });

    $("button#answer-submit").click(function(){
      $("div#quiz-slide").hide();
      $("div#result-slide").show();
    });


  });
