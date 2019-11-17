import React from 'react';
import loadingGif from "../images/gif/loading-arrow.gif";

export default function Loading() {
    return (
    <div className="loading">
        <h4>Give me a second...</h4>
        <img src={loadingGif} alt="" />
    </div>
    );
}


// const Loading = () => {
//   return (
//     <div className="loading">
//       <h4>Give me a second..</h4>
//       <img src={loadingGif} alt="" />
//     </div>
//   );
// };

// export default Loading;