import React from 'react';
import { Link } from 'react-router-dom';
import singleProduct from '../Pages/singleProduct';

const Foodcard = (props) => {
  // here props have all the product from the api

  // destructering the object
  // const{foodcard}= props; if we are using this code the we dont need to write the props.foodscard.name we can just write foodscard.name and viceversa. 
  return(
    // console.log(props),
    <Link to="singleProduct/abcde">
       <div>
          <img src="image/peproni.png" alt="peproni" />
          
          <div className="text-center">
            <h2 className="text-lg font-bold py-2">{props.foodscard.name}</h2>
            <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
            {props.foodscard.category}
            </span>
          </div>

          <div className="flex justify-between items-center mt-4">
            <span>₹{props.foodscard.price}</span>
            <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">
              ADD
            </button>
          </div>
        </div>
    </Link>
  )
};

export default Foodcard;

