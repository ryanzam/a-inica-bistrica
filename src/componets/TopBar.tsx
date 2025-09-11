import { PhoneCall } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const TopBar = () => {

    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY)
        })
    }, [scroll])

    return (
        <div className='container'>
            <div>
                <div>
                    <PhoneCall />
                    +387 61603 960
                </div>
                <div>
                    Mon - Sun: 7am -23pm
                </div>
            </div>
            <div>
                <ul>
                    <li>English</li>
                    <li>Bosnian</li>
                </ul>
            </div>
        </div>
    )
}

export default TopBar