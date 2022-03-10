import React, { useEffect, useState } from 'react';
import Message from './Message'

function App() {
  let name = 'Ivan';
  let respons = '';
  const [messageList, setMessageList] = useState([
    {
      text: '_',
      author: '_',
      id: 1
    },
  ]);
  /*   setMessageList(() => {
      //itMessageListem.text =  не знаю как записать значение инпута в массив сейта
    }) */
  useEffect(() => {
    respons = 'спасибо' // + не понимаю как обратиться к messageLIst.author ;
  }, [MessageList])

  return (
    <div className="App" style={{ color: 'red', textAlign: 'center' }}>
      <Message text={name} />
      {messageList.map(item => <div key={item.id}>{item.author} say {item.text}</div>)}
      <input style={{ backgroundColor: 'red' }} type="text" value={''} onChange={(e :) => setMessageList(e.target.value)} />
      <button onClick={() => setMessageList()}>send</button>
      <div>{reponse}</div>
    </div >
  );
}

export default App;
