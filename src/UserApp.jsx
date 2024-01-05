import { useState } from 'react'
import { UserList } from "./components/userList"

export const UserApp = () => {


  const [endPoint, setendPoint] = useState('users')


  const handleFetch = () => {
    setendPoint('comments')
  }

  return (
    <>
      <h1>Lista de Usuarios:</h1>

      <UserList endPoint={endPoint}></UserList>
      <button onClick={handleFetch}>Aqui se llama a la API</button>
    </>
  );
}
