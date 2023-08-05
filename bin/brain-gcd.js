#!/usr/bin/env node

import runEngineGame from '../src/index.js';
import runGcdGames from '../src/games/runGcdGame.js';

runEngineGame(runGcdGames, 'Find the greatest common divisor of given numbers.');
