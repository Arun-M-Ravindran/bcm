import './Login.css';
export default function Login() {

  return (
    <div>
      <div id="login-form-wrap">
        <h2>Login</h2>
        <form id="login-form">
          <p>
            <input type="email" id="username" name="username" placeholder="Username" required /><i class="validation"><span></span><span></span></i>
          </p>
          <p>
            <input type="password" id="email" name="password" placeholder="Password" required /><i class="validation"><span></span><span></span></i>
          </p>
          <p>
            <input type="submit" id="login" value="Login" />
          </p>
        </form>
        <div id="create-account-wrap">
          <p>Not a member? Create Account</p>
          </div>
        </div>
      </div>
      )
  }