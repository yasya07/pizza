import {Fragment, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {XMarkIcon} from '@heroicons/react/24/outline'

import {usePizza} from "./store";

const Basket = () => {

    const {listBasket, counter, deleteItem} = usePizza(state => state)

    const [open, setOpen] = useState(false)

    return (
        <Fragment>
            {!open && <button onClick={() => setOpen(true)} className="position-absolute top-5 right-0 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd"/>
                </svg>
                {listBasket.length > 0 && listBasket.length}
            </button>}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child as={Fragment} enter="ease-in-out duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child as={Fragment} enter="transform transition ease-in-out duration-500 sm:duration-700" enterFrom="translate-x-full" enterTo="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leaveFrom="translate-x-0" leaveTo="translate-x-full">
                                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                                        <Transition.Child as={Fragment} enter="ease-in-out duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
                                            <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                                                <button type="button" className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" onClick={() => setOpen(false)}>
                                                    <span className="sr-only">Close panel</span>
                                                    <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                                </button>
                                            </div>
                                        </Transition.Child>
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                            <div className="px-4 sm:px-6">
                                                <Dialog.Title className="text-lg font-medium text-gray-900">
                                                   Total sum: {listBasket.reduce((a, b) => a + b.price * b.count, 0)} сум
                                                </Dialog.Title>
                                            </div>
                                            <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                                <div className="absolute inset-0 px-4 sm:px-6">
                                                    <div className="h-full border-2 border-dashed border-gray-200" aria-hidden="true">
                                                        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                                                            <div className="border-t border-gray-200">
                                                                {listBasket.map(item => <dl key={item.id}>
                                                                    <div
                                                                        className="bg-gray-50 px-2 py-2 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                                                                        <dt className="w-100 text-sm font-medium text-gray-500">
                                                                            <b>{item.name}</b> {item.price} сум
                                                                            <p>Total: {item.price * item.count} сум </p>
                                                                        </dt>
                                                                        <dt className="d-flex justify-content-around align-items-center w-100 text-sm font-medium text-gray-500">
                                                                            <button disabled={item.count <= 1} onClick={() => counter(false, item.id)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                                                                -
                                                                            </button>
                                                                            <h1 className={''}> {item.count}</h1>
                                                                            <button onClick={() => counter(true, item.id)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                                                                +
                                                                            </button>

                                                                            <button onClick={()=>deleteItem(item.id)} className="bg-danger hover:bg-blue-500 text-white font-semibold py-1 px-2 border border-blue-500 hover:border-transparent rounded">
                                                                                x
                                                                            </button>
                                                                        </dt>
                                                                    </div>
                                                                </dl>)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </Fragment>
    );
};

export default Basket;