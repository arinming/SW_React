import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { AxiosError } from 'axios';

function Users() {
  const [todoList, setTodoList] = useState(null);

  // const data = () => {
  //   fetch('http://localhost:8080/api/sheetmusics')
  //     .then((reponse) => reponse.json())
  //     .then((data) => setTodoList(data));
  // }

  const fetchData = async () => {
    console.log('api요청');
    try {
      const response = await Axios.get(`http://3.35.216.190/api/sheetmusics`, { withCredentials: true });
      setTodoList(response);
      console.log(todoList);
    } catch (e) {
      if(e instanceof AxiosError){
        console.log(e.title);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='App'>
      <h1>TODO LIST</h1>
      {todoList}
    </div> 
  );
  }

  
  

export default Users;