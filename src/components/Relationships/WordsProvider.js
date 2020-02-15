import React, { useState, useEffect } from 'react';
var nouns = require('nouns');
function WordsProvider({wordCount}){
    // generates random words from package
    const ranWords = nouns.ran(20)
    const [words,setWords] = useState(ranWords);
    
    function camelize(str) {
        return str.replace(/\W+(.)/g, function(match, chr)
         {
              return chr.toUpperCase();
          });
      }


    return(
    <h3>{camelize(words[wordCount])} =====> {words[wordCount + 1]}</h3>
    )
}

export default WordsProvider;