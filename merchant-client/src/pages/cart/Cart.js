import React from "react";
import CartDetails from "../../components/ModalDetails";

const CartProduct = () => {
    return (
        <div className="container mx-auto py-3 px-4 md:px-12 bg-green-100 rounded-full w-full">
            <center className="py-3">
                <span className="text-blue-800 font-extralight text-xl">
                    {"<< "} Your cart list {" >>"}
                </span>
            </center>
            <div className="flex flex-wrap -mx-1 lg:-mx-4 pb-20">
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
                    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable">
                        <article className="overflow-hidden h-72 rounded-lg shadow-lg">
                            <img alt="Placeholder" className="block h-44 rounded-lg p-1 w-full" src="https://picsum.photos/600/400/?random" />

                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 className="text-lg">Article Title</h1>
                                <p className="text-grey-darker text-sm">11/1/19</p>
                            </header>

                            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                <div className="flex items-center no-underline  text-black">
                                    <img alt="Placeholder" className="block rounded-full w-7" src="https://images.tokopedia.net/img/cache/215-square/shops-1/2020/3/5/3052083/3052083_3828d904-1fc4-4b9e-9ba1-fc0e6b3f1fcb.jpg" />
                                    <p className="ml-2 text-sm">Rp. 99.999,00-</p>
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
            </div>
        </div>
    );
};

export default CartProduct;
