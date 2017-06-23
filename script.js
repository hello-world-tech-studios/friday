$(document).ready(function() {

  /* Your Javascript Here */
  console.log("page is loaded");
  $(".pictureBoxes").click(function(event){
    $("#pictureDisplay").childr
    var pictureClicked = event.target.src;
    var productUrl = event.target.id
    console.log(productUrl);
    console.log(event.target.src);
    var test = "#displayBox";
    $("#buyButton").attr("href", productUrl);
    $(test).attr("src", pictureClicked);
  });
});
