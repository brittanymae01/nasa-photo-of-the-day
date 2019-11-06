import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ApodCard from './ApodCard'

function ApodGrid() {
    const [apod, setApod] = useState([])

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').then(response => {
            console.log(response)
            setApod(response.data)
        })
    }, [])
    return (
        <div>
            <ApodCard
                imgUrl={apod.url}
                title={apod.title}
                date={apod.date}
                description={apod.explanation}
            />
        </div>
    )
}

export default ApodGrid