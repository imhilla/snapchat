import React, { useRef, useCallback } from 'react'
import Webcam from 'react-webcam';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user",
}

export default function WebcamCapture() {
  const webcamRef = useRef(null);

  const capture = useCallback(()=>{
    const imageSource = webcamRef.current.getScreenshot();
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
      <RadioButtonUncheckedIcon
        className="webcamCapture__button"
        onClick={capture}
        fontSize="large"
      />
    </div>
  )
}
