import { use } from "react"

export default function APIFetch({fetchUsers}) {

    const users = use(fetchUsers);
    console.log(users);

  return (
    <div>
        <h2>API Fetch: {users.length}</h2>
        {
            users.map(user => <li>Name: {user.name} - Company Name: {user.company.name} - City: {user.address.city}</li>)
        }
    </div>
  )
}
