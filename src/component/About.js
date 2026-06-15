import AboutImg from '../img/vb.avif';
export default function About (){
    const config = {
        line1:'Hi, My Name is Raisul. I am a Aspiring Full Stack Developer. I build website with html,css,React.js and Tailwind.css.',
        line2:'I am proficient in Frontend skills like react.js and Tailwint.css and i am a photo editer adhope lighroom',
        line3:'In Backend I Know Node.js Express.js,Mongo,Db'
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-8' id='about'>
        <div className='md:w-1/2 py-5'>
            <img src={AboutImg} alt="About Me" />

        </div>
        <div className='md:w-1/2 py-5 flex justify-center'>
         <div className='flex flex-col justify-center gap-3 px-6'>
            <h1 className='text-4xl text-yellow-500 border-b-4 border-red-500 mb-5 w-[160px] font-bold'>About Me</h1>
            <p className='text-2xl pb-5 text-white'>{config.line1}</p>
            <p className='text-white'>{config.line2}</p>
            <p className='pb-5 text-white'>{config.line3} </p>
         </div>
        </div>
    </section>

}