import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  email: string;
}

export default function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  async function getUsers() {
    try {
      const response = await axios.get("https://dummyjson.com/users");

      setUsers(response.data.users);
    } catch (error) {}
  }

  function removeUser(id: number) {
    setUsers((initialUsers) => initialUsers.filter((user) => user.id !== id));
  }

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <div>
        {users.map((user, i) => (
          <div key={i} className="m-4 flex items-center justify-between">
            <div className="flex gap-3 mx-3 my-4">
              <img
                className="rounded-full w-12 h-12 bg-blue-300"
                src={user.image}
                alt="Avatar of user"
              />
              <div className="flex flex-col">
                <p className="font-bold">
                  {user.firstName + " " + user.lastName}
                </p>
                <p className="text-zinc-500 font-semibold">{user.email}</p>
              </div>
            </div>
            <button
              className="bg-cyan-600 px-3 py-1 rounded-md cursor-pointer text-white focus:outline-none"
              onClick={() => removeUser(user.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
