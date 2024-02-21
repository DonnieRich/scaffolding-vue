#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import { init } from './src/main.js';

(async () => inquirer
    .prompt([
        {
            type: "input",
            name: "projectName",
            default: "obi-wan-kenobi"
        }
    ])
    .then((answers) => {
        init(answers.projectName);
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log(chalk.red("Cannot render the prompt..."));
        } else {
            console.log(chalk.red(error.message));
        }
    }))();