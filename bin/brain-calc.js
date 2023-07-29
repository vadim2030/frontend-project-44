#!/usr/bin/env node
import runCalcGame from '../src/games/runCalcGame.js';
import runEngineGame from '../src/index.js';

runEngineGame(runCalcGame, 'What is the result of the expression?');
