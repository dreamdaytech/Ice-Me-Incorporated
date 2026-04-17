#!/usr/bin/env node
// Entry point for Node.js deployment platforms that require .js extension
// This file loads the TypeScript server using tsx

import { register } from 'tsx/esm/api';
register();

// Import and run the TypeScript server
import('./server.ts');
