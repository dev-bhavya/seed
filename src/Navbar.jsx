import seedLogo from "./assets/Seed Logo.png";

export default function SNavbar() {
    return (
        <div className="">
            <div className="navbar lg:px-[9rem]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <img src={seedLogo} alt="Logo" className="w-[6.25rem] h-[6.25rem]" />
                    <a className="text-white text-5xl tracking-widest">SEED</a>
                </div>
                <div className="navbar-end">
                    <a className="normal-case font-medium btn btn-outline btn-info shadow shadow-[#3095A6] border-solid border-[#0479A0]">Register Here</a>
                </div>
            </div>
            <Menu />
        </div>

    );

}

function Menu() {
    return (
        <ul className="flex flex-col justify-between items-center self-stretch lg:px-[9rem] w-[100%] bg-gradient-to-r from-blue-100 to-blue-900 via-opacity-25 menu menu-vertical lg:menu-horizontal">
            <li className="text-white text-center text-lg font-space-grotesk font-medium leading-normal"><a>Home</a></li>
            <li className="text-white text-center text-lg font-space-grotesk font-medium leading-normal"><a>Speakers</a></li>
            <li className="text-white text-center text-lg font-space-grotesk font-medium leading-normal"><a>Committee</a></li>
            <li className="text-white text-center text-lg font-space-grotesk font-medium leading-normal"><a>Schedule</a></li>
            <li className="text-white text-center text-lg font-space-grotesk font-medium leading-normal"><a>Sponsors</a></li>
            <li className="text-white text-center text-lg font-space-grotesk font-medium leading-normal"><a>Awards</a></li>
            <li className="text-white text-center text-lg font-space-grotesk font-medium leading-normal"><a>Latest</a></li>
            <li className="text-white text-center text-lg font-space-grotesk font-medium leading-normal"><a>Info</a></li>
        </ul>
    );
}