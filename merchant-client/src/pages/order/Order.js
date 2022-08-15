import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allOrders } from "../../store/actions/orderCreator";

const Order = () => {
    const dispatch = useDispatch();
    const { orders, error, loading } = useSelector((state) => state.orderReducer);

    useEffect(() => {
        dispatch(allOrders());
    }, []);

    return (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg py-5 px-14">
            <center className="py-2">
                <span className="text-blue-800 font-extralight text-xl">
                    {"<< "} Order history {" >>"}
                </span>
            </center>
            {loading && !error && <span className="flex justify-center items-center text-2xl font-extralight">Loading. . .</span>}
            {!loading && error && <span className="flex justify-center items-center text-2xl font-extralight">{error}</span>}
            {!loading && !error && orders.data == "you don't have items in cart" ? (
                <span className="flex justify-center items-center text-2xl font-extralight">{orders.data}</span>
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
                                    size
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Available
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Price
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((item, idx) => {
                                return (
                                    <>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="p-4 w-4">
                                                <div className="flex items-center">
                                                    <input
                                                        id="checkbox-table-search-3"
                                                        type="checkbox"
                                                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                    />
                                                    <label for="checkbox-table-search-3" className="sr-only">
                                                        checkbox
                                                    </label>
                                                </div>
                                            </td>
                                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {item.Product.name}
                                            </th>
                                            <td className="py-4 px-6">{item.Product.color}</td>
                                            <td className="py-4 px-6">{item.Product.Category.name}</td>
                                            <td className="py-4 px-6">{item.Product.size}</td>
                                            <td className="py-4 px-6">{item.amount}</td>
                                            <td className="py-4 px-6">IDR{item.Product.price},00-</td>
                                            <td className="font-medium text-blue-600 dark:text-red-500 hover:underline">{item.orderStatus}</td>
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

export default Order;
