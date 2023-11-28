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
