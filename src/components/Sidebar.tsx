import { motion } from 'framer-motion'
import { LucideIcon, BarChart3, GraduationCap, FileText, Users, BookOpen, DollarSign, Target, Brain } from 'lucide-react'

interface NavigationItem {
  id: string
  icon: LucideIcon
  label: string
}

interface SidebarProps {
  navigationItems: NavigationItem[]
  currentView: string
  setCurrentView: (view: string) => void
  onClose: () => void
}

const Sidebar = ({ navigationItems, currentView, setCurrentView, onClose }: SidebarProps) => {
  const recentColleges = [
    { id: 1, name: 'Stanford University', status: 'saved', progress: 75 },
    { id: 2, name: 'MIT', status: 'explored', progress: 60 },
    { id: 3, name: 'Harvard University', status: 'rated', progress: 90 },
  ]

  const upcomingDeadlines = [
    { id: 1, title: 'Personal Statement', type: 'Essay', due: 'Dec 1' },
    { id: 2, title: 'Stanford Supplements', type: 'Supplement', due: 'Dec 1' },
    { id: 3, title: 'FAFSA Submission', type: 'Financial Aid', due: 'Oct 1' },
  ]

  return (
                    <motion.div
      className="fixed left-0 bottom-0 md:top-0 h-20 md:h-full w-full md:w-80 z-50 overflow-y-auto"
      initial={{ x: 0 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
    >

      
      <div className="h-full flex flex-col md:flex-col p-2 md:p-6 pt-1 md:pt-2 space-y-1 md:space-y-4">
        {/* Header - Hidden on mobile */}
        <h2 className="hidden md:block text-lg font-bold text-golden-300">Pal AI</h2>
        
        {/* Navigation Items - Horizontal on mobile, vertical on desktop */}
        <div className="flex md:flex-col md:space-y-2 overflow-x-auto md:overflow-x-visible">
          {navigationItems.map((item, index) => {
            const Icon = item.icon
            const isActive = currentView === item.id
            
            return (
              <motion.button
                key={item.id}
                className={`flex-shrink-0 md:w-full flex items-center space-x-2 md:space-x-3 p-2 md:p-3 rounded-lg transition-all duration-300 ${
                  isActive 
                    ? 'golden-gradient golden-glow text-dark-950' 
                    : 'golden-border hover:golden-border-glow bg-dark-800/50 text-golden-400 hover:bg-dark-700'
                }`}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setCurrentView(item.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </motion.button>
            )
          })}
        </div>

        {/* Recent Colleges - Hidden on mobile */}
        <div className="hidden md:block space-y-1 md:space-y-2">
          <h3 className="text-sm font-medium text-golden-300 flex items-center">
            <GraduationCap className="w-4 h-4 mr-2 text-golden-400" />
            Recent Colleges
          </h3>
          {recentColleges.map((college, index) => (
            <motion.div
              key={college.id}
              className="p-2 md:p-3 rounded-lg golden-border bg-dark-800/50 cursor-pointer hover:golden-border-glow hover:bg-dark-700 transition-all duration-300"
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: (index + 8) * 0.1 }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-white font-medium text-sm">{college.name}</span>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  college.status === 'saved' ? 'bg-green-500/20 text-green-400' :
                  college.status === 'explored' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {college.status}
                </span>
              </div>
              <div className="w-full bg-dark-700 rounded-full h-1.5">
                <motion.div
                  className="bg-golden-gradient h-1.5 rounded-full golden-glow"
                  style={{ width: `${college.progress}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${college.progress}%` }}
                  transition={{ duration: 1, delay: (index + 8) * 0.1 + 0.5 }}
                />
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-golden-400 text-xs">{college.progress}% Complete</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Sidebar
