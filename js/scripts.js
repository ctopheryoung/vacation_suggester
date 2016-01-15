$(document).ready(function() {
    $("button#begin").click(function() {
      $("div#introduction").hide();
      $("div#quiz").show();
    });

    $("button#answer-submit").click(function(){
      $("div#quiz").hide();
      $("div#result").show();
    });


  });
