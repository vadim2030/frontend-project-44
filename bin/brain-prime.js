#!/usr/bin/env node

import runEngineGame from '../src/index.js';
import runPrimeGame from '../src/games/runPrimeGame.js';

runEngineGame(runPrimeGame, 'Answer "yes" if given number is prime. Otherwise answer "no".');
