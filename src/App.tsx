import './App.css'
import AboutWidget from './components/AboutWidget'
import GalleryWidget from './components/GalleryWidget'
import GridIcon from './components/GridIcon'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#373E44] to-[#191B1F] flex items-start justify-center py-8 px-4 relative">
      <GridIcon />
      <div className="w-full max-w-[1400px] flex gap-6">
        {/* Left Box */}
        <div className="w-[720px] flex-shrink-0">
          <div className="bg-[#363C43] rounded-[18.89px] shadow-[5.67px_5.67px_3.78px_0px_rgba(0,0,0,0.4)] h-full">
            {/* Empty box */}
          </div>
        </div>
        
        {/* Right Side - Merged Widget */}
        <div className="w-full max-w-[720px] flex-shrink-0 flex flex-col gap-4">
          {/* About Me with Tabs */}
          <AboutWidget />
          
          {/* Divider */}
          <div className="h-1 w-full bg-[#282828] shadow-[0_4px_4px_rgba(0,0,0,0.33)]"></div>
          
          {/* Gallery */}
          <GalleryWidget />
        </div>
      </div>
    </div>
  )
}

export default App
