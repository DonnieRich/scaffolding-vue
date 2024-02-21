import fs from 'fs/promises';
import path from "node:path";

export const copyTemplateFilesAndFolders = async (source, destination, projectName) => {
    const filesAndFolders = await fs.readdir(source);

    for (const entry of filesAndFolders) {

        const currentSource = path.join(source, entry);
        const currentDestination = path.join(destination, entry);

        const stat = await fs.lstat(currentSource);

        if (stat.isDirectory()) {

            await fs.mkdir(currentDestination);
            await copyTemplateFilesAndFolders(currentSource, currentDestination);

        } else {

            // If the file is package.json we replace the default name with the one provided by the user
            if (/package.json/.test(currentSource)) {
                const currentPackageJson = await fs.readFile(currentSource, 'utf8');
                const newFileContent = currentPackageJson.replace(/custom-scaffolding/g, projectName);

                await fs.writeFile(currentDestination, newFileContent, 'utf8');
            } else {
                await fs.copyFile(currentSource, currentDestination);
            }

        }
    }
};