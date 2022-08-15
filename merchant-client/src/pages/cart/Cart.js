import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartDetails from "../../components/CartDetails";
import { allCarts, deleteCart } from "../../store/actions/cartCreator";
import { order } from "../../store/actions/orderCreator";

const CartProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { carts, error, loading } = useSelector((state) => state.cartReducer);

    useEffect(() => {
        dispatch(allCarts());
    }, []);

    const handleRemoveCart = (id) => {
        dispatch(deleteCart(id))
            .then((result) => {
                navigate("/cart");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleOrderCustomer = (id, amount) => {
        dispatch(order(id, amount))
            .then((result) => {
                console.log(result);
                if (result.status == `product with id ${id} succcess to order`) {
                    navigate("/order");
                    dispatch(deleteCart(id))
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="container mx-auto py-3 px-4 md:px-12 bg-green-100 rounded-full w-full">
            <center className="py-3">
                <span className="text-blue-800 font-extralight text-xl">
                    {"<< "} Your cart list {" >>"}
                </span>
            </center>
            {loading && !error && <span className="flex justify-center items-center text-2xl font-extralight">Loading. . .</span>}
            {!loading && error && <span className="flex justify-center items-center text-2xl font-extralight">{error}</span>}
            {!loading && !error && carts.data == "you don't have items in cart" ? (
                <span className="flex justify-center items-center text-2xl font-extralight">{carts.data}</span>
            ) : (
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg py-5 px-14">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="p-4">
                                    <div className="flex items-center">
                                        <input
                                            id="checkbox-all-search"
                                            type="checkbox"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label for="checkbox-all-search" className="sr-only">
                                            checkbox
                                        </label>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Product name
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Color
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Category
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Size
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Available
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Price
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Amount
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {carts?.map((item, idx) => {
                                return (
                                    <>
                                        {/* <div key={idx} className="my-1 px-1 w-full md:w-1/3 lg:my-4 lg:px-4 lg:w-1/4">
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
                                </div> */}

                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="p-4 w-4">
                                                <div className="flex items-center">
                                                    <input
                                                        id="checkbox-table-search-1"
                                                        type="checkbox"
                                                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                    />
                                                    <label for="checkbox-table-search-1" className="sr-only">
                                                        checkbox
                                                    </label>
                                                </div>
                                            </td>
                                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                                {item.Product.name}
                                            </th>
                                            <td className="py-4 px-6">{item.Product.color}</td>
                                            <td className="text-center py-4 px-6">{item.Product.Category.name}</td>
                                            <td className="text-center py-4 px-6">{item.Product.size}</td>
                                            <td className="text-center py-4 px-6">{item.Product.stock}</td>
                                            <td className="text-center py-4 px-6">IDR{item.Product.price}</td>
                                            <td className="text-center py-4 px-6">{item.amount}</td>
                                            <td className="flex items-center py-4 px-6 space-x-3">
                                                <button onClick={() => handleOrderCustomer(item.productId, item.amount)} className="font-medium text-blue-600 hover:text-blue-900 hover:underline">
                                                    Order
                                                </button>
                                                <button onClick={() => handleRemoveCart(item.productId)} className="font-medium text-red-600 hover:text-red-700 hover:underline">
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    </>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default CartProduct;
