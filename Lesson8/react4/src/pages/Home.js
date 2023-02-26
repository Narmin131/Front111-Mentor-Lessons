import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import Users from '../components/Users'

const Home = () => {

  const [users, setUsers] = useState([])


  const getUser = (keyword) => {
    axios.get(`https://api.github.com/search/users?q=${keyword}`)
      .then(res => {
        console.log(res)
        setUsers(res.data.items)
      })
    console.log(users);
  }

  useEffect(() => {
    getUser()
  },[])

  return (
    <>
      <Search getUser={getUser} />
      <Users users={users} />
    </>
  )
}

export default Home