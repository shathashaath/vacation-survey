
function getCities(vacationTimes, tourists, transportaionMode, favoritePlace, favoriteActivities) {
  if (favoritePlace == "beach" && transportaionMode == "air") {
    return "Bahamas, Malaysia, Bali";
  } else if (favoritePlace == "mountains" && transportaionMode == "train") {
    return "Dubai, Paris,LA";
  }
}

function showCities(cities) {
  $("p#suggestions").text(cities);
  $("div#images").empty();
  if (cities == "Bahamas, Malaysia, Bali") {
    $('div#images').append(
      "<img class='city-image' src='img/bahamas.png'/><img class='city-image' src='img/malaysia.jpg'/><img class='city-image' src='img/bali.jpg'/>"
    );
  } else if (cities == "Dubai, Paris,LA") {
    $('div#images').append(
      "<img class='city-image' src='img/dubai.jpg'/><img class='city-image' src='img/paris.jpg'/><img class='city-image' src='img/LA.jpg'/>"
    );
  }
}

$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var vacationTimes = $("input:radio[name=vacationTimes]:checked").val();
    var tourists = $("input:radio[name=Tourists]:checked").val();
    var transportaionMode = $("input:radio[name=transportaionMode]:checked").val();
    var favoritePlace = $("input:radio[name=favoritePlace]:checked").val();
    var favoriteActivities = $("input:radio[name=favoriteActivities]:checked").val();
    console.log("vacationTimes: " + vacationTimes);
    console.log("tourists: " + tourists);
    console.log("transportaionMode: " + transportaionMode);
    console.log("favoritePlace: " + favoritePlace);
    console.log("favoriteActivities: " + favoriteActivities);
    var cities = getCities(vacationTimes, tourists, transportaionMode, favoritePlace, favoriteActivities);
    showCities(cities);

  });
});
