import { motion } from 'framer-motion'
import { GraduationCap, Plus, Star, MapPin, Search, Filter, Bookmark, Eye, Edit } from 'lucide-react'

const CollegeList = () => {
  const colleges = [
    {
      id: 1,
      name: 'Stanford University',
      location: 'Stanford, CA',
      status: 'saved',
      rating: 4.8,
      acceptanceRate: '4%',
      tuition: '$56,169',
      explored: true,
      saved: true,
      rated: true
    },
    {
      id: 2,
      name: 'MIT',
      location: 'Cambridge, MA',
      status: 'explored',
      rating: 4.9,
      acceptanceRate: '7%',
      tuition: '$57,986',
      explored: true,
      saved: false,
      rated: false
    },
    {
      id: 3,
      name: 'Harvard University',
      location: 'Cambridge, MA',
      status: 'rated',
      rating: 4.7,
      acceptanceRate: '5%',
      tuition: '$54,768',
      explored: true,
      saved: true,
      rated: true
    },
    {
      id: 4,
      name: 'UC Berkeley',
      location: 'Berkeley, CA',
      status: 'explored',
      rating: 4.6,
      acceptanceRate: '15%',
      tuition: '$44,008',
      explored: true,
      saved: false,
      rated: false
    },
    {
      id: 5,
      name: 'Yale University',
      location: 'New Haven, CT',
      status: 'saved',
      rating: 4.8,
      acceptanceRate: '6%',
      tuition: '$59,950',
      explored: false,
      saved: true,
      rated: false
    }
  ]

  const progress = {
    explored: colleges.filter(c => c.explored).length,
    saved: colleges.filter(c => c.saved).length,
    rated: colleges.filter(c => c.rated).length,
    total: colleges.length
  }

  const progressPercentage = Math.round((progress.explored + progress.saved + progress.rated) / (progress.total * 3) * 100)

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2 golden-text-glow">College List</h1>
        <p className="text-golden-400 golden-text-glow">Shortlist and organize your target schools</p>
      </motion.div>

      {/* Progress Overview */}
      <motion.div
        className="bg-dark-800/50 rounded-xl golden-border p-6 hover:golden-border-glow transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">Progress Overview</h2>
          <span className="text-golden-400 font-medium">{progressPercentage}% complete</span>
        </div>
        
        <div className="w-full bg-dark-700 rounded-full h-3 mb-4">
          <motion.div
            className="bg-golden-gradient h-3 rounded-full golden-glow"
            style={{ width: `${progressPercentage}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-white">{progress.explored}</p>
            <p className="text-golden-400 text-sm">Explored</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">{progress.saved}</p>
            <p className="text-golden-400 text-sm">Saved</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">{progress.rated}</p>
            <p className="text-golden-400 text-sm">Rated</p>
          </div>
        </div>
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        className="bg-dark-800/50 rounded-xl golden-border p-6 hover:golden-border-glow transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-golden-400" />
            <input
              type="text"
              placeholder="Search colleges..."
              className="w-full pl-10 pr-4 py-2 bg-dark-700/50 rounded-lg golden-border focus:golden-border-glow focus:outline-none text-white placeholder-golden-400/60"
            />
          </div>
          <motion.button
            className="p-2 rounded-lg golden-border hover:golden-border-glow transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Filter className="w-5 h-5 text-golden-400" />
          </motion.button>
          <motion.button
            className="px-4 py-2 bg-golden-gradient text-dark-950 font-medium rounded-lg golden-glow hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus className="w-4 h-4" />
            <span>Add College</span>
          </motion.button>
        </div>
      </motion.div>

      {/* College List */}
      <div className="space-y-4">
        {colleges.map((college, index) => (
          <motion.div
            key={college.id}
            className="bg-dark-800/50 rounded-xl golden-border p-6 hover:golden-border-glow transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 golden-gradient rounded-lg flex items-center justify-center golden-glow">
                  <GraduationCap className="w-6 h-6 text-dark-950" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{college.name}</h3>
                  <div className="flex items-center space-x-4 text-sm text-golden-400 mb-2">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{college.location}</span>
                    </div>
                    <span>Acceptance: {college.acceptanceRate}</span>
                    <span>Tuition: {college.tuition}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-golden-400 fill-current" />
                      <span className="text-golden-400 text-sm">{college.rating}</span>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      college.status === 'saved' ? 'bg-green-500/20 text-green-400' :
                      college.status === 'explored' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {college.status}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <motion.button
                  className="p-2 rounded-lg golden-border hover:golden-border-glow transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye className="w-4 h-4 text-golden-400" />
                </motion.button>
                <motion.button
                  className="p-2 rounded-lg golden-border hover:golden-border-glow transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Bookmark className={`w-4 h-4 ${college.saved ? 'text-golden-400 fill-current' : 'text-golden-400'}`} />
                </motion.button>
                <motion.button
                  className="p-2 rounded-lg golden-border hover:golden-border-glow transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Edit className="w-4 h-4 text-golden-400" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default CollegeList
