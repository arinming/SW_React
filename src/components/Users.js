import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  useEffect(() => {
    axios.get("http://3.35.216.190/api/sheetmusics")
        .then((response) => console.log(response.data));
    }, []);
    
  }
  
  

export default Users;