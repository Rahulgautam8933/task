import React from 'react'


import contact from "../images/1234.png"

const Footer = () => {
    return (
        <div>
            <div
                className="bg-black text-white flex items-center justify-center min-h-screen py-8"
            >
                <div>
                    <div
                        className="flex flex-col w-[90%] m-auto md:flex-row items-center justify-center   bg-black"
                    >
                        <div className="w-full md:w-1/2 p-4">
                            <img
                                src={contact}
                                alt="Contact Image"
                                className="rounded-lg w-full object-cover"
                            />
                        </div>
                        <div className="w-full md:w-1/2 p-2">
                            <h2 className="text-2xl font-bold mb-4">Get in touch today</h2>
                            <form className="space-y-6">
                                <div>
                                    <label for="name" className="block text-sm font-medium">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Alexander"
                                        className="w-full mt-1 p-2 bg-gray-800 border-b border-gray-600 focus:outline-none text-white"
                                    />
                                </div>

                                <div>
                                    <label for="email" className="block text-sm font-medium"
                                    >Email address</label
                                    >
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Smith@gmail.com"
                                        className="w-full mt-1 p-2 bg-gray-800 border-b border-gray-600 focus:outline-none text-white"
                                    />
                                </div>

                                <div className="flex space-x-4">
                                    <div className="w-1/2">
                                        <label for="company" className="block text-sm font-medium"
                                        >Company</label
                                        >
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            placeholder="Facebook"
                                            className="w-full mt-1 p-2 bg-gray-800 border-b border-gray-600 focus:outline-none text-white"
                                        />
                                    </div>
                                    <div className="w-1/2">
                                        <label for="contact" className="block text-sm font-medium"
                                        >Contact number</label
                                        >
                                        <div className="flex items-center">
                                            <span className="bg-gray-700 px-2 py-2 rounded-l-md">+91</span>
                                            <input
                                                type="tel"
                                                id="contact"
                                                name="contact"
                                                placeholder="Contact Number"
                                                className="w-full p-2 bg-gray-800 border-b border-gray-600 rounded-r-md focus:outline-none text-white"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label for="describe" className="block text-sm font-medium"
                                    >Describe</label
                                    >
                                    <textarea
                                        id="describe"
                                        name="describe"
                                        placeholder="Hello, I wanted to inquire about the..."
                                        className="w-full mt-1 p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none text-white"
                                        rows="3"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-2 bg-blue-600 rounded-md text-white font-medium hover:bg-blue-700 transition"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>


            </div>

            <footer className="bg-black py-8" style={{ paddingTop: "30px" }}>
                <div className="container w-[90%] m-auto mx-auto  flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-xl font-bold mb-4" style={{ color: "white" }}>
                            Lorem ipsum dolor sit amet consectetur. Enim est.
                        </h3>
                        <p className="mb-4" style={{ color: "white" }}>
                            We’ve created the product that will help your startup to look even
                            better
                        </p>
                        <div className="flex items-center">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="p-2 rounded-l-md bg-gray-800 border-none text-white w-2/3"
                            />
                            <button
                                className="p-2 bg-blue-600 rounded-r-md w-1/3 hover:bg-blue-700"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div
                        className="w-full md:w-1/3 flex justify-between mb-6 md:mb-0"
                        style={{ color: "white" }}
                    >
                        <div>
                            <h4 className="font-bold mb-4">About</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:underline">Education</a></li>
                                <li><a href="#" className="hover:underline">Telematics</a></li>
                                <li><a href="#" className="hover:underline">Integrations</a></li>
                                <li><a href="#" className="hover:underline">Agriculture</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Resources</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:underline">Services</a></li>
                                <li><a href="#" className="hover:underline">Industry</a></li>
                                <li><a href="#" className="hover:underline">Startup</a></li>
                                <li><a href="#" className="hover:underline">Media</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full md:w-1/6" style={{ color: "white" }}>
                        <h4 className="font-bold mb-4">Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:underline flex items-center"
                                ><span className="mr-2">🐦</span> Twitter</a
                                >
                            </li>
                            <li>
                                <a href="#" className="hover:underline flex items-center"
                                ><span className="mr-2">📘</span> Facebook</a
                                >
                            </li>
                            <li>
                                <a href="#" className="hover:underline flex items-center"
                                ><span className="mr-2">🅖</span> Google</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>


                <div
                    className="container w-[90%] m-auto mx-auto  mt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center pt-4 text-sm"
                    style={{ color: "white" }}
                >
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        <a href="#" className="hover:underline">Terms of Service</a>
                        <a href="#" className="hover:underline">Privacy Policy</a>
                    </div>
                    <p className="text-gray-400">
                        &copy; Copyright 2024 direct. All Right Reserved
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
