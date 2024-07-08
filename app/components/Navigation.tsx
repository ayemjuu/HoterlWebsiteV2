

import { NavLink } from "@remix-run/react";

import logo from '../images/logo.png'



 function Navigation () {

    return (
        <header>
            <nav className=" bg-custom-white gap-20 flex justify-center items-center font-Poppins font-bold  px-10 py-6 gap-x-20 ">

            <img src={logo} alt="Logo" className="w-32 h-32" />
            

                <NavLink to={"/"}
                       className={({ isActive }) =>
                        isActive ? ' underline underline-offset-5' : 'text-black hover:text-green-500'
                    }
                ><span className="text-xl  text-custom-blue">Home</span></NavLink>


                <NavLink to={"/room"}
                       className={({ isActive }) =>
                        isActive ? 'font-bold underline' : ' hover:text-black'
                    }
                ><span className="text-xl  text-custom-blue">Room</span></NavLink>


                <NavLink to={"/experience"}
                    className={({ isActive }) =>
                        isActive ? 'font-bold underline ' : ' hover:text-black'
                    }
                ><span className="text-xl  text-custom-blue">Experience</span></NavLink>


                <NavLink to={"/dining"}
                    className={({ isActive }) =>
                        isActive ? 'font-bold ' : ' hover:text-black'
                    }
                ><span className="text-xl  text-custom-blue">Dining</span></NavLink>


                <NavLink to={"/offer"}
                    className={({ isActive }) =>
                        isActive ? 'font-bold ' : ' hover:text-black'
                    }
                ><span className="text-xl  text-custom-blue">Offers</span></NavLink>


                <NavLink to={"/contact"}
                    className={({ isActive }) =>
                        isActive ? 'font-bold ' : ' hover:text-black'
                    }
                ><span className="text-xl  text-custom-blue">Contacts</span></NavLink>

                <button className="bg-custom-blue px-10 py-2 text-white">Book Now</button>

            
            </nav>


        </header>
    )
}

export default Navigation;