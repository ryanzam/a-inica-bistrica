import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import Menu from '@/components/Menu'
import Reservations from '@/components/Reservations'

const Index = () => {
    return (
        <div className='min-h-screen'>
            <NavBar />

            <main>
                <Hero />
                <Menu />
                <Reservations />
            </main>
        </div>
    )
}

export default Index