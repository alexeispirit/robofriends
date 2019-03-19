import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return (
        <div>
            {
                robots.map(user => {
                    return <Card 
                                id={user.id} 
                                name={user.name} 
                                email={user.email} 
                                key={user.id} />;
                })              
            }
        </div>
    );
}

export default CardList;