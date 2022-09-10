import React, { useState } from 'react'

const Edit = (props) => {
    let emptyCharacter = { first_name: '', last_name: '', age:'', relation: '', image: ''}
    const [character, setCharacter] = useState({...props.characters})
  
    const handleChange = (event) => {
      setCharacter({...character, [event.target.name]: event.target.value})
    }
  
    const handleSubmit = (event) => {
      event.preventDefault()
      props.handleUpdate(character)
    }


    return(
        <>
            <details>
                <summary>Edit Character</summary>
                <form onSubmit={handleSubmit}>
                <label htmlFor="first_name">First: </label>
                <input type="text" name="first_name" value={character.first_name} onChange={handleChange}/>
                <br />
                <br />
                <label htmlFor="last_name">Last: </label>
                <input type="text" name="last_name" value={character.last_name} onChange={handleChange}/>
                <br />
                <br />
                <label htmlFor="age">Age: </label>
                <input type="number" name="age" value={character.age} onChange={handleChange}/>
                <br />
                <br />
                <label htmlFor="relation">Relation: </label>
                <input type="text" name="relation" value={character.relation} onChange={handleChange}/>
                <br />
                <br />
                <label htmlFor="image">Image Link: </label>
                <input type="text" name="image" value={character.image} onChange={handleChange}/>
                <input className='submit' type="submit" value='UPDATE'/>
        </form>
            </details>
        </>
    )
}

export default Edit