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

//Створіть функцію яка повертає список предметів для конкретного студента. Зверніть увагу – назву предмету необхідно повертати з великої літери, а "_" – замінити на пробіл.
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

//Створіть функцію яка поверне середню оцінку по усім предметам для переданого студента. Оцінку округліть до 2-го знаку після коми.
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

//Створіть функцію яка повертає інформацію загального виду по переданому студенту. Повинна бути виведена інформація: курс, ім'я, середня оцінка.
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

//Ствроіть функцію яка повертає імена студентів у алфавітному порядку.
function getStudentsNames(studentsArray = students) {
    let namesArray = [];
    for (let i = 0; i < studentsArray.length; i++) {
        namesArray.push(studentsArray[i].name);
    }
    return namesArray.sort();
}
console.log(`Student names in alphabetical order:`, getStudentsNames());

//Створіть функцію яка повертає кращого студента зі списку по показнику середньої оцінки.
function getBestStudent(studentsArray = students) {
    let marksArray = [];
    for (let i = 0; i < studentsArray.length; i++) {
        marksArray.push(getAverageMark(students[i]));
    }
    return studentsArray[marksArray.indexOf(Math.max(...marksArray))].name;
}
console.log(`Student with the highest average mark:`, getBestStudent());

//Створіть функцію яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.
function calculateWordLetters(string = "тест") {
    let object = {};
    for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        if (object[letter] != undefined) {
            ++object[letter];
        } else {
            object[letter] = 1;
        };
    }
    return object;
}
console.log(`Function that counts a number of identical letters in a word:`, calculateWordLetters());