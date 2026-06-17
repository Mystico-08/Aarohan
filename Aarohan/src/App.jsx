import Navbar from './components/navbar'
import DownloadButton from './components/DownloadButton'
import PDF from './components/PDF'
import './App.css'

function App() {
  return (
    <div className='App'>
  <Navbar />
  <h1 style={{margin:'5rem'}}>Brochure</h1>
  <PDF />
  <DownloadButton  />
  <h2 style={{marginTop:'5rem'}}>Made with ❤️ by DVM</h2>
  </div>
  )
}

export default App
