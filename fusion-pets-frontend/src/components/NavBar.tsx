
export default function NavBar() {
  return (
    <nav className="bg-[#121b24] p-6 shadow-md mb-8">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <button>
          <h1 className="text-2xl font-bold text-blue uppercase tracking-tighter">
            Fusion<span className="text-blue-500">Pets</span>UK
          </h1>
        </button>
        
        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-8">
          <input 
          type="text" 
          placeholder="Search pets..." 
          className="bg-gray-800 text-white px-4 py-2 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <div className="bg-gray-800 px-4 py-2 rounded-full text-sm">
            🛒 Basket
          </div>

          {/* User Profile Icon */}
          <button className="px-3.5 py-2 rounded-full bg-[#0a1118] hover:bg-[#1a2b3a] transition-colors">
            <span className="text-1xl text-blue-400 text-center tracking-tighter">M</span>
          </button>

        </div>
        
      </div>
    </nav>
  )

}