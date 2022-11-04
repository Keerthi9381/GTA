import React from 'react';
import Logo from '../images/logo.png'


/*const Header = () => {
    return ( 
        <div>
            <nav classNameName="navbar navbar-light">
  <div classNameName="container-fluid">
                    <a classNameName="navbar-brand" href="#">
                        <table>
                            <tr>
                                 <td><img src={Logo} alt="Logo" width="60" height="60" classNameName="d-inline-block " /></td>
                                <td><center><h1 >Group Task Assigner</h1></center></td>
                            </tr>
                        </table>
                        <form className="d-flex">
      <button className="btn btn-outline-success" type="submit">LOGIN</button>
      <button className="btn btn-outline-success" type="submit">Contact Admin</button>
    </form>
                        
                        
      
     
    </a>
  </div>
</nav>
        </div>

     );
}*/

const Header = () => {
    return (
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            {/* <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg> */}
            <img
              src={Logo}
              alt="Logo"
              width="60"
              height="60"
              classNameName="d-inline-block "
            />
            <span className="fs-4">
              <h1>
                <b>&nbsp;&nbsp;GROUP TASK ASSIGNER</b>
              </h1>
            </span>
          </a>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="/" className="nav-link">
                GTA
              </a>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link">
                LOGIN
              </a>
            </li>
            <li className="nav-item">
              <a href="/signup" className="nav-link">
                SIGN UP
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link active" aria-current="page">
                Contact Admin
              </a>
            </li>
          </ul>
        </header>
      </div>
    );
}
 
export default Header;

