import React from 'react'
import UserCard from './UserCard'

const Users = ({users}) => {
  return (
    <section>
      <div className="container">
        <div className="row">
           {
            users.map((item, index)=>{
              return <UserCard user={item} key={index}/>
            })
           }
        </div>
      </div>
    </section>
  )
}

export default Users