import { X, Star, MapPin, ShieldCheck, Briefcase, Phone, MessageCircle } from 'lucide-react';
import { skillsList } from '../data/mockData';

export default function WorkerProfileModal({ worker, isOpen, onClose }) {
  if (!isOpen || !worker) return null;

  const SkillIcon = skillsList.find(s => s.id === worker.skillId)?.icon || Briefcase;

  return (
    <>
      <div 
        className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-50 transition-opacity" 
        onClick={onClose}
      />
      
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 py-8 md:p-6 shadow-2xl pointer-events-none">
        <div className="bg-white/95 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] rounded-[2rem] w-full max-w-2xl max-h-full overflow-y-auto pointer-events-auto ring-1 ring-gray-900/5 animate-modal-fade-in">
          <div className="relative h-40 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="px-6 sm:px-8 pb-8">
            <div className="relative -mt-16 sm:-mt-20 mb-6 flex justify-between items-end">
              <div className="relative inline-block animate-float">
                <img 
                  src={worker.photoUrl} 
                  alt={worker.name} 
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white shadow-2xl object-cover bg-white ring-4 ring-blue-50/50"
                />
                {worker.isVerified && (
                  <div className="absolute bottom-2 right-2 bg-white rounded-full p-1.5 shadow-lg ring-1 ring-gray-100">
                    <ShieldCheck className="w-8 h-8 text-green-500" />
                  </div>
                )}
              </div>
              <div className="pb-4 flex gap-3">
                <button className="p-3 bg-white/50 backdrop-blur-sm border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-2xl transition-all shadow-sm hover:shadow">
                  <MessageCircle className="w-6 h-6" />
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/30 transition-all hover:scale-105 active:scale-95">
                  <Phone className="w-5 h-5" />
                  Hire Now
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-extrabold text-gray-900">{worker.name}</h1>
                <div className="flex flex-wrap items-center gap-4 mt-2">
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-lg font-semibold text-sm">
                    <SkillIcon className="w-4 h-4" />
                    {worker.skillName}
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 rounded-lg font-semibold text-sm">
                    <Star className="w-4 h-4 fill-amber-500" />
                    {worker.rating} ({worker.reviewsCount} reviews)
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-700 rounded-lg font-semibold text-sm">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    {worker.distanceKm} km away
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white/50 backdrop-blur-sm p-5 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">Experience</div>
                  <div className="font-extrabold text-gray-900 text-lg">{worker.experienceLevel}</div>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-5 rounded-2xl border border-indigo-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-indigo-600 text-xs font-bold uppercase tracking-wider mb-2">Jobs Done</div>
                  <div className="font-extrabold text-gray-900 text-lg">{worker.completedJobs}</div>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-5 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-emerald-600 text-xs font-bold uppercase tracking-wider mb-2">Status</div>
                  <div className={`font-extrabold text-lg ${worker.isAvailableNow ? 'text-emerald-600' : 'text-orange-500'}`}>
                    {worker.isAvailableNow ? 'Available' : 'Busy'}
                  </div>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-5 rounded-2xl border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-amber-600 text-xs font-bold uppercase tracking-wider mb-2">Verify</div>
                  <div className={`font-extrabold text-lg ${worker.isVerified ? 'text-amber-600' : 'text-gray-500'}`}>
                    {worker.isVerified ? 'Aadhaar' : 'Pending'}
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Recent Reviews</h3>
                <div className="space-y-4">
                  {[1, 2].map(i => (
                    <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">Industrial Needs Co.</p>
                          <p className="text-xs text-gray-500">2 weeks ago</p>
                        </div>
                        <div className="flex gap-0.5">
                          {[1,2,3,4,5].map(star => (
                            <Star key={star} className={`w-3.5 h-3.5 ${star <= worker.rating ? 'fill-amber-500 text-amber-500' : 'text-gray-200'}`} />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Excellent work and highly professional. Completed the task before the deadline. Will definitely hire again.
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
