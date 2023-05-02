import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Update() {
  const { userEmail } = useParams();
  console.log('Email:', userEmail);

  const [userData, setUserData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userEmail) {
          console.log('Request received with email:', userEmail);
          const response = await axios.get(`http://localhost:8000/abc/findone/${userEmail}`);
          console.log('Data fetched successfully');
          const user = response.data;
          console.log(user); // Check the console for user data
          setUserData(user);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchData();
  }, [userEmail]);

  const handleUpdate = async (event) => {
    event.preventDefault();

    try {
      const updatedData = {
        ...userData,
      };

      const response = await axios.put(`http://localhost:8000/abc/update/${userEmail}`, updatedData);

      console.log(response.data);

      // Optionally, you can update the state or show a success message
    } catch (error) {
      console.error('Error updating user:', error.response);
    }
  };

  return (
    <div>
      <h2>Update User Information</h2>
      <div>
        <h3>User Data:</h3>
        <p>First Name: {userData.fname}</p>
        <p>Last Name: {userData.lname}</p>
        <p>Email: {userData.email}</p>
        <p>Password: {userData.password}</p>
      </div>

      <h3>Update User Form:</h3>
      <form>
        <label htmlFor="fname">First Name:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={userData.fname}
          onChange={(e) => setUserData({ ...userData, fname: e.target.value })}
        />

        <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          id="lname"
          name="lname"
          value={userData.lname}
          onChange={(e) => setUserData({ ...userData, lname: e.target.value })}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          name="password"
          value={userData.password}
          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
        />


        <button type="submit" onClick={handleUpdate}>
          Update
        </button>
      </form>
    </div>
  );
}

export default Update;




















//                 OR



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// function Update() {
//   const { userEmail } = useParams();
//   console.log('Email:', userEmail);

//   const [userData, setUserData] = useState({
//     fname: '',
//     lname: '',
//     email: '',
//     password: '',
//   });

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         if (userEmail) {
//           const response = await axios.get(`http://localhost:8000/abc/findone/${userEmail}`);
//           const user = response.data.data;
//           setUserData(user);
//         }
//       } catch (error) {
//         console.error('Error fetching user:', error);
//       }
//     };

//     fetchData();
//   }, [userEmail]);

//   const handleUpdate = async (event) => {
//     event.preventDefault();

//     try {
//       const updatedData = {
//         ...userData,
//         email: email,
//         password: password,
//       };

//       const response = await axios.put(`http://localhost:8000/abc/update/${userEmail}`, updatedData);

//       console.log(response.data);

//       // Optionally, you can update the state or show a success message
//     } catch (error) {
//       console.error('Error updating user:', error.response);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'email') {
//       setEmail(value);
//     } else if (name === 'password') {
//       setPassword(value);
//     } else {
//       setUserData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//   };

//   return (
//     <div>
//       <h2>Update User Information</h2>
//       <div>
//         <h3>User Data:</h3>
//         <p>First Name: {userData.fname}</p>
//         <p>Last Name: {userData.lname}</p>
//         <p>Email: {userData.email}</p>
//         <p>Password: {userData.password}</p>
//       </div>

//       <h3>Update User Form:</h3>
//       <form>
//         <label htmlFor="fname">First Name:</label>
//         <input
//           type="text"
//           id="fname"
//           name="fname"
//           value={userData.fname}
//           onChange={handleInputChange}
//         />

//         <label htmlFor="lname">Last Name:</label>
//         <input
//           type="text"
//           id="lname"
//           name="lname"
//           value={userData.lname}
//           onChange={handleInputChange}
//         />

//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={password}
//           onChange={handleInputChange}
//         />

//         <button type="submit" onClick={handleUpdate}>
//           Update
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Update;



