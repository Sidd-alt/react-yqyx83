import React from 'react';
import { useSelector } from 'react-redux';

const Stepper = () => {

  const { stepperNo } = useSelector(store => store.userinfo)

  return (
    <div className="stepper-wrapper">
      <div className={stepperNo===1 ? `stepper-circle-active` : `stepper-circle`}>1</div>
      <div className={stepperNo === 1 ? "stepper-line" : "stepper-line-completed"}></div>
      <div className={stepperNo===2 ? `stepper-circle-active` : `stepper-circle`}>2</div>
      <div className={stepperNo === 2 ? "stepper-line" : "stepper-line-completed"}></div>
      <div className={stepperNo===3 ? `stepper-circle-active` : `stepper-circle`}>3</div>
    </div>
  );
};

export default Stepper;
