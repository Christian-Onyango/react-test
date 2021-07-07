
import React, {useState, useEffect} from 'react'
import {axios} from './axios'
import './App.css'


const Chat = () => {
    const [people, setPeople] = useState([])
    const [messages, setMessages] = useState([])
    const [presence, setPresence] = useState([])

    //PRESENCE
const getPresence = async() => {
  const availability = await axios.get('http://localhost:9010/presence').catch((err) => console.log(`Error: ${err}`))
  console.log('Presence', availability.data)
  if(availability && availability.data.people)
  setPresence(availability.data.people)
}
useEffect(() => {
    getPresence()
  }, [])

  //loop through presence data
  let getAvailability = (id) => {
    let user_status = presence.filter(current => current.personId == id)
    return user_status[0].presence.status
  }

  //PEOPLE
  const getPeople = async () => {
    const response = await axios.get('/people').catch((err) => console.log(`Error: ${err}`))
    //console.log('Response', response.data)
    if(response && response.data.people)
    setPeople(response.data.people)
  }
  useEffect(() => {
    getPeople()
  }, [])

  //people
const People = () => {
    const wazito = people.map((p) => {
       return <li key={p.id} className="listitem"><button onClick={() => updateConversation(p.id)}>
        <span className={`profile ${getAvailability(p.id)}`}></span> <span>{p.name}</span>
        </button></li>;
    });
    return (
      <>
        <div className="people-container">
          <ul>{wazito}</ul>
        </div>
        </>
    );
  
}

  //MESSAGES
const getMessage = async () => {
  const response = await axios.get('http://localhost:9020/messages').catch((err) => console.log(`Error: ${err}`))
  console.log('Messages', response.data.conversations)
  if(response && response.data.conversations)
  setMessages(response.data.conversations)
}
 useEffect(() => {
    getMessage()
  }, [])
//messages func
const [conversation, setConversation] = useState([]);

  const updateConversation = (id) => {
    let newConversation = messages.filter(convo => convo.people.includes(id));
    if(newConversation.length !== 0) {
      setConversation(newConversation[0]);
    } 
  }

  let Messages = () => {
    if(conversation.length <= 0) return (<div></div>)
    const convos = conversation.messages.map((c, idx) => {
      let rightClass = c.from == conversation.people[1] ? 'right': '';
      return <li key={idx} className={`listitem ${rightClass}`}><span>
        <div className="from">{c.from}</div>
        <em>{c.body}</em>
        <div className="time">{c.time.replace("T", " ")}</div>
        </span></li>;
    });
    return (
      <>
        <div className="message-container">
          <ul>{convos}</ul>
        </div>
        </>
    );
  }
  return (
    <>
    <div className="header">React Test</div>
      <div className="chat">
         <People />
        <Messages />
      </div>
      
        </>

  );
};

export default Chat;
