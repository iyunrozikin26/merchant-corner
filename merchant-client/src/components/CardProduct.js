import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCart } from "../store/actions/cartCreator";
import { oneProduct, setSelectedProduct } from "../store/actions/productCreator";

import ModalDetails from "./ModalDetails";

const CardProduct = ({ products }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [amount, setAmount] = useState(1);

    const handleSelected = (id) => {
        dispatch(oneProduct(id))
            .then((result) => {
                return dispatch(setSelectedProduct(result.data));
            })
            .then((res) => {
                navigate(`/product/${id}/details`);
            })
            .catch((err) => {
                console.log(err);
            });
        console.log(id);
    };

    const handleCart = (id) => {
        dispatch(addCart(id, amount));
    };

    return (
        <div className="container mx-auto px-4 md:px-12 bg-green-100 rounded-full w-full">
            <span className="text-xl font-semibold">Special for you {">>>>>>>>>>>>>>>"} </span>
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {products?.map((item, idx) => {
                    return (
                        <>
                            <div key={idx} className="px-1 w-full md:w-1/3 lg:my-4 lg:px-4 lg:w-1/4">
                                <article className="overflow-hidden rounded-lg shadow-lg">
                                    {/* <button onClick={() => handleSelected(item.id)} type="button" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable"> */}
                                    <img onClick={() => handleSelected(item.id)} alt="Placeholder" className="block h-44 rounded-lg p-1 w-full" src={item.productImg} />

                                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                        <h1 className="text-lg">{item.name}</h1>
                                        <p className="text-grey-darker text-sm">new brand</p>
                                    </header>
                                    {/* </button> */}
                                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                        <div className="flex items-center no-underline  text-black">
                                            <img alt="Placeholder" className="block rounded-full w-7" src="https://images.tokopedia.net/img/cache/215-square/shops-1/2020/3/5/3052083/3052083_3828d904-1fc4-4b9e-9ba1-fc0e6b3f1fcb.jpg" />
                                            <p className="ml-2 text-sm">Rp. {item.price},00-</p>
                                        </div>
                                        <div className="no-underline text-grey-darker hover:text-red-dark" href="#">
                                            <button className="" onClick={() => handleCart(item.id)}>
                                                <span className="hidden">Like</span>
                                                <i className="fa fa-heart"></i>
                                            </button>
                                        </div>
                                    </footer>
                                </article>
                                {/* <div
                                    className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                                    id="exampleModalCenteredScrollable"
                                    tabindex="-1"
                                    aria-labelledby="exampleModalCenteredScrollable"
                                    aria-modal="true"
                                    role="dialog"
                                >
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
                                        <ModalDetails item={item} />
                                    </div>
                                </div> */}
                            </div>
                        </>
                    );
                })}
            </div>
        </div>
    );
};

export default CardProduct;
