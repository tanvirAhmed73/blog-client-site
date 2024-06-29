import { Search } from 'lucide-react';

const SearchBar = () => (
  <div className="flex items-center bg-gray-200 text-black rounded-full px-6 w-full py-2 shadow-md border max-w-3xl">
    <Search className="text-pink-500 mr-2" />
    <input
      type="text"
      placeholder="Quick Search..."
      className=" w-full"
    />
  </div>
);

export default SearchBar;
