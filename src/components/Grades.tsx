import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, Award, BookOpen, Target, CheckCircle } from 'lucide-react'

const Grades = () => {
  const courses = [
    { name: 'MATH 301', grade: 92, letter: 'A', trend: 'up' },
    { name: 'CS 201', grade: 88, letter: 'B+', trend: 'up' },
    { name: 'ENG 101', grade: 95, letter: 'A', trend: 'stable' },
    { name: 'PHYS 202', grade: 85, letter: 'B', trend: 'down' },
    { name: 'BUS 301', grade: 90, letter: 'A-', trend: 'up' },
    { name: 'ART 201', grade: 93, letter: 'A', trend: 'up' }
  ]

  const gradeBreakdown = [
    { letter: 'A', count: 3, percentage: 50 },
    { letter: 'B+', count: 1, percentage: 17 },
    { letter: 'B', count: 1, percentage: 17 },
    { letter: 'C', count: 0, percentage: 0 },
    { letter: 'D', count: 0, percentage: 0 },
    { letter: 'F', count: 0, percentage: 0 }
  ]

  const achievements = [
    { title: 'Dean\'s List', description: 'Maintained 3.8+ GPA', icon: Award, color: 'text-golden-400' },
    { title: 'Perfect Attendance', description: 'No missed classes this semester', icon: CheckCircle, color: 'text-green-400' },
    { title: 'Academic Excellence', description: 'Top 10% in class', icon: TrendingUp, color: 'text-blue-400' }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">Grades & Performance</h1>
        <p className="text-golden-400">Track your academic progress and achievements.</p>
      </motion.div>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'GPA', value: '3.85', icon: BarChart3, color: 'text-golden-400' },
          { label: 'Credits', value: '18', icon: BookOpen, color: 'text-blue-400' },
          { label: 'Rank', value: 'Top 15%', icon: Target, color: 'text-green-400' },
          { label: 'Achievements', value: '8', icon: Award, color: 'text-purple-400' },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            className="bg-dark-800/50 rounded-xl golden-border p-6 hover:golden-border-glow transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
            <div>
              <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-golden-400 text-sm">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Course Grades */}
      <motion.div
        className="bg-dark-800/50 rounded-xl golden-border p-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-xl font-bold text-white mb-6">Course Grades</h2>
        <div className="space-y-4">
          {courses.map((course, index) => (
            <motion.div
              key={course.name}
              className="flex items-center justify-between p-4 rounded-lg bg-dark-700/50 hover:bg-dark-700 transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 golden-gradient rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-dark-950" />
                </div>
                <div>
                  <h3 className="text-white font-medium">{course.name}</h3>
                  <p className="text-golden-400 text-sm">Advanced Mathematics</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-2xl font-bold text-white">{course.grade}%</p>
                  <p className="text-golden-400 text-sm">{course.letter}</p>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  course.trend === 'up' ? 'bg-green-500/20' : 
                  course.trend === 'down' ? 'bg-red-500/20' : 'bg-yellow-500/20'
                }`}>
                  <TrendingUp className={`w-4 h-4 ${
                    course.trend === 'up' ? 'text-green-400' : 
                    course.trend === 'down' ? 'text-red-400' : 'text-yellow-400'
                  }`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Grade Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          className="bg-dark-800/50 rounded-xl golden-border p-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-xl font-bold text-white mb-6">Grade Distribution</h2>
          <div className="space-y-4">
            {gradeBreakdown.map((grade, index) => (
              <div key={grade.letter} className="flex items-center space-x-4">
                <div className="w-8 text-center">
                  <span className="text-white font-medium">{grade.letter}</span>
                </div>
                <div className="flex-1 bg-dark-700 rounded-full h-4">
                  <motion.div
                    className="bg-golden-gradient h-4 rounded-full"
                    style={{ width: `${grade.percentage}%` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${grade.percentage}%` }}
                    transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                  />
                </div>
                <div className="w-12 text-right">
                  <span className="text-golden-400 text-sm">{grade.count}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="bg-dark-800/50 rounded-xl golden-border p-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-xl font-bold text-white mb-6">Recent Achievements</h2>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="flex items-center space-x-4 p-3 rounded-lg bg-dark-700/50 hover:bg-dark-700 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`w-10 h-10 golden-gradient rounded-lg flex items-center justify-center`}>
                  <achievement.icon className="w-5 h-5 text-dark-950" />
                </div>
                <div>
                  <h3 className="text-white font-medium">{achievement.title}</h3>
                  <p className="text-golden-400 text-sm">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Performance Chart Placeholder */}
      <motion.div
        className="bg-dark-800/50 rounded-xl golden-border p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <h2 className="text-xl font-bold text-white mb-6">Performance Trend</h2>
        <div className="h-64 bg-dark-700/50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="w-16 h-16 text-golden-400 mx-auto mb-4" />
            <p className="text-golden-400">Performance chart will be displayed here</p>
            <p className="text-dark-400 text-sm">Showing GPA trends over time</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Grades
