import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";


export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark text-light">
      <div class="container-fluid">
        
        <Link class="navbar-brand text-white" to="/">
                HOME
              </Link>
        <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">

              <Link class="nav-link text-white" to="/write">
                Add Blog
              </Link>
            </li>
            
          </ul>

          
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
          <ul class="navbar-nav  mb-2 mb-lg-0 mx-4">
          
            {user ? (
              <Link to="/settings">
                <img className="topImg" src={PF + user.profilePic} alt="" />
              </Link>
            ) : (
              <ul className="topList">
                <li className="topListItem">
                  <Link className="link text-white" to="/login">
                    Login
                  </Link>
                </li>
                <li className="topListItem">
                  <Link className="link text-white" to="/register">
                    Register
                  </Link>
                </li>
              </ul>
            )}
            <li class="nav-item ">
              <a class="nav-link text-white" onClick={handleLogout} href="#" >{user && "LOGOUT"}</a>

            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}
