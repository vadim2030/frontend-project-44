#!/usr/bin/env node

import runEngineGame from '../src/index.js';
import runProgressionGame from '../src/games/runProgressionGame.js';

runEngineGame(runProgressionGame, 'What number is missing in the progression?');
