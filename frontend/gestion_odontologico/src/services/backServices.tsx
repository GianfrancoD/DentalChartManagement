import axios from "axios";
import { useEffect, useState } from "react";

export const Backservices = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.post("/user", {
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(users),
        });
        setUsers(response.data);
      } catch (error) {
        console.error("Error of fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      {users.map((user) => {
        <li key={user}>{user}</li>;
      })}
    </>
  );
};
