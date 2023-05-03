import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefDetails = () => {
    const { id } = useParams();
    console.log(id);
    const chefDetails = useLoaderData()
    console.log(chefDetails);
 
    
    return (
        <div>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quod libero ullam quasi fugiat architecto odio accusantium repudiandae dolor suscipit nostrum eum recusandae, magni doloribus, cumque quidem repellat laborum totam!</h2>
        </div>
    );
};

export default ChefDetails;
