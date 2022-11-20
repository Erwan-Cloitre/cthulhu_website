
import React from 'react'
import Loader from 'react-loader-spinner'

const Loading = () => {
  return (
    <div>
        <Loader
                type="Hearts"
                color="rgb(0, 153, 255)"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />
    </div>
  );
};

export default Loading;