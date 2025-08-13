import { motion } from 'framer-motion'
import { DollarSign, Plus, Edit, Eye, Calculator, Award, FileText } from 'lucide-react'

const FinancialAid = () => {
  const aidSteps = [
    {
      id: 1,
      title: 'Complete FAFSA',
      description: 'Federal student aid application',
      status: 'completed',
      dueDate: 'Oct 1, 2024'
    },
    {
      id: 2,
      title: 'Submit CSS Profile',
      description: 'College scholarship service profile',
      status: 'in-progress',
      dueDate: 'Nov 1, 2024'
    },
    {
      id: 3,
      title: 'Gather Tax Documents',
      description: 'Parent and student tax returns',
      status: 'not-started',
      dueDate: 'Dec 1, 2024'
    }
  ]

  const colleges = [
    {
      name: 'Stanford University',
      cost: '$82,406',
      aid: '$45,000',
      netCost: '$37,406'
    },
    {
      name: 'MIT',
      cost: '$79,850',
      aid: '$42,000',
      netCost: '$37,850'
    }
  ]

  const progress = {
    completed: aidSteps.filter(s => s.status === 'completed').length,
    inProgress: aidSteps.filter(s => s.status === 'in-progress').length,
    notStarted: aidSteps.filter(s => s.status === 'not-started').length,
    total: aidSteps.length
  }

  const overallProgress = Math.round((progress.completed / progress.total) * 100)

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2 golden-text-glow">Financial Aid</h1>
        <p className="text-golden-400 golden-text-glow">Orient students to costs and aid steps</p>
      </motion.div>

      <motion.div
        className="bg-dark-800/50 rounded-xl golden-border p-6 hover:golden-border-glow transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">Aid Application Progress</h2>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Aid Steps */}
        <motion.div
          className="bg-dark-800/50 rounded-xl golden-border p-6 hover:golden-border-glow transition-all duration-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-xl font-bold text-white mb-6">Financial Aid Steps</h2>
          <div className="space-y-4">
            {aidSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="flex items-center space-x-4 p-3 rounded-lg bg-dark-700/50 hover:bg-dark-700 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step.status === 'completed' ? 'bg-green-500/20' :
                  step.status === 'in-progress' ? 'bg-yellow-500/20' :
                  'bg-red-500/20'
                }`}>
                  <FileText className={`w-4 h-4 ${
                    step.status === 'completed' ? 'text-green-400' :
                    step.status === 'in-progress' ? 'text-yellow-400' :
                    'text-red-400'
                  }`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium">{step.title}</h3>
                  <p className="text-golden-400 text-sm">{step.description}</p>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    step.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                    step.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {step.status}
                  </span>
                  <p className="text-dark-400 text-xs mt-1">Due: {step.dueDate}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cost Comparison */}
        <motion.div
          className="bg-dark-800/50 rounded-xl golden-border p-6 hover:golden-border-glow transition-all duration-300"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-xl font-bold text-white mb-6">Cost Comparison</h2>
          <div className="space-y-4">
            {colleges.map((college, index) => (
              <motion.div
                key={college.name}
                className="p-4 rounded-lg golden-border bg-dark-700/50 hover:golden-border-glow transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-white font-medium mb-3">{college.name}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-dark-400">Total Cost:</span>
                    <span className="text-white">{college.cost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-dark-400">Financial Aid:</span>
                    <span className="text-green-400">-{college.aid}</span>
                  </div>
                  <div className="flex justify-between border-t border-dark-600 pt-2">
                    <span className="text-golden-400 font-medium">Net Cost:</span>
                    <span className="text-golden-400 font-medium">{college.netCost}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.button
        className="w-full p-6 bg-dark-800/50 rounded-xl golden-border hover:golden-border-glow transition-all duration-300 flex items-center justify-center space-x-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Calculator className="w-5 h-5 text-golden-400" />
        <span className="text-golden-400 font-medium">Calculate Net Cost</span>
      </motion.button>
    </div>
  )
}

export default FinancialAid
