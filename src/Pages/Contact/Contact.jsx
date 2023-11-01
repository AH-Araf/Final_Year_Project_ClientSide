import emailjs from '@emailjs/browser';
import mailImg from '../../../src/assets/image/emailImg.png'

import './Contact.css'
import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
const Contact = () => {

    const form = useRef();
    const sendEmail = event => {
        event.preventDefault();
        emailjs.sendForm('service_cymluun', 'template_5o7j0vp', form.current, 'g0j5cDpujfr2vRjoG')
            .then((result) => {
                console.log(result.text);
                alert('Message Sent')

            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className="scroll-smooth">
            <Helmet>
                <title>BAIUST | Contact</title>
            </Helmet>
            <div data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center">
                <div className='m-5 border-4 border-green-300'>
                    <div className="bg-image"></div>
                </div>

                <div className="bg-text">
                    <div className='bg-text-align'>
                        <p>Syedpur, Adarsha Sadar, Cumilla <br />
                            +8801756436655, +8801572482331 <br />
                            info@baiust.ac.bd, admission@baiust.ac.bd</p>
                    </div>
                </div>
            </div>


            <section className='mail-main-section'>
                <section
                    data-aos="fade-up-right"
                >
                    <img src={mailImg} alt="" />
                </section>

                <section className='mail-section mt-20'
                    data-aos="fade-up-left"
                >

                    <form className='email-from' ref={form} onSubmit={sendEmail}>
                        <h1 className='text-2xl email-heading'>Send a message </h1>
                        <label className='label1'>Enter Name</label>
                        <input required className='input1' type="text" name="from_name" />
                        <label className='label1'>Enter Email</label>
                        <input required className='input1' type="email" name="from_email" />
                        <label className='label1'>Write Message</label>
                        <textarea required className='input2' name="message" />
                        <input className='btn btn-outline border-2 btn-success mt-5' type="submit" value="Send" />
                    </form>
                </section>
            </section>



        </div>

    );
};

export default Contact;