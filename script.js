document.addEventListener('DOMContentLoaded', () => {
    displayStudents();
});
    
function addStudent() {
    let studentName = document.getElementById('studentName').value;
    if (studentName) {
        let students = getStudents();
        students.push(studentName);
        localStorage.setItem('students', JSON.stringify(students));
        displayStudents();
        document.getElementById('studentName').value = ''; // Clear input field
    }
}

function removeStudent(index) {
    let students = getStudents();
    students.splice(index, 1); // Remove the student at the specified index
    localStorage.setItem('students', JSON.stringify(students));
    displayStudents();
}

function getStudents() {
    let storedStudents = localStorage.getItem('students');
    if (storedStudents) {
        return JSON.parse(storedStudents);
    } else {
        return [];
    }
    }

function displayStudents() {
    let students = getStudents();
    let studentList = document.getElementById('studentList');
    studentList.innerHTML = ''; // Clear existing list
    students.forEach((student, index) => {
        let li = document.createElement('li');
        li.textContent = student;

        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function() {
            removeStudent(index);
        };
        
        li.appendChild(removeButton);
        studentList.appendChild(li);
        });
    }

