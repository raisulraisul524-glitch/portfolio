import ShoeImg1 from '../img/shoe.png';
import ShoeImg2 from '../img/virtualmart.png';

export default function Project(){
    return <section id='project' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
    
        <div className="w-1/2">
        <div className="flex justify-center"><h1 className='text-4xl text-yellow-500 border-b-4 border-red border-white mb-5 w-[160px] font-bold'>Project</h1></div>
            <p className='py-5 px-5 text-center text-yellow-500 border-b-2 border-red border-white mb-5  font-bold'>This are Some of my best Project and check my projects</p>

        </div>
        <div className="w-full">
              <div className="flex px-10 gap-5 flex-col md:flex-row">
                <div className='relative'>
                    <img src={ShoeImg1} alt="Shoe" />
                    <div className='absolute left-0 right-0 bottom-0 top-0 bg-black opacity-0 duration-500 hover:opacity-100'>
                        <p className='text-center py-5 '>This is a E-commerce Website Froent page this is only Front-end project and buil with Html,tailwind-css and javascript</p>
                    </div>
                </div>
                <div className='relative'>
                    <img src={ShoeImg2} alt="Shoe" />
                    <div className=' absolute left-0 right-0 bottom-0 top-0 bg-secondary opacity-0 duration-500 hover:opacity-100'>
                        <p className='text-center py-5 '>
                            This is A mini E-commerce website, i build thhis is website for my personal works i will with html,tailwind-css,javascript,and also backent ibuild with Ai tools 
                        </p>
                    </div>
                </div>
                
    
    
         </div>
</div>       
      </section>
       }
