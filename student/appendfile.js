const fs = require("fs");

const content = "\nSemester: 5\nCollege: BBD University";

fs.appendFile("student.txt", content, (err) => {
    if (err) {
        console.log("Error appending file:", err);
        return;
    }

    console.log("Data appended successfully!");
});