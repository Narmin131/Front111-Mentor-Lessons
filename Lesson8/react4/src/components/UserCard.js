import React from 'react'

const UserCard = ({user}) => {
  return (
    <>
      <div className="col-lg-4">
        <div className="card" style={{ width: '100%', height: '100%' }}>
        <img src={user.avatar_url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{user.login}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href={user.html_url} className="btn btn-primary">Go User</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserCard