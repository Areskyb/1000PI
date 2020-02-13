import React from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CardActions from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'
import { Container} from '@material-ui/core';

    function Activity({isAchived,activityName,acitvityNumber}){

    return(
        <>
        <Card>
        <CardContent>
        <CardActions onClick={(e)=> window.location.href=`/${activityName}`}>
    <Typography variant='subtitle1'>Activity:{acitvityNumber}</Typography>
    <Typography variant="h2">{activityName}</Typography>
        <Container style={{textAlign:"end"}}>
          {isAchived? <LockOpenIcon/>: <LockOutlinedIcon></LockOutlinedIcon>}
        </Container>
  
        </CardActions>
        </CardContent>
      </Card>
      </>
    )

}

export default Activity;