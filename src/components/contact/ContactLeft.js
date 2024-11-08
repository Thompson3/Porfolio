import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <iframe
  className="position-relative rounded w-100 h-100"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d758054.0861386663!2d8.366559497208013!3d9.08201012203915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93e59e5e2bdf%3A0x3544e8925d391688!2sCalabar%2C%20Nigeria!5e0!3m2!1sen!2sbd!4v1619084971187!5m2!1sen!2sbd"
  frameborder="0"
  style={{ minHeight: '250px', border: '0' }}
  allowfullscreen
  aria-hidden="false"
  tabindex="0"
  title="Google Map of Calabar"
/>

      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Thompson Eno</h3>
        <p className="text-lg font-normal text-gray-400">
          Software Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Specialize in creating dynamic, user focused web and mobile applications.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+234 816-743-9718</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">thompsoneno78@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
            <div className="flex gap-4">
                      <span className="bannerIcon">
                           <a href="https://www.facebook.com/thompson.benedict.73 " target="_blank" rel="noopener noreferrer">
                              <FaFacebookF />
                           </a>
                      </span>
                      <span className="bannerIcon">
                            <a href="https://x.com/Thompson_Ben305?t=tvtwUWRLWegcNwmBbeVnQg&s=09" target="_blank" rel="noopener noreferrer">
                              <FaTwitter />
                            </a>
                      </span>
                      <span className="bannerIcon">
                          <a href="https://www.linkedin.com/in/thompson-eno-0444ab321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                            target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                          </a>
                      </span>
            </div>
      </div>
    </div>
  );
}

export default ContactLeft