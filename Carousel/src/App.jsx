import React, { useEffect, useState } from 'react'
import Carousel from './components/carousel';
import './App.css';
const App = () => {
  const [images , setImages]= useState([])
  console.log(images);
  const [loading , setLoading] = useState
  (false);

  


  const fetchImages = async ( imgLimit)=>{

    setLoading(true);
    try{

      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${imgLimit}`);

      const data = await response.json();
       setImages(data);
    }catch(error){
      console.log("Error fetching images :" , error);
    }

    finally{
      setLoading(false);
    }

  }

  useEffect(()=>{
    fetchImages(8);
  } , [])

  return (
    <div className='carousel-container'>
      <Carousel 
      images={images} 
       isLoading={loading}
      //  onImgClick={(image, index)=>{}}
       imgPerSide={2}
      imageLimit={4}
      customePrevButton={(onClick)=>
         (<button className='btn prev ' style={{background:"red"}}  onClick={onClick}>Prev</button>)}

      customeNextButton={(onClick)=> (<button className='btn next ' style={{background:"blue"}}  onClick={onClick}>Next</button>)}
      />
    </div>
  )
}

export default App
