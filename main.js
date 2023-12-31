let students = [
    { name: "Tom", surname: "Cruise", studentId: 1, lessons: { 101: "Math", 102: "Physics" }, grades: { 101: [90, 60], 102: [45, 78] } },
    { name: "Leonardo", surname: "DiCaprio", studentId: 2, lessons: { 101: "Math", 103: "Chemistry" }, grades: { 101: [80, 70], 103: [60, 85] } },
    { name: "Angelina", surname: "Jolie", studentId: 3, lessons: { 102: "Physics", 103: "Chemistry" }, grades: { 102: [75, 88], 103: [70, 92] } },
    { name: "Hugh", surname: "Grant", studentId: 4, lessons: { 104: "Web Dev", 105: "DataBase" }, grades: { 104: [65, 80], 105: [75, 90] } },
    { name: "Iron Man", surname: "Avenger", studentId: 5, lessons: { 101: "Math", 102: "Physics" }, grades: { 101: [90, 60], 102: [45, 78] } },
    { name: "Captain America", surname: "Avenger", studentId: 6, lessons: { 101: "Math", 103: "Chemistry" }, grades: { 101: [80, 70], 103: [60, 85] } },
    { name: "Thor", surname: "Avenger", studentId: 7, lessons: { 102: "Physics", 103: "Chemistry" }, grades: { 102: [75, 88], 103: [70, 92] } },
    { name: "M'Baku", surname: "Avenger", studentId: 8, lessons: { 104: "Web Dev", 105: "DataBase" }, grades: { 104: [65, 80], 105: [75, 90] } },
    { name: "Superman", surname: "Kent", studentId: 9, lessons: { 101: "Math", 102: "Physics" }, grades: { 101: [95, 88], 102: [90, 85] } },
    { name: "Batman", surname: "Wayne", studentId: 10, lessons: { 101: "Physics", 103: "Chemistry" }, grades: { 101: [85, 90], 103: [88, 92] } },
    { name: "Wonder Woman", surname: "Prince", studentId: 11, lessons: { 102: "Physics", 104: "Web Dev" }, grades: { 102: [92, 78], 104: [85, 90] } },
    { name: "Spider-Man", surname: "Parker", studentId: 12, lessons: { 101: "Math", 105: "DataBase" }, grades: { 101: [78, 85], 105: [90, 95] } },
    { name: "Captain Marvel", surname: "Danvers", studentId: 13, lessons: { 103: "Chemistry", 104: "Web Dev" }, grades: { 103: [88, 95], 104: [80, 85] } },
    { name: "Flash", surname: "Allen", studentId: 14, lessons: { 102: "Physics" }, grades: { 102: [85, 88] } },
    { name: "Black Widow", surname: "Romanoff", studentId: 15, lessons: { 105: "DataBase", 103: "Chemistry" }, grades: { 105: [92, 88], 103: [78, 85] } },
    { name: "Green Lantern", surname: "Jordan", studentId: 16, lessons: { 104: "Web Dev", 105: "DataBase" }, grades: { 104: [85, 90], 105: [88, 92] } },
    { name: "Aquaman", surname: "Curry", studentId: 17, lessons: { 103: "Chemistry", 104: "Web Dev" }, grades: { 103: [78, 85], 104: [90, 95] } },
    { name: "Hulk", surname: "Banner", studentId: 18, lessons: { 102: "Physics", 104: "Web Dev" }, grades: { 102: [92, 88], 104: [85, 90] } },
    { name: "Thor", surname: "Odinson", studentId: 19, lessons: { 101: "Math", 102: "Physics" }, grades: { 101: [95, 92], 102: [88, 90] } },
    { name: "Doctor Strange", surname: "Strange", studentId: 20, lessons: { 105: "DataBase", 103: "Chemistry" }, grades: { 105: [85, 88], 103: [90, 92] } },
    { name: "Black Panther", surname: "T'Challa", studentId: 21, lessons: { 104: "Web Dev", 105: "DataBase" }, grades: { 104: [78, 85], 105: [92, 90] } },
    { name: "Ant-Man", surname: "Lang", studentId: 22, lessons: { 103: "Chemistry", 104: "Web Dev" }, grades: { 103: [90, 92], 104: [85, 88] } },
    { name: "Captain America", surname: "Rogers", studentId: 23, lessons: { 101: "Math", 105: "DataBase" }, grades: { 101: [88, 90], 105: [92, 78] } },
    { name: "Hande", surname: "Erçel", studentId: 121, lessons: { 101: "Math", 102: "Physics" }, grades: { 101: [85, 88], 102: [90, 92] } },
    { name: "Aras", surname: "Bulut İynemli", studentId: 122, lessons: { 101: "Math", 103: "Chemistry" }, grades: { 101: [88, 90], 103: [92, 85] } },
    { name: "Demet", surname: "Özdemir", studentId: 123, lessons: { 102: "Physics", 104: "Web Dev" }, grades: { 102: [78, 85], 104: [90, 95] } },
    { name: "Can", surname: "Yaman", studentId: 124, lessons: { 101: "Math", 103: "Chemistry" }, grades: { 101: [92, 88], 103: [85, 90] } },
    { name: "Serkan", surname: "Çayoğlu", studentId: 125, lessons: { 102: "Physics", 104: "Web Dev" }, grades: { 102: [90, 92], 104: [88, 85] } },
    { name: "Hazal", surname: "Kaya", studentId: 126, lessons: { 101: "Math", 105: "DataBase" }, grades: { 101: [85, 88], 105: [90, 92] } },
    { name: "Çağatay", surname: "Ulusoy", studentId: 127, lessons: { 102: "Physics", 105: "DataBase" }, grades: { 102: [78, 85], 105: [92, 90] } },
    { name: "Beren", surname: "Saat", studentId: 128, lessons: { 103: "Chemistry", 104: "Web Dev" }, grades: { 103: [90, 92], 104: [85, 88] } },
    { name: "Engin", surname: "Ağlar", studentId: 129, lessons: { 101: "Math", 105: "DataBase" }, grades: { 101: [92, 85], 105: [78, 90] } },
    { name: "Cemre", surname: "Baysel", studentId: 130, lessons: { 102: "Physics", 105: "DataBase" }, grades: { 102: [85, 90], 105: [88, 92] } },
    { name: "Kenan", surname: "Doğulu", studentId: 150, lessons: { 101: "Math", 103: "Chemistry" }, grades: { 101: [85, 88], 103: [90, 92] } },
    { name: "Serhat", surname: "Teoman", studentId: 102, lessons: { 101: "Math", 103: "Chemistry" }, grades: { 101: [88, 90], 103: [92, 85] } },
    { name: "Özge", surname: "Özpirinçci", studentId: 103, lessons: { 102: "Physics", 104: "Web Dev" }, grades: { 102: [78, 85], 104: [90, 95] } },
    { name: "Kadir", surname: "Doğulu", studentId: 104, lessons: { 101: "Math", 103: "Chemistry" }, grades: { 101: [92, 88], 103: [85, 90] } },
    { name: "Bülent", surname: "İnal", studentId: 105, lessons: { 102: "Physics", 104: "Web Dev" }, grades: { 102: [90, 92], 104: [88, 85] } },
    { name: "Burcu", surname: "Biricik", studentId: 106, lessons: { 101: "Math", 105: "DataBase" }, grades: { 101: [85, 88], 105: [90, 92] } },
    { name: "Barış", surname: "Arduç", studentId: 107, lessons: { 102: "Physics", 105: "DataBase" }, grades: { 102: [78, 85], 105: [92, 90] } },
    { name: "Ceyda", surname: "Düvenci", studentId: 108, lessons: { 103: "Chemistry", 104: "Web Dev" }, grades: { 103: [90, 92], 104: [85, 88] } },
    { name: "Buğra", surname: "Gülsoy", studentId: 109, lessons: { 101: "Math", 105: "DataBase" }, grades: { 101: [92, 85], 105: [78, 90] } },
    { name: "Aslı", surname: "Enver", studentId: 110, lessons: { 102: "Physics", 105: "DataBase" }, grades: { 102: [85, 90], 105: [88, 92] } },
    { name: "Tansu", surname: "Biçer", studentId: 101, lessons: { 101: "Math", 102: "Physics" }, grades: { 101: [85, 88], 102: [90, 92] } },
    { name: "Serhat", surname: "Teoman", studentId: 102, lessons: { 101: "Math", 103: "Chemistry" }, grades: { 101: [88, 90], 103: [92, 85] } },
    { name: "Özge", surname: "Özpirinçci", studentId: 103, lessons: { 102: "Physics", 104: "Web Dev" }, grades: { 102: [78, 85], 104: [90, 95] } },
    { name: "Kadir", surname: "Doğulu", studentId: 104, lessons: { 101: "Math", 103: "Chemistry" }, grades: { 101: [92, 88], 103: [85, 90] } },
    { name: "Bülent", surname: "İnal", studentId: 105, lessons: { 102: "Physics", 104: "Web Dev" }, grades: { 102: [90, 92], 104: [88, 85] } },
    { name: "Burcu", surname: "Biricik", studentId: 106, lessons: { 101: "Math", 105: "DataBase" }, grades: { 101: [85, 88], 105: [90, 92] } },
    { name: "Barış", surname: "Arduç", studentId: 107, lessons: { 102: "Physics", 105: "DataBase" }, grades: { 102: [78, 85], 105: [92, 90] } },
    { name: "Ceyda", surname: "Düvenci", studentId: 108, lessons: { 103: "Chemistry", 104: "Web Dev" }, grades: { 103: [90, 92], 104: [85, 88] } },
    { name: "Buğra", surname: "Gülsoy", studentId: 109, lessons: { 101: "Math", 105: "DataBase" }, grades: { 101: [92, 85], 105: [78, 90] } },
    { name: "Aslı", surname: "Enver", studentId: 110, lessons: { 102: "Physics", 105: "DataBase" }, grades: { 102: [85, 90], 105: [88, 92] } },
    { name: "Engin", surname: "Günaydın", studentId: 120, lessons: { 101: "Math", 103: "Chemistry" }, grades: { 101: [85, 88], 103: [90, 92] } },

];

