import React from "react";
import { AvatarImage } from "./AvatarImage";

const Avatar = ({ user }) => {
  return (
    <table border="1" cellPadding="8">
      <tbody>
        <tr>
          <td rowSpan="3" align="center">
            <AvatarImage />
          </td>
          <td><b>Name</b></td>
          <td>{user.name}</td>
        </tr>

        <tr>
          <td><b>Email</b></td>
          <td>{user.email}</td>
        </tr>

        <tr>
          <td><b>Phone</b></td>
          <td>{user.phone}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Avatar;
