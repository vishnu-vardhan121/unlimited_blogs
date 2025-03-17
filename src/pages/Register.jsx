
import { Link, useNavigate } from "react-router-dom";
import "./styles.css"

function Register() {
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("hehhe");
    
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    const user = { username, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/");
  };

  return (
    <div className="main-div">
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/">Login here</Link>.
      </p>
    </div>
    </div>
  );
}

export default Register;
