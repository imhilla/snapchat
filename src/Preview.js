import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { resetCameraImage, selectCameraImage } from './features/cameraSlice';
import './Preview.css';
import CloseIcon from '@material-ui/icons/Close'


function Preview() {
  const cameraImage = useSelector(selectCameraImage)
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!cameraImage) {
      history.replace('/')
    }
  }, [cameraImage, history])

  const closePreview = ()=>{
    dispatch(resetCameraImage());
  }

  return (
    <div className="preview">
      <CloseIcon onClick={closePreview} className="preview__close" />
      <img src={cameraImage} alt="" />
    </div>
  )
}

export default Preview
