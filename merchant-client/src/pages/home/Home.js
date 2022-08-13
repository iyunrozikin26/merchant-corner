import React from "react";
import ButtonSlider from "../../components/ButtonSlider";
import CardProduct from "../../components/CardProduct";
import Corousel from "../../components/Corousel";
import Footer from "../../components/Footer";

const Home = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full p-3 flex flex-col justify-center items-center">
                <div className="flex w-8/12">
                    <Corousel />
                </div>
                <div className="w-11/12 flex justify-center items-center py-4 ">
                    <ButtonSlider />
                </div>
                <div className="w-11/12 flex justify-center items-center">
                    <CardProduct />
                </div>
            </div>
            <div className="w-full flex justify-center items-center bg-green-200 shadow-lg">
                <Footer />
            </div>
        </div>
    );
};

export default Home;
