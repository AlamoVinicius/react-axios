import React, { useEffect, useState } from "react"
import api from "./services/api"

import './App.css';

export default function App() {
  const [user, setUser] = useState()
  const [repos, setRepos] = useState()

  useEffect(() => {
    api
      .get("/users/AlamoVinicius")
      .then((response) => setUser(response.data))
      .catch((err) => console.error(`ocorreu um erro ${err}`))
  }, [])

  useEffect(() => {
    api
      .get("/users/AlamoVinicius/repos")
      .then((response) => setRepos(response.data))
      .catch(err => console.error(`ocorreu um erro ${err}`))
  }, [])
  console.log(repos)

  return (
    <div>
      <div className="App">
        <h1>Usuário: {user?.login}</h1>
        <p>Biografia: {user?.bio}</p>
      </div>
      <p><strong>Repositórios:</strong></p>
      <ul>
        {repos.map(repo => {
          return (
            <li key={repo.full_name}>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}




