import './App.css'
import {User,MessageCircle,X,Heart} from 'lucide-react'
import React, {useState} from 'react';

const ProfileSelector = () => (
  
  <div className="rounded-lg overflow-hidden bg-white shadow-lg">
    <div className="relative">
      <img src='http://localhost:8080/images/1aca848e-cf69-4a1d-8a2a-b9e317458f94.jpg' />
      <div className="absolute bottom-0 left-0 right-0 text-white p-4 bg-gradient-to-t from-black">
        <h2 className='text-3xl font-bold'>Foo Bar, 30</h2>
      </div>
    </div>
    <div className="p-4">
      <p className="text-gray-600 mb-4">I am a software engineer with 5 years of experience</p>
    </div>
    <div className="p-4 flex justify-center space-x-4">
      <button className='bg-red-500 rounded-full p-4 text-white hover:bg-red-700'
        onClick={()=> console.log("left")}>
        <X size={24} />
      </button>
      <button className='bg-green-500 rounded-full p-4 text-white hover:bg-green-700'
        onClick={()=> console.log("right")}>
        <Heart size={24} />
      </button>
    </div>
  </div>
  
);

const MatchesList = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Matches</h2>
    <ul className="space-y-4">
      {[
        { id: 1, firstName: "Foo", lastName: "Bar", imageUrl: "http://localhost:8080/images/1aca848e-cf69-4a1d-8a2a-b9e317458f94.jpg" },
        { id: 2, firstName: "Baz", lastName: "Qux", imageUrl: "http://localhost:8080/images/1aca848e-cf69-4a1d-8a2a-b9e317458f94.jpg" },
      ].map(match => (
        <li key={match.id} className="flex items-center space-x-4 p-2 border border-gray-200 rounded-lg shadow-sm">
          
          <button className='w-full hover:bg-pink-100 rounded flex item-center'>
          <img src={match.imageUrl} alt={`${match.firstName} ${match.lastName}`} className='w-16 h-16 rounded-full object-cover'/>
          <span>
            <h3 className='text-lg font-semibold'>{match.firstName} {match.lastName}</h3>
          </span>
          </button>
        </li>
      ))}
    </ul>
  </div>
);

const ChatScreen = () => {
  const [input,setInput] = useState('');

  const handleSend = ()=>{
    if(input.trim()){
      console.log(input)
      setInput('');
    }
    

  }

  return (
    <div className="rounded-lg overflow-hidden bg-white shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Chat with Foo</h2>
      <div className="h-[50vh] border rounded overflow-y-auto mb-4 p-2">
        {["Hi", "How are you"].map((message, index) => (
          <div key={index} className="text-left">
            <div className="mb-4 p-2 rounded bg-gray-100">{message}</div>
          </div>
        ))}
      </div>
      <div className='flex'>
        <input 
        type='text' 
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        className='border flex-1 rounded p-2 mr-2'
        placeholder='type a message'></input>
        <button 
        className='bg-blue-500 text-white rounded p-2'
        onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};






function App() {

  const [currentScreen, setCurrentScreen] = useState("chat");

  const renderScreen =() =>{
    switch (currentScreen) {
      case "profile":
        return <ProfileSelector/>;
      case "matches":
        return <MatchesList/>;
      case "chat":
        return <ChatScreen/>;
        
    
      
    }
  }


  return (
    
    <div className="max-w-md mx-auto p-4" >
      <nav className="flex justify-between mb-4">
        <User onClick={()=> setCurrentScreen("profile")}/>
        <MessageCircle onClick={()=> setCurrentScreen("matches")}/>
        
      </nav>

      {renderScreen()}

     

      
      
    </div>
    
  )
}

export default App
