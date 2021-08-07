import bg from "../assets/bg.png";
export const Molecular = () => {
  return (
    <div className='w-full relative h-96 mt-20 '>
      <img
        src={bg}
        alt='background'
        className='static z-0 object-cover min-w-full'
      />
      <div className='z-50 absolute top-1/4 pl-16'>
        <h3 className='z-50 font-bold text-5xl text-gray-50  mb-12'>
          Kitchen <br /> Molecular
        </h3>
        <p className='z-50 text-gray-100  font-semibold text-xl'>
          Oferujemy produkty dla najbardziej kreatywnych <br /> szefów kuchni
          oraz dla małych punktów gastronomicznych. <br /> Dysponujemy
          technologią i linią produkcyjną zdolną
        </p>
        <button className='cursor-pointer px-4 py-2 mt-12'>Explore</button>
      </div>
    </div>
  );
};
