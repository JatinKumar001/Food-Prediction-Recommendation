import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import useFetch from '../hooks/useFetch';

const Food = () => {

    const { data, loading, error } = useFetch("http://localhost:8080/api/prediction")
    console.log(data)

    return (
        <div className='max-w-[1240px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>
                Top Rated Menu Items
            </h1>

            {/* diplay food */}
            <AnimatePresence>
                <div className='grid grid-cols-1 lg:grid-cols-1 gap-6 pt-4'>
                    {data.map((item, index) => (
                        // <motion.div
                        //     layout
                        //     initial={{ opacity: 0 }}
                        //     animate={{ opacity: 1 }}
                        //     exit={{ opacity: 0 }}
                        //     transition={{ duration: 0.1 }}
                        //     key={item.id}
                        //     onLoad={loadimages(item.title)}
                        //     className="border shadow-lg rounded-lg hover:scale-105 duration-500 cursor-pointer">
                        //     <div className='flex'>
                        //         <a href={"http://" + item.link} target="_blank" rel="noopener noreferrer">
                        //             <div className='flex flex-col items-center m-auto px-2 py-4'>
                        //                 <div className='min-w-[260px]'>
                        //                     <img className='w-full h-[180px] md:h-[220px] object-cover rounded-t-lg' src='https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2FsYWQlMjBjZWFzYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' alt={item.title} />
                        //                 </div>
                        //                 <div className='flex justify-between px-2 py-4'>
                        //                     <p className='text-orange-500 font-bold text-xl'>{item.title}</p>
                        //                     {/* <p>
                        //             <span className='bg-orange-500 text-white p-1 rounded-md'>{item.ingredients}</span>
                        //         </p> */}
                        //                 </div>
                        //             </div>
                        //         </a>
                        //         <div className='px-12 py-4 lg:flex'>
                        //             <div className='lg:max-w-[400px] lg:min-w-[400px]'>
                        //                 <p className='text-orange-500 text-xl'>Ingredients</p>
                        //                 <div className='px-4 py-2'>
                        //                     {item.ingredients.map((line, index) => (
                        //                         <ul style={{ listStyle: 'circle' }}>
                        //                             <li key={index}>{line.trim()}</li>
                        //                         </ul>
                        //                     ))}
                        //                 </div>
                        //             </div>
                        //             <div className='py-4 lg:py-0'>
                        //                 <p className='text-orange-500 text-xl'>Directions</p>
                        //                 <div className='px-4 py-2'>
                        //                     <ul style={{ listStyle: 'circle' }}>
                        //                         {item.directions.replace(/[\[\]\",]/g, '').split('.').map((line, index) => {
                        //                             const trimmedLine = line.trim();
                        //                             return trimmedLine ? <li key={index}>{trimmedLine}</li> : null;
                        //                         })}
                        //                     </ul>
                        //                 </div>
                        //             </div>
                        //         </div>
                        //     </div>
                        // </motion.div>
                        <RecipeItem key={item.id} recipe={item} />
                    ))}
                </div>
            </AnimatePresence>
        </div>
    );
};

const RecipeItem = ({ recipe }) => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAE7RB8Pn_SiAcPvnqWFAbFcEThrIxZk1Y&cx=82a29e783bb3841a6&q=${recipe.title}`);

                if (!response.ok) {
                    throw new Error("Failed to fetch image");
                }

                const data = await response.json();
                if (data.items && data.items.length > 0) {
                    setImage(data.items[0].pagemap.cse_image[0].src);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchImage();
    }, [recipe.title]);

    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="border shadow-lg rounded-lg hover:scale-105 duration-500 cursor-pointer"
        >   <div className='lg:flex'>
                <a href={"http://" + recipe.link} target="_blank" rel="noopener noreferrer">
                    <div className='flex flex-col items-center m-auto px-2 py-4'>
                        <div className='min-w-[260px]'>
                            <img className='w-full h-[180px] md:h-[220px] object-cover rounded-t-lg' src={image || 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2FsYWQlMjBjZWFzYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'} alt={recipe.title} />
                        </div>
                        <div className='flex justify-between px-2 py-4'>
                            <p className='text-orange-500 font-bold text-xl'>{recipe.title}</p>
                        </div>
                    </div>
                </a>
                <div className='px-12 py-4 lg:flex'>
                    <div className='lg:max-w-[400px] lg:min-w-[400px]'>
                        <p className='text-orange-500 text-xl'>Ingredients</p>
                        <div className='px-4 py-2'>
                            {recipe.ingredients.map((line, index) => (
                                <ul style={{ listStyle: 'circle' }} key={index}>
                                    <li>{line.trim()}</li>
                                </ul>
                            ))}
                        </div>
                    </div>
                    <div className='py-4 lg:py-0'>
                        <p className='text-orange-500 text-xl'>Directions</p>
                        <div className='px-4 py-2'>
                            <ul style={{ listStyle: 'circle' }}>
                                {recipe.directions.replace(/[\[\]\",]/g, '').split('.').map((line, index) => {
                                    const trimmedLine = line.trim();
                                    return trimmedLine ? <li key={index}>{trimmedLine}</li> : null;
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Food