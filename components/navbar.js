import Image from "next/image";
import { deleteCookie } from 'cookies-next';
import { useRouter } from "next/router"
import { useState } from "react";
import logo from "../assets/img/logo.png"

function Navbar() {
    const router = useRouter();

    const logout = () => {
        deleteCookie('token');
        router.replace("/");
    }

    return (
        <>
            <nav className="flex justify-between items-center ">
                <Image src={logo} alt="portio logo" className="h-[50px] md:h-[80px] w-auto" />
                <div className="relative ml-3">
                    <div>
                        <button
                            type="button"
                            className="flex flex-row rounded-md px-2 md:px-4 py-2 border justify-center items-center"
                            id="user-menu-button"
                            aria-expanded="false"
                            aria-haspopup="true"
                            onClick={logout}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                            </svg>

                            <p className="ml-2">Logout</p>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;