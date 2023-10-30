import aboutImg from "../../assets/images/about_us/person.jpg";
import AboutImg2 from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero my-10 bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="flex-1 relative">
          <img src={aboutImg} className="w-3/4 rounded-lg " />
          <img src={AboutImg2} className="w-2/5 border-8 border-white absolute right-10 -bottom-10 rounded-lg shadow-2xl" />
        </div>
        <div className="flex-1 space-y-5">
          <p className="text-[#FF3811]">About Us</p>
          <h1 className="text-5xl font-semibold">
            We are qualified & of experience in this field
          </h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>

          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>

          <button className="px-4 py-2 rounded text-xl font-medium  bg-[#FF3811] text-white border border-[#FF3811] ">
            Get More Info
          </button>
        </div>
      </div>
    </div>
    // <div className='flex gap-20 my-20 '>
    //     <div className='relative flex-1'>

    //                 <img src={aboutImg} alt="" className='' />
    //                 <div className='w-80 h-full absolute flex justify-end -right-14 top-1/3'>
    //                 <img src={AboutImg2} className='' alt="" />
    //                 </div>

    //             {/* <div className='w-64'>

    //             </div> */}
    //     </div>

    //     <div className='flex-1'>
    //         <p>About Us</p>
    //         <h1 className="text-5xl font-semibold">We are qualified & of experience in this field</h1>
    //         <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

    //         <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

    //         <button className="px-4 py-2 rounded text-xl font-medium  bg-[#FF3811] text-white border border-[#FF3811] ">Get More Info</button>
    //     </div>

    // </div>
  );
};

export default About;
