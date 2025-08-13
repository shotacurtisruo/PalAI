import { motion } from 'framer-motion'
import { BookOpen, Plus, Edit, Eye, Calendar, CheckCircle } from 'lucide-react'

const Supplements = () => {
  const supplements = [
    {
      id: 1,
      school: 'Stanford University',
      questions: 3,
      completed: 2,
      dueDate: 'Dec 1, 2024',
      status: 'in-progress'
    },
    {
      id: 2,
      school: 'MIT',
      questions: 5,
      completed: 5,
      dueDate: 'Dec 1, 2024',
      status: 'completed'
    },
    {
      id: 3,
      school: 'Harvard University',
      questions: 4,
      completed: 1,
      dueDate: 'Dec 1, 2024',
      status: 'not-started'
    }
  ]

  const progress = {
    completed: supplements.filter(s => s.status === 'completed').length,
    inProgress: supplements.filter(s => s.status === 'in-progress').length,
    notStarted: supplements.filter(s => s.status === 'not-started').length,
    total: supplements.length
  }

  const overallProgress = Math.round((progress.completed / progress.total) * 100)

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2 golden-text-glow">Supplements</h1>
        <p className="text-golden-400 golden-text-glow">Track school-specific questions and forms</p>
      </motion.div>

      <motion.div
        className="bg-dark-800/50 rounded-xl golden-border p-6 hover:golden-border-glow transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">Completion Progress</h2>
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

        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-white">{progress.completed}</p>
            <p className="text-golden-400 text-sm">Completed</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">{progress.inProgress}</p>
            <p className="text-golden-400 text-sm">In Progress</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">{progress.notStarted}</p>
            <p className="text-golden-400 text-sm">Not Started</p>
          </div>
        </div>
      </motion.div>

      <div className="space-y-4">
        {supplements.map((supplement, index) => (
          <motion.div
            key={supplement.id}
            className="bg-dark-800/50 rounded-xl golden-border p-6 hover:golden-border-glow transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 golden-gradient rounded-lg flex items-center justify-center golden-glow">
                  <BookOpen className="w-6 h-6 text-dark-950" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">{supplement.school}</h3>
                  <div className="flex items-center space-x-4 text-sm text-golden-400 mb-2">
                    <span>{supplement.completed}/{supplement.questions} questions completed</span>
                    <span>• Due: {supplement.dueDate}</span>
                  </div>
                  <div className="w-full bg-dark-700 rounded-full h-2">
                    <motion.div
                      className="bg-golden-gradient h-2 rounded-full"
                      style={{ width: `${(supplement.completed / supplement.questions) * 100}%` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${(supplement.completed / supplement.questions) * 100}%` }}
                      transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  supplement.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                  supplement.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {supplement.status}
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
        <span className="text-golden-400 font-medium">Add School Supplement</span>
      </motion.button>
    </div>
  )
}

export default Supplements
