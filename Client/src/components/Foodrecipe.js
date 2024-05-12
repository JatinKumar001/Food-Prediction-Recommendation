import React from 'react'
import useFetch from '../hooks/useFetch'

export default function Foodrecipe() {
    const { data, loading, error } = useFetch("http://localhost:8080/api/prediction")
    console.log(data);
    return (
        <div>
            {data.length > 0 ? (
                <div>
                    {data.map((item) => (
                        <p key={item.title}>
                            {item.title}
                        </p>
                    ))}
                </div>
            ) : (
                <p>No recipes found for your ingredients.</p>
            )}

        </div>
    )
}
