function User({usersData}) {
  return (
    <ul>
      {
        usersData.map((user)=><li key={user.id}> {JSON.stringify(user)} </li>)
      }
    </ul>
  )
}

export default User