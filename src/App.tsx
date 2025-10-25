import './App.css'
import AboutWidget from './components/AboutWidget'
import GalleryWidget from './components/GalleryWidget'
import GridIcon from './components/GridIcon'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#373E44] to-[#191B1F] flex items-start justify-center py-8 px-4 relative">
      <GridIcon />
      <div className="w-full max-w-[720px] flex flex-col gap-4">
        {/* Top Widget - About Me with Tabs */}
        <AboutWidget />
        
        {/* Divider */}
        <div className="h-1 w-full bg-[#282828] shadow-[0_4px_4px_rgba(0,0,0,0.33)]"></div>
        
        {/* Bottom Widget - Gallery */}
        <GalleryWidget />
      </div>
    </div>
  )
}

export default App
