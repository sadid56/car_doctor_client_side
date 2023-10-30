import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import img1 from '../../assets/images/checkout/checkout.png'
import axios from "axios";

const UserBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/booking?email=${user?.email}`;
  useEffect(() => {
    axios.get(url, {withCredentials: true})
    .then(res => setBookings(res.data))
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data));
  }, [url]);
  // console.log(bookings);

  const handleDelete = id =>{
    const proced = confirm('Are you sure you delete this shop ?')
    if(proced){
      fetch(`http://localhost:5000/booking/${id}`, {
        method: 'delete'
      })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount === 1){
          alert('delete success')
          const remaining = bookings.filter(booking => booking._id !== id)
          setBookings(remaining)
        }
      })
    }
  }

  const handleConfirm = id =>{
    fetch(`http://localhost:5000/booking/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({status: 'confirm'})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount > 0){

        const remaining = bookings.filter(booking => booking._id !== id);
        const update = bookings.find(booking => booking._id === id);
        update.status = 'confirm'
        const newBookings = [update, ...remaining]
        setBookings(newBookings)

      }
    })
  }


  return (
    <div className="max-w-5xl mx-auto">

        <img src={img1} alt="" />

      <h3 className="text-2xl font-bold text-center my-10">Total booking: {bookings.length}</h3>
      <div className="grid grid-cols-1 gap-4">
        {bookings.map((book) => (
          <div key={book._id} className="flex items-center gap-5 border rounded-lg p-5">
            <button onClick={()=> handleDelete(book?._id)} className="btn btn-circle btn-outline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div class="flex flex-col items-center  md:flex-row ">
              <img
                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 rounded-md"
                src={book?.img}
                alt=""
              />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  {book?.name}
                </h5>
                <p class="mb-3 font-normal text-gray-400 ">
                  {book?.message}
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-500">Price: {book?.price}</h3>
            <h2 className="text-xl font-semibold text-gray-500">Date: {book?.date}</h2>
            {
              book.status === 'confirm' ? <button className="btn btn-outline btn-success normal-case text-xl">Confirmed 🎗️</button>
              :
              <button onClick={()=> handleConfirm(book._id)} className="btn normal-case px-4 py-2 rounded text-xl font-medium  bg-[#FF3811] text-white border border-[#FF3811] ">
              <span className="loading loading-spinner"></span>
              Confirm
            </button>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserBookings;
