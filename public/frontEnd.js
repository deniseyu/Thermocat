$(document).ready(function(){
  
  var thermocat = new Thermocat;

$.getJSON('/weather', function(data) {
    $('h3').text('outside temperature: ' + (parseInt(data['list'][1]['main']['temp'])) + '°C')
});

  function ThermocatView(element) {
    this.el = $(element);
    this.thermocat = new Thermocat;
    this.el.text(this.thermocat.temperature);
    this.bindTo('.increase', this.thermocat, this.thermocat.increaseTemperature);
    this.bindTo('.decrease', this.thermocat, this.thermocat.decreaseTemperature);
    this.bindTo('.reset', this.thermocat, this.thermocat.resetTemperature);
  };

  ThermocatView.prototype.bindTo = function(selector, obj, func) {
    $(selector).on('click', function(){
      $('h1').text(func.call(obj))
    });
  };

  $('h1').text(thermocat.temperature + '°C');

  $('h2.increase').on('click', function(){
    thermocat.increaseTemperature();
    $('h1').text(thermocat.temperature + '°C');
    $('div.eyes').css('background-color', '#FFC337');
    if (thermocat.temperature >= 25) {
      $('div.eyes').css('background-color', '#FF4B37');
    };
    if (thermocat.temperature < 25) {
      $('div.eyes').css('background-color', '#FFC337');
    };
    if (thermocat.temperature <= 18) {
      $('div.eyes').css('background-color', '#80CC5E');
    };

  });

  $('h2.decrease').on('click', function(){
    thermocat.decreaseTemperature();
    $('h1').text(thermocat.temperature + '°C');
    if (thermocat.temperature >= 25) {
      $('div.eyes').css('background-color', '#FF4B37');
    };
    if (thermocat.temperature < 25) {
      $('div.eyes').css('background-color', '#FFC337');
    };
    if (thermocat.temperature <= 18) {
      $('div.eyes').css('background-color', '#80CC5E');
    };
  });

  $('h2.reset').on('click', function(){
    thermocat.resetTemperature();
    $('h1').text(thermocat.temperature + '°C');
    $('div.eyes').css('background-color', '#FFC337');
  });

  $('h2.turnoffpowersave').on('click', function() {
    thermocat.turnOffPowerSave();
    $('h1').text(thermocat.temperature + '°C')
    $('h2.powersavestatus').text('Power save mode is off');
    $('h2.powersavestatus').css('color', '#FF4B37');
    $('div.eyes').css('background-color', '#FFC337');
  });

  $('h2.turnonpowersave').on('click', function(){
    thermocat.turnOnPowerSave();
    $('h1').text(thermocat.temperature + '°C')
    $('h2.powersavestatus').text('Power save mode is on');
    $('h2.powersavestatus').css('color', '#80CC5E');
    $('div.eyes').css('background-color', '#FFC337');
  });

  $('#blackpaw').on('click', function(){
    $('#catpic').attr('src', '/images/cat.png');
  });

  $('#graypaw').on('click', function(){
    $('#catpic').attr('src', '/images/gray_cat.png');
  });

  $('#orangepaw').on('click', function(){
    $('#catpic').attr('src', '/images/orange_cat.png');
  });


});

