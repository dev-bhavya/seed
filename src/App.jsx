import './App.css'
import Navbar from './Navbar';
import Speakers from './Speakers';
import Comittee from './comittee';
import Timeline from './Timeline';
import collegeLogo from './assets/nitjlogoglow.png';
import Sponsors from './Sponsors';

export default function Apps() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Speakers />
      <Comittee />
      <Timeline />
      <Sponsors />
    </>
  );
}


function Intro() {
  return (
    <div className='px-[9rem] py-[6rem] flex flex-col items-center gap-y-12 self-stretch'>
      <div className='flex flex-col items-center gap-1.5'>
        <p className="text-white text-center text-3xl font-source-sans-3 font-semibold leading-normal">
          7th International Conference
        </p>
        <p className='w-[87%] text-center text-6xl font-space-grotesk font-bold leading-tight'>
          Women Researchers in Electrical and Computing
        </p>
      </div>
      <div className="flex px-8 py-4 items-start gap-1.5 rounded-3.3xl border-2 border-btn-stroke bg-linear shadow-md">
        <p className='text-white text-center text-2xl font-space-grotesk font-bold leading-normal tracking-widest'>
          July 21-24, 2023
        </p>
      </div>
      <div className="flex flex-col items-center gap-5">
        <p className='text-white text-center text-2xl font-source-sans-3 font-bold leading-normal'>
          Department of Electrical Engineering
        </p>
        <p className='text-white text-center text-3xl font-source-sans-3 font-semibold leading-normal'>
          Dr B R Ambedkar National Institute of Technology <br /> Jalandhar, Punjab, India
        </p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="flex flex-col gap-y-16 self-stretch p-0 md:px-36 pb-32 ">
      <div className="main-about flex flex-col gap-y-6 self-stretch px-8 py-4 bg-white rounded-2xl">
        <div className="flex flex-col gap-y-10">
          <div className="flex justify-between">

            <p className="flex flex-col justify-center flex-1 self-stretch text-justify text-7xl font-space-grotesk font-bold leading-10 text-black">About</p>

            <div className="w-[50%] flex items-center justify-center">
              <img src={collegeLogo} alt='NITJ' />
              <p className="flex flex-col justify-center flex-1 self-stretch text-2xl font-semibold leading-9 font-source-sans text-black">Dr B R Ambedkar National Institute of Technology Jalandhar</p>
            </div>

          </div>
          <div className='text-black text-1.5xl text-justify font-source-sans font-normal leading-11'>
            <p>Though women are underrepresented in engineering, but the number has been growing consistently as more women are opting to pursue studies in this field and still there is a lot required to be done to encourage this trend. We would like to dedicate this conference so as to promote and encourage women engineers and motivate young girls to follow their academic interests to a career in engineering. With a view to inspire women engineers, pioneer and successful women. heir academic interests to a career in engineering. With a view to inspire women engineers, pioneer and successful women.</p>
            <br />
            <p className='font-bold'>However, participation is not limited to women candidates only. It is open for all the researchers in specified areas.</p>
          </div>
          <div className="navbar-end">
            <a className="normal-case font-medium btn btn-outline btn-info shadow shadow-[#3095A6] border-solid border-[#0479A0]">Register Here</a>
          </div>
        </div>
      </div>
    </div >
  );
}

