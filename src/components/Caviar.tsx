// @ts-ignore
import granat from "assets/kawior/granat.jpg";
import jablko from "assets/kawior/jablko.jpg";
import jagoda from "assets/kawior/jagoda.jpg";
import liczi from "assets/kawior/liczi.jpg";
import malina from "assets/kawior/malina.jpg";
import mango from "assets/kawior/mango.jpg";
import marakuja from "assets/kawior/marakuja.jpg";
import melon from "assets/kawior/melon.jpg";
import truskawka from "assets/kawior/truskawka.jpg";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const listOfData = [
  <img
    src={granat}
    alt='Granat'
    role='presentation'
    className='w-3/4 mx-auto rounded-lg'
    key='granat'
  />,
  <img
    src={jablko}
    alt='jablko'
    role='presentation'
    className='w-3/4 mx-auto rounded-lg'
    key='jablko'
  />,
  <img
    src={jagoda}
    alt='jagoda'
    role='presentation'
    className='w-3/4 mx-auto rounded-lg'
    key='jagoda'
  />,
  <img
    src={liczi}
    alt='liczi'
    role='presentation'
    className='w-3/4 mx-auto rounded-lg'
    key='liczi'
  />,
  <img
    src={malina}
    alt='malina'
    role='presentation'
    className='w-3/4 mx-auto rounded-lg'
    key='malina'
  />,
  <img
    src={mango}
    alt='mango'
    role='presentation'
    className='w-3/4 mx-auto rounded-lg'
    key='mango'
  />,
  <img
    src={marakuja}
    alt='marakuja'
    role='presentation'
    className='w-3/4 mx-auto rounded-lg'
    key='marakuja'
  />,
  <img
    src={melon}
    alt='melon'
    role='presentation'
    className='w-3/4 mx-auto rounded-lg'
    key='melon'
  />,
  <img
    src={truskawka}
    alt='truskawka'
    role='presentation'
    className='w-3/4 mx-auto rounded-lg'
    key='truskawka'
  />,
];

export const Caviar = () => {
  return (
    <div className=''>
      <AliceCarousel
        mouseTracking
        items={listOfData}
        autoPlay
        autoPlayInterval={1500}
        infinite
        responsive={{
          0: {
            items: 1,
          },
          640: {
            items: 2,
          },
          768: {
            items: 3,
          },
          1024: {
            items: 4,
          },
        }}
      />
    </div>
  );
};