let lessons = [
   { id: 101, name:"Math",credit:6},
   { id: 102, name:"Physics",credit:4},
   { id: 103, name:"Chemistry",credit:4},
   { id: 104, name:"Web Dev",credit:6},
   { id: 105, name:"DataBase",credit:4},

]

// create a student class and saved us from repeating our transactions
class Student{
    constructor(name, surname , studentId){
        this.studentId = studentId;
        this.name = name;
        this.surname = surname;
        this.lessons= [];
    }
    
}

// we also did lesson class 
class Lesson{
    constructor(lesson, lessonId, credit) {
        this.lessonId = lessonId;
        this.lesson = lesson;
        this.credit = credit,
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
}

// I kept student data in my js file. thanks to and render funtion i can see my data with correctly
function renderStudentList(){
    const studentList = document.getElementById('student-list')
    studentList.innerHTML ='';

    if(students.length ===0){
        studentList.innerHTML = `<p>ogr yok</p>`
    }else{
        students.forEach(student =>{
            const lessons = student.lessons ? Object.values(student.lessons).join(', ') : '';
            // ı use backtic for adding innerhtml and ı completly by index file
            const studentDiv = `<tr>
            <td>${student.studentId}</td>
            <td>${student.name}</td>
            <td>${student.surname}</td>
            <td>${lessons}</td>
            <td><a href="#" data-id="${student.studentId}" class="delete">Delete</a></td>

            </tr>`
        studentList.insertAdjacentHTML('beforeend', studentDiv);
        })
    }
}
function renderCourseList(){
    const courseList = document.getElementById('course-list')
    courseList.innerHTML ='';

    if(lessons.length ===0){
        courseList.innerHTML = `<p>kurs yok</p>`
 
    }else{
        lessons.forEach(lesson =>{
            const lessonDiv = `<tr>
            <td>${lesson.id}</td>
            <td>${lesson.name}</td>
            <td>${lesson.credit}</td>
            <td><a href="#" data-id="${lesson.id}" class="delete">Delete</a></td>
            <td><a href="#" data-id="${lesson.id}" class="show-student">Show Students</a></td>
            </tr>`
        courseList.insertAdjacentHTML('beforeend', lessonDiv);
        })
    }
}


// thanks to this function, we can create our renderings every time the page is opened.
function renderAll() {
    renderStudentList();
    renderCourseList();
}

window.onload = renderAll;


// create ui class for easy operation
class UI{
    
