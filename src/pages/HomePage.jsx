export default function HomePage({ students }) {
  const studentCount = students.length;
  const courseCount = new Set(students.map((student) => student.course).filter(Boolean)).size;
  const recentStudents = students.slice(-3).reverse();
  return (
    <main className="page">
      <div className="page-heading">
        <div>
          <h1>Overview</h1>
          <p>Welcome back! Here's your student management summary.</p>
        </div>
      </div>
      <section className="stats-grid" aria-label="Student statistics">
        <article className="stat-card">
          <span className="stat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="9" cy="8" r="3"/><path d="M3.5 19c.5-3.4 2.3-5.5 5.5-5.5s5 2.1 5.5 5.5"/><circle cx="17" cy="9" r="2.2"/><path d="M15.5 14.5c3 0 4.7 1.5 5 4.5"/></svg></span>
          <span><span className="stat-label">Total students</span><strong className="stat-value">{studentCount}</strong></span>
        </article>
        <article className="stat-card">
          <span className="stat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></svg></span>
          <span><span className="stat-label">Active students</span><strong className="stat-value">{studentCount}</strong></span>
        </article>
        <article className="stat-card">
          <span className="stat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 20V8l8-4 8 4v12"/><path d="M8 20v-6h8v6M8 10h.01M12 10h.01M16 10h.01"/></svg></span>
          <span><span className="stat-label">Courses</span><strong className="stat-value">{courseCount}</strong></span>
        </article>
        <article className="stat-card">
          <span className="stat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/></svg></span>
          <span><span className="stat-label">Academic year</span><strong className="stat-value">2026</strong></span>
        </article>
      </section>
      <section className="dashboard-grid">
        <article className="panel">
          <header className="panel-header"><h2>Recent students</h2><a className="text-link" href="/students">View all</a></header>
          <table className="mini-table">
            <thead><tr><th>Student</th><th>Course</th><th>Year</th><th>Status</th></tr></thead>
            <tbody>
              {recentStudents.map((student) => (
                <tr key={student.id}>
                  <td><span className="student-cell"><span className="student-avatar">{student.name.split(' ').map(x => x[0]).join('').slice(0, 2)}</span>{student.name}</span></td>
                  <td className="course-cell">{student.course}</td><td className="year-cell">{student.year}</td><td><span className="status">Active</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
        <article className="panel">
          <header className="panel-header"><h2>Recent activity</h2></header>
          <div className="activity-list">
            <div className="activity-item"><span className="activity-dot"/><span className="activity-text"><strong>Student added</strong>Olivia Martin was registered<span className="activity-time">Today, 9:42 AM</span></span></div>
            <div className="activity-item"><span className="activity-dot"/><span className="activity-text"><strong>Record updated</strong>Emma Davis changed course<span className="activity-time">Yesterday, 3:18 PM</span></span></div>
            <div className="activity-item"><span className="activity-dot"/><span className="activity-text"><strong>New registration</strong>Liam Wilson joined Business<span className="activity-time">Nov 20, 11:05 AM</span></span></div>
          </div>
        </article>
      </section>
    </main>
  );
}