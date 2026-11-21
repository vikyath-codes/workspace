import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import StudentsPage from './pages/StudentsPage';
import StudentFormPage from './pages/StudentFormPage';
import './App.css';
// This is the name used to save our student list in the browser.
const STORAGE_KEY = 'student-management-students';
const DEMO_STUDENTS = [
{ id: 'demo-1', name: 'Olivia Martin', email: 'olivia.martin@edu.com', course: 'Computer Science', year: '2nd Year' },
{ id: 'demo-2', name: 'Liam Wilson', email: 'liam.wilson@edu.com', course: 'Business', year: '1st Year' },
{ id: 'demo-3', name: 'Emma Davis', email: 'emma.davis@edu.com', course: 'Data Science', year: '3rd Year' },
{ id: 'demo-4', name: 'Noah Thomas', email: 'noah.thomas@edu.com', course: 'Design', year: '2nd Year' },
];
function App() {
// Read saved students when the app starts. If there are none, use an empty list.
const [students, setStudents] = useState(() => {
try {
const savedStudents = localStorage.getItem(STORAGE_KEY);
return savedStudents ? JSON.parse(savedStudents) : DEMO_STUDENTS;
} catch {
return DEMO_STUDENTS;
}
});
// Keep the browser's saved copy in sync whenever the list changes.
useEffect(() => {
localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
}, [students]);
// The URL path tells us which simple page to display.
const path = window.location.pathname;
const editMatch = path.match(/^\/edit\/([^/]+)$/);
const studentToEdit = editMatch
? students.find((student) => student.id === editMatch[1])
: null;
// Add a unique id, save the new list, then show the students page.
function addStudent(studentDetails) {
const updatedStudents = [
...students,
{ ...studentDetails, id: Date.now().toString() },
];
localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedStudents));
setStudents(updatedStudents);
window.location.href = '/students';
}
// Replace the matching student while keeping the rest of the list.
function updateStudent(updatedStudent) {
const updatedStudents = students.map((student) =>
student.id === updatedStudent.id ? updatedStudent : student,
);
localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedStudents));
setStudents(updatedStudents);
window.location.href = '/students';
}
// Ask for confirmation, then make a new list without the deleted student.
function deleteStudent(id) {
if (window.confirm('Delete this student?')) {
setStudents(students.filter((student) => student.id !== id));
}
}
// Choose a page based on the current URL.
let page;
if (path === '/students') {
page = <StudentsPage students={students} onDelete={deleteStudent} />;
} else if (path === '/add-student') {
page = <StudentFormPage onSave={addStudent} />;
} else if (editMatch && studentToEdit) {
page = <StudentFormPage student={studentToEdit} onSave={updateStudent} />;
} else {
page = <HomePage students={students} />;
}
// The navbar is shared by every page; the selected page appears below it.
const pageTitle =
path === '/students'
? 'Student directory'
: path === '/add-student'
? 'Add student'
: editMatch
? 'Edit student'
: 'Dashboard';

return (
<div className="app-shell">
<Navbar />
<div className="main-content">
<header className="topbar">
<span className="topbar-title">{pageTitle}</span>
<div className="topbar-actions">
<button className="icon-button" type="button" aria-label="Notifications" title="Notifications">
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></svg>
</button>
<a className="button" href="/add-student">+ Add student</a>
</div>
</header>
{page}
</div>
</div>
);
}
export default App;