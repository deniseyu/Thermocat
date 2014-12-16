[![Code Climate](https://codeclimate.com/github/deniseyu/Thermocat/badges/gpa.svg)](https://codeclimate.com/github/deniseyu/Thermocat)
# Thermocat

Week 6 project: Build a thermostat web application using javascript with jQuery and Handlebar templates.

I pair-programmed with [Nicole](https://github.com/NicolePell) and [Elena](https://github.com/elenagarrone) during this week. Instead of a thermostat, we chose to build a Thermocat. [Visit Thermocat on Heroku](https://thermocat.herokuapp.com)!

The thermocat must have the following specifications:

* Should be able to increase and decrease the temperature setting
* Power Saver Mode is enabled by default, but can be turned off
* Maximum temperature is 25 when Power Save mode is on, 32 when Power Save mode is off
* Temperature setting cannot be lower than 10 or higher than 32 at any time
* Thermocat's eyes change color according to how environmentally friendly you are being
* Thermocat can detect the outside temperature with an API call to an open-source weather API

## Preview

![meow](https://raw.github.com/deniseyu/thermocat/master/public/screenshot.png)

## To Run

Clone the repository:
```
git clone git@github.com:deniseyu/Thermocat.git
cd Thermocat
```
To start server:
```
bundle install
rackup
```
To run tests, open SpecRunner.html in a browser.

## Technologies

* Javascript
* jQuery
* Sinatra
* AJAX (OpenWeather.org API)
* HTML5
* CSS3
* Tested in Jasmine

## Learning Objectives

* Gain familiarity with jQuery and client-side Javascript
* Understand architecture of a JSON response and how to parse with client-side script
* Object-oriented design
* TDD and BDD with Jasmine
