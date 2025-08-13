import { motion } from 'framer-motion'
import { FileText, Plus, Edit, Eye, Calendar, CheckCircle, Clock } from 'lucide-react'

const Essays = () => {
  const essays = [
    {
      id: 1,
      title: 'Personal Statement',
      type: 'Common App',
      status: 'drafting',
      wordCount: 450,
      targetWords: 650,
      lastModified: '2 days ago',
      dueDate: 'Dec 1, 2024'
    },
    {
      id: 2,
      title: 'Why Stanford?',
      type: 'Supplemental',
      school: 'Stanford University',
      status: 'completed',
      wordCount: 250,
      targetWords: 250,
      lastModified: '1 week ago',
      dueDate: 'Dec 1, 2024'
    },
    {
      id: 3,
      title: 'Leadership Experience',
      type: 'Supplemental',
      school: 'MIT',
      status: 'reviewing',
      wordCount: 300,
      targetWords: 300,
      lastModified: '3 days ago',
      dueDate: 'Dec 1, 2024'
    }
  ]

  const progress = {
    drafting: essays.filter(e => e.status === 'drafting').length,
    reviewing: essays.filter(e => e.status === 'reviewing').length,
    completed: essays.filter(e => e.status === 'completed').length,
    total: essays.length
  }

  const overallProgress = Math.round((progress.completed / progress.total) * 100)

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2 golden-text-glow">Essays</h1>
        <p className="text-golden-400 golden-text-glow">Draft and refine personal and supplemental essays</p>
      </motion.div>

      {/* Progress Overview */}
      <motion.div
        className="bg-dark-800/50 rounded-xl golden-border p-6 hover:golden-border-glow transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">Writing Progress</h2>
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
            <p className="text-2xl font-bold text-white">{progress.drafting}</p>
            <p className="text-golden-400 text-sm">Drafting</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">{progress.reviewing}</p>
            <p className="text-golden-400 text-sm">Reviewing</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">{progress.completed}</p>
            <p className="text-golden-400 text-sm">Completed</p>
          </div>
        </div>
      </motion.div>

      {/* Essay List */}
      <div className="space-y-4">
        {essays.map((essay, index) => (
          <motion.div
            key={essay.id}
            className="bg-dark-800/50 rounded-xl golden-border p-6 hover:golden-border-glow transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 golden-gradient rounded-lg flex items-center justify-center golden-glow">
                  <FileText className="w-6 h-6 text-dark-950" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">{essay.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-golden-400 mb-2">
                    <span>{essay.type}</span>
                    {essay.school && <span>• {essay.school}</span>}
                    <span>• {essay.wordCount}/{essay.targetWords} words</span>
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-dark-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>Due: {essay.dueDate}</span>
                    </div>
                    <span>Modified: {essay.lastModified}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  essay.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                  essay.status === 'reviewing' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {essay.status}
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

      {/* Add New Essay */}
      <motion.button
        className="w-full p-6 bg-dark-800/50 rounded-xl golden-border hover:golden-border-glow transition-all duration-300 flex items-center justify-center space-x-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Plus className="w-5 h-5 text-golden-400" />
        <span className="text-golden-400 font-medium">Add New Essay</span>
      </motion.button>
    </div>
  )
}

export default Essays
