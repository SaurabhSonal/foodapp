import Foodcard from "./Foodcard";
import { useState, useEffect } from 'react';


const Products = () => {

  // destructuring assignment in js (next line code)
  const [Foodscard, setFoodscard] = useState([]); 
  //parameters are variable
  // if there are any changes in the variable the product the component foodcard will re-render itself and changes will get reflected in there.
  // * 01:50:00 codergyan YT

  useEffect(()=>{
// if any data is getting changed the useEffect will help to perform the action

fetch('https://private-anon-1101a37721-pizzaapp.apiary-mock.com/restaurants/restaurantId/menu?category=Pizza&orderBy=rank')//api

.then(response => response.json())//converting to json file
.then(Foodscard =>{//received these product as a foodscard 

  // to set these data to state(foodscard/setFoodscard) next line code will help
  setFoodscard(Foodscard);//calling the function and passing the data
})
  },
  []//this empty array is called dependency array.
  // if we are putting the FOODSCARD in this dependency array and if there are any changes being made init, then the use effect code will get implemented.
  // we can have the multiple dependency seperated by commas,,,,
  // if we aren't passing any data in the dependency array it will act very differently =>  after the component is done mount it will just run once.
  );


  return (
    <div className="container mx-auto pb-24">
      <h1 className="text-lg font-bold my-8">Products</h1>
      <div className="grid grid-cols-5 my-8 gap-24">
      {/* curly bracket always means that we are writing a java script file */}
      {
        Foodscard.map(foodcard=><Foodcard key={Foodscard._id} foodscard={foodcard}/>)
      }
      {/* Map function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
Calls a defined callback function on each element of an array, and returns an array that contains the results. */}
      </div>
    </div>
  );
};

export default Products;
