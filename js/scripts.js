$(document).ready(function() {
    $("form#vacationPreferences").submit(function(event) {
      var temperature = parseInt($("input#temperature").val());
      var wildMild = $("select#wildMild").val();
      var roughIt = $("select#roughIt").val();
      var crowd = $("select#crowd").val();
      var region = $("select#region").val();

      //apply branching logic
      if (temperature <60) {
        if (wildMild === "wild") {
          if (roughIt === "rough") {
            if (crowd === "loner") {
              if (region === "global") {
                var destination = "Whistler, B.C."
                            $("#destinationName").empty().append(destination);
                            $("#results").show();
                          } else {
                            var destination = "Anchorage, AK"
                            $("#destinationName").empty().append(destination);
                            $("#results").show();
                          }
              } 
            }
          }
        }
      event.preventDefault();
    })
  });
