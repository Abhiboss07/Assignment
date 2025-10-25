import { useState } from 'react'

interface GalleryImage {
  id: number
  url: string
}

const GalleryWidget = () => {
  const [images, setImages] = useState<GalleryImage[]>([
    { id: 1, url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=190&h=179&fit=crop' },
    { id: 2, url: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=190&h=179&fit=crop' },
    { id: 3, url: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=190&h=179&fit=crop' },
  ])

  const handleAddImage = () => {
    const imageUrl = prompt('Enter image URL:')
    if (imageUrl) {
      const newImage: GalleryImage = {
        id: Date.now(),
        url: imageUrl,
      }
      setImages([...images, newImage])
    }
  }

  const scrollLeft = () => {
    const container = document.getElementById('gallery-container')
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    const container = document.getElementById('gallery-container')
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-[#363C43] rounded-[18.89px] shadow-[5.67px_5.67px_3.78px_0px_rgba(0,0,0,0.4)] relative">
      {/* Question Mark Icon */}
      <div className="absolute top-[24px] left-[29px]">
        <div className="w-[24px] h-[24px] rounded-full bg-[#171717] flex items-center justify-center text-[#A3ADB2] text-[14px] font-bold cursor-help shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)]">
          ?
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center px-[51px] pt-[24px] pb-[39px]">
        <div className="flex items-center gap-2">
          <button className="px-[40px] py-[13px] bg-[#171717] text-white rounded-[20px] text-[20px] font-medium shadow-[inset_0px_4px_10px_rgba(0,0,0,0.25)]">
            Gallery
          </button>
        </div>
        <div className="flex items-center gap-[51px]">
          <button
            onClick={handleAddImage}
            className="px-[30px] py-[16px] bg-white/5 hover:bg-white/10 text-white rounded-[104px] text-[12px] font-extrabold transition-all shadow-[9px_10px_7.5px_0px_rgba(0,0,0,0.4),inset_0px_3.26px_3.26px_0px_rgba(255,255,255,0.15),inset_0px_0px_48.91px_0px_rgba(255,255,255,0.05)] flex items-center gap-1"
          >
            <span className="text-[24px] font-normal">+</span> ADD IMAGE
          </button>
          <div className="flex gap-[13px]">
            <button
              onClick={scrollLeft}
              className="w-[45px] h-[45px] rounded-full bg-gradient-to-br from-[#303439] to-[#161718] flex items-center justify-center text-[#6F787C] hover:text-white transition-colors shadow-[4px_5px_30px_5px_rgba(0,0,0,0.5),inset_-5px_-5px_10px_rgba(0,0,0,0.5)]"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 13.5L6.5 9L11 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="w-[45px] h-[45px] rounded-full bg-gradient-to-br from-[#303439] to-[#161718] flex items-center justify-center text-[#6F787C] hover:text-white transition-colors shadow-[4px_5px_30px_5px_rgba(0,0,0,0.5),inset_-5px_-5px_10px_rgba(0,0,0,0.5)]"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 4.5L11.5 9L7 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Images */}
      <div className="px-[18px] pb-[27px]">
        <div
          id="gallery-container"
          className="flex gap-[15px] overflow-x-auto scrollbar-hide scroll-smooth pl-[33px]"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {images.map((image) => (
            <div
              key={image.id}
              className="group flex-shrink-0 w-[190px] h-[179px] rounded-[24px] overflow-hidden transition-all duration-300 hover:scale-110 hover:rotate-[-5deg] cursor-pointer"
            >
              <img
                src={image.url}
                alt={`Gallery ${image.id}`}
                className="w-full h-full object-cover transition-all duration-300 grayscale group-hover:grayscale-0 brightness-90 group-hover:brightness-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = 'https://via.placeholder.com/190x179/363C43/A3ADB2?text=Image'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GalleryWidget
