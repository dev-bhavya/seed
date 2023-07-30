import sampleimg from './assets/feed1.jpg';

export default function Comittee() {
    return (

        <div className='px-[9rem] py-[3rem] blue-gradbg'>
            <p className="w-full text-4xl text-white font-bold">
                News & Announcements
            </p>
            <div className='w-full py-10 feed flex flex-row justify-between gap-10'>
                <News1 />
                <News1 />
                <News1 />
            </div>
        </div>
    );
}

function News1() {
    return (
        <div className="bg-[#ffffff] transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-500 card w-[18rem] h-[20rem] shadow-lg">
            <figure><img src={sampleimg} alt="event" /></figure>
            <div className="p-4 card-body">
                <h2 className="card-title text-black">Cohort of 2020</h2>
                <p className='text-black'>When Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <a href="" className='hover:underline transition ease-in-out text-info font-bold'>Read→</a>
            </div>
        </div>
    );
}