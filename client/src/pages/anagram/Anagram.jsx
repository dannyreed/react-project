import "./anagram.css"
import TopBar from "../../components/topbar/TopBar";
import { useState, useEffect } from "react";

export default function Anagram() {
  const [words, setWords] = useState({"word1": '', "word2": ''});
  const [anagramMsg, setAnagramMsg] = useState('');

  const anagramFinder = (wordOne, wordTwo) => {
    let wordOneArr = wordOne.split('');
    let wordTwoArr = wordTwo.split('');
    let wordOneLen = wordOneArr.length;
    let wordTwoLen = wordTwoArr.length;

    // Anagrams must be the same length
    if (wordOneLen != wordTwoLen || wordOneLen < 1 || wordTwoLen < 1) {
      return false;
    }

    // We will assume anagrams until a match isn't found
    let anagram = true;

    // Loop through word one
    for (let i = 0; i < wordOneLen; i++) {
      if (!anagram) {
        break;
      }
      let letter = wordOneArr[i];

      for (let j = 0; j < wordTwoLen; j++) {
        if (letter == wordTwoArr[j]) {
          // Remove matching letter from wordTwoArr
          wordTwoArr.splice(j, 1);
          break;
        } else if (j== (wordTwoLen -1)) {
          anagram = false;
        }
      }
    }
    return anagram;
  }

  useEffect(() => {
    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;
    window.console.log(words);
    let word1 = words['word1'];
    let word2 = words['word2'];
    let anagram = anagramFinder(word1, word2);
    if (!anagram && (!word1 || !word2)) {
      setAnagramMsg('Enter two words');
    } else if (anagram == true) {
      setAnagramMsg('That\'s an anagram!');
    } else {
      setAnagramMsg('That\'s not an anagram');
    }
  }, [words]);

  return (
    <>
      <TopBar/>
      <div className="register">
        <span className="registerTitle">Anagram Finder</span>
        <form className="registerForm">
          <label>Enter words to test below:</label>
          <input
            type="text"
            placeholder="Enter your first word"
            onChange={e=>setWords({...words, "word1": e.target.value})}
            />
          <input
            type="text"
            placeholder="Enter your second word"
            onChange={e=>setWords({...words, "word2": e.target.value})}
            />
          <label>{anagramMsg||"Enter two words"}</label>
        </form>
      </div>
    </>
  )
}
