import React, { Component } from 'react'
import { Fragment } from 'react'
import './Projects.css'
import PolygonOverlayInverted from '../MainEntryComponents/Overlays/PolygonOverlayInverted'
import { redfoxinu } from '../Images/Images';
import { RedFoxInuCard, RedFoxInuMobile } from './Cards/RedFoxInuCard'
import { Web3Messenger,Web3MessengerMobile } from './Cards/Web3Messenger.jsx'
import { Shopify, ShopifyMobile } from './Cards/ShopifyCard';
import { Default, DefaultMobile } from './Cards/DefaultCard';
import { useState } from 'react';
import { useEffect } from 'react';

const Projects = () => {

    const [hover, setHover] = useState(false)
    const [count, setCount] = useState(1);
    const [isMobile, setIsMobile] = useState(true)

    useEffect(() => {
        if (window.innerWidth < 600) setIsMobile(false)
        if (window.innerWidth > 600) setIsMobile(true)
        window.addEventListener('resize', () => {
            if (isMobile === undefined) return
            if (window.innerWidth < 600) setIsMobile(false)
            if (window.innerWidth > 600) setIsMobile(true)
        });
    }, []);

    const Carousel = () => {
        if (count === undefined) return
        if (count === 1) { return (<><Default /></>) }
        if (count === 2) { return (<><RedFoxInuCard /></>) }
        if (count === 3) { return (<><Web3Messenger /></>) }
        if (count === 4) { return (<><Shopify /></>) }
    }

    if (isMobile) {
        return (
            <>
                <div className='SectionOne-cardsMain w-100 d-flex flex-column justify-content-center align-items-center'>
                    <h1>Projects</h1>
                    <div className='SectionOne-Cards d-flex w-75 justify-content-center align-items-center'>
                        <Carousel />
                        <button className='btn' onClick={() => { if (count < 4) { setCount(count + 1) } else { setCount(1) } }}><h3>{`>`}</h3></button>
                    </div>
                </div>
                <PolygonOverlayInverted />
            </>
        )
    } else {
        return (
            <>
                <div className='w-100 bg-light d-flex justify-content-center align-items-center pt-5'>
                    <h1 className='text-dark text-align-center'>Projects</h1>
                </div>
                <div className='SectionOne-cardsMain'>
                    <DefaultMobile />
                    <RedFoxInuMobile />
                    <Web3MessengerMobile />
                    <ShopifyMobile />
                </div>
                <PolygonOverlayInverted />
            </>
        )
    }
}

export default Projects;