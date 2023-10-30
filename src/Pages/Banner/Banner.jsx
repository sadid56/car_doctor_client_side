import slider1 from '../../assets/images/banner/1.jpg'
import slider2 from '../../assets/images/banner/2.jpg'
import slider3 from '../../assets/images/banner/3.jpg'
import slider4 from '../../assets/images/banner/4.jpg'
import slider5 from '../../assets/images/banner/5.jpg'
import slider6 from '../../assets/images/banner/6.jpg'


const Banner = () => {

  const bannerText = <>
  <div className="absolute flex   h-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-lg">
      <div className='w-1/2 space-y-5 pl-10'>
        <h2 className='text-6xl font-semibold text-white'>Affordable Price For Car Servicing</h2>
        <p className='text-gray-300 font-medium'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className='flex gap-3 items-center'>
          <button className="px-4 py-2 rounded text-xl font-medium  bg-[#FF3811] text-white border border-[#FF3811] ">Discover More</button>
          <button className="px-4 py-2 text-white rounded text-xl font-medium hover:text-white border border-white">Latest Project</button>
        </div>
      </div>
    </div>
  </>


    return ( 
        <div className="carousel w-full h-[80vh]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={slider1} className="w-full rounded-lg" />
    {bannerText}
    <div className="absolute flex gap-4 justify-end transform -translate-y-1/2 left-5 right-10 bottom-0">
      <a href="#slide6" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={slider2} className="w-full" />
    {bannerText}
    <div className="absolute flex gap-4 justify-end transform -translate-y-1/2 left-5 right-10 bottom-0">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={slider3} className="w-full" />
    {bannerText}
    <div className="absolute flex gap-4 justify-end transform -translate-y-1/2 left-5 right-10 bottom-0">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={slider4} className="w-full" />
    {bannerText}
    <div className="absolute flex gap-4 justify-end transform -translate-y-1/2 left-5 right-10 bottom-0">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
    <img src={slider5} className="w-full" />
    {bannerText}
    <div className="absolute flex gap-4 justify-end transform -translate-y-1/2 left-5 right-10 bottom-0">
      <a href="#slide5" className="btn btn-circle">❮</a> 
      <a href="#slide6" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full">
    <img src={slider6} className="w-full" />
    {bannerText}
    <div className="absolute flex gap-4 justify-end transform -translate-y-1/2 left-5 right-10 bottom-0">
      <a href="#slide5" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
     );
}
 
export default Banner;