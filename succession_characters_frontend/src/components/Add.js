import React, { useState } from 'react'

const Add = (props) => {
    let emptyCharacter = { first_name: '', last_name: '', age:'', relation: '', image: ''}
    const [character, setCharacter] = useState(emptyCharacter)

    const handleChange = (event) => {
        setCharacter({ ...character, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(character)
        setCharacter(emptyCharacter)
    }

    return(
        <>
        <form className='add' onSubmit={handleSubmit}>
            <label htmlFor="first_name">FIRST: </label>
            <input type="text" name="first_name" value={character.first_name} onChange={handleChange}/>
            <br />
            <br />
            <label htmlFor="last_name">LAST: </label>
            <input type="text" name="last_name" value={character.last_name} onChange={handleChange}/>
            <br />
            <br />
            <label htmlFor="age">AGE: </label>
            <input type="number" name="age" value={character.age} onChange={handleChange}/>
            <br />
            <br />
            <label htmlFor="relation">RELATION: </label>
            <input type="text" name="relation" value={character.relation} onChange={handleChange}/>
            <br />
            <br />
            <label htmlFor="image">IMAGE LINK: </label>
            <input type="text" name="image" value={character.image} onChange={handleChange}/>
            <input className='submit' type="submit" value='ADD'/>
        </form>
        </>
    )
}

export default Add