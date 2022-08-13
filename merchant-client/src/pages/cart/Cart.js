import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartDetails from "../../components/CartDetails";
import { allCarts } from "../../store/actions/cartCreator";

const CartProduct = () => {
    const dispatch = useDispatch();
    const { carts, error, loading } = useSelector((state) => state.cartReducer);

    useEffect(() => {
        dispatch(allCarts());
    }, []);

    console.log(carts);
    return (
        <div className="container mx-auto py-3 px-4 md:px-12 bg-green-100 rounded-full w-full">
            <center className="py-3">
                <span className="text-blue-800 font-extralight text-xl">
                    {"<< "} Your cart list {" >>"}
                </span>
            </center>
            {loading && !error && <span className="flex justify-center items-center text-2xl font-extralight">Loading. . .</span>}
            {!loading && error && <span className="flex justify-center items-center text-2xl font-extralight">{error}</span>}
            {!loading && !error && (
                <div className="flex flex-wrap -mx-1 lg:-mx-4 pb-20">
                    {carts?.map((item, idx) => {
                        return (
                            <>
                                <div key={idx} className="my-1 px-1 w-full md:w-1/3 lg:my-4 lg:px-4 lg:w-1/4">
                                    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable">
                                        <article className="overflow-hidden h-72 rounded-lg shadow-lg">
                                            <img alt="Placeholder" className="block h-44 rounded-lg p-1 w-full" src={item.Product.productImg} />

                                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                                <h1 className="text-lg">{item.Product.name}</h1>
                                                <p className="text-grey-darker text-sm">{item.orderStatus}</p>
                                            </header>

                                            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                                <div className="flex items-center no-underline  text-black">
                                                    <img
                                                        alt="Placeholder"
                                                        className="block rounded-full w-7"
                                                        src="https://images.tokopedia.net/img/cache/215-square/shops-1/2020/3/5/3052083/3052083_3828d904-1fc4-4b9e-9ba1-fc0e6b3f1fcb.jpg"
                                                    />
                                                    <p className="ml-2 text-sm">Rp. {item.Product.price},00-</p>
                                                </div>
                                                <div className="no-underline text-grey-darker hover:text-red-dark" href="#">
                                                    <span className="hidden">Like</span>
                                                    <i className="fa fa-heart"></i>
                                                </div>
                                            </footer>
                                        </article>
                                    </button>
                                </div>
                                {/* <CartDetails selected={item} /> */}
                            </>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default CartProduct;
