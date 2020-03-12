import React, { useState, useEffect } from "react";
import { Input, Typography, Button } from "@material-ui/core";
import { updateDecoding } from "../../Services/decodingServices";
import {updateTrack} from '../../Services/trackServices'

const nouns = require("nouns");
// const associationTable = {
//     'z': "0",
//     's': "0",
//     'c': "0",
//     'd': "1",
//     't': "1",
//     'n': "2",
//     'm': "3",
//     'r': "4",
//     'l': "5",
//     'j': "6",
//     'ch': "6",
//     'dg': "6",
//     'zh': "6",
//     'g': "6",
//     'k': "7",
//     'c': "7",
//     'g': "7",
//     'ch': "7",
//     'q': "7",
//     'f': "8",
//     'v': "8",
//     'b': "9",
//     'p': "9"
// }

function WordForm({ times, user }) {
  const [currentWord, setCurrentWord] = useState(nouns.ran(1));
  const [userResult, setUserResult] = useState("");



  function checkResult(event) {
    console.log("times", times.current);
    times.current = times.current + 1;
    // console.table([{'Word to check': currentWord[0], 'Decode result': decode(userResult), 'User result': userResult}]);
    // console.log(typeof userResult);
    setCurrentWord(nouns.ran(1));
    setUserResult("");
    event.preventDefault();
  }

  // should return the decoding of the word
  // function decode (word) {

  // }

  function handleChange(event) {
    setUserResult(event.target.value);
  }
  const save = () => {
      updateDecoding(user,'times',times.current);
      console.log('db write');
  }

  if(times.current === 30){
      alert('New level unlocked!');
      times.current = times.current + 1;
      save();
      updateTrack({activityFour:true},user);
  }


  return (
    <form onSubmit={checkResult}>
      <Typography variant="h1">{currentWord}</Typography>
      <Input
        type="number"
        value={userResult}
        onChange={handleChange}
        required
      ></Input>
      <Button onClick={e => save()}>Save</Button>
    </form>
  );
}

export default WordForm;
