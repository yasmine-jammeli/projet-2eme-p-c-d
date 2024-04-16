import React from 'react';
import '../css/database.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PlusIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { faMenorah, faComment, faDatabase, faChartBar, faCog, faSignOutAlt, faUserCog } from '@fortawesome/free-solid-svg-icons'; // Import required Font Awesome icons

const Database = () => {
  return (

        <section className="employee">
          <div className="employee-list"> 
          <div className="main-top">
            <h1>Employees List</h1>
            <PlusIcon className='add-icon'/>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Depart</th>
                  <th>Date</th>
                  <th>Join Time</th>
                  <th>Logout Time</th>
                  <th>Action</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td>01 </td>
                <td>01 </td>
                <td>01 </td>
                <td>01 </td>
                <td>01 </td>
                <td>01 </td>
                <td><button>Modify</button></td>
                <td><DeleteIcon className='delete-icon'/></td>
              </tr>
              <tr>
                <td>01 </td>
                <td>01 </td>
                <td>01 </td>
                <td>01 </td>
                <td>01 </td>
                <td>01 </td>
                <td><button>Modify</button></td>
                <td><DeleteIcon className='delete-icon'/></td>
              </tr>
              <tr>
                <td>01 </td>
                <td>01 </td>
                <td>01 </td>
                <td>01 </td>
                <td>01 </td>
                <td>01 </td>
                <td><button>Modify</button></td>
                <td><DeleteIcon className='delete-icon'/></td>
              </tr>
              </tbody>
            </table>
          </div>
        </section>
  );
};

export default Database;
