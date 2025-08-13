import { motion } from 'framer-motion'
import { GraduationCap, FileText, Users, BookOpen, DollarSign, Target, Brain, Plus, Star, MapPin } from 'lucide-react'

const Dashboard = () => {
  const collegeListProgress = 35

  const actionItems = [
    { id: 1, title: 'Complete college research', completed: false },
    { id: 2, title: 'Start personal essay draft', completed: false },
    { id: 3, title: 'Add extracurricular activities', completed: false },
    { id: 4, title: 'Review financial aid options', completed: false },
  ]

  const recentColleges = [
    { name: 'Stanford University', location: 'Stanford, CA', status: 'saved', rating: 4.8 },
    { name: 'MIT', location: 'Cambridge, MA', status: 'explored', rating: 4.9 },
    { name: 'Harvard University', location: 'Cambridge, MA', status: 'rated', rating: 4.7 },
  ]

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 golden-text-glow">Dashboard</h1>
        <p className="text-sm md:text-base text-golden-400 golden-text-glow">Track your college application progress</p>
      </motion.div>

      {/* College List Section */}
      <motion.div
        className="bg-dark-800/50 rounded-xl golden-border p-4 md:p-6 hover:golden-border-glow transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 flex items-center">
          <GraduationCap className="w-5 h-5 mr-2 text-golden-400" />
          College List
        </h2>
        
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-golden-400 text-sm font-medium">Progress</span>
            <span className="text-white text-sm">{collegeListProgress}% complete</span>
          </div>
          <div className="w-full bg-dark-700 rounded-full h-3">
            <motion.div
              className="bg-golden-gradient h-3 rounded-full golden-glow"
              style={{ width: `${collegeListProgress}%` }}
              initial={{ width: 0 }}
              animate={{ width: `${collegeListProgress}%` }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
          <div className="flex items-center justify-between mt-2 text-xs text-golden-400">
            <span>neon multishade golden</span>
            <span>neon</span>
          </div>
        </div>

        {/* Recent Colleges */}
        <div className="space-y-3">
          {recentColleges.map((college, index) => (
            <motion.div
              key={college.name}
              className="flex items-center justify-between p-3 rounded-lg bg-dark-700/50 hover:bg-dark-700 transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 golden-gradient rounded-lg flex items-center justify-center golden-glow">
                  <GraduationCap className="w-4 h-4 text-dark-950" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{college.name}</p>
                  <div className="flex items-center space-x-2 text-xs text-golden-400">
                    <MapPin className="w-3 h-3" />
                    <span>{college.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  college.status === 'saved' ? 'bg-green-500/20 text-green-400' :
                  college.status === 'explored' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {college.status}
                </span>
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 text-golden-400 fill-current" />
                  <span className="text-xs text-golden-400">{college.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="mt-4 w-full p-3 rounded-lg golden-border hover:golden-border-glow bg-dark-700/50 transition-all duration-300 flex items-center justify-center space-x-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Plus className="w-4 h-4 text-golden-400" />
          <span className="text-golden-400 font-medium">Add College</span>
        </motion.button>
      </motion.div>

      {/* Action Items */}
      <motion.div
        className="bg-dark-800/50 rounded-xl golden-border p-6 hover:golden-border-glow transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-xl font-bold text-white mb-6">Action Items</h2>
        <div className="space-y-3">
          {actionItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="flex items-center space-x-3 p-3 rounded-lg bg-dark-700/50 hover:bg-dark-700 transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                item.completed 
                  ? 'bg-golden-400 border-golden-400' 
                  : 'border-golden-400'
              }`}>
                {item.completed && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 bg-dark-950 rounded-sm"
                  />
                )}
              </div>
              <span className={`text-sm ${item.completed ? 'text-dark-400 line-through' : 'text-white'}`}>
                {item.title}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Access Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: FileText, label: 'Essays', description: 'Draft and refine personal essays', color: 'bg-blue-500' },
          { icon: Users, label: 'Activities', description: 'Catalog extracurricular activities', color: 'bg-green-500' },
          { icon: BookOpen, label: 'Supplements', description: 'Track school-specific forms', color: 'bg-purple-500' },
          { icon: DollarSign, label: 'Financial Aid', description: 'Explore costs and aid options', color: 'bg-orange-500' },
          { icon: Target, label: 'Rate Chances', description: 'Check your competitiveness', color: 'bg-red-500' },
          { icon: Brain, label: 'Research GPT', description: 'Ask questions and discover resources', color: 'bg-indigo-500' },
        ].map((section, index) => (
          <motion.div
            key={section.label}
            className="bg-dark-800/50 rounded-xl golden-border p-6 hover:golden-border-glow transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className={`w-12 h-12 ${section.color} rounded-lg flex items-center justify-center mb-4 golden-glow`}>
              <section.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{section.label}</h3>
            <p className="text-golden-400 text-sm">{section.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
