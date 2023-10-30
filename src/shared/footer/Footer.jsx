import logo from '../../assets/logo.svg'
const Footer = () => {
    return ( 
        <footer className='bg-[#151515]'>
            <div className="footer p-10  text-white">
 <div>
 <div className="card card-compact max-w-sm">
  <figure><img src={logo}/></figure>
  <div className="card-body">
    <p>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
    <div className="card-actions gap-3">
      <button className="btn btn-circle btn-sm"><i class="fa-brands fa-google text-blue-600"></i></button>
      <button className="btn btn-circle btn-sm"><i class="fa-brands fa-twitter text-blue-400"></i></button>
      <button className="btn btn-circle btn-sm"><i class="fa-brands fa-instagram"></i></button>
      <button className="btn btn-circle btn-sm"><i class="fa-brands fa-linkedin"></i></button>
    </div>
  </div>
</div>
 </div>
  <nav>
    <header className="footer-title">About</header> 
    <a className="link link-hover">Home</a> 
    <a className="link link-hover">Service</a> 
    <a className="link link-hover">Contact</a> 
    {/* <a className="link link-hover">Advertisement</a> */}
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">Why car doctor</a> 
    <a className="link link-hover">About</a> 
    {/* <a className="link link-hover">Jobs</a>  */}
    {/* <a className="link link-hover">Press kit</a> */}
  </nav> 
  <nav>
    <header className="footer-title">Support</header> 
    <a className="link link-hover">Support center</a> 
    <a className="link link-hover">Feadback</a> 
    <a className="link link-hover">Accesbility</a>
  </nav>
</div>
        </footer>
     );
}
 
export default Footer;