import React, { useContext } from 'react'
import { BioContext } from '../context';

const About = () => {
  const {name,age} = useContext(BioContext);
  return (

    <div>
     
            <h1>This is from about Page {name}{age}</h1>
        
    </div>
  )
}

export default About


