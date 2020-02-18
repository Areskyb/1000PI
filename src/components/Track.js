import React,{useState,useEffect} from 'react';
import Activity from './Activity'

// Track component loads the activities from the user
function Track({setGameTitle,history}){

    // all the states That the user has achived
    const [trackState, setTrackState] = useState({
        activityOne:true,
        activityTwo:true,
        activityThree:true,
        activityFour:true,
        activityFive:false,
        activitySix:false,

    })

    // TODO: fetch the user data to set the tracState
    useEffect(() => {
        setGameTitle("Your Track")
        return () => {
            
        };
    }, [setGameTitle])

   
    
    return(
        <>

            <Activity activityName="Relationships" acitvityNumber="1" isAchived={trackState.activityOne}></Activity>
            <Activity activityName="20 Words Challenge" acitvityNumber="2" isAchived={trackState.activityTwo}></Activity>
            <Activity activityName="100 Words Challenge" acitvityNumber="3" isAchived={trackState.activityThree}></Activity>
            <Activity activityName="Decoding" acitvityNumber="4" isAchived={trackState.activityFour}></Activity>
            <Activity activityName="Decoding 100 Words" acitvityNumber="5" isAchived={trackState.activityFive}></Activity>
            <Activity activityName="1000 PI" acitvityNumber="6" isAchived={trackState.activitySix}></Activity>

        </>
    )
}

export default Track;