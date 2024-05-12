import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

export default function RecommendationItem() {

    const { data, loading, error } = useFetch("http://localhost:8080/api/recommendation")
    // console.log(data)
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const imagePromises = data.map(async (item) => {
                    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAE7RB8Pn_SiAcPvnqWFAbFcEThrIxZk1Y&cx=82a29e783bb3841a6&q=${item.title}`);
                    if (!response.ok) {
                        throw new Error("Failed to fetch image for " + item.title);
                    }
                    const imageData = await response.json();
                    if (imageData.items && imageData.items.length > 0) {
                        return imageData.items[0].pagemap.cse_image[0].src;
                    }
                    return null;
                });
                const imageUrls = await Promise.all(imagePromises);
                setImages(imageUrls);
            } catch (error) {
                console.error(error);
            }
        };

        if (data) {
            fetchImages();
        }
    }, [data]);

    return (
        <div>
            <div className='max-w-[1240px] m-auto px-4 py-12'>
                <h1 className='text-orange-600 font-bold text-4xl text-center'>
                    Recommended Menu Items
                </h1>

                {/* diplay food */}
                <AnimatePresence>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                        {data.map((item, index) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.1 }}
                                key={index}
                                className="border shadow-lg rounded-lg hover:scale-105 duration-500 cursor-pointer">
                                <a href={"http://" + item.link} target="_blank" rel="noopener noreferrer">
                                    <div className='flex flex-col items-center'>
                                        <img className='w-full h-[150px] md:h-[200px] object-cover rounded-t-lg' src={images[index] || 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'} alt={item.title} />
                                        <div className='flex justify-between px-2 py-4'>
                                            <p className='text-orange-500 font-bold text-xl'>{item.title}</p>
                                        </div>
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </AnimatePresence>
            </div>
        </div>
    )
}
