import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import React from 'react'

const Index = () => {
    return (
        <div className='min-h-screen'>
            <NavBar />

            <main>
                <Hero />
            </main>
        </div>
    )
}

export default Index