import React, {useState} from 'react';
import { Button, Dialog, DialogContent, DialogTitle,List, TextField } from '@material-ui/core';

function PiRecomender ({numbersToSearch,setInput,sumbit}){
// STATES
const [open, setOpen] = useState(false);
const [words, setWords] = useState();
const [userInput, setUserInput] = useState('');

const numbersTraduction = {
    0: '[sz]',
    1: '[td]',
    2: '[n]',
    3: '[m]',
    4: '[r]',
    5: '[l]',
    6: '[g]',
    7: '[k]',
    8: '[fv]',
    9: '[pb]',
    // 10 are the vouls and elements forgotten from the table
    10: '[aeiouwh]*'
}

const createRegex = (num) => {
    let numInString = num;
    numInString = numInString.toString();
    // console.log('numInString => ',typeof numInString);

    let lengthOfNum = numInString.length;
    // console.log('lengthOfNum => ', lengthOfNum);
    
    let result = '';

    for( let i = 0; i < lengthOfNum ; i++ ){
       let correctExpression = numbersTraduction[parseInt(numInString[i])];
    //    console.log('correctExpresion =>',correctExpression)
       if(i === 0){
           result = result.concat(numbersTraduction[10]);
           result = result.concat(correctExpression);
           result = result.concat(numbersTraduction[10]);
       }else{
           result = result.concat(correctExpression);
           result = result.concat(numbersTraduction[10]);
       }
    }

    return result;
}
    function recomendedWords(number){
        setWords(null);
        fetch(`https://wordsapiv1.p.rapidapi.com/words/?hasDetails=definitions&letterPattern=^${createRegex(number)}$`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_WORDS_API_KEY
            }
        })
        .then(response => {
            return response.json()
            
        }).then( 
            res => {
                setWords(res.results.data.map((word,index) => {
                    return (
                        <Button key={index} 
                                onClick={e => {
                                    setInput(word);
                                    handleClose()
                                    submit(e);
                                }
                            }
                        >{word}</Button>
                    );
                }));
            }
        )
    }


    const handleClose = () => {
        setOpen(false)
        setWords(null);
        setUserInput('')
        };

    const handleOpen = () => {
        setOpen(true);

    }
    const handleChange = (event) => {
        setUserInput(event.target.value);
    }

    const submit = (event) => {
        recomendedWords(userInput)
        event.preventDefault()
    }


    return(
        <>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Get a recomendation!      
            </Button>

            <Dialog open ={open} onClose={handleClose}>
                <DialogTitle> search for words with this current numbers => {numbersToSearch}</DialogTitle>
                <DialogContent>
                    <form onSubmit={(e) => submit(e)}>
                    <TextField id = "outlined-basic" 
                        label = "write a number" 
                        variant = "outlined"
                        type = 'number'
                        value = {userInput}
                        onChange={e => handleChange(e)}
                        fullWidth
                        autoComplete = 'off' />
                    </form>
                    <List>
                    {words}
                    </List>
                </DialogContent>

            </Dialog>
        </>
    )
}

export default PiRecomender;