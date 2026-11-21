
import { useState } from 'react';

// Starting values used when creating a new student
const emptyStudent = {
  name: '',
  email: '',
  course: '',
  year: '1st Year'
};

export default function StudentForm({ student, onSave }) {

  // Editing starts with existing details
  const [formData, setFormData] = useState(student || emptyStudent);

  // Handle input changes
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    onSave(formData);
  }

  return (
    <form className="student-form" onSubmit={handleSubmit}>

      <label>
        Full name
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Asha Kumar"
          required
        />
      </label>

      <label>
        Email address
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="asha@example.com"
          required
        />
      </label>

      <label>
        Course
        <input
          name="course"
          value={formData.course}
          onChange={handleChange}
          placeholder="e.g. MCA"
          required
        />
      </label>

      <label>
        Year
        <select
          name="year"
          value={formData.year}
          onChange={handleChange}
        >
          <option>1st Year</option>
          <option>2nd Year</option>
          <option>3rd Year</option>
        </select>
      </label>

      <div className="form-actions">

        <a
          className="button secondary"
          href="/students"
        >
          Cancel
        </a>

        <button className="button" type="submit">
          Save student
        </button>

      </div>

    </form>
  );
}
