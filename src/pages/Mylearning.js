
import React from 'react';
import '../css/Mylearning.css';
import instructorImg from '../assets/js2.jpg';  
import courseImg from '../assets/js2.jpg';          
function Mylearning() {
  const instructorData = {
    name: "Dharneesh M T",
    bio: "Experienced Full Stack Developer with expertise in MERN, JavaScript, and modern web technologies. Passionate about teaching and helping students build real-world projects.",
    image: instructorImg,
    courses: [
      {
        id: 1,
        title: "React Complete Guide",
        price: "Rs 499/-",
        rating: 4.8,
        image: courseImg
      },
      {
        id: 2,
        title: "Node.js Masterclass",
        price: "Rs 399/-",
        rating: 4.7,
        image: courseImg
      },
      {
        id: 3,
        title: "Python for Data Science",
        price: "Rs 599/-",
        rating: 4.9,
        image: courseImg
      }
    ]
  };

  return (
    <div className="instructor-page">
      <div className="instructor-header">
        <img src={instructorData.image} alt="Instructor" className="instructor-img" />
        <div className="instructor-info">
          <h1>{instructorData.name}</h1>
          <p>{instructorData.bio}</p>
        </div>
      </div>

      <h2 className="course-heading">Courses by {instructorData.name}</h2>
      <div className="course-list">
        {instructorData.courses.map(course => (
          <div className="course-card" key={course.id}>
            <img src={course.image} alt={course.title} className="course-img" />
            <h3>{course.title}</h3>
            <p className="price">{course.price}</p>
            <p className="rating">⭐ {course.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mylearning;
