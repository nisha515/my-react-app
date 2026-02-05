// import React from "react";
// import Avatar from "./components/Avatar";
// const userData = {
//   name: "Angel",
//   email: "angel@gmail.com",
//   phone: "9874563210",
//   image:
//     "https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png",
// };

// const App = () => {
//   return (
//     <div style={{ padding: "20px" }}>
//       <Avatar user={userData} />
//     </div>
//   );
// };

// export default App;


// import React from "react";
// import Profile from "./components/Profile";

// const App = () => {
//   const users = [
//     {
//       name: "Rohan",
//       email: "rohan@gmail.com",
//       phone: "0458325789",
//       image:
//         "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg",
//     },
//     {
//       name: "Kavya",
//       email: "kavya@gmail.com",
//       phone: "8765435678",
//       image:
//         "https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=0&k=20&c=EqR2Lffp4tkIYzpqYh8aYIPRr-gmZliRHRxcQC5yylY=",
//     },
//   ];

//   return (
//     <div>
//       {users.map((user, index) => (
//         <Profile key={index} user={user} />
//       ))}

 
//       <Profile />
//     </div>
//   );
// };

// export default App;



import UseStateCounter from "./components/UseStateCounter";
import UseReducerCounter from "./components/UseReducerCounter";

const App = () => {
  return (
    <div>
      <UseStateCounter />
      <hr style={{ margin: "40px 0" }} />
      <UseReducerCounter />
    </div>
  );
};

export default App;
