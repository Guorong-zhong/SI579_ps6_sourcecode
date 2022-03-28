import logo from './logo.svg';
import './App.css';
import SearchBoxForm from './components/SearchBoxForm';
import ResultBoard from './components/ResultBoard';
// import { useEffect, useState } from "react";
import {useState} from "react";

function App() {
  const [link, setLink] = useState('');
  const [type, setType] = useState([]);
  const [rhymeResults, setRhymeResults] = useState([]);

  // console.log("link", link)
  return (
    <main className="i-am-main">
        <h1>Rhyme Finders - PS6</h1>
        <h2><a href='https://github.com/Guorong-zhong/SI579_ps6_sourcecode'>Source Code Repo</a></h2>
        <SearchBoxForm setRhymeResults={setRhymeResults} setLink={setLink} setType={setType}/>
        <div>
          <ResultBoard 
            setRhymeResults={setRhymeResults}
            rhymeResults={rhymeResults}
            searchLink={link}
            linkType={type}
          />
        </div>
    </main>
  );
}

export default App;
