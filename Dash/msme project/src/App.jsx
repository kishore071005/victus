import { useState, useMemo } from 'react';
import Layout from './components/layout/Layout';
import WorkerFilters from './components/WorkerFilters';
import WorkerCard from './components/WorkerCard';
import WorkerProfileModal from './components/WorkerProfileModal';
import { mockWorkers } from './data/mockData';
import { FileQuestion, MapPin, List } from 'lucide-react';

export default function App() {
  const [filters, setFilters] = useState({
    skill: 'all',
    distance: 10,
    experience: 'All',
    minRating: 3,
    availableNow: false
  });

  const [selectedWorker, setSelectedWorker] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const filteredWorkers = useMemo(() => {
    return mockWorkers.filter(worker => {
      if (filters.skill !== 'all' && worker.skillId !== filters.skill) return false;
      if (filters.distance < worker.distanceKm) return false;
      if (filters.experience !== 'All' && worker.experienceLevel !== filters.experience) return false;
      if (worker.rating < filters.minRating) return false;
      if (filters.availableNow && !worker.isAvailableNow) return false;
      return true;
    });
  }, [filters]);

  const handleViewProfile = (worker) => {
    setSelectedWorker(worker);
    setIsProfileOpen(true);
  };

  return (
    <Layout>
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-50 to-transparent -z-10 pointer-events-none"></div>
      
      <div className="mb-8 flex flex-col items-center justify-center text-center gap-4">
        <div className="relative inline-block">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 tracking-tight relative z-10">Discover Workers</h1>
          <p className="text-gray-500 mt-2 font-medium text-lg relative z-10">Find and hire the best skilled workers near your business.</p>
        </div>
      </div>

      <div className="flex flex-col gap-8 relative z-10 mt-4">
        <div className="w-full">
          <WorkerFilters filters={filters} setFilters={setFilters} />
        </div>

        <div className="w-full space-y-4">
          <div className="flex items-center justify-between mb-4 bg-white/60 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/60 shadow-sm">
            <h2 className="font-extrabold text-gray-900 text-xl">
              {filteredWorkers.length} {filteredWorkers.length === 1 ? 'Worker' : 'Workers'} Found
            </h2>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
              <span>Sorted by:</span>
              <select className="bg-transparent border-none text-blue-600 font-bold outline-none cursor-pointer">
                <option>Nearest First</option>
                <option>Highest Rated</option>
                <option>Most Experienced</option>
              </select>
            </div>
          </div>
          
          {filteredWorkers.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredWorkers.map(worker => (
                <WorkerCard 
                  key={worker.id} 
                  worker={worker} 
                  onViewProfile={handleViewProfile}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <FileQuestion className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">No workers found</h3>
              <p className="text-gray-500 text-sm max-w-xs">
                Try adjusting your filters, increasing the distance, or lowering the experience requirements.
              </p>
              <button 
                onClick={() => setFilters({
                  skill: 'all', distance: 20, experience: 'All', minRating: 3, availableNow: false
                })}
                className="mt-6 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      <WorkerProfileModal 
        worker={selectedWorker}
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
    </Layout>
  );
}
