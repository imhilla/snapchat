import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { resetCameraImage, selectCameraImage } from './features/cameraSlice';
import './Preview.css';
import { Close, AttachFile, Create, Crop, MusicNote, Note, Timer, TextFields, Send } from '@material-ui/icons';


function Preview() {
  const cameraImage = useSelector(selectCameraImage)
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!cameraImage) {
      history.replace('/')
    }
  }, [cameraImage, history])

  const closePreview = () => {
    dispatch(resetCameraImage());
  }

  const sendPost = () => {
   //to do tommorow send post to firebase
  }

  return (
    <div className="preview">
      <Close onClick={closePreview} className="preview__close" />
      <div className="preview__toolbarRight">
        <TextFields />
        <Create />
        <Note />
        <MusicNote />
        <AttachFile />
        <Crop />
        <Timer />
      </div>
      <img src={cameraImage} alt="" />
      <div onClick={sendPost} className="preview__footer">
        <h2>Send now</h2>
        <Send className="preview__sendIcon" />
      </div>
    </div>
  )
}

export default Preview
