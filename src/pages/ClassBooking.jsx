import { useState, useMemo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { Calendar, Clock, User, Users, AlertCircle, ArrowRight } from 'lucide-react'

export default function ClassBooking() {
  const navigate = useNavigate()
  
  // Sample classes data - in a real app, this would come from a backend
  const classesData = [
    // Iron Strength Classes
    { id: 1, name: "Powerlifting 101", trainer: "Kwaku Osei", program: "Iron Strength", time: "06:00 AM", duration: "60 min", difficulty: "Intermediate", maxSpots: 12, bookedSpots: 8, date: "2026-04-28" },
    { id: 2, name: "Strength & Hypertrophy", trainer: "Kwaku Osei", program: "Iron Strength", time: "07:00 PM", duration: "75 min", difficulty: "Advanced", maxSpots: 10, bookedSpots: 9, date: "2026-04-28" },
    { id: 3, name: "Barbell Basics", trainer: "Ekua Boateng", program: "Iron Strength", time: "05:30 AM", duration: "60 min", difficulty: "Beginner", maxSpots: 15, bookedSpots: 12, date: "2026-04-29" },
    
    // Zen & Mobility Classes
    { id: 4, name: "Deep Stretch & Recovery", trainer: "Ama Mensah", program: "Zen & Mobility", time: "06:00 PM", duration: "75 min", difficulty: "All Levels", maxSpots: 20, bookedSpots: 18, date: "2026-04-28" },
    { id: 5, name: "Breathwork & Meditation", trainer: "Ama Mensah", program: "Zen & Mobility", time: "07:30 AM", duration: "45 min", difficulty: "Beginner", maxSpots: 25, bookedSpots: 22, date: "2026-04-29" },
    { id: 6, name: "Yoga Flow", trainer: "Ama Mensah", program: "Zen & Mobility", time: "05:00 PM", duration: "60 min", difficulty: "Intermediate", maxSpots: 20, bookedSpots: 14, date: "2026-04-30" },
    
    // Endurance Earth Classes
    { id: 7, name: "Trail Running", trainer: "Kofi Ampadu", program: "Endurance Earth", time: "06:30 AM", duration: "90 min", difficulty: "Advanced", maxSpots: 15, bookedSpots: 10, date: "2026-04-28" },
    { id: 8, name: "Outdoor HIIT", trainer: "Kofi Ampadu", program: "Endurance Earth", time: "07:00 AM", duration: "60 min", difficulty: "Intermediate", maxSpots: 20, bookedSpots: 16, date: "2026-04-29" },
    { id: 9, name: "Calisthenics & Cardio", trainer: "Kofi Ampadu", program: "Endurance Earth", time: "06:00 PM", duration: "60 min", difficulty: "Intermediate", maxSpots: 18, bookedSpots: 17, date: "2026-04-30" },
    
    // Additional Mixed Classes
    { id: 10, name: "Full Body Strength", trainer: "Ekua Boateng", program: "Iron Strength", time: "06:00 AM", duration: "60 min", difficulty: "Intermediate", maxSpots: 12, bookedSpots: 11, date: "2026-05-01" },
    { id: 11, name: "Mobility Intensive", trainer: "Ama Mensah", program: "Zen & Mobility", time: "06:00 PM", duration: "90 min", difficulty: "Intermediate", maxSpots: 15, bookedSpots: 7, date: "2026-05-01" },
    { id: 12, name: "Endurance Challenge", trainer: "Kofi Ampadu", program: "Endurance Earth", time: "07:00 AM", duration: "75 min", difficulty: "Advanced", maxSpots: 10, bookedSpots: 9, date: "2026-05-01" },
  ]

  const [bookedClasses, setBookedClasses] = useState([])
  const [selectedProgram, setSelectedProgram] = useState("All")
  const [selectedDate, setSelectedDate] = useState(null)

  // Load bookings from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('bookedClasses')
    if (saved) {
      setBookedClasses(JSON.parse(saved))
    }
  }, [])

  // Save bookings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('bookedClasses', JSON.stringify(bookedClasses))
    // Also save classesData for checkout page
    localStorage.setItem('classesData', JSON.stringify(classesData))
  }, [bookedClasses])

  // Get unique dates from classes
  const uniqueDates = useMemo(() => {
    return [...new Set(classesData.map(c => c.date))].sort()
  }, [])

  // Filter classes
  const filteredClasses = useMemo(() => {
    return classesData.filter(cls => {
      const programMatch = selectedProgram === "All" || cls.program === selectedProgram
      const dateMatch = !selectedDate || cls.date === selectedDate
      return programMatch && dateMatch
    })
  }, [selectedProgram, selectedDate])

  const toggleBookClass = (classId) => {
    setBookedClasses(prev => {
      if (prev.includes(classId)) {
        return prev.filter(id => id !== classId)
      } else {
        return [...prev, classId]
      }
    })
  }

  const formatDate = (dateStr) => {
    return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
      weekday: 'short',
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
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-[2px]">Reserve Your Spot</span>
            <h1 className="text-5xl font-light mb-4 mt-3 text-stone-900">
              Class <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-600">Schedule</span>
            </h1>
            <div className="h-1 w-20 bg-linear-to-r from-emerald-600 to-teal-600 mx-auto rounded-full mt-6"></div>
            <p className="text-stone-600 mt-6 max-w-2xl mx-auto font-light">
              Browse upcoming classes and book your spot. Space is limited, so reserve early!
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl border border-stone-200 p-6 mb-8 shadow-sm">
            {/* Program Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-stone-800 mb-3 uppercase tracking-wider">Program</h3>
              <div className="flex flex-wrap gap-2">
                {["All", "Iron Strength", "Zen & Mobility", "Endurance Earth"].map(program => (
                  <button
                    key={program}
                    onClick={() => { setSelectedProgram(program); setSelectedDate(null) }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedProgram === program
                        ? 'bg-linear-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {program}
                  </button>
                ))}
              </div>
            </div>

            {/* Date Filter */}
            <div>
              <h3 className="text-sm font-semibold text-stone-800 mb-3 uppercase tracking-wider">Date</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedDate(null)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    selectedDate === null
                      ? 'bg-linear-to-r from-emerald-600 to-teal-600 text-white'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  <Calendar size={16} />
                  All Dates
                </button>
                {uniqueDates.map(date => (
                  <button
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedDate === date
                        ? 'bg-linear-to-r from-emerald-600 to-teal-600 text-white'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {formatDate(date)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Classes Grid */}
          <div className="space-y-4 mb-8">
            {filteredClasses.length > 0 ? (
              filteredClasses.map((cls) => {
                const isBooked = bookedClasses.includes(cls.id)
                const spotsFilled = cls.bookedSpots
                const spotsAvailable = cls.maxSpots - spotsFilled
                const isFull = spotsAvailable === 0

                return (
                  <div
                    key={cls.id}
                    className={`bg-white border rounded-xl p-6 transition-all hover:shadow-md ${
                      isBooked
                        ? 'border-emerald-300 bg-emerald-50'
                        : isFull
                        ? 'border-red-200 opacity-75'
                        : 'border-stone-200'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      {/* Class Info */}
                      <div className="flex-1">
                        <div className="flex items-start gap-4">
                          {/* Icon */}
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            cls.program === "Iron Strength" ? "bg-amber-100 text-amber-600" :
                            cls.program === "Zen & Mobility" ? "bg-emerald-100 text-emerald-600" :
                            "bg-slate-100 text-slate-600"
                          }`}>
                            <Clock size={24} />
                          </div>

                          {/* Details */}
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-stone-800 mb-2">{cls.name}</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                              <div className="flex items-center gap-2 text-stone-600">
                                <Calendar size={16} className="text-emerald-600" />
                                <span>{formatDate(cls.date)}</span>
                              </div>
                              <div className="flex items-center gap-2 text-stone-600">
                                <Clock size={16} className="text-emerald-600" />
                                <span>{cls.time} - {cls.duration}</span>
                              </div>
                              <div className="flex items-center gap-2 text-stone-600">
                                <User size={16} className="text-emerald-600" />
                                <span>{cls.trainer}</span>
                              </div>
                              <div className={`flex items-center gap-1 font-medium ${
                                cls.difficulty === "Beginner" ? "text-green-600" :
                                cls.difficulty === "Intermediate" ? "text-amber-600" :
                                cls.difficulty === "Advanced" ? "text-red-600" :
                                "text-stone-600"
                              }`}>
                                <span className="inline-block w-2 h-2 rounded-full bg-current"></span>
                                {cls.difficulty}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Booking Section */}
                      <div className="flex flex-col items-end gap-4">
                        {/* Spots Available */}
                        <div className="text-right">
                          <div className="flex items-center gap-2 justify-end text-sm text-stone-600 mb-2">
                            <Users size={16} />
                            <span>{spotsFilled}/{cls.maxSpots} Booked</span>
                          </div>
                          <div className="w-32 h-2 bg-stone-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-linear-to-r from-emerald-500 to-teal-500 transition-all"
                              style={{ width: `${(spotsFilled / cls.maxSpots) * 100}%` }}
                            ></div>
                          </div>
                        </div>

                        {/* Book Button */}
                        {isFull ? (
                          <button
                            disabled
                            className="px-6 py-3 bg-stone-300 text-stone-600 rounded-lg font-semibold cursor-not-allowed flex items-center gap-2"
                          >
                            <AlertCircle size={18} />
                            Full
                          </button>
                        ) : (
                          <button
                            onClick={() => toggleBookClass(cls.id)}
                            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                              isBooked
                                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                                : 'bg-linear-to-r from-emerald-600 to-teal-600 text-white hover:shadow-lg'
                            }`}
                          >
                            {isBooked ? 'Booked' : 'Book Class'}
                          </button>
                        )}
                        
                        {!isFull && (
                          <p className="text-xs text-stone-500">
                            {spotsAvailable} spot{spotsAvailable !== 1 ? 's' : ''} available
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })
            ) : (
              <div className="text-center py-12 bg-white border border-stone-200 rounded-xl">
                <AlertCircle size={40} className="mx-auto text-stone-400 mb-3" />
                <p className="text-stone-600 text-lg">No classes found for your selection.</p>
                <p className="text-stone-500 text-sm mt-2">Try adjusting your filters.</p>
              </div>
            )}
          </div>

          {/* Booked Classes Summary */}
          {bookedClasses.length > 0 && (
            <div className="bg-linear-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-200 p-8">
              <h3 className="text-xl font-semibold text-stone-800 mb-4">Your Bookings ({bookedClasses.length})</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {bookedClasses.map(bookedId => {
                  const cls = classesData.find(c => c.id === bookedId)
                  return (
                    <div key={bookedId} className="bg-white rounded-lg p-4 border border-emerald-200">
                      <h4 className="font-semibold text-stone-800 mb-2">{cls.name}</h4>
                      <p className="text-sm text-stone-600 mb-1">{formatDate(cls.date)} at {cls.time}</p>
                      <p className="text-sm text-stone-600 mb-3">with {cls.trainer}</p>
                      <button
                        onClick={() => toggleBookClass(bookedId)}
                        className="w-full py-2 text-sm bg-red-50 text-red-600 rounded border border-red-200 hover:bg-red-100 transition-colors"
                      >
                        Cancel Booking
                      </button>
                    </div>
                  )
                })}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <a
                  href="javascript:void(0)"
                  onClick={() => navigate('/pricing')}
                  className="inline-flex items-center justify-center gap-2 bg-stone-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-stone-700 transition-all"
                >
                  Browse Memberships
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <button
                  onClick={() => navigate('/booking-checkout')}
                  className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                >
                  Proceed to Checkout
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
