import React,{useEffect, useRef, useContext} from 'react';
import WordChallengeForm from './WordChallengeForm';
import { UserContext } from '../../UserContext'
import { getWordDecoding, updateWordDecoding} from '../../Services/wordDecodingServices';
import Typography from '@material-ui/core/Typography';

function WordDecoding({setGameTitle, setProgressBar,setDialogContent}){
    const times = useRef(null);
    const { userValue } = useContext(UserContext);
    
    useEffect(() => {
        if(userValue){
            // get data from db and set times to the data result.
            getWordDecoding(userValue,'times').then(res => {
                times.current = res;
                // console.log('res',res)
                if(res <= 40){
                    setProgressBar((res * 100)/40);
                }else{
                    setProgressBar(100);
                }
            });
            // console.log('db read');
        }
        return () => {

        }
    }, [userValue])

    useEffect(() => {
        setGameTitle('Numbers to words');
        const contentDialog = (
            <>
        <Typography variant="h3">Numbers To Words!</Typography>
        <Typography variant="h5">
            Well... Now the other way around {'😅'}
        </Typography>
        <Typography variant="h6">
        Think that now it is time to get your head around finding words that can fit the number but...
        </Typography>
        <Typography variant="h3">
            Don't panic! {'🙀'}{'🙀'} 
        </Typography>

        <Typography variant="h6">
            you are able to use more than one word separated by spaces {'😁'}
        </Typography>

        <Typography variant="h5">
            Also, I've developed an algorithm that will search an specific word that matches the number displayed if you are struggling, you can get the number pressing into the "get words that match" button.
            Wooow, I think that that servise deserves some feedback {'😉'}. 
        </Typography>

        <Typography variant='subtitle2' style={{marginTop:'10%'}}  > {'📅'} REMEMBER that this is an exercise designed to get used to the Major System, even if you have passed the level, if you don't feel comfortable enough, keep practicing so you can decipher words at a natural pace.</Typography>

            </>
            )
        
        setDialogContent(contentDialog);
        return () => {
        };
    }, [setGameTitle])

    const save = () => {
        updateWordDecoding(userValue,'times',times.current);

        // console.log('db write');

    }

    return(
        <WordChallengeForm save={save} times ={times} user={userValue} setProgressBar={setProgressBar}></WordChallengeForm>
    )

}

export default WordDecoding;