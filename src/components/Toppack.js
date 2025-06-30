import React from 'react'
import imsg from '../assets/js2.jpg'
import  '../css/Toppack.css'

function toppack() {
  return (
    <div>
         <div class="learnpage6">
            <h1>Our top pick for you</h1> 
 </div>
   <div class="page6">
         <div>
           <img src={imsg} alt="Logo" class="bestimg" width="200" />
         </div>
         <div class="page6s">
                   <h3>Complete web Developement Course</h3>
        <p>dharneesh</p>
        <div class="rating">
        <div>
        <h4 class="cardrating">4.7</h4>
        </div>
        <div>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </div>
        <div>
          <h1 class="cardrating">(2039)</h1>
        </div>
        </div>
        <h1 class="amount">$39.99  <del>$49.99</del></h1>
        <div class="boxsell">
          <div class="boxsell1">Premium</div>
          <div class="boxsell2">Bestseller</div>
        </div>
      </div>
     
        </div>

         </div>

  )
}

export default toppack