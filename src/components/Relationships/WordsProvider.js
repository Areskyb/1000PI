import React, { useState } from 'react';
import { ran } from '../../shared/nounsGetter';
import { Typography } from '@material-ui/core';

function WordsProvider({wordCount}){
    // generates random words from package
    const ranWords = ran(300)
    const [words] = useState(ranWords);
    
    // function camelize(str) {
    //     return str.replace(/\W+(.)/g, function(match, chr)
    //      {
    //           return chr.toUpperCase();
    //       });
    //   }


    return(
        <Typography variant="h2" align="center" style={{marginTop:'5%', marginBottom:'5%'}}> {(words[wordCount])} => {words[wordCount + 1]}</Typography>
    // <h3>{(words[wordCount])} =====> {words[wordCount + 1]}</h3>
    )
}

export default WordsProvider;