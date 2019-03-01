$(document).ready(main());

function main() {
  
  var baseApi = "https://wind-bow.gomix.me/twitch-api/";
  var user1 = baseApi + "streams/esl_sc2?callback=?";
  var user2 = baseApi + "streams/freecodecamp?callback=?";
  var user3 = baseApi + "streams/noobs2ninjas?callback=?";
  var user4 = baseApi + "streams/OgamingSC2?callback=?";
  
  $.getJSON(user1, function(data){
    $("#userIcon1").html("<img src=https://vgy.me/JF4uss.jpeg>");
    $("#channel1").html("<a href=https://www.twitch.tv/esl_sc2 target=_blank>ESL_SC2</a>");
    if(data.stream===null){
      $("#streamInfo1").html("Offline");
    } else {
      $("#userIcon1").html("<img src=" + data.stream.channel.logo + ">");
      $("#streamInfo1").html(data.stream.channel.game + ": " + data.stream.channel.status); 
    }
  });
  
  $.getJSON(user2, function(data2){
    $("#userIcon2").html("<img src=https://vgy.me/Jzaduz.png>");
    $("#channel2").html("<a href=https://www.twitch.tv/freecodecamp target=_blank>FreeCodeCamp</a>");
    if(data2.stream===null){
      $("#streamInfo2").html("Offline");
    } else {
      $("#userIcon2").html("<img src=" + data2.stream.channel.logo + ">");
      $("#streamInfo2").html(data2.stream.channel.game + ": " + data2.stream.channel.status); 
    }
  });
  
  $.getJSON(user3, function(data3){
    $("#userIcon3").html("<img src=https://vgy.me/IVY6au.png>");
    $("#channel3").html("<a href=https://www.twitch.tv/noobs2ninjas target=_blank>Noobs2Ninjas</a>");
    if(data3.stream===null){
      $("#streamInfo3").html("Offline");
    } else {
      if(data3.stream.channel.logo) $("#userIcon3").html("<img src=" + data3.stream.channel.logo + ">");
      $("#streamInfo3").html(data3.stream.channel.game + ": " + data3.stream.channel.status); 
    }
  });
  
  $.getJSON(user4, function(data4){
    $("#userIcon4").html("#");
    $("#channel4").html("<a href=https://www.twitch.tv/OgamingSC2 target=_blank>OgamingSC2</a>");
    if(data4.stream===null){
      $("#streamInfo4").html("Offline");
    } else {
      $("#userIcon4").html("<img src=" + data4.stream.channel.logo + ">");
      $("#streamInfo4").html(data4.stream.channel.game + ": " + data4.stream.channel.status); 
    }
  });
  
  $("#fAll").on('click', function() {
    $("#filters > div").each(function() {
      $(this).css('background-color', '#222');
      $(this).css('color', 'white');
    });
    $(this).css('background-color', 'white');
    $(this).css('color', '#222');
    $(".selections").each(function(){
      $(this).show();
    });
  });
  $("#fOnline").on('click', function() {
    $("#filters > div").each(function() {
      $(this).css('background-color', '#222');
      $(this).css('color', 'white');
    });
    $(this).css('background-color', 'white');
    $(this).css('color', '#222');
    $(".selections > .status").each(function(){
      if($(this).text() == "Offline")  $(this).parent().hide();
      else $(this).parent().show();
    });
  });
  $("#fOffline").on('click', function(){
    $("#filters > div").each(function() {
      $(this).css('background-color', '#222');
      $(this).css('color', 'white');
    });
    $(this).css('background-color', 'white');
    $(this).css('color', '#222');
    $(".selections > .status").each(function(){
      if($(this).text() == "Offline") $(this).parent().show();
      else $(this).parent().hide();
    });
  });
}