import { MainContainer } from './components/MainContainer'
import { Navbar } from './components/Navbar'

function App(): JSX.Element {
    return (
        <div className="h-screen">
            <Navbar />
            <MainContainer />
        </div>
    )
}

export default App
