import {useEffect,useState} from 'react';
import './App.css';

function App() {
  const [quote,setQuote] = useState("");
  useEffect(()=>{
    fetch('http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
      .then(res => res.json)
      .then(data=>{
        console.log(data)}
       )
       .catch(err=>console.log(err));
 
  },[])
  return (
    <div className="quote-box">
      <div className="text">
        
      </div>
      <div className="author">

      </div>
      <div>
        <button classname="new-quote"></button>
      </div>
      <div>
        <a className="tweet-quote" target='_blank' href="twitter.com/intent/tweet"></a>
      </div>
    </div>
  );
}

export default App;
