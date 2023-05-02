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
        <div>
            <div className='text-center text-3xl font-semibold'>Our Chef Masters</div>
            {
                chefMaster.map(data => <ChefMaster
                    key={data.id}
                    data={data}
                >
                    {/* <Link to={`/data/${data.id}`} className='text-black'>{data.name}</Link> */}

                </ChefMaster>)
            }

        </div>




    );
};

export default Chef;