//below you will see a lot of pseudo code, this is mainly to help me differentiate the different types of `use` used in todays workshop and for me to reference back to when i get confused and or lost in 

import { useEffect, useState } from 'react'; //importing `useState` and `useEffect` hooks from the react package, this allows me to manage the side effects and states in my app



const App = () => { //`App` is declared as the root and serves as the main container for the whole app. Additionally this can be named anything and is not specific to react
  
  const [users, setUsers] = useState([]); //creates an empty array by using `users` as the variable and `useState` to create said variable
  const [error, setError] = useState(null); //again use `useState` to create the variable `error`, `null` stores any error message 

  useEffect (() =>{ //the `useEffect` is what will allows me to manipulate and control the side effects in my component
    const fetchUsers =  async () => { //so inside this `fetchUsers` function I'm using `fetch` in order to make a get request to my API to retrieve data
      try {
        const response = await fetch ('https://jsonplaceholder.typicode.com/users'); //at the end of the url im using /users to direct the api to the info i want to retrieve 
        //the await fetch expression tell my code to literally wait for a response to come back
        if (!response.ok) {
          throw new Error(`Failed to Fetch`);
        }
        const data = await response.json ();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUsers(); //calling `fetchUsers` inside my `useEffect` triggers the actual data fetching process
   
  }, []);
  

  return ( //return component allows me to actually display the info on the screen
    <> 
    <h1>Contact List</h1>
    {error && <p>Error: {error} </p>} 

    {!error && (
      <ul>
        {users.map(user =>( 
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email} </p> 
            
            <p>Phone: {user.phone}</p>
          </li>
        ))}
      </ul>
    )}
      
    </>
  );
};

export default App
