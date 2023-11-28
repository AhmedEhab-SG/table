const getinitClass = (
  studentsArr,
  pascalCaseName,
  grade,
  department,
  imgPath
) => {
  if (studentsArr.length === 0) {
    studentsArr.push(new Student(pascalCaseName, grade, department, imgPath));
  } else {
    studentsArr.map((student) => {
      if (pascalCaseName == student.name) {
        throw Error("the name must be unquie");
      }
    });
    studentsArr.push(new Student(pascalCaseName, grade, department, imgPath));
  }
};

/*----------------------------------------------------------*/

const formEvent = (targetForm, studentsArr, studentName, studentGrade) => {
  targetForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const raidoChecked = document.querySelector(
      "input[name=department]:checked"
    );

    const name = studentName.value;
    const grade = studentGrade.value;
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
};

/*-----------------------------------------------------------*/

const tableEvent = (targetTable, studentsArr) => {
  targetTable.addEventListener("click", function (e) {
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
      targetTable.removeChild(tr);
    }
  });
};

/*-------------------------------------------------------------*/

const createTableObj = (name, grade, imgPath, department) => {
  const createTr = document.createElement("tr");
  const nameTd = document.createElement("td");
  const gradeTd = document.createElement("td");
  const imgTd = document.createElement("td");
  const createImgTag = document.createElement("img");

  nameTd.textContent = name;
  gradeTd.textContent = grade;
  imgTd.appendChild(createImgTag).src = imgPath;

  createTr.append(nameTd, gradeTd, imgTd);
  createTr.classList.add(department);
  createTable.appendChild(createTr);
};

/*--------------------------------------------------------*/

const reCreateTableObj = (tableObj, studentsArr) => {
  tableObj.textContent = "";
  studentsArr.map(({ name, grade, imgSrc, department }) => {
    createTableObj(name, grade, imgSrc, department);
  });
};

/*-----------------------------------------------------------*/

const sortEvent = (studentsArr, targetTable) => {
  sortTable.addEventListener("change", function () {
    if (sortTable.value === "name") {
      studentsArr.sort((a, b) => (a.name < b.name ? -1 : 1));
      reCreateTableObj(targetTable, studentsArr);
    }
    if (sortTable.value === "grade") {
      studentsArr.sort((a, b) => b.grade - a.grade);
      reCreateTableObj(targetTable, studentsArr);
    }
  });
};

/*-------------------------------------------------------------*/

const filterEvent = (studentsArr, targetTable) => {
  filterTable.addEventListener("change", function () {
    if (filterTable.value === "none") {
      reCreateTableObj(targetTable, studentsArr);
    }
    if (filterTable.value === "more60") {
      const filteredArr = studentsArr.filter((student) => student.grade >= 60);
      reCreateTableObj(targetTable, filteredArr);
    }
    if (filterTable.value === "less60") {
      const filteredArr = studentsArr.filter((student) => student.grade < 60);
      reCreateTableObj(targetTable, filteredArr);
    }
  });
};

/*-----------------------------------------------------------*/
