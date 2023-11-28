class Student {
  #grade;
  constructor(name, grade, department, imgSrc) {
    this.name = name;
    this.department = department;
    this.grade = grade;
    this.imgSrc = imgSrc;
  }

  set grade(grade) {
    this.#grade = grade;
  }

  get grade() {
    return this.#grade;
  }
}
