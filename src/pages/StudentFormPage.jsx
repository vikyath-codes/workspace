import StudentForm from '../components/StudentForm';
export default function StudentFormPage({ student, onSave }) {
// An existing student means edit mode; no student means add mode.
const isEditing = Boolean(student);
return (
<main className="page form-page">
<div className="form-card">
  <h1>{isEditing ? 'Edit student' : 'Add a student'}</h1>
  <p>Enter the student's personal and academic information.</p>
  <StudentForm student={student} onSave={onSave} />
</div>
</main>
);
}