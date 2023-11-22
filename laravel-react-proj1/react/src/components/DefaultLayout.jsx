import {Link,Navigate,Outlet} from "react-router-dom";
import {useStateContext} from "../contexts/ContextProvider";

export default function DefaultLayout() {
  const {user, token} = useStateContext()

  if(!token){
    return <Navigate to="/"/>
  }

  const onLogout = (ev) => {
    ev.preventDefault()
  }

  return (
    <div id="defaultLayout">
      <aside>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/users">Users</Link>
      </aside>
      <div className="content">
        <header>
          <div>
            Header
          </div>
          <div>
            {user.name}
            <a href="#" onClick={onLogout} className="btn-logout">Log Out</a>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
      <br/>
    </div>
  )
}
