// App.jsx
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-10 p-4">

      {/* Tailwind CSS Test */}
      <div className="text-3xl font-bold text-blue-600">
        🚀 Tailwind CSS is Working!
      </div>

      {/* Framer Motion Test */}
      <motion.div
        className="w-64 h-32 bg-green-400 rounded-lg shadow-lg flex items-center justify-center text-white text-xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🎬 Framer Motion!
      </motion.div>

      {/* AOS Test */}
      <div
        data-aos="fade-up"
        className="w-64 h-32 bg-purple-500 rounded-lg shadow-lg flex items-center justify-center text-white text-xl"
      >
        ✨ AOS Animation!
      </div>
    </div>
  )
}

export default App
