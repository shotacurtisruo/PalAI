import { motion } from 'framer-motion'
import { Calendar, Clock, BookOpen, FileText, Users, MapPin } from 'lucide-react'

const CalendarView = () => {
  const events = [
    {
      id: 1,
      title: 'Calculus Final Exam',
      type: 'exam',
      date: 'Dec 15, 2024',
      time: '10:00 AM - 12:00 PM',
      location: 'Room 301',
      course: 'MATH 301',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Programming Project Due',
      type: 'assignment',
      date: 'Dec 12, 2024',
      time: '11:59 PM',
      location: 'Online',
      course: 'CS 201',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'English Literature Class',
      type: 'class',
      date: 'Dec 10, 2024',
      time: '11:30 AM - 12:45 PM',
      location: 'Room 205',
      course: 'ENG 101',
      priority: 'low'
    },
    {
      id: 4,
      title: 'Physics Lab Session',
      type: 'lab',
      date: 'Dec 8, 2024',
      time: '2:00 PM - 5:00 PM',
      location: 'Lab Building A',
      course: 'PHYS 202',
      priority: 'medium'
    },
    {
      id: 5,
      title: 'Business Case Study Presentation',
      type: 'presentation',
      date: 'Dec 20, 2024',
      time: '1:00 PM - 2:30 PM',
      location: 'Conference Room B',
      course: 'BUS 301',
      priority: 'high'
    },
    {
      id: 6,
      title: 'Art History Discussion',
      type: 'class',
      date: 'Dec 18, 2024',
      time: '3:30 PM - 4:45 PM',
      location: 'Art Center',
      course: 'ART 201',
      priority: 'low'
    }
  ]

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'exam': return FileText
      case 'assignment': return FileText
      case 'class': return BookOpen
      case 'lab': return Users
      case 'presentation': return Users
      default: return Calendar
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-red-400 bg-red-500/10'
      case 'medium': return 'border-yellow-400 bg-yellow-500/10'
      case 'low': return 'border-green-400 bg-green-500/10'
      default: return 'border-golden-400 bg-golden-500/10'
    }
  }

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'exam': return 'text-red-400'
      case 'assignment': return 'text-orange-400'
      case 'class': return 'text-blue-400'
      case 'lab': return 'text-purple-400'
      case 'presentation': return 'text-green-400'
      default: return 'text-golden-400'
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
        <h1 className="text-3xl font-bold text-white mb-2">Calendar</h1>
        <p className="text-golden-400">View your upcoming events, classes, and deadlines.</p>
      </motion.div>

      {/* Calendar Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar Grid */}
        <motion.div
          className="lg:col-span-2 bg-dark-800/50 rounded-xl golden-border p-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-xl font-bold text-white mb-6">December 2024</h2>
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center text-golden-400 text-sm font-medium py-2">
                {day}
              </div>
            ))}
            {Array.from({ length: 35 }, (_, i) => {
              const day = i + 1
              const hasEvent = events.some(event => event.date.includes(`Dec ${day}`))
              return (
                <motion.div
                  key={i}
                  className={`p-2 text-center rounded-lg cursor-pointer transition-all duration-300 ${
                    hasEvent 
                      ? 'bg-golden-500/20 text-golden-400 border border-golden-400/30' 
                      : 'text-white hover:bg-dark-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {day <= 31 ? day : ''}
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          className="bg-dark-800/50 rounded-xl golden-border p-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-xl font-bold text-white mb-6">Upcoming Events</h2>
          <div className="space-y-4">
            {events.slice(0, 5).map((event, index) => {
              const EventIcon = getEventIcon(event.type)
              return (
                <motion.div
                  key={event.id}
                  className={`p-4 rounded-lg border-l-4 ${getPriorityColor(event.priority)} hover:bg-dark-700/50 transition-all duration-300`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-3">
                    <EventIcon className={`w-5 h-5 ${getEventTypeColor(event.type)} mt-1`} />
                    <div className="flex-1">
                      <h3 className="text-white font-medium text-sm">{event.title}</h3>
                      <p className="text-golden-400 text-xs mb-1">{event.course}</p>
                      <div className="flex items-center space-x-4 text-xs text-dark-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{event.time}</span>
                        </div>
                      </div>
                      {event.location !== 'Online' && (
                        <div className="flex items-center space-x-1 text-xs text-dark-400 mt-1">
                          <MapPin className="w-3 h-3" />
                          <span>{event.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* All Events List */}
      <motion.div
        className="bg-dark-800/50 rounded-xl golden-border p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="text-xl font-bold text-white mb-6">All Events</h2>
        <div className="space-y-4">
          {events.map((event, index) => {
            const EventIcon = getEventIcon(event.type)
            return (
              <motion.div
                key={event.id}
                className="flex items-center justify-between p-4 rounded-lg bg-dark-700/50 hover:bg-dark-700 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 ${getPriorityColor(event.priority)} rounded-lg flex items-center justify-center`}>
                    <EventIcon className={`w-5 h-5 ${getEventTypeColor(event.type)}`} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{event.title}</h3>
                    <p className="text-golden-400 text-sm">{event.course}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-white text-sm">{event.date}</p>
                  <p className="text-golden-400 text-xs">{event.time}</p>
                  {event.location !== 'Online' && (
                    <p className="text-dark-400 text-xs">{event.location}</p>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Event Type Legend */}
      <motion.div
        className="bg-dark-800/50 rounded-xl golden-border p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2 className="text-xl font-bold text-white mb-6">Event Types</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { type: 'exam', label: 'Exams', icon: FileText, color: 'text-red-400' },
            { type: 'assignment', label: 'Assignments', icon: FileText, color: 'text-orange-400' },
            { type: 'class', label: 'Classes', icon: BookOpen, color: 'text-blue-400' },
            { type: 'lab', label: 'Labs', icon: Users, color: 'text-purple-400' },
            { type: 'presentation', label: 'Presentations', icon: Users, color: 'text-green-400' },
          ].map((item, index) => (
            <div key={item.type} className="flex items-center space-x-2">
              <item.icon className={`w-4 h-4 ${item.color}`} />
              <span className="text-white text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default CalendarView
