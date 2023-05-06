import React, {useState, useEffect} from 'react';
import './styles.css';


function App() {
  const [quotes, setQuotes]= useState("");
  
  const getQuote = ()=>{
    const colors = ["#007bff", "#1da1d2", "#28a745", "#dc3545", "#ffc107", "#6c757d"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector(".container").style.backgroundColor = randomColor;

      fetch('https://type.fit/api/quotes')
       .then((res)=> res.json())
       .then((data) => {
             let randomNum=Math.floor(Math.random()* data.length);
             setQuotes(data[randomNum])
       });
  };

  useEffect(()=>{
    getQuote();
  },[])
  return (
    
    <div className="container">
    <div className="body">
      <div className="quote ">
        <p className="text">{quotes.text}</p>
        <p className="text">{quotes.author}</p>
      </div>
       <div className="btn-container">
        <button onClick={getQuote}>Get Quote</button>
        <a href="https://twitter.com/?lang=en-in"> Tweet</a>
      </div>
      </div>
    </div>
  );
}

export default App;
