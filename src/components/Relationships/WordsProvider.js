import React, { useState } from 'react';

function WordsProvider({wordCount}){

    const [words,setWords] = useState(["cat","dog","life","minecraft", "pencil","Projector"]);

    return(
    <h3>{words[wordCount]} =====> {words[wordCount + 1]}</h3>
    
    )
}

export default WordsProvider;