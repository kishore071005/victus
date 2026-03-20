import { SlidersHorizontal, ChevronDown, Check } from 'lucide-react';
import { skillsList } from '../data/mockData';

export default function WorkerFilters({ filters, setFilters }) {
  return (
    <div className="bg-white/80 backdrop-blur-xl p-6 rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 space-y-7 relative isolate">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 to-transparent -z-10 rounded-[1.5rem] pointer-events-none"></div>
      
      <div className="flex items-center gap-2 pb-5 border-b border-gray-100/80">
        <SlidersHorizontal className="w-5 h-5 text-blue-600" />
        <h2 className="font-extrabold text-gray-900 text-lg">Search Filters</h2>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2 border-b border-gray-100/80 pb-4">
          <SlidersHorizontal className="w-5 h-5 text-blue-600" />
          <h2 className="font-extrabold text-gray-900 text-lg">Search Filters</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Skill Category Selector */}
          <div className="lg:col-span-2 space-y-3">
            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Skill Type</label>
            <div className="flex flex-wrap gap-2">
              {skillsList.map((skill) => {
                const Icon = skill.icon;
                const isSelected = filters.skill === skill.id;
                return (
                  <button
                    key={skill.id}
                    onClick={() => setFilters({ ...filters, skill: isSelected ? 'all' : skill.id })}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 transition-all duration-300 ${
                      isSelected 
                        ? 'border-blue-600 bg-blue-50/50 text-blue-700 shadow-sm shadow-blue-100' 
                        : 'border-transparent bg-gray-50/80 hover:bg-white hover:border-blue-200 hover:shadow-sm text-gray-600'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-blue-600' : 'text-gray-400'}`} />
                    <span className="text-sm font-semibold">{skill.name}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="space-y-6">
            {/* Distance Slider */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider flex justify-between">
                <span>Distance limit</span>
                <span className="text-blue-600 font-extrabold">{filters.distance} km</span>
              </label>
              <input 
                type="range" 
                min="1" 
                max="20" 
                value={filters.distance}
                onChange={(e) => setFilters({...filters, distance: parseInt(e.target.value)})}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-400 font-medium">
                <span>1 km</span>
                <span>20 km</span>
              </div>
            </div>

            <div className="flex gap-4">
              {/* Experience */}
              <div className="flex-1 space-y-3">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Experience</label>
                <div className="flex flex-wrap gap-2">
                  {['All', 'Beginner', 'Skilled', 'Expert'].map(level => (
                    <button
                      key={level}
                      onClick={() => setFilters({...filters, experience: level})}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                        filters.experience === level
                          ? 'bg-gray-900 text-white shadow-md'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Available Now</label>
                <label className="flex items-center cursor-pointer group pt-1">
                  <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors mr-3 ${filters.availableNow ? 'bg-emerald-500' : 'bg-gray-200'}`}>
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${filters.availableNow ? 'translate-x-6' : 'translate-x-1'}`} />
                  </div>
                  <input 
                    type="checkbox" 
                    className="hidden" 
                    checked={filters.availableNow}
                    onChange={(e) => setFilters({...filters, availableNow: e.target.checked})}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
