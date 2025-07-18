import React from "react";
import { useParams } from "react-router-dom";

const Users = () => {
  const { username } = useParams();
  return (
    <div>
      <span>Accessing dynmaic params value number acces methods </span>
    </div>
  );
};

export default Users;
