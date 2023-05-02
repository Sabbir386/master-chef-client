import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ChefMaster from './ChefMatser/ChefMaster';

const Chef = () => {

    const [chefMaster, setChefMaster] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setChefMaster(data))
            .catch(error => console.log(error))
    }, [])
    return (
        < >
            <div className='text-center text-3xl font-semibold'>Our Chef Masters</div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
                {
                    chefMaster.map(data => <ChefMaster
                        key={data.id}
                        data={data}
                    >


                    </ChefMaster>)
                }

            </div>
        </>




    );
};

export default Chef;