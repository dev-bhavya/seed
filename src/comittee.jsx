import professor from './assets/director.jpg';

export default function Comittee() {
    return (

        <div className='px-[9rem] py-[3rem] gap-16 blue-gradbg'>
            <p className="w-full text-4xl text-white font-bold">
                Organizing Comittee
            </p>
            <div className='flex justify-center items-center gap-x-32 self-stretch'>
                <Member1 />
                <Member1 />
            </div>
            <div className='flex justify-center items-center gap-x-32 self-stretch'>
                <Member1 />
                <Member1 />
                <Member1 />
            </div>
        </div>
    );
}

function Member1() {
    return (
        <div className="avatar flex flex-col items-center justify-center gap-1">
            <div className="w-24 mask mask-squircle mb-4">
                <img src={professor} />
            </div>
            <p className='text-grad text-xl text-black font-extrabold'>Dr Binod K Kanoujia</p>
            <p className='text-black text-sm font-normal font-montserrat leading-sm tracking-wider'>Director NITJ</p>

        </div>
    );
}