import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import Menu from '@/components/Menu'

const Index = () => {
    return (
        <div className='min-h-screen'>
            <NavBar />

            <main>
                <Hero />
                <Menu />
            </main>
        </div>
    )
}

export default Index