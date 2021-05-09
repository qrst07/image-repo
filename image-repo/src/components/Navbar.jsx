import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Card, TextField, CardMedia, CardContent } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { storage } from "../firebase/firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  uploadModal: {
    width: "500px",
    height: "100px"
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = (image, title, desc) => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function handleUpload(e) {
    e.preventDefault();
    const uploadTask = storage.ref(`/images/${file.name}`).put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      storage
        .ref("images")
        .child(file.name)
        .getDownloadURL()
        .then((url) => {
          setFile(null);
          setURL(url);
        });
    });
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Image Repo
          </Typography>
          {/* upload button here */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={url}
            />
            <CardContent>
              <div className={classes.uploadModal}>
              <form onSubmit={handleUpload}>
              <input 
                type="file"
                onChange={handleChange}
              />
              <button disabled={!file}>upload to firebase</button>
            </form>
            <img src={url} alt="" />
              </div> 
              <Typography variant="body2" color="textSecondary" component="p">
                select tags here
              </Typography>
            </CardContent>
          </Card>

          </Modal>
          <Button color="inherit" onClick={handleOpen}>Upload</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
