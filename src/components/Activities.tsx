import { motion } from 'framer-motion'
import { Users, Plus, Edit, Eye, Calendar, Award, Clock } from 'lucide-react'

const Activities = () => {
  const activities = [
    {
      id: 1,
      title: 'Student Council President',
      organization: 'High School Student Council',
      role: 'President',
      hours: 15,
      weeks: 32,
      impact: 'Led initiatives improving school culture',
      status: 'finalized'
    },
    {
      id: 2,
      title: 'Robotics Team Captain',
      organization: 'FIRST Robotics Team',
      role: 'Team Captain',
      hours: 20,
      weeks: 28,
      impact: 'Won regional competition',
      status: 'finalized'
    },
    {
      id: 3,
      title: 'Volunteer Tutor',
      organization: 'Local Library',
      role: 'Volunteer',
      hours: 8,
      weeks: 40,
      impact: 'Helped 50+ students improve reading',
      status: 'drafting'
    }
  ]

  const progress = {
    drafting: activities.filter(a => a.status === 'drafting').length,
    finalized: activities.filter(a => a.status === 'finalized').length,
    total: activities.length
  }

  const overallProgress = Math.round((progress.finalized / progress.total) * 100)

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2 golden-text-glow">Activities</h1>
        <p className="text-golden-400 golden-text-glow">Catalog extracurriculars, impact and leadership</p>
      </motion.div>

      <motion.div
        className="bg-dark-800/50 rounded-xl golden-border p-6 hover:golden-border-glow transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">Activities Progress</h2>
          <span className="text-golden-400 font-medium">{overallProgress}% complete</span>
        </div>
        
        <div className="w-full bg-dark-700 rounded-full h-3 mb-4">
          <motion.div
            className="bg-golden-gradient h-3 rounded-full golden-glow"
            style={{ width: `${overallProgress}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${overallProgress}%` }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-white">{progress.drafting}</p>
            <p className="text-golden-400 text-sm">Drafting</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">{progress.finalized}</p>
            <p className="text-golden-400 text-sm">Finalized</p>
          </div>
        </div>
      </motion.div>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            className="bg-dark-800/50 rounded-xl golden-border p-6 hover:golden-border-glow transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 golden-gradient rounded-lg flex items-center justify-center golden-glow">
                  <Users className="w-6 h-6 text-dark-950" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">{activity.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-golden-400 mb-2">
                    <span>{activity.organization}</span>
                    <span>• {activity.role}</span>
                    <span>• {activity.hours}h/week for {activity.weeks} weeks</span>
                  </div>
                  <p className="text-dark-400 text-sm mb-2">{activity.impact}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  activity.status === 'finalized' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                }`}>
                  {activity.status}
                </span>
                <motion.button
                  className="p-2 rounded-lg golden-border hover:golden-border-glow transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Edit className="w-4 h-4 text-golden-400" />
                </motion.button>
                <motion.button
                  className="p-2 rounded-lg golden-border hover:golden-border-glow transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye className="w-4 h-4 text-golden-400" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        className="w-full p-6 bg-dark-800/50 rounded-xl golden-border hover:golden-border-glow transition-all duration-300 flex items-center justify-center space-x-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Plus className="w-5 h-5 text-golden-400" />
        <span className="text-golden-400 font-medium">Add Activity</span>
      </motion.button>
    </div>
  )
}

export default Activities
