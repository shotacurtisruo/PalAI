import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface Tool {
  id: string
  icon: LucideIcon
  label: string
}

interface ToolbarProps {
  tools: Tool[]
  currentTool: string
  setCurrentTool: (tool: string) => void
  brushSize: number
  setBrushSize: (size: number) => void
  brushColor: string
  setBrushColor: (color: string) => void
}

const Toolbar = ({ 
  tools, 
  currentTool, 
  setCurrentTool, 
  brushSize, 
  setBrushSize, 
  brushColor, 
  setBrushColor 
}: ToolbarProps) => {
  const goldenColors = [
    '#fefce8', '#fef9c3', '#fef08a', '#fde047', 
    '#facc15', '#eab308', '#ca8a04', '#a16207'
  ]

  return (
    <motion.div 
      className="absolute bottom-0 left-0 right-0 z-50 p-4"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      <div className="bg-dark-900/80 backdrop-blur-lg rounded-2xl golden-border p-4">
        <div className="flex items-center justify-between">
          {/* Tools */}
          <div className="flex items-center space-x-2">
            {tools.map((tool, index) => {
              const Icon = tool.icon
              const isActive = currentTool === tool.id
              
              return (
                <motion.button
                  key={tool.id}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'golden-gradient golden-glow' 
                      : 'golden-border hover:golden-border-glow bg-dark-800/50'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentTool(tool.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-dark-950' : 'text-golden-400'}`} />
                </motion.button>
              )
            })}
          </div>

          {/* Brush Size Slider */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-golden-400 text-sm font-medium">Size</span>
              <input
                type="range"
                min="1"
                max="50"
                value={brushSize}
                onChange={(e) => setBrushSize(Number(e.target.value))}
                className="w-24 h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #eab308 0%, #eab308 ${(brushSize - 1) / 49 * 100}%, #334155 ${(brushSize - 1) / 49 * 100}%, #334155 100%)`
                }}
              />
              <span className="text-golden-400 text-sm font-medium w-8">{brushSize}</span>
            </div>

            {/* Color Palette */}
            <div className="flex items-center space-x-2">
              <span className="text-golden-400 text-sm font-medium">Color</span>
              <div className="flex space-x-1">
                {goldenColors.map((color, index) => (
                  <motion.button
                    key={color}
                    className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                      brushColor === color ? 'border-white scale-110' : 'border-dark-600'
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setBrushColor(color)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  />
                ))}
              </div>
            </div>

            {/* Custom Color Picker */}
            <div className="flex items-center space-x-2">
              <input
                type="color"
                value={brushColor}
                onChange={(e) => setBrushColor(e.target.value)}
                className="w-8 h-8 rounded-lg border-2 border-dark-600 cursor-pointer"
                style={{ backgroundColor: brushColor }}
              />
            </div>
          </div>
        </div>

        {/* Brush Preview */}
        <motion.div 
          className="mt-4 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div 
            className="rounded-full golden-glow"
            style={{
              width: `${brushSize}px`,
              height: `${brushSize}px`,
              backgroundColor: brushColor,
              border: '2px solid rgba(255, 255, 255, 0.3)'
            }}
          />
        </motion.div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #eab308;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(234, 179, 8, 0.5);
        }
        
        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #eab308;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(234, 179, 8, 0.5);
        }
      `}</style>
    </motion.div>
  )
}

export default Toolbar
