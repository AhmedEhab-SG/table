const form = document.querySelector("form");
const studentName = document.querySelectorAll(".userInput")[0];
const studentGrade = document.querySelectorAll(".userInput")[1];

const sortTable = document.querySelectorAll("select")[0];
const filterTable = document.querySelectorAll("select")[1];

const container = document.querySelector(".container");
const createTable = document.createElement("table");
container.appendChild(createTable);

let studentsArr = [];

formEvent(form, studentsArr, studentName, studentGrade);

tableEvent(createTable, studentsArr);

sortEvent(studentsArr, createTable);

filterEvent(studentsArr, createTable);
