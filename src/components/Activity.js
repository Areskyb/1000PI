import React from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CardActions from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'
import { Container, Dialog} from '@material-ui/core';
import { Link } from 'react-router-dom';
import CustomDialog from '../shared/CustomDialog'

    function Activity({isAchived,activityName,acitvityNumber}){

      function dialog() {
        return(
          <h1>hi</h1>
        )
      }

      if(isAchived){

        return(
          <>
        <Card>
            <CardContent>
              <CardActions>
              <Typography variant='subtitle1'>Activity:{acitvityNumber}</Typography>
                <Link to={`/${activityName}`}>
                <Typography variant="h2">{activityName}</Typography>
                <Container style={{textAlign:"end"}}>
                   <LockOpenIcon/>
                </Container>
              </Link>
            </CardActions>
          </CardContent>
        </Card>
          </>
                )
      }else{
        return(
          <Card>
            <CardContent>
              <CardActions onClick={e => dialog()}>
              <Typography variant='subtitle1'>Activity:{acitvityNumber}</Typography>
                <Typography variant="h2">{activityName}</Typography>
                <Container style={{textAlign:"end"}}>
                  <LockOutlinedIcon></LockOutlinedIcon>
                </Container>
            </CardActions>
          </CardContent>
        </Card>
        )
      }

}

export default Activity;