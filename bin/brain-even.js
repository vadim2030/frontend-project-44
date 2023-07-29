#!/usr/bin/env node

import runEvenGame from '../src/games/runEvenGame.js';
import runEngineGame from '../src/index.js';

runEngineGame(runEvenGame, 'Answer "yes" if the number is even, otherwise answer "no".');
