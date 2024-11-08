import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiDart, SiJavascript, SiFlutter } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <SiFlutter />
            </span>
            <span className="bannerIcon">
              <SiDart />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media