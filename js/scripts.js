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
        $(".form3").show();
      if(myQuestion1 === "Webpage design")
        $(".form5").show();
      if(myQuestion1 === "Webpage design")
        $(".form7").show();
      if(myQuestion1 === "how it works")
        $(".form7").show();
//Question 2 branch
      if(myQuestion2 === "Big busines")
        $(".form3").show();
      if(myQuestion2 === "The smaller guy")
        $(".form3").show();
      if(myQuestion2 === "Big busines")
        $(".form4").show();
      if(myQuestion2 === "I want to freelance")
        $(".form5").show();
      if(myQuestion2 === "Big busines")
        $(".form6").show();
      if(myQuestion2 === "The smaller guy")
        $(".form6").show();
      if(myQuestion2 === "The smaller guy")
        $(".form7").show();
      if(myQuestion2 === "I want to freelance")
        $(".form7").show();
//Question 3 branch
      if(myQuestion3 === "Android applications")
        $(".form3").show();
      if(myQuestion3 === "Business software")
        $(".form3").show();
      if(myQuestion3 === "Business software")
        $(".form4").show();
      if(myQuestion3 === "Android applications")
        $(".form5").show();
      if(myQuestion3 === "I want to work on iOS apps")
        $(".form5").show();
      if(myQuestion3 === "Business software")
        $(".form6").show();
      if(myQuestion3 === "Android applications")
        $(".form7").show();
      if(myQuestion3 === "I want to work on iOS apps")
        $(".form7").show();
//Question 4 branch
      if(myQuestion4 === "No")
        $(".form3").show();
      if(myQuestion4 === "No")
        $(".form4").show();
      if(myQuestion4 === "Yes")
        $(".form6").show();
      if(myQuestion4 === "No")
        $(".form7").show();
//Question 5 branch
      if(myQuestion4 === "No")
        $(".form3").show();
      if(myQuestion4 === "Maybe")
        $(".form4").show();
      if(myQuestion4 === "Yes")
        $(".form6").show();
      if(myQuestion4 === "Yes")
        $(".form7").show();
    // $(".form3").show();
    // $(".form4").show();
    // $(".form5").show();
    // $(".form6").show();
    // $(".form7").show();


    $(".form1").hide();

    event.preventDefault();
  });
});