    // ı can add student from form to table 
    addStudentToList(student){
        const list = document.getElementById('student-list');

        var html = `
            <tr>
                <td>${student.studentId}</td>
                <td>${student.name}</td>
                <td>${student.surname}</td>
                <td><a href="#" data-id="${student.studentId}" class="delete">Delete</td>
            </tr>
        `;

        list.innerHTML += html;
    }

    // ı can add student from student table to course table 
    addStudentToCourse(a) {
        const list = document.getElementById('student-info');
        console.log(list)

        let html = `
            <tr>
                <td>${a.id}</td>
                <td>${a.name}</td>
                <td>${a.surname}</td>
                <td>${a.midterm}</td>
                <td>${a.final}</td>

            </tr>
        `;
    
        list.innerHTML += html;
        console.log(list);
    }
    
    // ı can add course from form to table 
    addCourseToList(lesson) {
        const coursesList = document.getElementById('course-list')
        const courseHtml = `
            <tr>
                <td>${lesson.lessonId}</td>
                <td>${lesson.lesson}</td>
                <td>${lesson.credit}</td>
                <td><a href="#" data-id="${lesson.id}" class="delete">Delete</td> 
                <td><a href="#" data-id="${lesson.id}" class="show-student">Show Students</td> 
        </tr>
        `;
        
        coursesList.innerHTML += courseHtml;
        console.log(coursesList)
    }


