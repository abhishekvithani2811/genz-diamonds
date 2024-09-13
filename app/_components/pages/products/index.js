import React from 'react';
import BannerSection from '../home/banner';
import MenuBar from './menubar';
import SelectedGallary from './selectedGallary';
import DiamondFilter from './diamondFilter';
import FilterGallary from './filterGallary';
import RecentlyViewed from './recently';

export default function ProductLisingPage() {
    return (
        <>
            <MenuBar />
            <SelectedGallary />
            <DiamondFilter />
            <hr />
            <FilterGallary />  
            <RecentlyViewed />
        </>
    )
}