import { Header, Hero, Rockets } from "./components"


function App() {
    return (
        <div className='bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black min-h-screen'>
            <Header />
            <Hero />
            <Rockets />
        </div>
    )
}

export default App
