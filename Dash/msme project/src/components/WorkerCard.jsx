import { Star, MapPin, ShieldCheck, Clock } from 'lucide-react';
import { skillsList } from '../data/mockData';

export default function WorkerCard({ worker, onViewProfile }) {
  const SkillIcon = skillsList.find(s => s.id === worker.skillId)?.icon || Clock;

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 p-5 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden relative isolate">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      
      <div className="absolute top-0 right-0 p-4 z-10">
        <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-bold shadow-sm border border-gray-100/50 text-gray-800">
          <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
          {worker.rating}
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="relative group-hover:scale-105 transition-transform duration-500">
          <img 
            src={worker.photoUrl} 
            alt={worker.name} 
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-[3px] border-white shadow-md"
          />
          {worker.isAvailableNow && (
            <span className="absolute bottom-0 right-1 w-4 h-4 sm:w-5 sm:h-5 bg-emerald-500 border-2 border-white rounded-full shadow-sm"></span>
          )}
        </div>
        
        <div className="flex-1 pt-1">
          <div className="flex items-center gap-2">
            <h3 className="font-extrabold text-gray-900 text-lg sm:text-xl group-hover:text-blue-700 transition-colors">{worker.name}</h3>
            {worker.isVerified && (
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
            )}
          </div>
          
          <div className="inline-flex items-center gap-1.5 mt-1.5 px-2.5 py-1 bg-blue-50/80 text-blue-700 font-bold text-xs sm:text-sm rounded-lg border border-blue-100/50">
            <SkillIcon className="w-4 h-4" />
            {worker.skillName}
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 text-sm text-gray-500 font-medium">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 shrink-0 text-gray-400" />
              {worker.distanceKm} km away
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
            <div className="text-indigo-600 font-semibold bg-indigo-50/50 px-2 py-0.5 rounded-md">
              {worker.experienceLevel}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 relative z-10">
        <button 
          onClick={() => onViewProfile(worker)}
          className="w-full py-2.5 px-4 bg-white hover:bg-gray-50 text-gray-700 font-bold rounded-xl transition-all border border-gray-200 shadow-sm hover:shadow"
        >
          View Profile
        </button>
        <button className="w-full py-2.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-95">
          Hire Worker
        </button>
      </div>
    </div>
  );
}
