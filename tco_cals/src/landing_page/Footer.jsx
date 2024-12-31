import React from 'react'

export default function Footer() {
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <div className="container p-3" >
        <div className="row ">
          <div className="col"><img src="/public/images/Logo.svg" alt="Logos" /></div>
          <div className="col m-2">
            <input type="email" name="email" placeholder="example@gmail.com" className="ms-4" style={{ borderRadius:"5px", width: "65%", height:"95%" , backgroundColor:"white", color: "black", borderColor: "#19AEA5", fontWeight: "700" }}/>
            <button type="submit" className="btn ms-4 " style={{ width: "20%", backgroundColor: "#19AEA5", color: "white", borderColor: "#19AEA5", fontWeight: "700",height:"95%" }}>Subscribe</button>
          </div>
        </div>
        <hr />
        <div className="row mt-5 mx-3">
          <div className="col">
            <h5 className='ms-4'>Contact Us</h5>
            <ul style={{ listStyleType: "none" }}>
              <li className='mb-2'><i class="fa-solid fa-envelope"></i> nikhiljai1704@gmail.com</li>
              <li className='mb-2'><i class="fa-solid fa-phone"></i> 9178869390</li>
              <li className='mb-2'><i class="fa-solid fa-location-dot"></i> HSR, Bangalore, Karnataka</li>
              <li className='mt-3'>
                <i className="fa-brands fa-linkedin-in"></i>
                <i className="fa-brands fa-instagram  ms-4"></i>
                <i className="fa-brands fa-twitter ms-4"></i>
                <i className="fa-brands fa-facebook ms-4"></i>
                <i className="fa-brands fa-youtube ms-4"></i>
                </li>
            </ul>
          </div>
          <div className="col">
            <h5 className='ms-4'>TechLanz</h5>
            <ul style={{ listStyleType: "none" }}>
              <li className='mb-2'>About Us</li>
              <li className='mb-2'>Careers</li>
              <li className='mb-2'>Privacy Policy</li>
              <li className='mb-2'>Terms & Conditions</li>
            </ul>
          </div>
          <div className="col">
            <h5 className='ms-4'>Products</h5>
            <ul style={{ listStyleType: "none" }}>
              <li className='mb-2'>Courses</li>
              <li className='mb-2'>Services</li>
              <li className='mb-2'>Product & Solutions</li>
            </ul>
          </div>
          <div className="col">
            <h5 className='ms-4'>Resourses</h5>
            <ul style={{ listStyleType: "none" }}>
              <li className='mb-2'>Community</li>
              <li className='mb-2'>Articles</li>
              <li className='mb-2'>Webinars</li>
              <li className='mb-2'>Case Studies</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row mt-2">
          Made with Love by Nikhil @ 2024. All Right Reserved.
        </div>
      </div>
    </div>
  )
}
