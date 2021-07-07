
import React, {useState, useEffect} from 'react'
import {axios} from './axios'
import './App.css'


const Chat = () => {
    const [people, setPeople] = useState([])
    const [messages, setMessages] = useState([])

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
        <span className="profile"></span> <span>{p.name}</span>
 </button></li>
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
    if(conversation.length <= 0) return 'Unavailable'
    const convos = conversation.messages.map((c, idx) => {
      let rightClass = c.from == conversation.people[1] ? 'right': '';
      return <li key={idx} className={`listitem ${rightClass}`}><span>{c.body}</span></li>;
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
        <People />
        <Messages />
        </>

  );
};

export default Chat;
