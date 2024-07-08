
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

import React, { useState, ChangeEvent, FormEvent } from 'react';


    interface FormData {
        name: string;
        contactNumber: string;
        email: string;
        message: string;
    }
    
    const Contact: React.FC = () => {
        const [formData, setFormData] = useState<FormData>({
            name: '',
            contactNumber: '',
            email: '',
            message: ''
        });
    
        const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        };
    
        const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            // Handle form submission logic here
            console.log(formData); // Replace with your logic
        };

    return (
            <div className="flex px-32 py-32">
                <div className="w-1/2  pl-24 py-12  flex justify-start items-start flex-col">

                    <div className="pb-12">
                        <p className="text-4xl font-bold pb-3">Contact Us</p>
                        <p className="text-2xl font-medium">Reach out to us and let's start planning your dream getaway at Teomatenzos Resort!</p>
                    </div>

                    <div className="flex flex-col gap-y-4 ">
                        <div className="flex items-center text-2xl font-medium">
                            <BsFillTelephoneFill />
                            <p className="block ml-2 "> (123) 123-1028</p>
                        </div>

                        <div className="flex items-center text-2xl font-medium">
                            <BsFillTelephoneFill />
                            <p className="block ml-2 "> (531) 1324-2455</p>
                        </div>
                   
                   
                        <div className="flex items-center text-2xl font-medium">
                            <FaEnvelope />
                            <p className="block ml-2">sample@email.com</p>
                        </div>
                        
                        <div className="flex items-center text-2xl font-medium">
                            <FaLocationDot />
                            <p className="block ml-2">Camachin, DRT, Bulacan</p>
                        </div>

                        <div className="flex items-center text-2xl font-medium gap-x-4">
                            <FaFacebook />
                            <GrInstagram />
                        </div>
                    </div>
                </div>

                <div className="w-1/2 px-12 py-12 gap-y-4 flex flex-col ">

                    {/* <div className="bg-slate-200 w-11/12 h-14 flex justify-start items-center pl-6 text-2xl"><span className="opacity-70">Name:</span></div>
                    <div className="bg-slate-200 w-11/12 h-14 flex justify-start items-center pl-6 text-2xl">Email:</div>

                    <div className="bg-slate-200 w-11/12 h-14 flex justify-start items-center pl-6 text-2xl">Contact Number:</div>
                    <div className="bg-slate-200 w-11/12 h-36 flex justify-start pt-2 pl-6 text-2xl">Message: </div>
                    <button className="bg-custom-blue text-white px-10 py-4 w-40 text-center font-bold">Submit</button> */}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-xl font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xl"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="contactNumber" className="block text-xl font-medium text-gray-700">Contact Number</label>
                            <input
                                type="tel"
                                id="contactNumber"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xl"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-xl font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xl"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-xl font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xl"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-custom-blue text-white py-3 px-3 rounded-md hover:bg-indigo-900 focus:outline-none focus:bg-indigo-900 text-2xl font-medium"
                        >
                            Submit
                        </button>
                    </form>
                            

                </div>
            </div>

    )
}

export default Contact;