import axios from 'axios';
import React, { useState } from 'react'

export default function InputColumn() {

    const [ingredients, setingredients] = useState({
        ingredient1: undefined,
        ingredient2: undefined,
        ingredient3: undefined,
        ingredient4: undefined,
        ingredient5: undefined,
        ingredient6: undefined,
    });

    const updatevalues = (e) => {
        setingredients((prev) => ({ ...prev, [e.target.id]: e.target.value }))
        // console.log(ingredients)
    };

    const handleclick = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/prediction", ingredients);
        window.location.reload(false);
    }

    return (
        <div>
            <h1 className='text-orange-600 font-bold text-4xl text-center py-12'>
                Enter Ingredients
            </h1>
            <div className='max-w-[1240px] m-auto px-4 py-12 grid grid-cols-2 lg:grid-cols-3 gap-6 pt-4'>
                <div>
                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                        Ingredient 1
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                            type="text"
                            name="ingredient"
                            id="ingredient1"
                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Ingredient"
                            onChange={updatevalues}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                        Ingredient 2
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                            type="text"
                            name="ingredient"
                            id="ingredient2"
                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Ingredient"
                            onChange={updatevalues}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                        Ingredient 3
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                            type="text"
                            name="ingredient"
                            id="ingredient3"
                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Ingredient"
                            onChange={updatevalues}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                        Ingredient 4
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                            type="text"
                            name="ingredient"
                            id="ingredient4"
                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Ingredient"
                            onChange={updatevalues}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                        Ingredient 5
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                            type="text"
                            name="ingredient"
                            id="ingredient5"
                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Ingredient"
                            onChange={updatevalues}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                        Ingredient 6
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                            type="text"
                            name="ingredient"
                            id="ingredient6"
                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Ingredient"
                            onChange={updatevalues}
                        />
                    </div>
                </div>
            </div>
                <div className="flex max-w-[1240px] m-auto justify-center px-4 py-12">
                    <button className='bg-orange-600 text-white text-lg px-5 py-1 ml-2 h-10 w-[100px] rounded-md' onClick={handleclick}>Find</button>
                </div>
        </div>
    )
}
