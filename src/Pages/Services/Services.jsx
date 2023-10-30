import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/services`)
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    // console.log(services);
    return (  
        <div>
            <div className="text-center my-5 space-y-2">
                <p className="text-[#FF3811] font-semibold">Service</p>
                <h2 className="text-5xl font-bold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.</p>
            </div>
            <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto mt-10">
                {
                    services?.map(servic => <div key={servic?.service_id} className="card ">
                    <figure><img src={servic?.img} className="rounded-lg md:h-[250px]"/></figure>
                    <div className="card-body p-5">
                      <h2 className="card-title text-4xl">{servic?.title}</h2>
                      <div className="card-actions mt-4">
                        <p className="text-[#FF3811] font-semibold">Price: ${servic?.price}</p>
                        <Link to={`/checkOut/${servic._id}`}>
                        <button className="text-[#FF3811]"><i class="fa-solid fa-arrow-right"></i></button></Link>
                      </div>
                    </div>
                  </div>)
                }
            </div>
            <div className="flex justify-center my-10">
           <button className=" px-4 py-2 text-[#FF3811] rounded text-xl font-medium normal-case hover:bg-[#FF3811] hover:text-white border border-[#FF3811] ">More Services <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
     );
}
 
export default Services;