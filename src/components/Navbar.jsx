const icons = {
  home: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3.5 10.5 12 3l8.5 7.5"/><path d="M5.5 9.5V21h13V9.5M9.5 21v-7h5v7"/></svg>,
  students: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="9" cy="8" r="3"/><path d="M3.5 19c.5-3.4 2.3-5.5 5.5-5.5s5 2.1 5.5 5.5"/><circle cx="17" cy="9" r="2.2"/><path d="M15.5 14.5c3 0 4.7 1.5 5 4.5"/></svg>,
  add: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7.5v9M7.5 12h9"/></svg>,
};

export default function Navbar() {
  const path = window.location.pathname;
  return (
    <aside className="navbar">
      <a className="brand" href="/">
        <span className="brand-mark">
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m3 9 9-5 9 5-9 5-9-5Z"/><path d="M7 11v5c2.7 2 7.3 2 10 0v-5"/></svg>
        </span>
        <span className="brand-text">EduManage</span>
      </a>
      <nav aria-label="Main navigation">
        <a className={`nav-link ${path === '/' ? 'active' : ''}`} href="/" title="Dashboard">{icons.home}<span>Dashboard</span></a>
        <a className={`nav-link ${path === '/students' ? 'active' : ''}`} href="/students" title="Students">{icons.students}<span>Students</span></a>
        <a className={`nav-link ${path === '/add-student' ? 'active' : ''}`} href="/add-student" title="Add student">{icons.add}<span>Add student</span></a>
      </nav>
      <div className="sidebar-footer">
        <span className="avatar">AD</span>
        <span><span className="profile-name">Admin User</span><span className="profile-role">Administrator</span></span>
      </div>
    </aside>
  );
}