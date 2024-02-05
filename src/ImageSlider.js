import React, { useState } from 'react'
const images=["https://e1.pxfuel.com/desktop-wallpaper/583/795/desktop-wallpaper-random-alphabet-letters-and-backgrounds-i.jpg","https://e1.pxfuel.com/desktop-wallpaper/239/369/desktop-wallpaper-requests-closed-probably-forever-penny-proud.jpg","https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64dfc44f-c08c-444e-8aa7-0e8762a53f5d/dg0dra8-4556da02-e8ba-46bd-b1cb-0b890980edfd.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY0ZGZjNDRmLWMwOGMtNDQ0ZS04YWE3LTBlODc2MmE1M2Y1ZFwvZGcwZHJhOC00NTU2ZGEwMi1lOGJhLTQ2YmQtYjFjYi0wYjg5MDk4MGVkZmQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5FIcTlvqQW2efxJCFFUd4WQxIwn5LMDTp8Aq0g0btWg","https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3c81bf4c-53df-47dd-bd2d-0015c90567ba/dfpst0a-b41f1b77-4572-45c3-b53d-72a325e9cebc.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNjODFiZjRjLTUzZGYtNDdkZC1iZDJkLTAwMTVjOTA1NjdiYVwvZGZwc3QwYS1iNDFmMWI3Ny00NTcyLTQ1YzMtYjUzZC03MmEzMjVlOWNlYmMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ggRilGOnTW1zos500d1qsByN5Iq2IZgkiJAOVTHckTA","https://e1.pxfuel.com/desktop-wallpaper/890/128/desktop-wallpaper-6091671-1080x1920-forest-artist-artwork-digital-art-glowing-deviantart-mushroom-for-iphone-6-7-8-mushroom-forest.jpg","https://c4.wallpaperflare.com/wallpaper/86/419/788/random-green-hd-wallpaper-preview.jpg"]

const ImageSlider = () => {

    const[activeImageIndex,setActiveImage]=useState(0)
    const handlePreviousButton=()=>{
        setActiveImage((!activeImageIndex?images.length-1:activeImageIndex-1))
    }

    const handleNextButton=()=>{
        setActiveImage((activeImageIndex+1)%images.length)
    }
  return (
    <div className="flex justify-center  m-20px">
      
      <button className='font-bold p-4 m-10' onClick={handlePreviousButton}>Previous</button>
      <img src={images[activeImageIndex]} alt="Wallpaper" className="w-[650px] h-[300px]  object-contain "/>
      <button className='font-bold p-4 m-10' onClick={handleNextButton}>Next</button>
    </div>
  )
}

export default ImageSlider
