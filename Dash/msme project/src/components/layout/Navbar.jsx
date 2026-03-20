import { Bell, Search, Menu, User, LayoutDashboard, Users, Briefcase, BookmarkCheck, MessageSquare, Settings as SettingsIcon } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, current: false },
  { name: 'Find Workers', icon: Users, current: true },
  { name: 'Post Job', icon: Briefcase, current: false },
  { name: 'Saved Workers', icon: BookmarkCheck, current: false },
  { name: 'Messages', icon: MessageSquare, current: false },
  { name: 'Settings', icon: SettingsIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex flex-col w-full bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 pointer-events-auto">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white font-bold shadow-sm">
            S
          </div>
          <span className="text-xl font-extrabold text-gray-900 hidden sm:block tracking-tight">SkillMap</span>
        </div>

        <div className="flex-1 max-w-xl px-6 lg:px-8 hidden md:block">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600" />
            <input
              type="text"
              placeholder="Search for workers, skills, or jobs..."
              className="w-full h-10 pl-10 pr-4 bg-gray-100 flex items-center border border-transparent rounded-full outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 pointer-events-auto">
          <button className="p-2 rounded-full hover:bg-gray-100 relative transition-colors">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1.5 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          <button className="flex items-center gap-2 p-1 pr-3 rounded-full border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors bg-white">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold shadow-inner">
              <User className="w-4 h-4" />
            </div>
            <div className="hidden sm:flex flex-col items-start leading-none gap-0.5">
              <span className="text-sm font-bold text-gray-900">Sri Ram Factory</span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-500">12 Active Jobs</span>
            </div>
          </button>
        </div>
      </div>

      <nav className="hidden md:flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-50/80 border-t border-gray-100 h-14 overflow-x-auto gap-1">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href="#"
              className={classNames(
                item.current
                  ? 'bg-white text-blue-600 border-blue-500 shadow-sm border-b-[3px]'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-white border-transparent border-b-[3px] hover:border-blue-200',
                'group flex items-center px-4 py-2 text-sm font-bold rounded-t-xl transition-all h-full'
              )}
            >
              <Icon
                className={classNames(
                  item.current ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-500',
                  'mr-2 flex-shrink-0 h-4 w-4 transition-colors'
                )}
                aria-hidden="true"
              />
              {item.name}
            </a>
          );
        })}
      </nav>

      {/* Mobile Scrollable Nav */}
      <div className="md:hidden flex overflow-x-auto items-center px-4 py-3 border-t border-gray-100 bg-gray-50 gap-2 scrollbar-hide shrink-0">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href="#"
              className={classNames(
                item.current
                  ? 'bg-blue-600 text-white shadow-md border-transparent'
                  : 'text-gray-700 bg-white border-gray-200 shadow-sm hover:border-blue-300',
                'flex-none flex items-center px-4 py-2 border rounded-full text-xs font-bold transition-all'
              )}
            >
              <Icon className={classNames("w-3.5 h-3.5 mr-2", item.current ? 'text-blue-100' : 'text-gray-400')} />
              {item.name}
            </a>
          );
        })}
      </div>
    </header>
  );
}
