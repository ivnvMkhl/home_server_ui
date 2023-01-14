import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { defineCssVariables } from '@helpers/defineCssVariables';
import { colorVariablesDict } from '@components/Theme/colorVariables';

const rootEntry = document.getElementById('root');

if (rootEntry) {
    defineCssVariables(colorVariablesDict);
    createRoot(rootEntry).render(<App />);
} else throw new Error('Root entry not found');
