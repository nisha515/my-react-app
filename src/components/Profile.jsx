import React from "react";
import ProfileAvatar from "./ProfileAvatar";

const Profile = ({ user }) => {
  const defaultUser = {
    name: "Guest User",
    email: "guest@gmail.com",
    phone: "9876538899",
    image:
      "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  };

  const finalUser = user || defaultUser;

  return (
    <div style={{ padding: "20px" }}>
      <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
        style={{ width: "600px", marginBottom: "30px" }}
      >
        <tbody>
          <tr>
            <td rowSpan="3" width="120" align="center">
              <ProfileAvatar image={finalUser.image} />
            </td>
            <td><b>Name</b></td>
            <td>{finalUser.name}</td>
          </tr>

          <tr>
            <td><b>Email</b></td>
            <td>{finalUser.email}</td>
          </tr>

          <tr>
            <td><b>Phone</b></td>
            <td>{finalUser.phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
