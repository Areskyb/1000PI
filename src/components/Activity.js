import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import CardActions from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";

// Activity => renders a button from the track

function Activity({ isAchived, activityName, acitvityNumber }) {
  if (isAchived) {
    return (
      <>
        <Link
          to={`/${activityName}`}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <Card
            style={{
              marginTop: 10,
              borderRadius: 40,
              justifyContent: "center",
            }}
          >
            <CardContent>
              <CardActions style={{ borderRadius: 40 }}>
                {/* <Typography variant="subtitle1">
                  Activity:{acitvityNumber}
                </Typography> */}
                <Typography style={{ textAlign: "center" }} variant="h2">
                  {activityName}
                </Typography>
                <Container style={{ textAlign: "end", color: "green" }}>
                  <LockOpenIcon />
                </Container>
              </CardActions>
            </CardContent>
          </Card>
        </Link>
      </>
    );
  } else {
    return (
      <Card
        style={{ backgroundColor: "#f5f5f5", marginTop: 10, borderRadius: 40 }}
      >
        <CardContent>
          <CardActions style={{ borderRadius: 40 }}>
            {/* <Typography variant="subtitle1">
              Activity:{acitvityNumber}
            </Typography> */}
            <Typography style={{ textAlign: "center" }} variant="h2">
              {activityName}
            </Typography>
            <Container style={{ textAlign: "end" }}>
              <LockOutlinedIcon />
            </Container>
          </CardActions>
        </CardContent>
      </Card>
    );
  }
}

export default Activity;
