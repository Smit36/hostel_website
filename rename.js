const fs = require('fs');

fs.readdir(__dirname, async (err, files) => {
    for (let i = 0; i < files.length; i++) {
        await rename(files[i], files[i].toLowerCase());
        console.log(files[i], "Done");
    }
});

async function rename(oldFile, newFile) {
    return new Promise((resolve, reject) => {
        fs.rename(oldFile, newFile, () => {
            resolve();
        });
    })
}