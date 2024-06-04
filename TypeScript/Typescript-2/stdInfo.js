function stdInfo(stdName) {
    var scores = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        scores[_i - 1] = arguments[_i];
    }
    var totalMarks = scores.reduce(function (total, mark) { return total + mark; }, 0);
    var averageMarks = scores.length ? totalMarks / scores.length : 0;
    console.log("Student Name: ".concat(stdName, ", Total Marks: ").concat(totalMarks, ", Average Marks: ").concat(averageMarks.toFixed(2)));
}
stdInfo('John Doe', 85, 90, 89, 78, 89);
stdInfo('Jane smith', 78, 90, 67);
stdInfo('Alice Johnson');