    //ı can see student by my search
    showStudent(a) {
        const searchStudent = document.getElementById('student-list');
        const filteredStudents = students.filter(student => student.name.includes(a));
    
        // Tabloyu temizle
        searchStudent.innerHTML = '';
    
        // Filtrelenmiş öğrencileri tabloya ekle
        filteredStudents.forEach(filteredStudent => {
            const html = `
                <tr>
                    <td>${filteredStudent.studentId}</td>
                    <td>${filteredStudent.name}</td>
                    <td>${filteredStudent.surname}</td>
                    <td><a href="#" data-id="${filteredStudent.studentId}" class="delete">Delete</a></td>
                </tr>
            `;
            searchStudent.insertAdjacentHTML('beforeend', html);
        });
    }
    
    //ı can see student about in the class. 
    showStudentsbyLesson(courseid){
        console.log(courseid)
       
        const studentinfo = document.getElementById('student-info');
        studentinfo.innerHTML = `<h3>${courseid}</h3>`;

        students.forEach(student =>{
            const lessons = Object.keys(student.lessons).join(", ");
            if(lessons.includes(courseid) ){
                const midterm = student.grades[courseid][0]
                const final = student.grades[courseid][1]
                const score = midterm*0.4 + final*0.6;
                //ı use function in the same class for compute rade
                let grade = this.executeGrade(score);
                const passFail = grade === 'Fail' ? 'Fail' : 'Pass';
                var showhtml = `
                
                    <tr>
                        <td>${student.studentId}</td>
                        <td>${student.name}</td>
                        <td>${student.surname}</td>
                        <td>${midterm}</td>
                        <td>${final}</td>
                        <td>${score}</td>
                        <td>${grade}</td>
                        <td>${passFail}</td>
                    </tr>
                `;

                studentinfo.insertAdjacentHTML('beforeend', showhtml);
                
                    }
          
        });
        const content = document.querySelector('.content');
        content.classList.add('active');
    }

    

