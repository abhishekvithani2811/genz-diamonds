// src/components/DiamondList.js
import React from 'react';
import DiamondCardCompare from '../_components/layout/compare-card';

const diamonds = [
    {
        image: 'https://via.placeholder.com/100',
        type: 'Labgrown',
        id: '1.3V9X2B09848K',
        price: '9845.00',
        shape: 'Round',
        carat: '2.50',
        clarity: 'VS2',
        colour: 'G',
        cut: 'Ideal',
        certificate: 'GIA',
    },
    {
        image: 'https://via.placeholder.com/100',
        type: 'Labgrown',
        id: '1.3V9X2B09848K',
        price: '9845.00',
        shape: 'Round',
        carat: '2.50',
        clarity: 'VS2',
        colour: 'G',
        cut: 'Ideal',
        certificate: 'GIA',
    },
    {
        image: 'https://via.placeholder.com/100',
        type: 'Labgrown',
        id: '1.3V9X2B09848K',
        price: '9845.00',
        shape: 'Round',
        carat: '2.50',
        clarity: 'VS2',
        colour: 'G',
        cut: 'Ideal',
        certificate: 'GIA',
    },
];

const DiamondList = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {diamonds.map((diamond, index) => (
                    <DiamondCardCompare key={index} diamond={diamond} />
                ))}
            </div>
        </div>
    );
};

export default DiamondList;