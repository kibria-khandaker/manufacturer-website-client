import React from 'react';
import { Link } from 'react-router-dom';
import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='  bg-[#fd4475] bg-opacity-5 py-4 md:flex justify-between px-20 items-center gap-4'>
            <div>
                <Link className=' text-decoration-none text-[#fd4475] font-bold' to={'/privacyPolicy'}> Our Privacy policy </Link>
                <p className='m-0 text-[#fd4475] '> <small>Copyright @ {year} </small>-construction tools manufacture </p>
            </div>
            <div className='fs-4 flex pt-3'>
                <a className=' text-[#fd4475]' href="https://www.facebook.com/amikibria"><SiFacebook></SiFacebook></a> &nbsp; &nbsp;
                <a className=' text-[#fd4475]' href="https://www.linkedin.com/in/kibria-khandaker/"><SiLinkedin></SiLinkedin></a> &nbsp; &nbsp;
                <a className=' text-[#fd4475]' href="https://github.com/kibria-khandaker"><SiGithub></SiGithub></a>
            </div>
        </footer>
    );
};

export default Footer;