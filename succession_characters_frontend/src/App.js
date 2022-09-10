
import './App.css'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Add from './components/Add'
import Edit from './components/Edit'

function App() {

  let [characters, setCharacters] = useState([])
  let [displayAdd, setDisplayAdd] = useState(false)

  const showAdd = () => {
    setDisplayAdd(!displayAdd)
  }

  //FETCH/GET
  const getCharacters = () => {
    axios
    .get('http://localhost:8000/api/succession_characters')
    .then(
      (response) => setCharacters(response.data),
      (err) => console.error(err)
    )
    .catch((error) => console.error(error))
  }

  //CREATE/POST
  const handleCreate = (addCharacter) => {

    axios
      .post('http://localhost:8000/api/succession_characters', addCharacter)
      .then((response) => {
        
        setCharacters([...characters, response.data])
      })
  }

  //DELETE
  const handleDelete = (deletedCharacter) => {
    axios
      .delete('http://localhost:8000/api/succession_characters/' + deletedCharacter.id)
      .then((response) => {
        setCharacters(characters.filter(character => character.id !== deletedCharacter.id))
      })
  }

  //UPDATE/PUT
  const handleUpdate = (editCharacter) => {
    console.log(editCharacter)
    axios
      .put('http://localhost:8000/api/succession_characters/' + editCharacter.id, editCharacter)
      .then((response) => {
        setCharacters(characters.map((character)=> {
          return character.id !== editCharacter.id ? character : editCharacter
        }))
      })
  }

  useEffect(() => {
    getCharacters()
   }, [])

  return (
    <div className='App'> 
      <h1 className='title'>THE SUCCESSION CHARACTERS</h1>
      <button className='showAdd' onClick={showAdd}>ADD CHARACTER</button>
      {displayAdd ? 
      
        <Add handleCreate={handleCreate}/>
      
      : null}
      
      <div className='container'>
      {characters.map((character)=> {
        return(
          <div className='character' key={character.id}>
            <div className='item'> 
            <h2 className='item'>{character.first_name} {character.last_name}</h2>
            <h3 className='item'>{character.relation}</h3>
            <h4 className='item'>Age: {character.age}</h4>
            </div>
            <img src={character.image}/>
            <Edit handleUpdate={handleUpdate} characters={character}/>
            <button className='delete' onClick={()=>{handleDelete(character)}} value={character.id}>X</button>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default App
