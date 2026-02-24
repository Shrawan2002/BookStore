import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


export default function FreeBook() {
   
  const [filterBook, setFilterBook]  = useState([]);

  useEffect(()=>{
    const getData = async()=>{
      const res = await axios.get("http://localhost:4001/book");
      console.log(res);
      let data = res.data.filter((item)=> item.category ==="Free")
      setFilterBook(data);
    }
    getData();
  },
  [])

     var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className='font-semibold text-xl pb-2'>Free offered Courses</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quisquam quo et vel, animi pariatur obcaecati necessitatibus consequuntur ex sunt itaque unde aperiam, tempora quis voluptates temporibus
         magnam? Quasi, dignissimos?</p>
      </div>
         <div>
          <Slider {...settings}>
            {filterBook.map((item)=>(
              <Cards item = {item} key={item.id} />
            ))}
          </Slider>
         </div>
    </div>
    </>
  )
}
