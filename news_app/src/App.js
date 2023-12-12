import './App.css';
import { useEffect } from 'react';
import News from './News';
import { useState } from 'react';
function App() {

  let [articles, setArticles] = useState([]);
  let [category, setCategory] = useState("bitcoin")

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=${category}3&from=2023-12-08&apiKey=f2a6175d33fb43af90bc43efaa0cd37d`)
      .then((response) => response.json())
      .then((news) => {
        setArticles(news.articles);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [category])

  return (
    <div className="App">
      <header className='header'>
        <h1>Web3 Tycoon</h1>

        <input type='text' onChange={(event) => {
          if (event.target.value !== "") {
            setCategory(event.target.value);
          }
        }} placeholder='Search web3'></input>

      </header>

      <section className='news-article'>
        {
          articles.map((article) => {
            return (
              <News article={article} />
            )
          })
        }
        <News></News>
        <News />
        <News />
        <News />
      </section>
    </div >
  );
}

export default App;
