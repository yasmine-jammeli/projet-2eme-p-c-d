import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import "../css/import.css"
import Upload from './upload';

const ImportExcel = () => {
  return (
     <div className='content-container'>
    <div className='main'>
      <div className='header'>
        <h1>Import Users from Excel</h1>
      </div>
        <div className='content'>
          <div className='notice'>
            <div className='icon'>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '180px' }}>
                <FontAwesomeIcon icon={faCircleExclamation} style={{ color: '#ffffff', width: '50px', height: '70px' }} />
              </div>
            </div>
            <div className='txt'>
              <p>Please review the Excel file and make sure it is the correct format: employee_id,first_name,last_name,email,phone,role, department<br/>
              exp:<br/>
              1,John,Doe,john.doe@example.com,555-123-4567, employee,IT</p>
            </div>
          </div>
          <p className='note'>Keep in mind the maximum size of the file (max 10MB and 10,000 users)</p>
          <h1>Excel file </h1>
          
          <Upload/>
        </div>
      </div></div>
  );
};

export default ImportExcel;
