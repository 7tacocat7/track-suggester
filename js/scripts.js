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

      if(myQuestion1 === "Webpage design")
        $(".form3").show();
      if(myQuestion1 === "Webpage design")
        $(".form5").show();
      if(myQuestion1 === "Webpage design")
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
