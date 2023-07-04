import s1 from './assets/Group 1.png';
import s2 from './assets/Group 2.png';
import s3 from './assets/Group 3.png';
import s4 from './assets/Group 4.png';

export default function Sponsors() {
    return (

        <div className='px-[9rem] py-[3rem] gap-8 blue-gradbg'>
            <p className="w-full text-4xl text-white font-bold">
                Sponsors and Partners
            </p>
            <div class="flex flex-col items-start gap-y-2 self-stretch">
                <div class="flex justify-center items-start gap-16 self-stretch">
                    <img src={s1} alt="" />
                    <img src={s2} alt="" />
                </div>
                <div class="flex justify-center items-start gap-16 self-stretch">
                    <img src={s3} alt="" />
                    <img src={s4} alt="" />
                </div>
            </div>
        </div>
    );
}