export default function Speakers() {
    return (

        <div className='px-[9rem] py-[6rem]'>
            <p className="text-4xl py-4 mb-12 text-white font-bold border-b-2 border-gray-800">
                Keynote Speakers
            </p>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full ">
                    <div className='py-8 m-auto flex flex-row gap-32'>
                        <Speaker1 />
                        <Speaker2 />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle ">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='py-8 m-auto flex flex-row gap-32'>
                        <Speaker2 />
                        <Speaker3 />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className='py-8 m-auto flex flex-row gap-32'>
                        <Speaker3 />
                        <Speaker1 />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
}


function Speaker1() {
    return (
        <div className="transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-500	 speakers-card card w-96 h-[28rem] bg-[url('./assets/s1.png')] bg-cover shadow-xl">
            <div className="pt-12 card-body bg-transparent">
                <h2 className="card-title text-white text-2xl">Cathelina Jones</h2>
                <h4 className="mb-[17rem]">Harvard School, USA</h4>
                <a className="hover:underline text-white text-left">Read More</a>
            </div>
            {/* <figure className='items-end'><img src={professor} alt="Shoes" /></figure> */}
        </div>
    );
}

function Speaker2() {
    return (
        <div className="transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-500 speakers-card card w-96 h-[28rem] bg-[url('./assets/s2.png')] bg-cover shadow-xl">
            <div className="pt-12 card-body bg-transparent">
                <h2 className="card-title text-white text-2xl">Ambika Roberts</h2>
                <h4 className="mb-[17rem]">UBC, Canada</h4>
                <a className="hover:underline text-white text-left">Read More</a>
            </div>
            {/* <figure className='items-end'><img src={professor} alt="Shoes" /></figure> */}
        </div>
    );
}

function Speaker3() {
    return (
        <div className="transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-500 speakers-card card w-96 h-[28rem] bg-[url('./assets/s3.png')] bg-cover shadow-xl">
            <div className="pt-12 card-body bg-transparent">
                <h2 className="card-title text-white text-2xl">Rohit Kumar</h2>
                <h4 className="mb-[17rem]">Harvard School, USA</h4>
                <a className="hover:underline text-white text-left">Read More</a>
            </div>
            {/* <figure className='items-end'><img src={professor} alt="Shoes" /></figure> */}
        </div>
    );
}