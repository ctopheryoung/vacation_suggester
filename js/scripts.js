$(document).ready(function() {
  $("button#begin").click(function() {
    $("div#introduction-slide").hide();
    $("div#quiz").show();
  })


    $("form#vacationPreferences").submit(function(event) {
      var name = ($("input#name").val());
      var wildMild = $("select#wildMild").val();
      var roughIt = $("select#roughIt").val();
      var crowd = $("select#crowd").val();
      var region = $("select#region").val();

      //apply branching logic
      if ( name ) {
        $("#userName").empty().append(name);
        if (wildMild === "wild") {
          if (roughIt === "rough") {
            if (crowd === "loner") {
              if (region === "global") {
                var destination = "Russia and drink lots of Vodka, comrad" // wild, rough, lonely, global place
                    $("#destinationName").empty().append(destination);
                    $("#results").show();
                } else {
                  var destination = "Montana for beer tasting and gun shooting" // wild, rough, lonely, local place
                    $("#destinationName").empty().append(destination);
                    $("#results").show();
                }
              } else {
                if (region === "global") {
                  var destination = "Bogota, Columbia" // wild, rough, social, global place
                      $("#destinationName").empty().append(destination);
                      $("#results").show();
                  } else {
                    var destination = "Burning Man" // wild, rough, social, local place
                      $("#destinationName").empty().append(destination);
                      $("#results").show();
                  }
              }
            } else {
              if (crowd === "loner") {
                if (region === "global") {
                  var destination = "Iceland and see the northern lights on LSD" // wild, posh, lonely, global place
                      $("#destinationName").empty().append(destination);
                      $("#results").show();
                  } else {
                    var destination = "the California Coast and work at a cannibis growing facility" // wild, posh, lonely, local place
                      $("#destinationName").empty().append(destination);
                      $("#results").show();
                  }
              } else {
                if (region === "global") {
                  var destination = "Dubai and gamble your heart out" // wild, posh, social, global place
                      $("#destinationName").empty().append(destination);
                      $("#results").show();
                  } else {
                    var destination = "Las Vegas and party" // wild, posh, social, local place
                      $("#destinationName").empty().append(destination);
                      $("#results").show();
                  }
              }
            }

        } else {
          if (roughIt === "rough") {
            if (crowd === "loner") {
              if (region === "global") {
                var destination = "The Great Sahara Desert and go camel riding" // mild, rough, lonely, global place
                    $("#destinationName").empty().append(destination);
                    $("#results").show();
              } else {
                var destination = "Eastern Oregon and sit in some remote hot springs" // mild, rough, lonely, local place
                    $("#destinationName").empty().append(destination);
                    $("#results").show();
              }
            } else {
              if (region === "global") {
                var destination = "Costa Rica" // mild, rough, social, global place
                    $("#destinationName").empty().append(destination);
                    $("#results").show();
              } else {
                var destination = "Eugene, Oregon" // mild, rough, social, local place
                    $("#destinationName").empty().append(destination);
                    $("#results").show();
              }
            }
          } else {
            if (crowd === "loner") {
              if (region === "global") {
                var destination = "Fiji" // mild, posh, lonely, global place
                    $("#destinationName").empty().append(destination);
                    $("#results").show();
              } else {
                var destination = "Southern California and rent a beach house" // mild, posh, lonely, local place
                    $("#destinationName").empty().append(destination);
                    $("#results").show();
              }
            } else {
              if (region === "global") {
                var destination = "Paris, France" // mild, posh, social, global place
                    $("#destinationName").empty().append(destination);
                    $("#results").show();
              } else {
                var destination = "Kentucky and get bougie at the Kentucky Derby" // mild, posh, social, local places
                    $("#destinationName").empty().append(destination);
                    $("#results").show();
              }
            }
          }
        }
      }

      else {
        alert ("Please enter your name!")
      }

      event.preventDefault();
    })
  });
