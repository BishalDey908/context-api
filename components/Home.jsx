import React, { useContext } from 'react'
import { BioContext } from '../context';

const Home = () => {
  const { name, age, updateName, updateAge } = useContext(BioContext);
  return (
    
    <div>
      <div>
           <div>
      <h2>Current Name: {name}</h2>
      <h3>Age: {age}</h3>
      
      <button onClick={() => updateName("New Name")}>
        Change Name
      </button>
      
      <button onClick={() => updateAge(22)}>
        Change Age
      </button>
    </div>
        </div>
    </div>
  )
}

export default Home
