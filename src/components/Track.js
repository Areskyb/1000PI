import React, { useState, useEffect, useContext } from "react";
import Activity from "./Activity";
import firebase from 'firebase/app';
import { UserContext } from "../UserContext";
import { trackInfo, updateTrack } from "../Services/trackServices";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import { OpenContext } from "../OpenContext";
import { getRelationships } from "../Services/relationshipsServices";



// let query = tracksRef.where("id", "==",)

// Track component loads the activities from the user
function Track({ setGameTitle, setProgressBar,setDialogContent }) {
  const { userValue,setUserValue } = useContext(UserContext);
  const { isOpen, setIsOpen } = useContext(OpenContext);


  let defaultValues = {
    activityOne: true,
    activityTwo: false,
    activityThree: false,
    activityFour: false,
    activityFive: false,
    activitySix: false
  };
  // all the states That the user has achived
  const [trackState, setTrackState] = useState(defaultValues);

  const unlockTracks = () => {
    updateTrack({
      activityOne: true,
      activityTwo: true,
      activityThree: true,
      activityFour: true,
      activityFive: true,
      activitySix: true

    },userValue);

    setTrackState({
      activityOne: true,
      activityTwo: true,
      activityThree: true,
      activityFour: true,
      activityFive: true,
      activitySix: true
      
      })
  }

  useEffect(() => {
    setGameTitle("Your Track");
    const dialogContent = (
      <>
        <Typography variant="h3"> Your Track </Typography>
        <Typography variant="h5">
          Welcome to your track {'🎉'}, here you can see the progress of your activities and also all the activities that you have unlocked
        </Typography>

        <Typography variant="h3"> Do you wan't to unlock all the tracks? {'🔓'} </Typography>
        <Button variant="contained" color="primary" onClick={() => {unlockTracks()}}>Unlock all the tracks</Button>




      </>
    )
    setDialogContent(dialogContent)
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        trackInfo(user.uid).then(res => {
          setTrackState(res);
          let total = 0;
          for (const activity in res){
              if (res[activity] === true){total++}
          }
          setProgressBar(Math.floor((100 * total)/6));



        });
      } else {
        setUserValue(null);
      }
    });

    return () => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
        }
      });
    };
  }, [setGameTitle,setUserValue]);


  // if the user has a state, then load the state of the track, if not set a default one.
  if (userValue !== null) {
    return (
      <>
        <Activity
          activityName="Relationships"
          acitvityNumber="1"
          isAchived={trackState.activityOne}
        ></Activity>
        <Activity
          activityName="10 Words Challenge"
          acitvityNumber="2"
          isAchived={trackState.activityTwo}
        ></Activity>
        <Activity
          activityName="Words to numbers"
          acitvityNumber="3"
          isAchived={trackState.activityThree}
        ></Activity>
        <Activity
          activityName="Numbers to words"
          acitvityNumber="4"
          isAchived={trackState.activityFour}
        ></Activity>
          <Activity
            activityName="100 Words Challenge"
            acitvityNumber="5"
            isAchived={trackState.activityFive}
          ></Activity>
        <Activity
          activityName="1000 PI"
          acitvityNumber="6"
          isAchived={trackState.activitySix}
        ></Activity>
      </>
    );
  } else {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  }
}

export default Track;
