import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import Menu from '@/components/Menu'
import Reservations from '@/components/Reservations'
import Contacts from '@/components/Contacts'

const Index = () => {
    return (
        <div className='min-h-screen'>
            <NavBar />

            <main>
                <Hero />
                <Menu />
                <Reservations />
                <Contacts />
            </main>
        </div>
    )
}

export default Index