import { motion } from 'framer-motion'
import { Target, TrendingUp, BarChart3, Star, Award, Zap } from 'lucide-react'

const RateChances = () => {
  const colleges = [
    {
      name: 'Stanford University',
      chance: 15,
      category: 'Reach',
      color: 'text-red-400',
      bgColor: 'bg-red-500/20'
    },
    {
      name: 'MIT',
      chance: 20,
      category: 'Reach',
      color: 'text-red-400',
      bgColor: 'bg-red-500/20'
    },
    {
      name: 'UC Berkeley',
      chance: 45,
      category: 'Target',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20'
    },
    {
      name: 'UCLA',
      chance: 60,
      category: 'Target',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20'
    },
    {
      name: 'UC Davis',
      chance: 85,
      category: 'Safety',
      color: 'text-green-400',
      bgColor: 'bg-green-500/20'
    }
  ]

  const profileStats = {
    gpa: 3.9,
    sat: 1500,
    act: 34,
    essays: 8,
    activities: 6
  }

  const overallScore = Math.round((profileStats.gpa / 4.0 * 0.3 + 
                                  profileStats.sat / 1600 * 0.3 + 
                                  profileStats.act / 36 * 0.2 + 
                                  (profileStats.essays + profileStats.activities) / 20 * 0.2) * 100)

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2 golden-text-glow">Rate Your Chances</h1>
        <p className="text-golden-400 golden-text-glow">A playful snapshot of your competitiveness</p>
      </motion.div>

      {/* Overall Score */}
      <motion.div
        className="bg-dark-800/50 rounded-xl golden-border p-6 hover:golden-border-glow transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="text-center">
          <h2 className="text-xl font-bold text-white mb-4">Your Profile Score</h2>
          <div className="relative w-32 h-32 mx-auto mb-4">
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#334155"
                strokeWidth="8"
              />
              <motion.circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="url(#golden-gradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 54}`}
                strokeDashoffset={`${2 * Math.PI * 54 * (1 - overallScore / 100)}`}
                initial={{ strokeDashoffset: 2 * Math.PI * 54 }}
                animate={{ strokeDashoffset: 2 * Math.PI * 54 * (1 - overallScore / 100) }}
                transition={{ duration: 2, delay: 0.5 }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-white">{overallScore}</span>
            </div>
          </div>
          <p className="text-golden-400 text-lg font-medium">Out of 100</p>
        </div>
      </motion.div>

      {/* Profile Stats */}
      <motion.div
        className="bg-dark-800/50 rounded-xl golden-border p-6 hover:golden-border-glow transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-xl font-bold text-white mb-6">Profile Breakdown</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 golden-gradient rounded-lg flex items-center justify-center mx-auto mb-2 golden-glow">
              <TrendingUp className="w-6 h-6 text-dark-950" />
            </div>
            <p className="text-2xl font-bold text-white">{profileStats.gpa}</p>
            <p className="text-golden-400 text-sm">GPA</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 golden-gradient rounded-lg flex items-center justify-center mx-auto mb-2 golden-glow">
              <BarChart3 className="w-6 h-6 text-dark-950" />
            </div>
            <p className="text-2xl font-bold text-white">{profileStats.sat}</p>
            <p className="text-golden-400 text-sm">SAT</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 golden-gradient rounded-lg flex items-center justify-center mx-auto mb-2 golden-glow">
              <Target className="w-6 h-6 text-dark-950" />
            </div>
            <p className="text-2xl font-bold text-white">{profileStats.act}</p>
            <p className="text-golden-400 text-sm">ACT</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 golden-gradient rounded-lg flex items-center justify-center mx-auto mb-2 golden-glow">
              <Star className="w-6 h-6 text-dark-950" />
            </div>
            <p className="text-2xl font-bold text-white">{profileStats.essays}</p>
            <p className="text-golden-400 text-sm">Essays</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 golden-gradient rounded-lg flex items-center justify-center mx-auto mb-2 golden-glow">
              <Award className="w-6 h-6 text-dark-950" />
            </div>
            <p className="text-2xl font-bold text-white">{profileStats.activities}</p>
            <p className="text-golden-400 text-sm">Activities</p>
          </div>
        </div>
      </motion.div>

      {/* College Chances */}
      <motion.div
        className="bg-dark-800/50 rounded-xl golden-border p-6 hover:golden-border-glow transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="text-xl font-bold text-white mb-6">Your Chances</h2>
        <div className="space-y-4">
          {colleges.map((college, index) => (
            <motion.div
              key={college.name}
              className="flex items-center justify-between p-4 rounded-lg bg-dark-700/50 hover:bg-dark-700 transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 golden-gradient rounded-lg flex items-center justify-center golden-glow">
                  <Target className="w-5 h-5 text-dark-950" />
                </div>
                <div>
                  <h3 className="text-white font-medium">{college.name}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${college.bgColor} ${college.color}`}>
                    {college.category}
                  </span>
                </div>
              </div>
              
              <div className="text-right">
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-dark-600 rounded-full h-2">
                    <motion.div
                      className="bg-golden-gradient h-2 rounded-full"
                      style={{ width: `${college.chance}%` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${college.chance}%` }}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    />
                  </div>
                  <span className={`text-lg font-bold ${college.color}`}>{college.chance}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tips */}
      <motion.div
        className="bg-dark-800/50 rounded-xl golden-border p-6 hover:golden-border-glow transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2 className="text-xl font-bold text-white mb-4 flex items-center">
          <Zap className="w-5 h-5 mr-2 text-golden-400" />
          Tips to Improve Your Chances
        </h2>
        <div className="space-y-2 text-sm text-golden-400">
          <p>• Strengthen your essays with unique personal stories</p>
          <p>• Take on leadership roles in your activities</p>
          <p>• Consider retaking standardized tests if below target</p>
          <p>• Apply to more target and safety schools</p>
        </div>
      </motion.div>
    </div>
  )
}

export default RateChances