    executeGrade(score) {
        let grade = '';

        if (score >= 90 && score <= 100) {
            grade = 'A';
        } else if (score >= 80 && score < 90) {
            grade = 'B';
        } else if (score >= 70 && score < 80) {
            grade = 'C';
        } else if (score >= 60 && score < 70) {
            grade = 'D';
        } else {
            grade = 'Fail';
        }

        return grade;
    }

    //it delete input file after the enter
    clearControls(){
        const name = document.getElementById('name').value="";
        const dept = document.getElementById('surname').value="";
        const lesson = document.getElementById('id').value="";
    
    }

    //if ı can delete it delete student
    deleteStudent(student){
        if(student.classList.contains('delete')){
            student.parentElement.parentElement.remove();
            //2 parent elements because we want to reach from td to tr
            return true;
        }
    }
    deleteCourse(course){
        if(course.classList.contains('delete')){
            course.parentElement.parentElement.remove();
            //2 tane parent element yapmamızın nedeni tdden trye ulaşmak istememiz
            return true;
        }
    }


    // ı can create alert for the some messages
    showAlertaddnew(message ,classname){
        var alert = `
        <div class="alert alert-${classname}">${message}</div>
        `;
    const row = document.querySelector(".adding")
    //beforeBegin, afterBegin, beforeEnd, afterEnd
    row.insertAdjacentHTML('beforeBegin', alert)
    
    setTimeout(()=>{
        document.querySelector('.alert').remove()
    },2000)}

    showAlertnormal(message ,classname){
        var alert = `
        <div class="alert alert-${classname}">${message}</div>
        `;
    const row = document.querySelector(".tableshow")
    row.insertAdjacentHTML('afterEnd', alert)
    
    setTimeout(()=>{
        document.querySelector('.alert').remove()
    },2000)}
}


//thanks to this class ı can see the student information by the lesson
class a{
    constructor(id,name,surname,midterm,final){
        this.id=id;
        this.name=name;
        this.surname=surname;
        this.midterm=midterm;
        this.final=final;

    }
}



let courseId; // define courseId outside

document.getElementById('course-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('show-student')) {
        courseId = e.target.getAttribute('data-id');
        console.log(courseId);
    }
});

document.getElementById('addstudentToCourse').addEventListener('submit', (e) => {
    const id = document.getElementById('studentid').value;
    const name = document.getElementById('studentname').value;
    const surname = document.getElementById('studentsurname').value;
    const midterm = document.getElementById('midterm').value;
    const final = document.getElementById('final').value;
    
    console.log("midterm:", midterm); 
    console.log("name:", name);

    const stu = new a(id,name,surname,midterm,final);

    const existingStudent = students.find(student => student.studentId == id);
    const ui = new UI();

    if (!existingStudent) {
        ui.showAlertnormal("There is no such student among the students.", "warning")
    } else {
        // Eğer öğrenci zaten kayıtlıysa, hangi derslere kayıtlı olduğunu kontrol et
        const existingStudentLessons = Object.keys(existingStudent.lessons || {});
    
        if (existingStudentLessons.includes(courseId)) {
            ui.showAlertnormal("This student is already enrolled in this course.", "warning")

        } else {
            ui.addStudentToCourse(stu);
            e.preventDefault()
        }
    }
    console.log("ID:", stu.id);

    const studentsInCourse = students.filter(student => student.lessons && student.lessons[courseId]);

    console.log(studentsInCourse)

    

    e.preventDefault();
});

