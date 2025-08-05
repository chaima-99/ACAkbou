/* eslint-disable no-unused-vars */
import { useState, useMemo } from 'react';
import { ChevronUp, ChevronDown, Calendar, MapPin, Trophy } from 'lucide-react';
import { Timer, User, Target } from 'lucide-react';
import { motion } from 'framer-motion';


const RecentAchievements = () => {
  const achievements = [
    {
      event: "Men's 100m",
      athlete: "James Mitchell",
      result: "10.23s",
      icon: <Timer className="w-5 h-5" />,
      type: "time"
    },
    {
      event: "Women's 800m",
      athlete: "Sarah Johnson",
      result: "2:05.45",
      icon: <Timer className="w-5 h-5" />,
      type: "time"
    },
    {
      event: "Men's High Jump",
      athlete: "David Chen",
      result: "2.15m",
      icon: <Target className="w-5 h-5" />,
      type: "distance"
    },
    {
      event: "Women's Marathon",
      athlete: "Emma Davis",
      result: "2:45:30",
      icon: <Timer className="w-5 h-5" />,
      type: "time"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Trophy className="w-8 h-8 text-yellow-500" />
            <h1 className="text-4xl font-bold text-gray-900">Recent Achievements</h1>
            <Trophy className="w-8 h-8 text-yellow-500" />
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-lg font-semibold text-gray-700">Event</th>
                <th className="px-6 py-4 text-left text-lg font-semibold text-gray-700">Athlete</th>
                <th className="px-6 py-4 text-left text-lg font-semibold text-gray-700">Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {achievements.map((achievement, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="text-blue-500">
                        {achievement.icon}
                      </div>
                      <span className="text-gray-900 font-medium">{achievement.event}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">{achievement.athlete}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-red-500 font-semibold text-lg">{achievement.result}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="text-blue-500">
                    {achievement.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg">{achievement.event}</h3>
                </div>
                <div className="text-red-500 font-bold text-xl">{achievement.result}</div>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <User className="w-4 h-4" />
                <span>{achievement.athlete}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-200">
            <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{achievements.length}</div>
            <div className="text-gray-600">Total Records</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-200">
            <Timer className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">3</div>
            <div className="text-gray-600">Timed Events</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-200">
            <Target className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">1</div>
            <div className="text-gray-600">Field Events</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-200">
            <User className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">4</div>
            <div className="text-gray-600">Athletes</div>
          </div>
        </div>
      </div>
    </div>
  );
};



const Event = () => {
  const [sortColumn, setSortColumn] = useState('date');
  const [sortDirection, setSortDirection] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const eventsData = [
    { date: '09-Dec-2025', eventName: 'Cross d\'ouverture LAB', location: 'Acherchouf' },
    { date: '12-Dec-2025', eventName: 'Challenge National de Cross-country', location: 'Acherchouf' },
    { date: '23-Dec-2025', eventName: 'Challenge National de Cross-country La Soummam', location: 'Acherchouf' },
    { date: '06-Jan-2025', eventName: 'Championnat de wilaya de CROSS -COUNTRY', location: 'Acherchouf' },
    { date: '12-Jan-2025', eventName: '1ère journée régionale d\'athlétisme', location: 'Stade d\'athlétisme de SEI Tenine' },
    { date: '26-Jan-2025', eventName: '2ème journée régionale d\'athlétisme', location: 'Stade d\'athlétisme de SEI Tenine' },
    { date: '27-Jan-2025', eventName: 'Championnat de wilaya de Cross-Country', location: 'Acherchouf' },
    { date: '9-10-Fev-2025', eventName: 'Championnat régional Hivernal Open', location: 'Stade d\'athlétisme de SEI Tenine' },
    { date: '23-Fev-2025', eventName: '3ème journée régionale d\'athlétisme des U18-U20-S', location: 'Stade d\'athlétisme de SEI Tenine' },
    { date: '24-Fev-2025', eventName: '1ère journée LAB des Benjamins & Minimes', location: 'Stade d\'athlétisme de SEI Tenine' },
    { date: '09-Mars-2025', eventName: '5ème Journée élite & 2eme Journée JTS', location: 'Bejaia' },
    { date: '15-Mars-2025', eventName: '1er tour du triathlon des écoles [matin]', location: 'Stade d\'athlétisme de SEI Tenine' },
    { date: '16-Mars-2025', eventName: '2ème journée LAB Benjamins/minimes [Journée]', location: 'Stade d\'athlétisme de SEI Tenine' },
    { date: '22-Mars-2025', eventName: '1ère soirée LAB des U18-U20- SEN', location: 'Stade d\'athlétisme de SEI Tenine' },
    { date: '29-Mars-2025', eventName: 'Finale de wilaya du triathlon des écoles [matin]', location: 'Stade d\'athlétisme de SEI Tenine' },
    { date: '30-Mars-2025', eventName: '3ème journée LAB Benjamins/Minimes [Journée]', location: 'Stade d\'athlétisme de SEI Tenine' },
    { date: '04-Avril-2025', eventName: '2ème soirée régionale des U18-U20- SEN', location: 'Stade d\'athlétisme de SEI Tenine' },
    { date: '19-20-Avril-2025', eventName: 'Championnat de wilaya des épreuves combinées & 53ème Journée LAB Benjamins/Minimes', location: 'Stade d\'athlétisme de SEI Tenine' },
    { date: '26-Avril-2025', eventName: '1er tour des inter-écoles [matin]', location: 'Stade d\'athlétisme de SEI Tenine' },
    { date: '27-Avril-2025', eventName: '8ème Journée élite & 4ème JTS', location: 'Stade d\'athlétisme de SEI Tenine' },
    { date: '[02-03-05]-Mai-2025', eventName: 'Championnat régional des épreuves combinées Toutes catégories & 4ème Régionale Journée U18-U20-SH', location: 'Stade d\'athlétisme de SEI Tenine' },
    { date: '10-Mai-2025', eventName: 'Finale de wilaya des Inter-Ecoles', location: 'Stade d\'athlétisme de SEI Tenine' },
    { date: '11-Mai-2025', eventName: 'Finale de wilaya des inter- Equipes Benjamins -Minimes', location: 'Stade d\'athlétisme de SEI Tenine' },
    { date: '31-1-Mai-2025', eventName: 'Championnat de wilaya Benjamins-Minimes', location: 'Stade d\'athlétisme de SEI Tenine' },
    { date: '7-8-Jun-2025', eventName: 'Championnat régional OPEN & 5ème Journée régionale', location: 'Stade d\'athlétisme de SEI Tenine' },
    { date: '14-15-Jun-2025', eventName: 'Championnat régional Benjamins-Minimes', location: 'Stade d\'athlétisme de SEI Tenine' },
    { date: '21-22-Jun-2025', eventName: 'Championnat régional des U18-U20 & 6ème journée R...', location: 'Stade d\'athlétisme de SEI Tenine' },
    { date: '03-04-Jul-2025', eventName: 'Championnat d\'Algérie Benjamins & Minimes', location: 'Stade d\'athlétisme de SEI Tenine' }
  ];

  const parseDate = (dateStr) => {
    if (dateStr.includes('[')) dateStr = dateStr.split('[')[0].trim();
    if (dateStr.includes('-') && dateStr.split('-').length > 3)
      dateStr = dateStr.split('-').slice(-2).join('-');

    const parts = dateStr.split('-');
    if (parts.length === 3) {
      const [day, month, year] = parts;
      const monthNames = {
        'Jan': '01', 'Fev': '02', 'Mars': '03', 'Avril': '04',
        'Mai': '05', 'Jun': '06', 'Jul': '07', 'Dec': '12'
      };
      const monthNum = monthNames[month] || month;
      return new Date(`${year}-${monthNum.padStart(2, '0')}-${day.padStart(2, '0')}`);
    }
    return new Date(dateStr);
  };

  const sortedData = useMemo(() => {
    let filtered = eventsData.filter(event =>
      event.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.date.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered.sort((a, b) => {
      let aVal = sortColumn === 'date' ? parseDate(a.date) : a[sortColumn].toLowerCase();
      let bVal = sortColumn === 'date' ? parseDate(b.date) : b[sortColumn].toLowerCase();
      return sortDirection === 'asc' ? (aVal < bVal ? -1 : 1) : (aVal > bVal ? -1 : 1);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, sortColumn, sortDirection]);

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const SortIcon = ({ column }) => {
    if (column !== sortColumn) return <div className="w-4 h-4"></div>;
    return sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />;
  };

  const formatDate = (dateStr) => {
    const months = {
      'Dec': 'December', 'Jan': 'January', 'Fev': 'February', 'Mars': 'March',
      'Avril': 'April', 'Mai': 'May', 'Jun': 'June', 'Jul': 'July'
    };
    return dateStr.replace(/(\w+)/g, (match) => months[match] || match);
  };

  return (
    <div>
        {/* Hero Section */}
      <section className="bg-[#E63946] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Upcoming Events & Competitions
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
           Stay up to date with our training meets, local races, and national championships
          </motion.p>
        </div>
      </section>
    <div className="min-h-screen bg-gray-50 py-8 px-4">
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Trophy className="w-8 h-8 text-red-600" />
            Athletics Events Schedule 2025
          </h1>
          <p className="text-gray-600 text-lg">Complete calendar of upcoming athletics competitions and events</p>
        </div>

        <div className="mb-6">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search events, locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="text-white" style={{ background: `linear-gradient(to right, #DC2626, #BE123C)` }}>
                <tr>
                  <th className="px-6 py-4 text-left font-semibold cursor-pointer hover:opacity-80 transition-colors duration-200" onClick={() => handleSort('date')}>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Date
                      <SortIcon column="date" />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left font-semibold cursor-pointer hover:opacity-80 transition-colors duration-200" onClick={() => handleSort('eventName')}>
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4" />
                      Event Name
                      <SortIcon column="eventName" />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left font-semibold cursor-pointer hover:opacity-80 transition-colors duration-200" onClick={() => handleSort('location')}>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Location
                      <SortIcon column="location" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {sortedData.map((event, index) => (
                  <tr key={index} className="hover:bg-red-50 transition-colors duration-150 group">
                    <td className="px-6 py-4 text-sm font-medium text-red-600">
                      {formatDate(event.date)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 group-hover:text-gray-900">
                      {event.eventName}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 group-hover:text-gray-800">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-gray-400" />
                        {event.location}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile View */}
          <div className="md:hidden">
            <div className="p-4 text-white" style={{ background: `linear-gradient(to right, #DC2626, #BE123C)` }}>
              <h2 className="text-lg font-semibold">Events Schedule</h2>
              <p className="opacity-80 text-sm">{sortedData.length} events found</p>
            </div>
            <div className="divide-y divide-gray-200">
              {sortedData.map((event, index) => (
                <div key={index} className="p-4 hover:bg-red-50 transition-colors duration-150">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-red-600" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-red-600 mb-1">
                        {formatDate(event.date)}
                      </div>
                      <div className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">
                        {event.eventName}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 text-gray-400 mr-1 flex-shrink-0" />
                        <span className="truncate">{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-6 bg-white rounded-lg px-6 py-3 shadow-md">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{sortedData.length}</div>
              <div className="text-sm text-gray-600">Total Events</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-700">2025</div>
              <div className="text-sm text-gray-600">Season</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RecentAchievements />
        </div>
        </div>
  );
};

export default Event;
