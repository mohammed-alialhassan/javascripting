require 'pp';
require './game'
require './questions'
require './players'

game = Game.new   # constructor initializer is being called only once
game.start