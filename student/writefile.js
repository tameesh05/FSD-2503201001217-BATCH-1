const fs = require("fs");

const content = `Name: Tameesh Gupta
City: Varanasi
Course: FSD`;

fs.writeFile("student.txt", content, (err) => {
    if (err) {
        console.log("Error writing file:", err);
        return;
    }

    console.log("File written successfully!");
});