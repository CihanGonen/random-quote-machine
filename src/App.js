import {useEffect,useState} from 'react';
import './App.css';

function App() {
  
  const [quote,setQuote] = useState("");
  const [author,setAuthor] = useState("");
  const colors = 
  ['#8C642B','#2F2504','#D64045','#5A0001','#2A3D45','#407076','#064C4C','#210124','#750D37','#123F3A','#0F440E']

  const fetchQuote = ()=>{
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var num = Math.floor(Math.random() * 1642)
      setQuote(data[num].text);
      data[num].author ? setAuthor(data[num].author) : setAuthor('Anonym') ;
      var color = colors[Math.floor(Math.random()*10)];
      document.getElementById('gradient').style.backgroundImage = `linear-gradient(${color},black)`;
      document.getElementById('quote-bg').style.backgroundColor = color;
    });
  }

  useEffect(()=>{
    fetchQuote();
  },[])

  return (
    <div id='gradient' className="transition duration-500 ease-in-out w-screen h-screen bg-red">
      <div id='quote-bg' className="transition duration-500 ease-in-out centered text-gray-200 rounded-md shadow-md bg-opacity-20">
        <div className="flex flex-col align-center quote-box space-y-2">
          <div className="text">
            <p>{quote}</p>
          </div>
          <div className="author self-end">
            <p>- {author}</p>
          </div>
          <div className='self-center space-x-2'>
            <button onClick={fetchQuote} className="transition duration-500 ease-in-out  new-quote bg-gray-200 text-gray-800 rounded-md shadow-md p-2 hover:bg-opacity-0 hover:text-gray-200">New Quote</button>
            <a className="tweet-quote border-2 p-2 rounded-md border-gray-200" target='_blank' href="twitter.com/intent/tweet">Tweet Quote</a>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
