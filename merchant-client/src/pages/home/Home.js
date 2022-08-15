import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../../store/actions/productCreator";

import ButtonSlider from "../../components/ButtonSlider";
import CardProduct from "../../components/CardProduct";
import Corousel from "../../components/Corousel";

const Home = () => {
    const dispatch = useDispatch();
    const { products, error, loading } = useSelector((state) => state.productReducer);

    useEffect(() => {
        dispatch(allProducts());
    }, []);

    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full p-3 flex flex-col justify-center items-center">
                {loading && !error && <span className="flex items-center text-2xl font-extralight">Loading. . .</span>}
                {!loading && error && <span className="flex items-center text-2xl font-extralight">{error}</span>}
                {!loading && !error && (
                    <>
                        <div className="flex w-8/12">
                            <Corousel />
                        </div>
                        <div className="w-11/12 flex justify-center items-center py-4 ">
                            <ButtonSlider />
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <CardProduct products={products} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Home;
