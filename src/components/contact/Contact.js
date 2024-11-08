import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  useEffect(() => {
    if (errMsg || successMsg) {
      const timer = setTimeout(() => {
        setErrMsg("");
        setSuccessMsg("");
      }, 5000);
      return () => clearTimeout(timer); // Clear the timeout if the component unmounts
    }
  }, [errMsg, successMsg]);

  const handleSend = (e) => {
    e.preventDefault();

    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please provide your email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Please provide a valid email!");
    } else if (subject === "") {
      setErrMsg("Subject is required!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      const templateParams = {
        from_name: username,
        to_name: "Mr Thompson", // Replace with the recipient's name
        phone_number: phoneNumber,
        email: email,
        subject: subject,
        message: message,
      };

      emailjs.send(
        'service_yzfetta',       // Replace with your actual Service ID
        'template_ccyk218',       // Replace with your actual Template ID
        templateParams,
        '8DtDb8BfT0OkV18Pw'            // Replace with your actual User ID
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccessMsg(`Thank you, ${username}, your message has been sent successfully!`);
        setErrMsg("");
        setUsername("");
        setPhoneNumber("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setErrMsg("Failed to send the message. Please try again.");
      });
    }
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Your name</p>
                  <input onChange={(e) => setUsername(e.target.value)} value={username} className={`${errMsg === "Username is required!" && "outline-designColor"} contactInput`} type="text" />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Phone Number</p>
                  <input onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} className={`${errMsg === "Phone number is required!" && "outline-designColor"} contactInput`} type="text" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                <input onChange={(e) => setEmail(e.target.value)} value={email} className={`${errMsg === "Please provide your email!" && "outline-designColor"} contactInput`} type="email" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Subject</p>
                <input onChange={(e) => setSubject(e.target.value)} value={subject} className={`${errMsg === "Subject is required!" && "outline-designColor"} contactInput`} type="text" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
                <textarea onChange={(e) => setMessage(e.target.value)} value={message} className={`${errMsg === "Message is required!" && "outline-designColor"} contactTextArea`} cols="30" rows="8"></textarea>
              </div>
              <div className="w-full">
                <button onClick={handleSend} className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent">Send Message</button>
              </div>
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;