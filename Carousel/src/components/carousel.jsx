import React, { useEffect, useRef, useState } from 'react'

const carousel = (
  {
    images=[],
    isLoading= false,
    imageLimit =images.length -1,
    customePrevButton,
    customeNextButton,
    onImgClick=()=>{},
    imgPerSide=1
  }
) => {
   const imgRef=  useRef(null) 
  const [currentIndex , setCurrentIndex] = useState(0);
  // console.log(currentIndex)
  const [imgWidth , setImgWidth] = useState(0)


  useEffect(()=>{

    if(images.length > 0){
      setCurrentIndex(0)
    }

  },[ images])

  const goToPrev=()=>{
    setCurrentIndex((prevIndex)=>
    prevIndex ===0 ? imageLimit - 1 : prevIndex-1);
  };


  const goToNext=()=>{
    setCurrentIndex((prevIndex)=>
      prevIndex === imageLimit - 1 ? 0 : prevIndex + 1 );
  };

  console.log(imgRef?.current?.offsetWidth)

  return (
    isLoading ? <div>Loading...</div>: <div className='carousel' style={{ width:imgPerSide * imgWidth}}>
      <div className='image-container' 
      style={{transform:`translateX(-${currentIndex * imgWidth}px)`}}>
        {images.slice(0 , imageLimit >  images.length ?  images.length : imageLimit ).map((image, index)=>{
          return (
            <img  
            onLoad={()=>setImgWidth(imgRef?.current?.offsetWidth)}
               ref={imgRef}
               onClick={()=>onImgClick( image, index)}
              key={image.id}
              src={image.url}
              alt={image.title}
              className='image'/>
          )
        })}
      </div>

     {customePrevButton instanceof Function ? (customePrevButton(goToPrev) ):( <button className='btn prev 'onClick={goToPrev}>Prev</button>)}

      {customeNextButton instanceof  Function ? (customeNextButton(goToNext)) : (<button className='btn next '  onClick={goToNext}>Next</button>)}

      

    </div>

  )
}

export default carousel
