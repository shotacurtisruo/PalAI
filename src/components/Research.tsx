import { motion } from 'framer-motion'
import { Brain, Send, MessageCircle, BookOpen, Search, Sparkles } from 'lucide-react'

const Research = () => {
  const recentQuestions = [
    {
      id: 1,
      question: "What are the best extracurricular activities for computer science majors?",
      answer: "Top activities include coding competitions, hackathons, open source projects, and tech internships...",
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      question: "How to write a compelling personal statement for Stanford?",
      answer: "Focus on authenticity, specific examples, and showing your unique perspective...",
      timestamp: "1 day ago"
    },
    {
      id: 3,
      question: "What's the difference between early decision and early action?",
      answer: "Early Decision is binding, while Early Action is non-binding...",
      timestamp: "3 days ago"
    }
  ]

  const resources = [
    {
      title: "College Application Timeline",
      type: "Guide",
      description: "Complete timeline for college applications"
    },
    {
      title: "Essay Writing Tips",
      type: "Article",
      description: "Expert advice on writing compelling essays"
    },
    {
      title: "Financial Aid Calculator",
      type: "Tool",
      description: "Calculate your expected financial aid"
    }
  ]

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2 golden-text-glow">Research (GPT)</h1>
        <p className="text-golden-400 golden-text-glow">Ask questions and discover resources while working</p>
      </motion.div>

      {/* Ask Question */}
      <motion.div
        className="bg-dark-800/50 rounded-xl golden-border p-6 hover:golden-border-glow transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-xl font-bold text-white mb-4 flex items-center">
          <Brain className="w-5 h-5 mr-2 text-golden-400" />
          Ask PalAI GPT
        </h2>
        <div className="flex space-x-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Ask anything about college applications..."
              className="w-full pl-4 pr-12 py-3 bg-dark-700/50 rounded-lg golden-border focus:golden-border-glow focus:outline-none text-white placeholder-golden-400/60"
            />
            <motion.button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-lg golden-gradient hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="w-4 h-4 text-dark-950" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Questions */}
        <motion.div
          className="bg-dark-800/50 rounded-xl golden-border p-6 hover:golden-border-glow transition-all duration-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-xl font-bold text-white mb-6 flex items-center">
            <MessageCircle className="w-5 h-5 mr-2 text-golden-400" />
            Recent Questions
          </h2>
          <div className="space-y-4">
            {recentQuestions.map((item, index) => (
              <motion.div
                key={item.id}
                className="p-4 rounded-lg bg-dark-700/50 hover:bg-dark-700 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 golden-gradient rounded-lg flex items-center justify-center golden-glow">
                    <Brain className="w-4 h-4 text-dark-950" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium text-sm mb-1">{item.question}</h3>
                    <p className="text-golden-400 text-xs mb-2">{item.answer}</p>
                    <span className="text-dark-400 text-xs">{item.timestamp}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resources */}
        <motion.div
          className="bg-dark-800/50 rounded-xl golden-border p-6 hover:golden-border-glow transition-all duration-300"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-xl font-bold text-white mb-6 flex items-center">
            <BookOpen className="w-5 h-5 mr-2 text-golden-400" />
            Helpful Resources
          </h2>
          <div className="space-y-4">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                className="p-4 rounded-lg golden-border bg-dark-700/50 hover:golden-border-glow transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 golden-gradient rounded-lg flex items-center justify-center golden-glow">
                    <BookOpen className="w-4 h-4 text-dark-950" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm mb-1">{resource.title}</h3>
                    <p className="text-golden-400 text-xs mb-1">{resource.description}</p>
                    <span className="text-dark-400 text-xs">{resource.type}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        className="bg-dark-800/50 rounded-xl golden-border p-6 hover:golden-border-glow transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2 className="text-xl font-bold text-white mb-6">Quick Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            "How to choose the right college?",
            "What makes a good personal statement?",
            "When should I start applying?",
            "How to prepare for interviews?",
            "What are the most important factors?",
            "How to write supplemental essays?"
          ].map((question, index) => (
            <motion.button
              key={question}
              className="p-3 rounded-lg golden-border hover:golden-border-glow bg-dark-700/50 transition-all duration-300 text-left"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
            >
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-golden-400" />
                <span className="text-white text-sm">{question}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Research
