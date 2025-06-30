import React, { useRef } from 'react';
import '../css/Home.css';
import { FaStar } from 'react-icons/fa';
import imgss from '../assets/java.webp';

const courseData = [
  {
    title: 'Complete web Development Course',
    instructor: 'Dharneesh',
    rating: 4.7,
    reviews: 2039,
    price: 'Rs 499/-',
    oldPrice: 'Rs 2000/-',
    image: imgss 
  },
    {
    title: 'Complete web Development Course',
    instructor: 'Dharneesh',
    rating: 4.7,
    reviews: 2039,
    price: 'Rs 499/-',
    oldPrice: 'Rs 2000/-',
    image: imgss 
  },
    {
    title: 'Complete web Development Course',
    instructor: 'Dharneesh',
    rating: 4.7,
    reviews: 2039,
    price: 'Rs 499/-',
    oldPrice: 'Rs 2000/-',
    image: imgss 
  },
    {
    title: 'Complete web Development Course',
    instructor: 'Dharneesh',
    rating: 4.7,
    reviews: 2039,
    price: 'Rs 499/-',
    oldPrice: 'Rs 2000/-',
    image: imgss 
  },
    {
    title: 'Complete web Development Course',
    instructor: 'Dharneesh',
    rating: 4.7,
    reviews: 2039,
    price: 'Rs 499/-',
    oldPrice: 'Rs 2000/-',
    image: imgss 
  },
    {
    title: 'Complete web Development Course',
    instructor: 'Dharneesh',
    rating: 4.7,
    reviews: 2039,
    price: 'Rs 499/-',
    oldPrice: 'Rs 2000/-',
    image: imgss 
  }

];

function Home() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300;
    }
  };

  return (
    <div>
      <h1>Welcome to LearnIT</h1>

    

      <div className="cardparenrt">
        <div className="card1">
          <img src={imgss} alt="Logo" className="imgsss" />
        </div>
      </div>
       <h1>new course</h1>
      <div className="page4">
        <div className="card-container-wrapper">
          <button className="scroll-btn left" onClick={scrollLeft}>
            &#10094;
          </button>

          <div className="card-container" ref={scrollRef}>
            {courseData.map((course, index) => (
              <div className="card" key={index}>
                <img className="imgsize" src={course.image} alt="Course" />
                <h3>{course.title}</h3>
                <p>{course.instructor}</p>
                <div className="rating">
                  <div>
                    <h4 className="cardrating">{course.rating}</h4>
                  </div>
                  <div>
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="star" />
                    ))}
                  </div>
                  <div>
                    <h1 className="cardrating">({course.reviews})</h1>
                  </div>
                </div>
                <h1 className="amount">
                  {course.price} <del>{course.oldPrice}</del>
                </h1>
                <div className="boxsell">
                  <div className="boxsell1">Premium</div>
                  <div className="boxsell2">Bestseller</div>
                </div>
              </div>
            ))}
          </div>
          <button className="scroll-btn right" onClick={scrollRight}>
            &#10095;
          </button>
              <h1>new other course</h1>

        </div>
        
      </div>
    </div>
  );
}

export default Home;





