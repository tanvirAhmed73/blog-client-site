import { useEffect } from 'react';
import { X } from 'lucide-react';

const SearchPopup = ({ isVisible, onClose }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-sm">
      <div className="relative bg-white p-5 rounded-lg shadow-lg">
        <button onClick={onClose} className="absolute top-2 right-2">
          <X className="text-black" />
        </button>
        <p className="mb-4 text-center text-black font-extrabold text-3xl">Press ESC to close</p>
        <div className="flex items-center bg-white border-2 border-red-400 rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Type to start your search"
            className="bg-transparent text-black focus:outline-none w-full"
          />
          <button className="bg-pink-500 text-white px-4 py-2 rounded-full ml-2">Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
