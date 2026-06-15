import ResumeImg from '../img/Resume.avif';
export default function Resume (){
    return <section id='resume' className='flex flex-col md:flex-row bg-secondary px-30'>
        <div className='md:w-1/2 py-5 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImg}></img>
        </div>
        <div className='md:w-1/2 py-5 flex justify-center'>
         <div className='flex flex-col justify-center gap-3 px-6'>
            <h1 className='text-4xl text-yellow-500 border-b-4 border-red border-white mb-5 w-[160px] font-bold'>Resume</h1>
            <p className='text-2xl pb-5 text-white'>You Can See MY Resume<a className='btn ' href="#">Download</a></p>
            
         </div>
        </div>
    </section>

}