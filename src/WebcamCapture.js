import React, { useRef, useCallback } from 'react'
import Webcam from 'react-webcam';
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch } from 'react-redux';
import { setCameraImage } from './features/cameraSlice';
import { useHistory } from 'react-router';
import './WebcamCapture.css';

const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user",
}

export default function WebcamCapture() {
  const dispatch = useDispatch()
  const webcamRef = useRef(null);

  const history = useHistory()

  const capture = useCallback(() => {
    const imageSource = webcamRef.current.getScreenshot();
    dispatch(setCameraImage(imageSource));
    history.push('/preview')
  }, [webcamRef])


  return (
    <div className="webCamCapture">
      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />
      <RadioButtonUnchecked
        className="webcamCapture__button"
        onClick={capture}
        fontSize="large"
      />
    </div>
  )
}
