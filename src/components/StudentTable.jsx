import { useState } from 'react';

export default function StudentTable({ students, onDelete }) {
  const [query, setQuery] = useState('');
  const filteredStudents = students.filter((student) =>
    `${student.name} ${student.email} ${student.course}`.toLowerCase().includes(query.toLowerCase())
  );
  if (students.length === 0)
    return <p className="empty-state">No students yet. Add your first student to get started.</p>;
  return (
    <>
      <div className="table-toolbar">
        <div className="search-box">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search students..." aria-label="Search students"/>
        </div>
        <span className="course-cell">{filteredStudents.length} student{filteredStudents.length === 1 ? '' : 's'}</span>
      </div>
      <div className="table-wrap">
        {filteredStudents.length === 0 ? <p className="empty-state">No matching students found.</p> : (
          <table className="students-table">
            <thead><tr><th>Student</th><th>Email</th><th>Course</th><th>Year</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td><span className="student-cell"><span className="student-avatar">{student.name.split(' ').map(x => x[0]).join('').slice(0, 2)}</span>{student.name}</span></td>
                  <td className="email-cell">{student.email}</td>
                  <td className="course-cell">{student.course}</td>
                  <td className="year-cell">{student.year}</td>
                  <td><span className="status">Active</span></td>
                  <td><div className="actions">
                    <a className="action-button" href={`/edit/${student.id}`} aria-label={`Edit ${student.name}`}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg></a>
                    <button className="action-button delete" onClick={() => onDelete(student.id)} aria-label={`Delete ${student.name}`}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 6h18M8 6V3h8v3M19 6l-1 15H6L5 6M10 10v7M14 10v7"/></svg></button>
                  </div></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};