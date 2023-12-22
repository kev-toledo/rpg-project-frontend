import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Npcs = () => {
  const [npcs, setNpcs] = useState([])

  useEffect(() => {
    const FetchAllNpcs = async () => {
      try{
        const res = await axios.get("http://localhost:8800/npcs");
        setNpcs(res.data);
        console.log(res.data);
      }catch(err){
        console.log(err)
      }
    }
    FetchAllNpcs();
  }, [])
  return (
   
  <div>
      <h1>Npc List:</h1>
        <div className="npcs">
          {npcs.map((npc)  => (
            <div className="npc" key={npc.id}>
              <h2>{npc.name}</h2>
              <p>{npc.race}</p>
              <p>{npc.age}</p>
              <p>{npc.profession}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Npcs