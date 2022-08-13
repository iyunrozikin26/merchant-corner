import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="text-center text-white bg-blue-800 w-full flex  p-2 flex-col justify-center items-center">
            {localStorage.access_token && localStorage.role == "admin" && (
                <div className="container pb-1">
                    <div>
                        <p className="flex flex-col justify-center items-center">
                            <span className="mr-2">CONTENT MANAGEMENT SYSTEM</span>
                            <div className="flex space-x-3">
                                <Link to="/admin/cmsUsers">
                                    <button
                                        type="button"
                                        className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    >
                                        Users
                                    </button>
                                </Link>
                                <Link to="/admin/cmsProducts">
                                    <button
                                        type="button"
                                        className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    >
                                        Products
                                    </button>
                                </Link>
                            </div>
                        </p>
                    </div>
                </div>
            )}
            {!localStorage.access_token && (
                <div className="container pb-1">
                    <div>
                        <p className="flex flex-col justify-center items-center">
                            <span className="mr-2">FOR FREE</span>
                            <div className="flex space-x-3">
                                <Link to="/login">
                                    <button
                                        type="button"
                                        className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    >
                                        Sign in!
                                    </button>
                                </Link>
                                <Link to="/register">
                                    <button
                                        type="button"
                                        className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    >
                                        Sign up!
                                    </button>
                                </Link>
                            </div>
                        </p>
                    </div>
                </div>
            )}
            <Outlet />

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
