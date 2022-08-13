import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { oneProduct } from "../store/actions/productCreator";

import ModalDetails from "./ModalDetails";

const CardProduct = ({ products }) => {
    const dispatch = useDispatch();
    const { selected } = useSelector((state) => state.productReducer);

    // const handleSelected = (id) => {
    //     console.log(id);
    //     dispatch(oneProduct(id));
    // };
    console.log(selected);
    return (
        <div className="container mx-auto px-4 md:px-12 bg-green-100 rounded-full w-full">
            <span className="text-xl font-semibold">Special for you {">>>>>>>>>>>>>>>"} </span>
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {products?.map((item, idx) => {
                    return (
                        <>
                            <div key={idx} className="px-1 w-full md:w-1/3 lg:my-4 lg:px-4 lg:w-1/4">
                                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable" onClick={handleSelected(item.id)}>
                                    <article className="overflow-hidden rounded-lg shadow-lg">
                                        <img alt="Placeholder" className="block h-44 rounded-lg p-1 w-full" src={item.productImg} />

                                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 className="text-lg">{item.name}</h1>
                                            <p className="text-grey-darker text-sm">new brand</p>
                                        </header>
                                        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                            <div className="flex items-center no-underline  text-black">
                                                <img alt="Placeholder" className="block rounded-full w-7" src="https://images.tokopedia.net/img/cache/215-square/shops-1/2020/3/5/3052083/3052083_3828d904-1fc4-4b9e-9ba1-fc0e6b3f1fcb.jpg" />
                                                <p className="ml-2 text-sm">Rp. {item.price},00-</p>
                                            </div>
                                            <div className="no-underline text-grey-darker hover:text-red-dark" href="#">
                                                <span className="hidden">Like</span>
                                                <i className="fa fa-heart"></i>
                                            </div>
                                        </footer>
                                    </article>
                                </button>
                                {/* <span>{item.name}</span> */}
                                {/* <ModalDetails selected={selected} /> */}
                            </div>
                        </>
                    );
                })}
            </div>
        </div>
    );
};

export default CardProduct;
