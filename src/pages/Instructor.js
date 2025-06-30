import React from 'react';
import '../css/Instructor.css';

function Instructor() {
  return (
    <div>
      <div>
        <div className="box1">
          We’re updating the free course experience for students and instructors.
          <br /><br />
          New free courses (published after March 17, 2020) must have less than 2 hours of video content.
          <br /><br />
          Existing free courses (published before March 17, 2020) that contain more than 2 hours of video content will remain published.
          <br /><br />
          All free courses will only consist of video content and resources. Certificate of completion, Q&A, and direct messaging will only be available for paid enrollments.
          <br /><br />
          To learn more about the new free course experience and policy read our FAQ on the teaching center.
          <br /><br />
          <button className="but1">Dismiss</button>
        </div>

        <div className="box2">
          <div>
            <img src="./img/js1.png" alt="" />
          </div>
          <div>
            <h1>Create an Engaging Course</h1>
            <br />
            Whether you've been teaching for years or are teaching for the first time,
            <br /><br />
            you can make an engaging course.
            <br /><br />
            We've compiled resources and best practices to help you get to the next level, no matter where you're starting.
          </div>
        </div>

        <div className="bottom1">
          <div>
            <h1>Teach the world online</h1>
            <h4>Create an online video course, reach students across the globe, and earn money</h4>
          </div>
          <div>
            <button className="bottom11">Teach on Udemy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instructor;