document.getElementById('add-course').addEventListener('submit', (e) =>{
     
    const lessonid = document.getElementById('lessonId').value;
    const lessonname = document.getElementById('lessonName').value;
    const credit = document.getElementById('credit').value;

    const lesson = new Lesson(lessonname, lessonid, credit);

    const existingCourse = lessons.find(lesson => lesson.id == lessonid);

    const ui = new UI();

    if(lessonid==='' || lessonname ==='' || credit=== ''  ){
        alert('doğru bir şekilde doldurunuz, varning');
    }else if(existingCourse){
        alert('farklı bi id girin')
    }
    else{
        ui.addCourseToList(lesson);
        lessons.push(lesson)
        console.log(lesson)


        
    }
    //stopte referesh
    e.preventDefault();
})


document.getElementById('new-student').addEventListener('submit', (e) => {
    
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const id = document.getElementById('id').value;

    // create student object
    const student = new Student(name, surname, id);

    // check id kontrol
    const existingStudent = students.find(student => student.studentId == id);
    // create UI object
    const ui = new UI();

    if(name==='' || surname ==='' || id=== ''  ){
        alert('doğru bir şekilde doldurunuz, varning');
    }else if(existingStudent){
        alert('farklı bi id girin')
    }
    else{
        ui.addStudentToList(student);
        students.push(student)
        ui.showAlertaddnew('öğrenci eklendi', "correct")
        console.log(students)
        
        // clear controls
        ui.clearControls();

    }
    e.preventDefault();

});

document.getElementById('search-box').addEventListener('click', (e)=>{
    const searchinput = document.getElementById('searcinput').value;
    console.log(searchinput)

    const ui = new UI;
    ui.showStudent(searchinput)
})

// ı want to change gradescale but ı could not :/
document.querySelectorAll('.gradeButton').forEach(button => {
    button.addEventListener('click', () => {
        const selectedGrade = parseInt(button.value, 10);
        const ui = new UI;
        ui.executeGrade(selectedGrade)
        
        
    });
});

//ı can reach student list and ı can delete 
document.getElementById('student-list').addEventListener('click', (e)=>{
        // console.log(e.target)
        const ui = new UI();
        ui.deleteStudent(e.target);

})

//for this attribute ı can create modal card for showing students
let modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

span.addEventListener("click",()=>{modal.style.display="none"});


document.getElementById('course-list').addEventListener('click', (e)=>{
    const ui = new UI();
    ui.deleteCourse(e.target);
    if (e.target.classList.contains('show-student')) {
        const lessonId = e.target.getAttribute('data-id');
        ui.showStudentsbyLesson(lessonId);
        modal.style.display = "block";
    }
})


window.onclick = function(event){
    if(event.target===modal){
        modal.style.display = "none";
    }
}


//start buttonlara tıklayarak ayrı ayrı formlarıma ulaşım sağlayailiyorum. ilk önce onları görünmez yapıp sonra classlistlerine ulaşıp görünür kılıyorum
document.querySelectorAll(".start-btn").forEach(button => {
    button.addEventListener("click", () => {
        //tıklanan butonun altındaki formu bulur
        const targetForm = button.nextElementSibling;
        console.log(targetForm)

        // Hedef formu göster, birkez daha tıklayınca formu kaldırır.
        if (targetForm) {
            if (targetForm.classList.contains("active")) {
                targetForm.classList.remove("active");
            } else {
                targetForm.classList.add("active");
            }
        }
    });
})


document.getElementById("wiewStudent").addEventListener("click",()=>{
    const studentTable = document.querySelector(".students");
    if (studentTable) {
        if (studentTable.classList.contains("active")) {
            studentTable.classList.remove("active");
        } else {
            studentTable.classList.add("active");
        }
    }
})
document.getElementById("wievCourses").addEventListener("click",()=>{
    const coursetable = document.querySelector(".courses");
    if (coursetable) {
        if (coursetable.classList.contains("active")) {
            coursetable.classList.remove("active");
        } else {
            coursetable.classList.add("active");
        }
    }
})