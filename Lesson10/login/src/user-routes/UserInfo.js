import React from 'react'

const UserInfo = () => {
  const user = JSON.parse(localStorage.getItem('User'))
  return (
    <div>
      {user.email}<br></br>
      {user.pass}
    </div>
  )
}

export default UserInfo