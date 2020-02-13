import React,{useState} from 'react';
import Activity from './Activity'
import {
   
  } from "react-router-dom";


function Track(){

    const [trackState, setTrackState] = useState({
        activityOne:true,
        activityTwo:false,
        activityThree:false,
        activityFour:false,
        activityFive:false,
        activitySix:false,

    })

    
    return(
        <>
       <Activity activityName="Relationships" acitvityNumber="1" isAchived={trackState.activityOne}></Activity>
       <Activity activityName="20 Words Challenge" acitvityNumber="2" isAchived={trackState.activityTwo}></Activity>
       <Activity activityName="100 Words Challenge" acitvityNumber="3" isAchived={trackState.activityTwo}></Activity>
       <Activity activityName="Decoding" acitvityNumber="4" isAchived={trackState.activityFour}></Activity>
       <Activity activityName="Decoding 100 Words" acitvityNumber="5" isAchived={trackState.activityFour}></Activity>
       <Activity activityName="1000 PI" acitvityNumber="6" isAchived={trackState.activitySix}></Activity>

        </>
    )
}

export default Track;