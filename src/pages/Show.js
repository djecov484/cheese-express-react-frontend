import { useState } from "react"


function Show(props){
  
  const id = props.match.params.id
  
  const cheese = props.cheese
 
  const Cheese = cheese.find((singleCheese) => {
    return singleCheese._id === id
  })

  const[editForm, setEditForm] = useState(cheese)

  const handleChange = event => {
    setEditForm({...editForm, [event.target.name]: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.udateCheese(editForm, cheese._id)
    props.history.push("/")
  }

  const removeCheese = () => {
    props.deleteCheese(cheese._id)
    props.history.push("/")
  }

  return <div className="cheese">
    <h1>{cheese.name}</h1>
    <h2>{cheese.title}</h2>
    <img src={cheese.image} alt={cheese.name}/>
    <button onClick={removeCheese} id="delete">
        DELETE
      </button>

    <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.countryOfOrigin}
          name="countryOfOrigin"
          placeholder="countryOfOrigin"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input type="submit" value="Update Cheese" />
      </form>
    </div>
  
}

export default Show