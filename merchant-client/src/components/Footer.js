import React from "react";

const Footer = () => {
    return (
        <footer className="text-center text-white bg-blue-800 w-full flex  p-2 flex-col justify-center items-center">
            <div className="container pb-1">
                <div>
                    <p className="flex justify-center items-center">
                        <span className="mr-2">Register for free</span>
                        <button
                            type="button"
                            className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        >
                            Sign up!
                        </button>
                    </p>
                </div>
            </div>
            <div className="text-center italic text-xs">
                ©2021 Copyright:{" "}
                <a className="text-white text-xs" href="#">
                    nasrunrozikin26@gmail.com
                </a>
            </div>
        </footer>
    );
};

export default Footer;
