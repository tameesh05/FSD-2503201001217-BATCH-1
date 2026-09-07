const fs = require("fs");

fs.appendFile("student.txt", "\nSemester: 5\nCollege: BBD University", (err) => {
    if (err) {
        console.log("Error appending file:", err);
        return;
    }

    console.log("Data appended successfully!");
});