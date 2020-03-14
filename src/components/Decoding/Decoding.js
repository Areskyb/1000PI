import React, {useEffect,useRef, useContext} from 'react';
import CheatSheet from './CheatSheet';
import WordForm from './WordForm';
import { getDecoding } from '../../Services/decodingServices'
import { UserContext } from '../../UserContext';
import Typography from '@material-ui/core/Typography';


function Decoding({setGameTitle,setProgressBar,setDialogContent}){
    const {userValue} = useContext(UserContext);
    const times = useRef(0);


    useEffect(() => {
        if(userValue){
            getDecoding(userValue,'times').then(res => {
                times.current = res
                if(res <= 40){
                    setProgressBar((res * 100)/40);
                }else{
                    setProgressBar(100);
                }
            });
            console.log('read db ')
        }
        return () => {
            // console.log('user', user);
            // console.log('userValue',userValue);
            // console.log('times',times.current);
            // console.log('db write');
        }
    }, [userValue]);

    useEffect(() => {
        setGameTitle("Words to numbers");
        const contentDialog = (
            <>
                   <Typography variant="h3"> Words To numbers!</Typography>
        <Typography variant="h5">
            Congratulations {'🎉'}{'🎉'} 
        </Typography>
        <Typography variant="h6">
        You have managed to reach the middle of this magnificent course.
        </Typography>

        <Typography variant="h5">
        Now that you have the ability to memorize words with your creativity, it is time to learn this wonderful table. Basically it is a table that  sounds into numbers, known as The Major System.
        </Typography>

        <Typography variant="h5" style={{marginTop:'5%'}}>
          {'🌈'} A REALLY important video to watch before continuing =>   <a href='https://www.youtube.com/watch?v=IDJ9C83NQkU'>{'🎬'}</a>
        </Typography>
        <Typography variant='subtitle2' style={{marginTop:'10%'}}  > {'📅'} REMEMBER that this is an exercise designed to get used to the Major System so, even if you have passed the level, if you don't feel comfortable enough, keep practicing so you can decipher words at a natural pace.</Typography>

            </>
        )
        setDialogContent(contentDialog)
        return () => {
        };
    }, [setGameTitle])
    return(
        <>
        <WordForm times={times} user={userValue} setProgressBar={setProgressBar}></WordForm>
        <CheatSheet></CheatSheet>
        </>
    )

}

export default Decoding;