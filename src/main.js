import fs from 'fs/promises';
import { fileURLToPath } from "node:url";
import path from "node:path";
import chalk from 'chalk';
import { copyTemplateFilesAndFolders } from './utils.js';

export const init = async (projectName) => {

    const destination = path.join(process.cwd(), projectName);

    const source = path.resolve(
        path.dirname(fileURLToPath(import.meta.url)),
        "../template/vue"
    );

    try {
        console.log('📑  Copying files...');

        await fs.mkdir(destination);
        await copyTemplateFilesAndFolders(source, destination, projectName);

        console.log('📑  Files copied...');
        console.log(chalk.green(`\ncd ${projectName}\nnpm install\nnpm run dev`));
    } catch (error) {
        console.log(error);
    }
};