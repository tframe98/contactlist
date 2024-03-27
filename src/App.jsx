import { useEffect, useState } from 'react';


//write a statement to store the fetched users
//write a state for a loading error
//use the useEffect hook in order to fetch users data

const App = () => {
  
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect (() =>{
    const fetchUsers =  async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); //url that fetches users data 
        if (!response.ok) {
          throw new Error(`Failed to Fetch`);
        }
        const data = await response.json ();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUsers();
   
  }, []);
  

  return (
    <>
    <h1>Contact List</h1>
    {error && <p>Error: {error} </p>}

    {!error && (
      <ul>
        {users.map(user =>(
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email} </p>
            <p>Username: {user.username} </p>
            <p>Phone: {user.phone}</p>
          </li>
        ))}
      </ul>
    )}
      
    </>
  );
};

export default App
