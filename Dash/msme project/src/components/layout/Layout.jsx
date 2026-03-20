import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />
      <div className="flex-1 flex overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50/50 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-6 w-full h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
