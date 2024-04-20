import React from 'react'
import {ClipLoader} from 'react-spinners'

const override = {
  display: "block",
  position: 'absolute',
  top: '50%',
  left:' 50%',
  transform: 'translate(-50%, -50%)',
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#3b82f6"
      loading={loading}
      cssOverride={override}
      size={100}
      aria-label="Loading Spinner"
    />
  );
};

export default Spinner;