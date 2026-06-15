import HeroImg from '../img/tr.png';
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";
export default function Hero(){
   




    return <section id='hero' className='flex flex-col md:flex-row px-5 py-32 bg-primary text-white text-4xl justify-center'>
        
        <div className='md:w-1/2 flex flex-col'>
            <h1><span className='text-red-500'>Hi</span><br></br>Im, <span className='text-yellow-500 '>Raisul</span>  
        <p className='text-2xl '>i am a <span className='text-red-500'></span>, undergraduate student.</p>
        </h1>
        <div className='flex py-10'>
            <a href='#' className='pr-5 hover:text-red-700'><AiOutlineTwitter/></a>
             <a href='#' className='pr-5 hover:text-red-700'><AiOutlineFacebook/></a>
              <a href='https://www.linkedin.com/in/raisul-raisul-4370953a4?utm_source=share_via&utm_content=profile&utm_medium=member_android' className='hover:text-red-700'><AiOutlineLinkedin/></a>
        </div>
        </div>
         <img className='md:w-1/3' src={HeroImg} />
    
    </section>
}