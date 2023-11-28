const form = document.querySelector("form");
const studentName = document.querySelectorAll(".userInput")[0];
const studentGrade = document.querySelectorAll(".userInput")[1];

const sortTable = document.querySelectorAll("select")[0];
const filterTable = document.querySelectorAll("select")[1];

const container = document.querySelector(".container");
const createTable = document.createElement("table");
container.appendChild(createTable);

let studentsArr = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const raidoChecked = document.querySelector("input[name=department]:checked");

  const grade = studentGrade.value;
  const name = studentName.value;
  const department = raidoChecked.value;

  const pascalCaseName = pascalCase(name, "please a vaild Name");

  getinitClass(studentsArr, pascalCaseName, grade, department, "img/bin.png");

  createTableObj(
    studentsArr[studentsArr.length - 1].name,
    studentsArr[studentsArr.length - 1].grade,
    studentsArr[studentsArr.length - 1].imgSrc,
    studentsArr[studentsArr.length - 1].department
  );
});

createTable.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    const td = e.target.offsetParent;
    const tr = td.parentNode;
    const trName = tr.children[0].textContent;
    for (let i = 0; i < studentsArr.length; i++) {
      if (trName === studentsArr[i].name) {
        studentsArr.splice(i, 1);
        break;
      }
    }
    createTable.removeChild(tr);
  }
});

sortTable.addEventListener("change", function () {
  if (sortTable.value === "name") {
    studentsArr.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
    });
    reCreateTableObj(createTable, studentsArr);
  }
  if (sortTable.value === "grade") {
    studentsArr.sort((a, b) => b.grade - a.grade);
    reCreateTableObj(createTable, studentsArr);
  }
});

filterTable.addEventListener("change", function () {
  if (filterTable.value === "none") {
    reCreateTableObj(createTable, studentsArr);
  }
  if (filterTable.value === "less60") {
    const filteredArr = studentsArr.filter((student) => student.grade > 60);
    reCreateTableObj(createTable, filteredArr);
  }
  if (filterTable.value === "more60") {
    const filteredArr = studentsArr.filter((student) => student.grade <= 60);
    reCreateTableObj(createTable, filteredArr);
  }
});
