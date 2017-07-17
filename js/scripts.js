$(document).ready(function(){
  $("#thisForm").submit(function(event){
    var myName = $("input#name").val();
    var myEmail = $("input#email").val();
    var myQuestion1 = $("#question1").val();
    var myQuestion2 = $("#question2").val();
    var myQuestion3 = $("#question3").val();
    var myQuestion4 = $("#question4").val();
    var myQuestion5 = $("#question5").val();
    var mySkill = $("input:radio[name=skill]:checked").val();
    var myDate = $("#date").val();
    var myColor = $("#color").val();

    $("#aname").text(myName);
    $("#aemail").text(myEmail);
    $("#aquestiont1").text(myQuestion1);
    $("#aquestiont2").text(myQuestion2);
    $("#aquestiont3").text(myQuestion3);
    $("#aquestiont4").text(myQuestion4);
    $("#aquestiont5").text(myQuestion5);
    $("#askill").text(mySkill);
    $("#adate").text(myDate);
    $("#acolor").text(myColor);

    $(".form2").show();
// Question 1 branch
    if(myQuestion1 === "Webpage design")
      $("#java").show();
    if(myQuestion1 === "Webpage design")
      $("#cssDesign").show();
    if(myQuestion1 === "Webpage design")
      $("#ruby").show();
    if(myQuestion1 === "how it works")
      $("#ruby").show();
  //Question 2 branch
    if(myQuestion2 === "Big busines")
      $("#java").show();
    if(myQuestion2 === "The smaller guy")
      $("#java").show();
    if(myQuestion2 === "Big busines")
      $("#cSharp").show();
    if(myQuestion2 === "I want to freelance")
      $("#cssDesign").show();
    if(myQuestion2 === "Big busines")
      $("#php").show();
    if(myQuestion2 === "The smaller guy")
      $("#php").show();
    if(myQuestion2 === "The smaller guy")
      $("#ruby").show();
    if(myQuestion2 === "I want to freelance")
      $("#ruby").show();
  //Question 3 branch
    if(myQuestion3 === "Android applications")
      $("#java").show();
    if(myQuestion3 === "Business software")
      $("#java").show();
    if(myQuestion3 === "Business software")
      $("#cSharp").show();
    if(myQuestion3 === "Android applications")
      $("#cssDesign").show();
    if(myQuestion3 === "I want to work on iOS apps")
      $("#cssDesign").show();
    if(myQuestion3 === "Business software")
      $("#php").show();
    if(myQuestion3 === "Android applications")
      $("#ruby").show();
    if(myQuestion3 === "I want to work on iOS apps")
      $("#ruby").show();
  //Question 4 branch
    if(myQuestion4 === "No")
      $("#java").show();
    if(myQuestion4 === "No")
      $("#cSharp").show();
    if(myQuestion4 === "Yes")
      $("#php").show();
    if(myQuestion4 === "No")
      $("#ruby").show();
  //Question 5 branch
    if(myQuestion4 === "No")
      $("#java").show();
    if(myQuestion4 === "Maybe")
      $("#cSharp").show();
    if(myQuestion4 === "Yes")
      $("#php").show();
    if(myQuestion4 === "Yes")
      $("#ruby").show();
    // $("#java").show();
    // $("#cSharp").show();
    // $("#cssDesign").show();
    // $("#php").show();
    // $("#ruby").show();


    $(".form1").hide();

    event.preventDefault();
  });
});
