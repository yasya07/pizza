import React, {Fragment, useState} from 'react';
import {usePizza} from "./store";
import Modal from "./Modal";

const List = () => {

    const [info, setInfo] = useState('')
    const [open, setOpen] = useState(false)
    const {pizza: pizzaData, deleteItem, listBasket, addList} = usePizza(state => state)

    function openModal(onePizzaInfo) {
        setInfo(onePizzaInfo)
        setOpen(true)
    }

    function checkItem(id) {
        return listBasket.some(list => list.id === id)
    }

    return (
        <Fragment>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Пицца</h2>
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 cursor-pointer">
                        {pizzaData.map((product) => (
                            <div key={product.id} className="group relative" onClick={() => openModal(product)}>
                                <div
                                    className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-80">
                                    <img src={product.img} alt={product.name} className="w-full"/>
                                </div>
                                <div className="flex justify-between">
                                    <div>
                                        <h3 className="font-black text-sm text-gray-700">
                                            {product.name}
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit. Dicta dolore doloribus harum inventore
                                            molestias nihil.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <p className="text-lg font-medium text-gray-900">{product.price} сум</p>
                                    <button onClick={(e) => {
                                        e.stopPropagation()
                                        if (checkItem(product.id)) deleteItem(product.id)
                                        else addList({...product, count: 1})
                                    }} className={` ${checkItem(product.id) ? 'bg-danger py-2 px-2' : 'bg-blue-500 py-2 px-4'}  hover:bg-blue-700 text-white font-bold  rounded-full`}>
                                        {checkItem(product.id) ? 'Удалить из корзины' : 'В карзину'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Modal info={info} setOpen={setOpen} open={open}/>
        </Fragment>
    );
};

export default List;