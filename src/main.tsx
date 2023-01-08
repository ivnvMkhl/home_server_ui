import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const rootEntry = document.getElementById('root');

if (rootEntry) {
    createRoot(rootEntry).render(<App />);
} else throw new Error('Root entry not found');
