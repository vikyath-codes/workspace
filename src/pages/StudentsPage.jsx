import StudentTable from '../components/StudentTable';
export default function StudentsPage({ students, onDelete }) {
return (
<main className="page">
<div className="page-heading">
<div>
<h1>Students</h1>
<p>Manage student records and academic details.</p>
</div>
<a className="button" href="/add-student">+ Add student</a>
</div>
<StudentTable students={students} onDelete={onDelete} />
</main>
);
}