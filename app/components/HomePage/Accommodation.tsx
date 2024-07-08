
function Accommodation () {

    return (

        <div className="py-48">
        
                <div className="  flex justify-start items-start flex-col px-28 py-10">
                    <h1 className="text-8xl max-w-5xl text-custom-blue font-Poppins font-bold ">Accommodations</h1>
                    <p className="font-medium text-2xl text-custom-blue">Indulge in mountain luxury and find your sanctuary amidst breathtaking landscapes in our rooms and villas.</p>

                    <div className="flex justify-center items-center gap-x-10  h-96 w-full mt-40 pb-24">
                        <div className="bg-custom-white h-96 w-96 flex justify-center items-center text-5xl">
                            <p>CABIN</p>
                        </div>

                        <div className="bg-custom-white h-96 w-96 flex justify-center items-center text-5xl"> 
                            <p>ROOMS</p>
                        </div>

                        <div className="bg-custom-white h-96 w-96 flex justify-center items-center text-5xl">
                             <p>PROMOS</p>
                        </div>
                            
                    </div> 
                   
                </div>

                {/* <div className="flex  bg-green-200 px-28 pt-28"> */}
                <div className="flex px-28 pt-28 mt-16">


                        <div className="bg-custom-white w-1/2 h-72 flex justify-center items-center"> Image</div>

                        <div className=" ml-5 w-1/2  px-10 py-5 flex justify-center items-center">
                            <div className="flex flex-col justify-start items-start">
                                <div><p className="text-4xl font-bold">Rooms and Villas</p></div>
                                <div><p className="text-2xl mt-4 mb-4">Step into luxury and tranquility in the rooms and villas of DRT's top resort destination. </p></div>
                                <button className="px-12 py-2 bg-custom-blue text-white font-bold">Details</button>
                            </div>
                        </div>

                </div>

                <div className="flex px-28 pt-28">
                {/* <div className="flex  bg-green-200 px-28 pt-28"> */}

                    <div className=" mr-5 w-1/2  px-10 py-5 flex justify-center items-center">
                        <div className="flex flex-col justify-start items-start">
                            <div><p className="text-4xl font-bold">Experience</p></div>
                            <div><p className="text-2xl mt-4 mb-4">Embark on a journey of discovery with us. Explore the wonders of our resort and the hidden gems of DRT. </p></div>
                            <button className="px-12 py-2 bg-custom-blue text-white font-bold">Details</button>
                        </div>
                    </div>
                    <div className="bg-custom-white w-1/2 h-72 flex justify-center items-center"> Image</div>

                </div>

                <div className="flex  px-28 pt-28">
                {/* <div className="flex  bg-green-200 px-28 pt-28"> */}

                    <div className="bg-custom-white w-1/2 h-72 flex justify-center items-center"> Image</div>

                    <div className="ml-5 w-1/2  px-10 py-5 flex justify-center items-center">
                        <div className="flex flex-col justify-start items-start">
                            <div><p className="text-4xl font-bold">Promos and Packages</p></div>
                            <div><p className="text-2xl mt-4 mb-4">From curated tours around DRT to tailored event venues and photo shoot packages, discover the perfect offer to elevate your stay with us. </p></div>
                            <button className="px-12 py-2 bg-custom-blue text-white font-bold">Details</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Accommodation