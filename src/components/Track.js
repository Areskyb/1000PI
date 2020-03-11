import React,{useState,useEffect, useContext } from 'react';
import Activity from './Activity'
import * as firebase from 'firebase';
import { UserContext } from '../UserContext';
import { trackInfo } from '../Services/trackServices';

// let query = tracksRef.where("id", "==",)

// Track component loads the activities from the user
function Track({setGameTitle}){
    const {userValue} = useContext(UserContext);

    let defaultValues = {
        activityOne:true,
        activityTwo:false,
        activityThree:false,
        activityFour:false,
        activityFive:false,
        activitySix:false
    }
    // all the states That the user has achived
    const [trackState,setTrackState] = useState(defaultValues); 

    const unsubscirbe = firebase.auth().onAuthStateChanged( user => {
        if(user){}
      })
    useEffect( () => {
        setGameTitle("Your Track");
             firebase.auth().onAuthStateChanged( (user) => {
                if (user){
                    trackInfo(user.uid).then(res => setTrackState(res))
                }else{
                    console.log('noUser');
                }
            })

        return () => { 
            unsubscirbe();
        };
    }, []);
    
    
    // if the user has a state, then load the state of the track, if not set a default one.
            if(userValue !== null){

        return (
            <>
                <Activity activityName="Relationships" acitvityNumber="1" isAchived={trackState.activityOne}></Activity>
                <Activity activityName="20 Words Challenge" acitvityNumber="2" isAchived={trackState.activityTwo}></Activity>
                <Activity activityName="100 Words Challenge" acitvityNumber="3" isAchived={trackState.activityThree}></Activity>
                <Activity activityName="Words to numbers" acitvityNumber="4" isAchived={trackState.activityFour}></Activity>
                <Activity activityName="Numbers to words" acitvityNumber="5" isAchived={trackState.activityFive}></Activity>
                <Activity activityName="1000 PI" acitvityNumber="6" isAchived={trackState.activitySix}></Activity>
            </>
            )
        }else{
            return (
                <>
            <h1>Loading</h1>
                </>
            )

        }
}

export default Track;