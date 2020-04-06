import React, { useContext } from "react";
import { Typography } from "@material-ui/core/";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";
import { OpenContext } from "../OpenContext";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CustomDialog({ dialogContent }) {
  const { isOpen, setIsOpen } = useContext(OpenContext);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Typography
        variant="subtitle2"
        onClick={handleClickOpen}
        style={{ cursor: "pointer" }}
      >
        Click Me!
      </Typography>
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>{dialogContent}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cool!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
