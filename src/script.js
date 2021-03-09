const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
    }
}];

function callbackSubjects(subject) {
    return (subject[0].toUpperCase() + subject.slice(1).toLowerCase()).split('_').join(' ');
}
function getSubjects(student = students[0]) {
    const studentValues = Object.values(student);
    const studentSubjects = Object.keys(studentValues[2]);
    const newArrayOfSubjects = studentSubjects.map(callbackSubjects);
    return newArrayOfSubjects;
}
console.log(`Student ${students[0].name} subjects:`, getSubjects());

function callbackMarks(accumulator, currentNumber) {
    return accumulator + currentNumber;
}
function getAverageMark(student = students[0]) {
    const studentValues = Object.values(student);
    const studentMarks = Object.values(studentValues[2]);
    const arrayEmptyMarks = [];
    const arrayMarks = arrayEmptyMarks.concat(...studentMarks);
    return +(arrayMarks.reduce(callbackMarks, 0) / arrayMarks.length).toFixed(2);
}
console.log(`Student ${students[0].name} average mark:`, getAverageMark());

function getStudentInfo(student = students[0]) {
    const arrayStudent = Object.entries(student);
    const studentArray = arrayStudent[0].concat(arrayStudent[1]);
    const studentName = studentArray[1];
    const studentCourse = studentArray[3];
    return student = {
        course: studentCourse,
        name: studentName,
        averageMark: getAverageMark(student)
    }
}
console.log(`Student ${students[0].name} info:`, getStudentInfo());