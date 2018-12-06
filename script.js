$("#aboutMe").hover(
    function() {
      $("#aboutMe").css("height", "500px");
      $("#portfolioMe").css("visibility", "hidden");
      $("#contactMe").css("visibility", "hidden");
      $("#aboutMeTitle").hide();
      $("#aboutMeContent").show();
    }, function() {
      $("#aboutMe").css("height", "75px");
      $("#portfolioMe").css("visibility", "visible");
      $("#contactMe").css("visibility", "visible");
      $("#aboutMeContent").hide();
      $("#aboutMeTitle").show();
    }
  );

  $("#portfolioMe").hover(
    function(event) {
        event.preventDefault();
      $("#portfolioMe").css("height", "500px");
      $("#aboutMe").css("visibility", "hidden");
      $("#contactMe").css("visibility", "hidden");
      $("#portfolioMeTitle").hide();
      $("#portfolioMeContent").show();
    }, function() {
      $("#portfolioMe").css("height", "75px");
      $("#aboutMe").css("visibility", "visible");
      $("#contactMe").css("visibility", "visible");
      $("#portfolioMeContent").hide();
      $("#portfolioMeTitle").show();
    }
  );

  $("#contactMe").hover(
    function(event) {
        event.preventDefault();
      $("#contactMe").css("height", "500px");
      $("#aboutMe").css("visibility", "hidden");
      $("#portfolioMe").css("visibility", "hidden");
      $("#contactMeTitle").hide();
      $("#contactMeContent").show();
    }, function() {
      $("#contactMe").css("height", "75px");
      $("#aboutMe").css("visibility", "visible");
      $("#portfolioMe").css("visibility", "visible");
      $("#contactMeContent").hide();
      $("#contactMeTitle").show();
    }
  );