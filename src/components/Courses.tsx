import { motion } from 'framer-motion'
import { BookOpen, Users, Clock, Star, Play, Calendar, FileText, Video, TrendingUp } from 'lucide-react'

const Courses = () => {
  const courses = [
    {
      id: 1,
      name: 'Advanced Mathematics',
      code: 'MATH 301',
      instructor: 'Dr. Sarah Johnson',
      progress: 75,
      students: 24,
      rating: 4.8,
      nextClass: 'Tomorrow, 10:00 AM',
      modules: 12,
      completed: 9,
      color: 'bg-blue-500',
      description: 'Advanced calculus and mathematical analysis for upper-level students.'
    },
    {
      id: 2,
      name: 'Computer Science Fundamentals',
      code: 'CS 201',
      instructor: 'Prof. Michael Chen',
      progress: 60,
      students: 32,
      rating: 4.6,
      nextClass: 'Today, 2:00 PM',
      modules: 15,
      completed: 9,
      color: 'bg-green-500',
      description: 'Core programming concepts and software development principles.'
    },
    {
      id: 3,
      name: 'English Literature',
      code: 'ENG 101',
      instructor: 'Dr. Emily Rodriguez',
      progress: 90,
      students: 18,
      rating: 4.9,
      nextClass: 'Wednesday, 11:30 AM',
      modules: 10,
      completed: 9,
      color: 'bg-purple-500',
      description: 'Classic and contemporary literature analysis and interpretation.'
    },
    {
      id: 4,
      name: 'Physics for Engineers',
      code: 'PHYS 202',
      instructor: 'Prof. David Kim',
      progress: 45,
      students: 28,
      rating: 4.7,
      nextClass: 'Friday, 9:00 AM',
      modules: 14,
      completed: 6,
      color: 'bg-orange-500',
      description: 'Applied physics concepts for engineering applications.'
    },
    {
      id: 5,
      name: 'Business Management',
      code: 'BUS 301',
      instructor: 'Dr. Lisa Thompson',
      progress: 30,
      students: 35,
      rating: 4.5,
      nextClass: 'Thursday, 1:00 PM',
      modules: 16,
      completed: 5,
      color: 'bg-red-500',
      description: 'Modern business strategies and management principles.'
    },
    {
      id: 6,
      name: 'Art History',
      code: 'ART 201',
      instructor: 'Prof. James Wilson',
      progress: 85,
      students: 22,
      rating: 4.8,
      nextClass: 'Tuesday, 3:30 PM',
      modules: 11,
      completed: 9,
      color: 'bg-pink-500',
      description: 'Survey of art movements from Renaissance to contemporary.'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">My Courses</h1>
        <p className="text-golden-400">Manage your enrolled courses and track your progress.</p>
      </motion.div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            className="bg-dark-800/50 rounded-xl golden-border p-6 hover:golden-border-glow transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Course Header */}
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 ${course.color} rounded-lg flex items-center justify-center`}>
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-golden-400 fill-current" />
                <span className="text-golden-400 text-sm font-medium">{course.rating}</span>
              </div>
            </div>

            {/* Course Info */}
            <div className="mb-4">
              <h3 className="text-lg font-bold text-white mb-1">{course.name}</h3>
              <p className="text-golden-400 text-sm mb-2">{course.code}</p>
              <p className="text-dark-400 text-sm mb-3">{course.description}</p>
              
              <div className="flex items-center space-x-4 text-sm text-dark-400 mb-3">
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FileText className="w-4 h-4" />
                  <span>{course.completed}/{course.modules} modules</span>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-golden-400 text-sm font-medium">Progress</span>
                <span className="text-white text-sm">{course.progress}%</span>
              </div>
              <div className="w-full bg-dark-700 rounded-full h-2">
                <motion.div
                  className="bg-golden-gradient h-2 rounded-full"
                  style={{ width: `${course.progress}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${course.progress}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                />
              </div>
            </div>

            {/* Course Details */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2 text-sm">
                <Users className="w-4 h-4 text-golden-400" />
                <span className="text-white">{course.instructor}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Calendar className="w-4 h-4 text-golden-400" />
                <span className="text-golden-400">{course.nextClass}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              <motion.button
                className="flex-1 bg-golden-gradient text-dark-950 font-medium py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-4 h-4 inline mr-2" />
                Continue
              </motion.button>
              <motion.button
                className="p-2 rounded-lg golden-border hover:golden-border-glow transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Video className="w-4 h-4 text-golden-400" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Stats */}
      <motion.div
        className="bg-dark-800/50 rounded-xl golden-border p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2 className="text-xl font-bold text-white mb-6">Course Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Total Courses', value: courses.length, icon: BookOpen, color: 'text-blue-400' },
            { label: 'In Progress', value: courses.filter(c => c.progress > 0 && c.progress < 100).length, icon: Clock, color: 'text-yellow-400' },
            { label: 'Completed', value: courses.filter(c => c.progress === 100).length, icon: Star, color: 'text-green-400' },
            { label: 'Average Grade', value: '87%', icon: TrendingUp, color: 'text-golden-400' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-golden-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Courses
