import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { order } from "../store/actions/orderCreator";
import { addCart } from "../store/actions/cartCreator";
import { oneProduct } from "../store/actions/productCreator";

const ModalDetails = ({ item }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const [amount, setAmount] = useState(0);
    const { selected } = useSelector((state) => state.productReducer);

    useEffect(() => {
        dispatch(oneProduct(id));
    }, [dispatch]);

    const handleOrderCustomer = (id) => {
        dispatch(order(id, amount))
            .then((result) => {
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleCartCustomer = (id) => {
        dispatch(addCart(id, amount))
            .then((result) => {
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                    <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalCenteredScrollableLabel">
                        {item.name}
                    </h5>
                    <button
                        type="button"
                        className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="modal-body relative p-4">
                    <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                        <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={item.productImg} alt="" />
                        <div className="px-6 py-2 flex flex-col justify-start">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">{item.name}</h5>
                            <p className="text-gray-700 text-sm mb-4"> {item.description}</p>
                            <div className="flex justify-between">
                                <p className="text-gray-600 text-xs">available stock: {item.stock}</p>
                                <p className="text-gray-600 text-xs">
                                    {item.Category.name} | size: {item.size}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-start pt-2">
                        <div className="flex xl:w-96 space-x-2">
                            <label for="exampleNumber0" className="form-label inline-block mb-1 mt-2 text-gray-700 text-xs">
                                amount
                            </label>
                            <input
                                type="number"
                                className=" form-control block w-12 px-1.5 py-1.5 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleNumber0"
                                placeholder="0"
                                onChange={(e) => setAmount(e.target.value)}
                                value={amount}
                            />
                        </div>
                    </div>
                </div>
                <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                    <button
                        onClick={() => handleCartCustomer(item.id)}
                        type="button"
                        className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                        add cart
                    </button>
                    <button
                        onClick={() => handleOrderCustomer(item.id)}
                        type="button"
                        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                    >
                        order now
                    </button>
                </div>
            </div>
        </>
    );
};

export default ModalDetails;
