$(document).ready(function() {
  $(".g").click(function () {
    confirm("You want to buy tickets?")
  })
  $(".d").click(function () {
    console.log("click")
    window.location.replace("https://www.amazon.com")
  })
})