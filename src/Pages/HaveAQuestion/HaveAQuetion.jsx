const HaveAQuestion = () => {
    return ( 
        <div className="bg-[#151515] mb-10 rounded-md flex justify-between px-10 py-24">
            <div className="flex gap-4 items-center">
                <h2 className="text-3xl text-[#FF3811]"><i class="fa-regular fa-calendar-days"></i></h2>
                <div>
                    <p className="font-medium text-white">We are open monday-friday</p>
                    <h2 className="text-2xl font-semibold text-white">7:00 am - 9:00 pm</h2>
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <h2 className="text-3xl text-[#FF3811]"><i class="fa-solid fa-phone"></i></h2>
                <div>
                    <p className="font-medium text-white">Have a question?</p>
                    <h2 className="text-2xl font-semibold text-white">+2546 251 2658</h2>
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <h2 className="text-3xl text-[#FF3811]"><i class="fa-solid fa-location-dot"></i></h2>
                <div>
                    <p className="font-medium text-white">Need a repair? our address</p>
                    <h2 className="text-2xl font-semibold text-white">Liza Street, New York</h2>
                </div>
            </div>
        </div>
     );
}
 
export default HaveAQuestion;