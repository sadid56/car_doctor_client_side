import { useLoaderData } from "react-router-dom";
import img1  from '../../assets/images/checkout/checkout.png'
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const {user} = useContext(AuthContext)
//   console.log(user);
  console.log(service);
  const {price, _id, title, img} = service;

    const handleOrder = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const price = form.price.value;
        const email = user?.email;
        const message = form.message.value;
        const orderNow  = {
            name,
             date,
              price,
              email, 
              message,
               img,
               service_id: _id

            }
        console.log(orderNow);

        fetch('http://localhost:5000/booking', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderNow)
        })
        .then(res => res.json())
        .then(data =>{

        })
        .catch(error => {
            console.log(error.message);
        })

    }

  return (
    <div className="max-w-5xl mx-auto">

    <div>
        <img src={img1}  className="w-full" alt="" />
    </div>

        <h2 className="text-2xl font-semibold text-center mt-5">Book Now: {title}</h2>
      <div className="hero">
        
            <form onSubmit={handleOrder} className="card-body">
             <div className="flex gap-4">
             <div>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                  name="name"
                  defaultValue={user?.displayName}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="input input-bordered"
                  required
                  name="email"
                  defaultValue={user?.email}
                />
              
              </div>
             </div>
             <div>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">date</span>
                </label>
                <input
                  type="date"
                  placeholder="date"
                  className="input input-bordered"
                  required
                  name="date"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  className="input input-bordered"
                  required
                 name="price"
                 defaultValue={'$ ' + price}
                />
              
              </div>
             </div>
             </div>
             <textarea name="message" className="textarea textarea-bordered" placeholder="Message"></textarea>
              <div className="form-control mt-6">
                <button type="submit" className="btn bg-[#FF3811] text-white">Order Now</button>
              </div>
            </form>
          </div>
        </div>
     
  );
};

export default CheckOut;
