// import React, { useState } from 'react';
// import './Feedback.css';
// import img7 from './assets/unhappy.png';
// import img8 from './assets/neutral.png';
// import img9 from './assets/satisfied.png';

// const Feedback = () => {
//   const [selectedRating, setSelectedRating] = useState('Satisfied');
//   const [showMessage, setShowMessage] = useState(false);
//   const [comment, setComment] = useState('');

//   const handleRatingClick = (rating) => {
//     setSelectedRating(rating);
//   };

//   const handleSendClick = () => {
//     // Perform any necessary actions with the selected rating
//     console.log('Selected Rating:', selectedRating);
//     console.log('Comment:', comment);
//     setShowMessage(true);
//   };
//   const handleCommentChange = (event) => {
//     setComment(event.target.value);
//   };

//   return (
//     <div className='giff'>
//     <div className="panel-container">
//       <strong>How satisfied are you with our customer support performance?</strong>
//       <div className="ratings-container">
//         <div className={`rating ${selectedRating === 'Unhappy' ? 'active' : ''}`} onClick={() => handleRatingClick('Unhappy')}>
//           <img src={img7}alt="" />
//           <small>Unhappy</small>
//         </div>

//         <div className={`rating ${selectedRating === 'Neutral' ? 'active' : ''}`} onClick={() => handleRatingClick('Neutral')}>
//           <img src={img8} alt="" />
//           <small>Neutral</small>
//         </div>

//         <div className={`rating ${selectedRating === 'Satisfied' ? 'active' : ''}`} onClick={() => handleRatingClick('Satisfied')}>
//           <img src={img9}alt="" />
//           <small>Satisfied</small>
//         </div>
//       </div>
//       <textarea
//         placeholder="Add comments or suggestions..."
//         value={comment}
//         onChange={handleCommentChange}
//       />
//         <div className="submit-container"></div>
//       <button className="btn7" onClick={handleSendClick}>Submit</button>
//       {showMessage && <p>Thanks for giving your feedback!</p>}
    
//     </div>
//     </div>
    
//   );
// };

// export default Feedback;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Feedback.css';


const Feedback = () => {
  const selectedRating = useSelector((state) => state.selectedRating);
  const showMessage = useSelector((state) => state.showMessage);
  const comment = useSelector((state) => state.comment);
  const dispatch = useDispatch();

  const handleRatingClick = (rating) => {
    dispatch({ type: 'SET_SELECTED_RATING', payload: rating });
  };

  const handleSendClick = () => {
    console.log('Selected Rating:', selectedRating);
    console.log('Comment:', comment);
    dispatch({ type: 'SET_SHOW_MESSAGE', payload: true });
  };

  const handleCommentChange = (event) => {
    dispatch({ type: 'SET_COMMENT', payload: event.target.value });
  };const handleImprovementClick = (improvementCategory) => {
    // Perform actions based on the improvement category
    console.log('Clicked improvement category:', improvementCategory);
  
    // You can dispatch an action or update the state here
    // For example:
    // dispatch({ type: 'SET_IMPROVEMENT_CATEGORY', payload: improvementCategory });
  };
  

  return (
    <div className='giff'>
      <div className="panel-container">
        <strong>Rate Your Experience</strong><br></br>
        <h3 className='panh3'>Are you satisfied with the service?</h3>
        <div className="ratings-container">
          <div
            className={`rating ${selectedRating === 'Unhappy' ? 'active' : ''}`}
            onClick={() => handleRatingClick('Unhappy')}
          >
            <img className="emoji1" src="https://th.bing.com/th/id/OIP.AaEQ6MLw_Ex9Es9MQBzERQHaHx?pid=ImgDet&rs=1" alt="" />
            <small>Unhappy</small>
          </div>

          <div
            className={`rating ${selectedRating === 'Neutral' ? 'active' : ''}`}
            onClick={() => handleRatingClick('Neutral')}
          >
            <img className="emoji2"src="https://th.bing.com/th/id/OIP.JjPyRlrdc6lKEHjTgajx6gHaHa?pid=ImgDet&rs=1" alt="" />
            <small>Neutral</small>
          </div>

          <div
            className={`rating ${selectedRating === 'Satisfied' ? 'active' : ''}`}
            onClick={() => handleRatingClick('Satisfied')}
          >
            <img className="emoji3"src="https://th.bing.com/th/id/OIP.v3OUAPNWZ__ucoa2LBNKjQAAAA?pid=ImgDet&rs=1" alt="" />
            <small>Satisfied</small>
          </div>
        </div>
        <div className='improve'>
  <center><h4 >Tell Us What Can Be Improved?</h4></center><br></br>
  <button className='febutton1' onClick={() => handleImprovementClick('Overall service')}>
    Overall service
  </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <button className='febutton2' onClick={() => handleImprovementClick('Customer Support')}>
    Customer Support
  </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <button className='febutton3' onClick={() => handleImprovementClick('Speed and Efficiency')}>
    Speed and Efficiency
  </button><br></br>
  <button className='febutton4' onClick={() => handleImprovementClick('Repair Quality')}>
    Repair Quality
  </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <button className='febutton5' onClick={() => handleImprovementClick('Seat service')}>
    Seat service
  </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <button className='febutton6' onClick={() => handleImprovementClick('Transparency')}>
    Transparency
  </button>
</div>

        <br></br><br></br>
        <textarea
          placeholder="Any extra feedbck..."
          value={comment}
          onChange={handleCommentChange}
        />
        <div className="submit-container"></div>
        <button className="btn7" onClick={handleSendClick}>Submit</button>
        {showMessage && <p className='feeb'>Thanks for giving your feedback!</p>}
      </div>
    </div>
  );
};

export default Feedback;