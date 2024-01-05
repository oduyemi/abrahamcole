import { Link } from "react-router-dom";



export const Resume = () => {
    return(
        <div className="resume">
                <div className="container ms-5 pb-8 pt-2 px-4">
                    <div className="bg-primary p-6 rounded-lg shadow-lg text-white ">
                        <h1 className="text-3xl font-semibold">Abraham Cole</h1>
                        <p className="text-gray-300">Artist</p>
                        <hr className="my-2 border-t border-gray-600" />
                        <h2 className="text-xl font-semibold mb-2">Summary</h2>
                        <p className="text-gray-400">
                            Experienced web developer with a passion for creating responsive and user-friendly
                            websites. Proficient in HTML, CSS, JavaScript, and various web development frameworks.
                        </p>
                        <h2 className="text-xl font-semibold my-2">Education</h2>
                        <ul className="list-disc list-inside text-gray-400">
                            <li className="mb-1">Art Design <span> &emsp; <Link to="#">Yaba College of Technology</Link> &emsp; Nigeria </span> &emsp; 2012</li>
                            <li>General Art <span> &emsp; <Link to="#">Yaba College of Technology</Link> &emsp; Nigeria </span> &emsp; 2007</li>
                        </ul>
                        <h2 className="text-xl font-semibold my-2">Exhibition</h2>
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold">Solo</h3>
                            <p className="text-gray-400">
                                <ul className="list-disc list-inside text-gray-400">
                                    <li className="my-1">Deep Introspection
                                        <span> &emsp; &emsp;
                                            <Link to="#">Artrooms Gallery</Link> &emsp; &emsp;
                                                Kings Heath, Birmingham. UK </span> &emsp; &emsp; 2022
                                    </li>
                                </ul>     
                            </p>
                        </div>

                        <div className="mb-2">
                            <h3 className="text-lg font-semibold">Group</h3>
                            <p className="text-gray-400">
                                <ul className="list-disc list-inside text-gray-400">
                                    <li className="my-1">United Artist of South Birmingham Group View
                                        <span> &emsp; &emsp;
                                            <Link to="#">Mosley Exchange Hall</Link> &emsp; &emsp;
                                                Birmingham, United Kingdom </span> &emsp; &emsp; 2023
                                    </li>
                                    <li className="my-1">EBAY Black History Month Showcase
                                        <span> &emsp; &emsp;
                                            <Link to="#">Heron Square</Link> &emsp; &emsp;
                                                Richmond, London, United Kingdom </span> &emsp; &emsp; 2022
                                    </li>
                                    <li className="my-1">ORT Gallery Members Exhibition
                                        <span> &emsp; &emsp;
                                            <Link to="#">ORT Gallery Mosley Art Museum</Link> &emsp; &emsp;
                                                Birmingham, Unitd Kingdom </span> &emsp; &emsp; 2022
                                    </li>
                                    <li className="my-1">Back to School Orphanage Fund raising
                                        <span> &emsp; &emsp;
                                            <Link to="#">Back to School Orphanage</Link> &emsp; &emsp;
                                                Lagos, Nigeria </span> &emsp; &emsp; 2012
                                    </li>
                                    <li className="my-1">All West African Polytechnic Games
                                        <span> &emsp; &emsp;
                                            <Link to="#">ORT Gallery Mosley Art Museum</Link> &emsp; &emsp;
                                                Yaba College of Technology </span> &emsp; &emsp; 2006
                                    </li>
                                </ul>     
                            </p>
                        </div>

                        <h2 className="text-xl font-semibold my-2">Awards</h2>
                        <p className="text-gray-400">
                                <ul className="list-disc list-inside text-gray-400">
                                    <li className="my-2">Advertising Creative Personality of the Year
                                        <span> &emsp; &emsp;
                                            Lagos, Nigeria </span> &emsp; &emsp; 2019
                                    </li>
                                </ul>     
                            </p>

                        <h2 className="text-xl font-semibold my-2">Contact</h2>
                        <ul className="list-disc list-inside text-gray-400">
                            <li>Email: info@abrahamcole.co.uk</li>
                            <li>LinkedIn: <a href="#"
                                    className="text-blue-500 hover:underline">linkedin.com/in/abraham-cole</a></li>
                            <li>Website: <a href="https://www.abrahamcole.co.uk" className="text-blue-500 hover:underline">abrahamcole.co.uk</a>
                            </li>
                        </ul>
                        <h2 className="text-xl font-semibold my-2">Reference</h2>
                        <p className="text-gray-300">January 2020 - Present</p>
                    </div>
                </div>

        </div>
    );
};