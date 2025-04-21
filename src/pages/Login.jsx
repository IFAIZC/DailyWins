import './Login.css';

export default function Login() {
  return (
    <div className="login-container">
      <form>
        <label>Email</label>
        <input type="text" />
        <label>Password</label>
        <input type="text" />
        <button>Login</button>
      </form>
    </div>
  )
}