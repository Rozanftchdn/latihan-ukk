// DOM Elements
const studentForm = document.getElementById("studentForm");
const studentsContainer = document.querySelector(".students");
const nameInput = studentForm["name"];
const ageInput = studentForm["age"];
const rollInput = studentForm["roll"];

/* 
{
  name: '',
  age: number,
  roll: number
}
*/

const students = JSON.parse(localStorage.getItem("students")) || [];

const addStudent = (name, age, roll) => {
  students.push({
    name,
    age,
    roll,
  });

  localStorage.setItem("students", JSON.stringify(students));

  return { name, age, roll };
};

const createStudentElement = ({ name, age, roll }) => {
  // Create elements
  const studentDiv = document.createElement("div");
  const studentName = document.createElement("h2");
  const studentAge = document.createElement("p");
  const studentRoll = document.createElement("p");

  // Fill the content
  studentName.innerText = "Student name: " + name;
  studentAge.innerText = "Student age: " + age;
  studentRoll.innerText = "Student roll: " + roll;

  // Add to the DOM
  studentDiv.append(studentName, studentAge, studentRoll);
  studentsContainer.appendChild(studentDiv);

  studentsContainer.style.display = students.length === 0 ? "none" : "flex";
};

studentsContainer.style.display = students.length === 0 ? "none" : "flex";

students.forEach(createStudentElement);

studentForm.onsubmit = e => {
  e.preventDefault();

  const newStudent = addStudent(
    nameInput.value,
    ageInput.value,
    rollInput.value
  );

  createStudentElement(newStudent);

  nameInput.value = "";
  ageInput.value = "";
  rollInput.value = "";
}

// const segitigaContainer = document.getElementById("segitigaContainer");
const segitigaForm = document.getElementById
("segitigaForm");
const alas = document.getElementById("alas");
const tinggi = document.getElementById("tinggi");
const tampil = document.getElementById("tampilContainer");

const hasilSegitiga = JSON.parse(localStorage.getItem("segitiga")) || [];

const addSegitiga = (alas, tinggi, hasil) => {
    hasilSegitiga.push({
        alas,
        tinggi,
        hasil
    });

    localStorage.setItem("segitiga", JSON.stringify(hasilSegitiga));

    return {alas, tinggi, hasil};
}

const buatSegitiga = ({alas, tinggi, hasil}) => {
    
    const divSegitiga = document.createElement("div");
    const alas1 = document.createElement("p");
    const tinggi1 = document.createElement("p");
    const hasil1 = document.createElement("h2");
    const hr = document.createElement("hr")

    alas1.innerHTML = "alas : " + alas;
    tinggi1.innerHTML = "tinggi : " + tinggi;
    hasil1.innerHTML = "Luas Segitiga : " + hasil;

    divSegitiga.append(alas1, tinggi1, hasil1, hr);
    tampil.appendChild(divSegitiga);

};

hasilSegitiga.forEach(buatSegitiga);

segitigaForm.onsubmit = e => {
    e.preventDefault();

    const vAlas = alas.value;
    const vTinggi = tinggi.value;
    const Luas = (vAlas*vTinggi)/2;

    const SegitigaBaru = addSegitiga(
        vAlas,
        vTinggi,
        Luas
    );

    buatSegitiga(SegitigaBaru);

    alas.value = "";
    tinggi.value = "";

};