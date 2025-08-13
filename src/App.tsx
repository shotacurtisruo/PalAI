import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Sparkles, 
  GraduationCap, 
  FileText, 
  Users, 
  BarChart3,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  DollarSign,
  Target,
  Brain,
  BookOpen
} from 'lucide-react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import CollegeList from './components/CollegeList'
import Essays from './components/Essays'
import Activities from './components/Activities'
import Supplements from './components/Supplements'
import FinancialAid from './components/FinancialAid'
import RateChances from './components/RateChances'
import Research from './components/Research'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [currentView, setCurrentView] = useState('dashboard')
  const [searchQuery, setSearchQuery] = useState('')
  const [userRole, setUserRole] = useState('student')

  const navigationItems = [
    { id: 'dashboard', icon: BarChart3, label: 'Dashboard' },
    { id: 'college-list', icon: GraduationCap, label: 'College List' },
    { id: 'essays', icon: FileText, label: 'Essays' },
    { id: 'activities', icon: Users, label: 'Activities' },
    { id: 'supplements', icon: BookOpen, label: 'Supplements' },
    { id: 'financial-aid', icon: DollarSign, label: 'Financial Aid' },
    { id: 'rate-chances', icon: Target, label: 'Rate Your Chances' },
    { id: 'research', icon: Brain, label: 'Research (GPT)' },
  ]

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />
      case 'college-list':
        return <CollegeList />
      case 'essays':
        return <Essays />
      case 'activities':
        return <Activities />
      case 'supplements':
        return <Supplements />
      case 'financial-aid':
        return <FinancialAid />
      case 'rate-chances':
        return <RateChances />
      case 'research':
        return <Research />
      default:
        return <Dashboard />
    }
  }

  const userRoles = [
    { id: 'student', label: 'Student' },
    { id: 'counselor', label: 'Counselor' },
    { id: 'admin', label: 'Admin' },
  ]

  return (
    <div className="h-screen w-screen overflow-hidden canvas-bg flow-particles relative">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0">
          {Array.from({ length: 5 }, (_, i) => (
            <motion.div
              key={`flow-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-golden-400/30 to-transparent"
              style={{
                top: `${20 + i * 15}%`,
                left: '-100%',
                width: '200%',
              }}
              animate={{
                x: ['0%', '100%'],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 2,
              }}
            />
          ))}
        </div>
      </div>
      


      {/* Main Content Area */}
      <div className="h-full pl-0 md:pl-80 pb-20 md:pb-0 transition-all duration-300">
        <div className="h-full overflow-y-auto">
          <div className="p-4 md:p-6 pb-20">
            {/* Toggle Sidebar Button when closed */}
            {!isSidebarOpen && (
              <motion.button
                className="fixed top-4 left-4 z-50 p-3 rounded-lg golden-border hover:golden-border-glow transition-all duration-300 bg-dark-900/95 backdrop-blur-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSidebarOpen(true)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Menu className="w-5 h-5 text-golden-400" />
              </motion.button>
            )}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentView}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderCurrentView()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar 
        navigationItems={navigationItems}
        currentView={currentView}
        setCurrentView={setCurrentView}
        onClose={() => setIsSidebarOpen(false)}
      />
      
      {/* Golden Sizzling Divider - Desktop only */}
      <div className="hidden md:block fixed left-80 top-0 h-full w-px golden-divider" style={{ zIndex: 30 }}></div>
    </div>
  )
}

export default App
