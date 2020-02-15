import React,{useState} from 'react'
import { Button } from '@material-ui/core'

function WordTest({wordList,setTest}){
        const [inTest, setInTest] = useState(false)

        if(inTest){
            return(
                <h3>in test</h3>
            )
        }else{
            return(
                <Button onClick={e => {setInTest(true);setTest(true)}}>Make Test</Button>

            )
        }
}

export default WordTest