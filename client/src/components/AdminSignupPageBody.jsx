import React, { Component } from 'react';
import Register from '../images/register2.PNG'

const AdminSignupPageBody = () => {
    return ( 
<>
      <center>
        <h3>
          <b>REGISTER AS ADMIN</b>
        </h3>
        <table>
          <tr>
            <td>
              <img src={Register} width="500" height="600"></img>
            </td>
            <td>
              <form>
                <div className="form-row">
                  <table>
                    <tr className="form-group">
                      <td>
                        <label for="empid">
                          <b>Employee ID:</b>
                        </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          id="empid"
                          placeholder="Enter your Employee ID"
                          required
                        />
                      </td>
                    </tr>
                    <br />
                    <tr>
                      <td>
                        <label for="name">
                          <b>Name:</b>
                        </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Enter your Full Name"
                          required
                        />
                      </td>
                    </tr>
                    <br />
                    <tr>
                      <td>
                        <label for="email">
                          <b>Email:</b>
                        </label>
                      </td>
                      <td>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Enter your official Mail ID"
                          required
                        />
                      </td>
                    </tr>
                    <br />
                    <tr>
                      <td>
                        <label for="mobileno">
                          <b>Mobile:</b>
                        </label>
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control"
                          id="mobileno"
                          placeholder="Enter 10 digits only"
                          required
                        />
                      </td>
                    </tr>
                    <br />
                    <tr>
                      <td>
                        <label for="designation">
                          <b>Designation:</b>
                        </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          id="Designation"
                          placeholder="Enter your Designation"
                          required
                        />
                      </td>
                    </tr>
                    <br />
                    <tr>
                      <td>
                        <label for="designation">
                          <b>Department:</b>
                        </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          id="Designation"
                          placeholder="Enter your Department Name"
                          required
                        />
                      </td>
                    </tr>
                    <br />
                    <tr>
                      <td>
                        <label for="inputPassword4">
                          <b>Set Password:</b>
                        </label>
                      </td>
                      <td>
                        <input
                          type="password"
                          className="form-control"
                          id="inputPassword4"
                          placeholder="Enter New Password"
                          required
                        />
                      </td>
                    </tr>
                    <br />
                    <tr>
                      <td>
                        <label for="inputPassword4">
                          <b>Re-enter Password:</b>
                        </label>
                      </td>
                      <td>
                        <input
                          type="password"
                          className="form-control"
                          id="inputPassword4"
                          placeholder="Re-Enter New Password"
                          required
                        />
                      </td>
                    </tr>
                    <br />
                    <tr colspan="2">
                      <center>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button type="submit" className="btn btn-primary">
                          SUBMIT
                        </button>
                      </center>
                    </tr>
                  </table>
                </div>
              </form>
            </td>
          </tr>
        </table>
      </center>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
     );
}
 
export default AdminSignupPageBody;