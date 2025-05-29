import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = '/api/planets'
const urlPeople = '/api/people'

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState({});

  // Fetch characters and homeworlds data
  useEffect(() => {
    async function fetchData() {
      try {
        const [peopleResponse, planetsResponse] = await Promise.all([
          axios.get(urlPeople),
          axios.get(urlPlanets)
        ]);
        const peopleData = peopleResponse.data;
        const planetsData = planetsResponse.data.reduce((acc, planet) => {
          acc[planet.id] = planet.name;
          return acc;
        }, {});
        setPeople(peopleData);
        setPlanets(planetsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    
    fetchData();
  }, []);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>This project is a simple React application that displays a list of Star Wars characters and their homeworlds<br />
      by pulling data from the Star Wars mock API written in the backend</p>
      {people.map(person => (
        <Character 
          key={person.id} 
          person={person} 
          planetName={planets[person.homeworld]} 
        />
      ))}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
