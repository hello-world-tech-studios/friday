$(document).ready(function() {

  /* Your Javascript Here */
  console.log("page is loaded");
    $("#buyButton").click(function(event){
      console.log(event.target.href);
      var hrefString = $("#buyButton").attr("href")
      console.log($("#buyButton").attr("href"))
      if (hrefString == "") {
        console.log("string empty");
        alert("You have not selected an item!");
      } else {
        console.log("string full");
      }
    });
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
