import {Link} from "react-router-dom";

export default function Login() {

  const onSubmit = (ev) => {
    ev.preventDefault()
  }

  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit} >
          <h1 className="title text-center">
            Hello there, User!
          </h1>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <button className="btn btn-block">Log In</button>
          <p className="message">
            Not Registered? <Link to="/signup"> Create an account</Link>
          </p>

        </form>
      </div>
    </div>
  )
}