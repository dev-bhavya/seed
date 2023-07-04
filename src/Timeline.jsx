export default function Timeline() {
    return (
        <div>
            <div className='px-[9rem] py-[6rem]'>
                <p className="text-4xl py-4 mb-12 text-white font-bold border-b-2 border-gray-800">
                    Timeline
                </p>
                <div className="">
                    <ul className="m-auto steps steps-horizontal">
                        <li className="step font-bold text-white w-[17rem] step-info">
                            <p className="mt-4">Paper Submission Deadline</p>
                            <p>July 10, 2023</p>
                        </li>
                        <li className="step font-bold text-white w-[17rem] step-info">
                            <p className="mt-4">Intimation of Acceptance</p>
                            <p>July 16, 2023</p>
                        </li>
                        <li className=" step font-bold w-[17rem]">
                            <p className="mt-4">Start of Submissions</p>
                            <p>July 25, 2023</p>
                        </li>
                        <li className="step font-bold w-[17rem]">
                            <p className="mt-4">Last Date of Registration</p>
                            <p className="">July 30, 2023</p>
                        </li>
                    </ul>
                </div>
            </div>
            <About />
        </div>
    );
}


function About() {
    return (
        <div className="flex flex-col gap-y-16 self-stretch p-0 md:px-36 pb-32 ">
            <div className="main-about flex flex-row gap-y-6 self-stretch px-8 py-4 bg-white rounded-2xl">
                <div className="w-[45%]">
                    <p className="text-6xl font-space-grotesk font-bold text-black">
                        Schedule and Agenda
                    </p>
                </div>

                <div className="w-[55%]">
                    <TableS />
                </div>

            </div>
        </div >
    );
}

function TableS() {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                {/* <thead>
                    <tr>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead> */}
                <tbody className="font-normal font-sans text-black text-lg">
                    {/* row 1 */}
                    <tr>
                        <td className="w-[27%]">9AM - 10AM</td>
                        <td>Registration</td>
                    </tr>
                    <tr>
                        <td>10AM - 11AM</td>
                        <td>
                            <p className="font-bold">Introduction of Techno Conference</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>11AM - 12AM</td>
                        <td>
                            <p className="font-bold">Talk from Chief Guest</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit!</p>
                        </td>
                    </tr>
                    <tr>
                        <td>1PM - 4PM</td>
                        <td>
                            <p className="font-bold">Talk from Director</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>4PM - 6PM</td>
                        <td>
                            <p className="font-bold">Session Wrap</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>6PM - 8PM</td>
                        <td>
                            <p className="font-bold">Committee Dinner</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}