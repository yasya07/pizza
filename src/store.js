import {create} from "zustand";


export const usePizza = create(set => ({
    pizza: [
        {
            id: 1,
            name: 'Миу-пицца с пепперони и игрушкой',
            price: 75000,
            img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/b5ecc893b85a4ec1b6288e4422bb9121_292x292.webp'
        },
        {
            id: 2,
            name: 'Маргарита',
            price: 39000,
            img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/47dac5afdcc84aaaa5fe029f2f840c82_292x292.webp'
        },
        {
            id: 3,
            name: 'Пепперони',
            price: 55000,
            img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/c5c7d82b42584b0caaa2e6d32be39c92_292x292.webp'
        },
        {
            id: 4,
            name: 'Пепперони фреш',
            price: 55000,
            img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/0abcc6d258c94b3bb1412b6cb644dec5_292x292.webp'
        },
        {
            id: 5,
            name: 'Додо',
            price: 65000,
            img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/de51de47773843fe95957caab3d7f974_292x292.webp'
        },
        {
            id: 6,
            name: 'Сырный цыпленок',
            price: 45000,
            img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/aa293f3b65874a8195bc1c36973ad465_292x292.webp'
        },
        {
            id: 7,
            name: 'Сырный цыпленок',
            price: 45000,
            img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/aa293f3b65874a8195bc1c36973ad465_292x292.webp'
        },
        {
            id: 8,
            name: 'Двойная пепперони',
            price: 70000,
            img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/9f8bf5fd916441ee812eab57885885d5_292x292.webp'
        },
    ],
    listBasket: [],
    addList: (item) => set(state => ({
        listBasket: [...state.listBasket, item]
    })),
    counter: (type, id) => set(state => {
        state.listBasket.map(item => {
            if (item.id === id) {
                if (type) {
                    item.count++
                } else {
                    item.count--
                }
            }
        })
        return {
            listBasket: state.listBasket
        }
    }),
    deleteItem: (id) => set(state => ({
        listBasket: state.listBasket.filter(i=> i.id !== id)
    }))
}))