import { useState } from 'react'
import Footer from '../components/Footer'
import { Calendar, User, ArrowRight, Search } from 'lucide-react'

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const articles = [
    {
      id: 1,
      title: "Progressive Overload: The Secret to Continuous Strength Gains",
      category: "Strength Training",
      author: "Kwaku Osei",
      date: "2026-04-20",
      excerpt: "Discover how progressive overload works and learn practical strategies to keep challenging your muscles and building strength consistently.",
      content: "Progressive overload is the cornerstone of any effective strength training program. By gradually increasing weight, reps, or intensity, you force your muscles to adapt and grow stronger.",
      image: "STR",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Recovery is Where Growth Happens: A Deep Dive into Rest Days",
      category: "Recovery",
      author: "Ama Mensah",
      date: "2026-04-18",
      excerpt: "Learn why rest days are just as important as training days and how proper recovery accelerates your fitness goals.",
      content: "Many fitness enthusiasts make the mistake of training hard every day without proper recovery. This article explores the science behind muscle recovery and provides practical recovery strategies.",
      image: "REC",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Beginner's Guide to Proper Form in Weightlifting",
      category: "Strength Training",
      author: "Kwaku Osei",
      date: "2026-04-15",
      excerpt: "Master the fundamentals of proper weightlifting form to prevent injuries and maximize muscle engagement.",
      content: "Proper form is the foundation of safe and effective weightlifting. In this guide, we cover the essential principles of form and common mistakes beginners make.",
      image: "FOR",
      readTime: "8 min read"
    },
    {
      id: 4,
      title: "The Mind-Body Connection: Mental Benefits of Regular Exercise",
      category: "Wellness",
      author: "Ama Mensah",
      date: "2026-04-12",
      excerpt: "Explore how fitness improves mental health, reduces stress, and enhances overall well-being.",
      content: "Exercise isn't just about physical health. Regular workouts significantly impact mental well-being by releasing endorphins and reducing stress hormones.",
      image: "MND",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Nutrition for Muscle Growth: Complete Protein Guide",
      category: "Nutrition",
      author: "Kwaku Osei",
      date: "2026-04-10",
      excerpt: "Understand protein requirements, best sources, and timing strategies to optimize muscle growth.",
      content: "Protein is essential for muscle repair and growth. Learn how much protein you need, the best sources, and when to consume it for maximum results.",
      image: "NUT",
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "Flexibility Training: Why Every Athlete Needs It",
      category: "Mobility",
      author: "Ama Mensah",
      date: "2026-04-08",
      excerpt: "Discover how flexibility training prevents injuries, improves performance, and enhances muscle recovery.",
      content: "Flexibility is often overlooked in fitness routines, but it's crucial for performance and injury prevention. This article covers different flexibility techniques and their benefits.",
      image: "FLX",
      readTime: "7 min read"
    },
    {
      id: 7,
      title: "HIIT Workouts: Maximize Results in Minimum Time",
      category: "Cardio",
      author: "Kofi Ampadu",
      date: "2026-04-05",
      excerpt: "Learn how high-intensity interval training burns fat, builds endurance, and saves time in your busy schedule.",
      content: "High-Intensity Interval Training (HIIT) is one of the most efficient workout formats. In just 20-30 minutes, you can achieve results that traditional cardio takes much longer to deliver.",
      image: "HIT",
      readTime: "6 min read"
    },
    {
      id: 8,
      title: "Hydration & Performance: Why Water is Your Best Friend",
      category: "Nutrition",
      author: "Kofi Ampadu",
      date: "2026-04-02",
      excerpt: "Understand hydration science and learn optimal strategies for staying hydrated during workouts.",
      content: "Proper hydration is critical for performance, recovery, and overall health. Learn how to calculate your hydration needs and maintain optimal fluid intake.",
      image: "HYD",
      readTime: "5 min read"
    },
    {
      id: 9,
      title: "Building a Sustainable Fitness Habit: 30-Day Challenge",
      category: "Wellness",
      author: "Ekua Boateng",
      date: "2026-03-30",
      excerpt: "Create lasting fitness habits with our proven 30-day challenge framework and habit-building strategies.",
      content: "Building a sustainable fitness habit takes strategy and commitment. This guide provides a 30-day framework to establish consistent exercise habits.",
      image: "HAB",
      readTime: "8 min read"
    },
    {
      id: 10,
      title: "Stretching vs. Foam Rolling: Which is Better for Recovery?",
      category: "Recovery",
      author: "Ama Mensah",
      date: "2026-03-27",
      excerpt: "Compare stretching and foam rolling techniques to optimize your post-workout recovery routine.",
      content: "Both stretching and foam rolling have benefits for recovery. Learn the differences and how to use them together effectively.",
      image: "RVY",
      readTime: "6 min read"
    }
  ]

  const categories = ['All', 'Strength Training', 'Cardio', 'Mobility', 'Recovery', 'Nutrition', 'Wellness']

  const filteredArticles = articles.filter(article => {
    const categoryMatch = selectedCategory === 'All' || article.category === selectedCategory
    const searchMatch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       article.author.toLowerCase().includes(searchTerm.toLowerCase())
    return categoryMatch && searchMatch
  })

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <>
      <div className="min-h-screen bg-stone-50 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-[2px]">Knowledge Base</span>
            <h1 className="text-5xl font-light mb-4 mt-3 text-stone-900">
              Fitness Blog & <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-600">Resources</span>
            </h1>
            <div className="h-1 w-20 bg-linear-to-r from-emerald-600 to-teal-600 mx-auto rounded-full mt-6"></div>
            <p className="text-stone-600 mt-6 max-w-2xl mx-auto font-light">
              Expert tips, workout guides, nutrition advice, and recovery strategies from our certified trainers.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-linear-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                    : 'bg-white border border-stone-200 text-stone-700 hover:border-emerald-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-xl border border-stone-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  {/* Image/Icon */}
                  <div className="h-40 bg-linear-to-br from-emerald-50 to-teal-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-linear-to-r from-emerald-600 to-teal-600 flex items-center justify-center text-white text-sm font-bold tracking-widest">
                      {article.image}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category Tag */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-stone-500">{article.readTime}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-semibold text-stone-800 mb-3 leading-tight group-hover:text-emerald-600 transition-colors">
                      {article.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-stone-600 text-sm leading-relaxed mb-4 font-light">
                      {article.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between border-t border-stone-100 pt-4">
                      <div className="flex items-center gap-4 text-xs text-stone-500">
                        <div className="flex items-center gap-1">
                          <User size={14} />
                          {article.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {formatDate(article.date)}
                        </div>
                      </div>
                      <button className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-1 md:col-span-2 text-center py-12 bg-white border border-stone-200 rounded-xl">
                <Search size={40} className="mx-auto text-stone-300 mb-3" />
                <p className="text-stone-600 text-lg">No articles found.</p>
                <p className="text-stone-500 text-sm mt-2">Try a different search term or category.</p>
              </div>
            )}
          </div>

          {/* CTA Section */}
          <div className="bg-linear-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-200 p-8 text-center">
            <h3 className="text-2xl font-semibold text-stone-800 mb-3">Want Personalized Guidance?</h3>
            <p className="text-stone-600 mb-6 font-light max-w-2xl mx-auto">
              Our certified trainers can create a personalized fitness and nutrition plan tailored to your goals.
            </p>
            <a
              href="/fitness-gym-site/trainers"
              className="inline-flex items-center gap-2 bg-linear-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Meet Our Trainers
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
