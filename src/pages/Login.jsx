
import { Link, useNavigate } from "react-router-dom";
import "./styles.css"

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      navigate("/home");
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    < div className="main-div">
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>.
      </p>
    </div></div>
  );
}

export default Login;
