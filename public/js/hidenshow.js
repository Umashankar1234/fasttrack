$("input:radio[id='flight-type']").click(function() {
  $("#group1 .hidden").hide().removeClass("shown");
  $("#" + $(this).val()).show();
  setTimeout(function() {
    $(".hidden").addClass("shown");
  }, 0);
});
function show1(){
  document.getElementById('hidden').style.display = 'block';
}
function show2(){
  document.getElementById('hidden').style.display = 'none';
}
// $("input:radio[name='toggler1']").click(function() {
//   $("#group2 .hidden").hide().removeClass("shown");
//   $("#" + $(this).val()).show();
//   setTimeout(function() {
//     $(".hidden").addClass("shown");
//   }, 0);
// });