
import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [showError, setShowError] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username == "user" && formData.password == "password") {
      setShowForm(false);
      setShowError(false);
      setShowSuccess(true);
    } else {
      setShowError(true);
      setShowSuccess(false);
      setShowForm(true);
    }
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div>
      <h1>Login Page</h1>
      {showError ? (<p>Invalid username or password</p>) : null}
      {showSuccess ? (<p>Welcome, {formData.username}!</p>) : null}
      {showForm ? (<form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="username">Username:</label>
          <input name="username" id="username" type="text" placeholder="username" value={formData.username} onChange={handleOnChange} required></input>
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input name="password" id="password" type="password" placeholder="password" value={formData.password} onChange={handleOnChange} required></input>
        </div>

        <button type='submit'>Submit</button>
      </form>) : null}

    </div>
  );
}

export default App;
