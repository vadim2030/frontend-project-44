#!/usr/bin/env node

import runEngineGame from '../src/index.js';
import runGcdGames from '../src/games/runGcdGames.js';

runEngineGame(runGcdGames, 'Find the greatest common divisor of given numbers.');
