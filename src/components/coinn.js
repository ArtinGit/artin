import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import BTC from '../assets/btc-img.png'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'
import './coin.css'

const Featuredd = () => {

    const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false'

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    // console.log(data)

    if (!data) return null

    return (
        <div className='featuredd'>
            <div className='container'>
                {/* Left */}
                <div className='left'>
                    <h2>Explore {data[1].name}</h2>
                    <p>See all available assets: Cryptocurrencies and NFT's</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptates atque quis iure, totam quos facere, aliquid facilis velit deserunt aliquam necessitatibus distinctio. Repellendus, facilis cumque! Vitae eum dolores corrupti?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptates atque quis iure, totam quos facere, aliquid facilis velit deserunt aliquam necessitatibus distinctio. Repellendus, facilis cumque! Vitae eum dolores corrupti?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptates atque quis iure, totam quos facere, aliquid facilis velit deserunt aliquam necessitatibus distinctio. Repellendus, facilis cumque! Vitae eum dolores corrupti?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptates atque quis iure, totam quos facere, aliquid facilis velit deserunt aliquam necessitatibus distinctio. Repellendus, facilis cumque! Vitae eum dolores corrupti?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptates atque quis iure, totam quos facere, aliquid facilis velit deserunt aliquam necessitatibus distinctio. Repellendus, facilis cumque! Vitae eum dolores corrupti?</p>
                </div>

                {/* Right */}

                <div className='right'>
                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/' /> */}
                            <img src={data[1].image} alt='' />
                        </div>
                        <div>
                            <h5>{data[1].name}</h5>
                            <p>${data[1].current_price.toLocaleString()}</p>
                        </div>

                        {data[1].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data[1].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data[1].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                    
                    
                    
                    
                   
                </div>
            </div>

        </div>
    )
}

export default Featuredd
