$(document).ready(function() {

  /* Your Javascript Here */
  console.log("page is loaded");
  $(".pictureBoxes").click(function(event){
    $("#pictureDisplay").childr
    var pictureClicked = event.target.src;
    console.log(event.target.src);
    var test = "#displayBox";
    $(test).attr("src", pictureClicked);
  });
});
