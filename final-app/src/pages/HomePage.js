import { useEffect, useState } from "react";
import { getUsers } from "../services/users";

export function HomePage() {
  const [users, setUsers] = useState();
  // para obtener datos en el inicio del componente se usa useEffect
  useEffect(
    () => {
      //esto se ejecuta cuando se monta el componente
      async function init() {
        const usersData = await getUsers();
        setUsers(usersData);
      }
      init();
      return () => {
        // // esto se ejecuta cuando se desmonta el componente
        // fetch('http://localhost:4000/api/users')
        // .then(response => response.json())
        // .then(data => setUsers(data))
      };
    },
    [] // array de dependencia vacio para ejecutarlo una sola vez
  );

  if (users) {
    return (
      <div>
        <ul>
          {users.users.map((user) => (
            <li>
              Name: {user.name} <br />
              LastName: {user.lastName}
              <br />
              Email: {user.email}
              <br />
              Adress: {user.adress}
              <br />
              Password: {user.password}
              <br />
              <br />
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return <div>Loading</div>; //esto se muestra mientras hace async con los datos
}
