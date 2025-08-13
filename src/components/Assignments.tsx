import { motion } from 'framer-motion'
import { FileText, Calendar, Clock, CheckCircle, AlertCircle, Upload, Eye } from 'lucide-react'

const Assignments = () => {
  const assignments = [
    {
      id: 1,
      title: 'Calculus Final Exam',
      course: 'MATH 301',
      dueDate: 'Dec 15, 2024',
      status: 'pending',
      priority: 'high',
      type: 'exam',
      points: 100,
      submitted: false
    },
    {
      id: 2,
      title: 'Programming Project - Web App',
      course: 'CS 201',
      dueDate: 'Dec 12, 2024',
      status: 'in-progress',
      priority: 'medium',
      type: 'project',
      points: 50,
      submitted: false
    },
    {
      id: 3,
      title: 'Literature Essay - Shakespeare',
      course: 'ENG 101',
      dueDate: 'Dec 10, 2024',
      status: 'completed',
      priority: 'low',
      type: 'essay',
      points: 25,
      submitted: true,
      grade: 92
    },
    {
      id: 4,
      title: 'Physics Lab Report',
      course: 'PHYS 202',
      dueDate: 'Dec 8, 2024',
      status: 'completed',
      priority: 'medium',
      type: 'lab',
      points: 30,
      submitted: true,
      grade: 88
    },
    {
      id: 5,
      title: 'Business Case Study',
      course: 'BUS 301',
      dueDate: 'Dec 20, 2024',
      status: 'pending',
      priority: 'high',
      type: 'case-study',
      points: 40,
      submitted: false
    },
    {
      id: 6,
      title: 'Art History Presentation',
      course: 'ART 201',
      dueDate: 'Dec 18, 2024',
      status: 'in-progress',
      priority: 'medium',
      type: 'presentation',
      points: 35,
      submitted: false
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400'
      case 'in-progress': return 'text-yellow-400'
      case 'pending': return 'text-red-400'
      default: return 'text-golden-400'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500/20 text-red-400'
      case 'medium': return 'bg-yellow-500/20 text-yellow-400'
      case 'low': return 'bg-green-500/20 text-green-400'
      default: return 'bg-golden-500/20 text-golden-400'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">Assignments</h1>
        <p className="text-golden-400">Track your assignments, deadlines, and submissions.</p>
      </motion.div>

      {/* Assignment List */}
      <div className="space-y-4">
        {assignments.map((assignment, index) => (
          <motion.div
            key={assignment.id}
            className="bg-dark-800/50 rounded-xl golden-border p-6 hover:golden-border-glow transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <FileText className="w-5 h-5 text-golden-400" />
                  <h3 className="text-lg font-bold text-white">{assignment.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(assignment.priority)}`}>
                    {assignment.priority}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-golden-400" />
                    <span className="text-golden-400 text-sm">Due: {assignment.dueDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-white text-sm">{assignment.course}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-white text-sm">{assignment.points} points</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    {assignment.status === 'completed' ? (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    ) : assignment.status === 'in-progress' ? (
                      <Clock className="w-4 h-4 text-yellow-400" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-red-400" />
                    )}
                    <span className={`text-sm font-medium ${getStatusColor(assignment.status)}`}>
                      {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                    </span>
                  </div>
                  
                  {assignment.submitted && (
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400 text-sm">Grade: {assignment.grade}%</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex space-x-2 ml-4">
                {!assignment.submitted ? (
                  <motion.button
                    className="p-2 rounded-lg golden-border hover:golden-border-glow transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Upload className="w-4 h-4 text-golden-400" />
                  </motion.button>
                ) : (
                  <motion.button
                    className="p-2 rounded-lg golden-border hover:golden-border-glow transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Eye className="w-4 h-4 text-golden-400" />
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Assignment Stats */}
      <motion.div
        className="bg-dark-800/50 rounded-xl golden-border p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2 className="text-xl font-bold text-white mb-6">Assignment Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Total', value: assignments.length, color: 'text-blue-400' },
            { label: 'Pending', value: assignments.filter(a => a.status === 'pending').length, color: 'text-red-400' },
            { label: 'In Progress', value: assignments.filter(a => a.status === 'in-progress').length, color: 'text-yellow-400' },
            { label: 'Completed', value: assignments.filter(a => a.status === 'completed').length, color: 'text-green-400' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <p className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</p>
              <p className="text-golden-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Assignments
