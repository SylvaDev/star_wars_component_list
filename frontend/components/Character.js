import React, { useState } from 'react'

function Character({ person, planetName }) {
  // State to control the visibility of the homeworld information
  const [showPlanet, setShowPlanet] = useState(false);

  // Toggle the visibility of the homeworld information
  const handleNameClick = () => {
    setShowPlanet(!showPlanet);
  };

  return (
    <div className='character-card'>
      <h3 className='character-name' onClick={handleNameClick}>
        {person.name}  
      </h3>
      {showPlanet && (
        <p>Planet: <span className='character-planet'>{planetName}</span></p>
      )}
    </div>
  )
}

export default Character
