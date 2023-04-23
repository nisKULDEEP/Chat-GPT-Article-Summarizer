import React from 'react';
import {logo} from '../assets';

const Hero = () => {
    return (
        <header className="w-full flex justify-center items-center flex-col">
            <nav className="flex justify-between items-center w-full mb-10 pt-3">
                <img src={logo} alt='logo' className='w-28 object-contain'/>
            </nav>
            <h1 className='head_text'> Summarize Article with <br className='max-md:hidden'/> <span
                className='orange_gradient'> OpenAI GPT-4 </span></h1>
            <h2 className='desc'>Streamline Your Reading and Save Time with Summize: The Easy-to-Use, Open-API Article
                Summarizer Powered by Chat GPT 4, for Maximum Efficiency and Productivity.</h2>
        </header>
    )
};
export default Hero;