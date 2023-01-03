import Image from "next/image";
import { useState } from "react";
import logo from "../assets/img/logo.png"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        var update = !menuOpen;
        setMenuOpen(update);
        console.log(menuOpen);
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
                            onClick={() => toggleMenu()}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6 mr-2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                                />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            <p>Settings</p>
                        </button>
                    </div>
                    <div
                        className={"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" + (menuOpen ? "" : " hidden")}
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu-button"
                        tabindex="-1"
                    >
                        <a
                            href="#"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                            tabindex="-1"
                            id="user-menu-item-0"
                        >Your Profile</a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                            tabindex="-1"
                            id="user-menu-item-1"
                        >Settings</a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                            tabindex="-1"
                            id="user-menu-item-2"
                        >Sign out</a>
                    </div>

                </div>
            </nav>
        </>
    );
}

export default Navbar;