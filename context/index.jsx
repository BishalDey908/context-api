import { createContext, useContext, useState } from 'react';

// Create context
export const BioContext = createContext();

// Create provider component
export const BioProvider = ({ children }) => {
   const [bioData, setBioData] = useState({
     name: "Bishal",
     age: 21
   });

   // Function to update the name
   const updateName = (newName) => {
     setBioData(prev => ({
       ...prev,
       name: newName
     }));
   };

   // Function to update the age
   const updateAge = (newAge) => {
     setBioData(prev => ({
       ...prev,
       age: newAge
     }));
   };

   return (
     <BioContext.Provider value={{ 
       name: bioData.name, 
       age: bioData.age,
       updateName,
       updateAge 
     }}>
       {children}
     </BioContext.Provider>
   );
};


