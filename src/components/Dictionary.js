import React,{useState} from 'react'

const Dictionary = () => {
    const initialDictionary=[

        { word: "React", meaning: "A JavaScript library for building user interfaces." },
    
        { word: "Component", meaning: "A reusable building block in React." },
    
        { word: "State", meaning: "An object that stores data for a component." }
    ]
    const [dictionary]=useState(initialDictionary);
    const [searchTerm,setSearchTerm]=useState("");
    const [defination,setDefination]=useState("");

    const handleSearch=()=>{
        const res=dictionary.find(item=>item.word.toLowerCase()===searchTerm.toLocaleLowerCase());
        if(res){
            setDefination(res.meaning);
        }
        else{
            setDefination("Word not found in the dictionary.");
        }
    }
  return (
    <div>
        <h1>Dictionary App</h1>
        <input 
            type="text" 
            value={searchTerm} 
            placeholder='Search for a word...'
            onChange={(e)=>setSearchTerm(e.target.value)}
            ></input>
            <button onClick={handleSearch}>
                Search
            </button>
            <p>Definition:</p>
            <p>{defination}</p>
    </div>
  )
}

export default Dictionary