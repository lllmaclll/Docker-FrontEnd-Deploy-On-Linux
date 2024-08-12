import { useEffect, useState } from "react"

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API}/users`)
    .then(res => res.json())
    .then(result => {
      setUsers(result)
      console.log(result)
    })
  }, [])

  return (
    <>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.email}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
