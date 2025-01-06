import { MdArrowDropDown } from 'react-icons/md';

const CategoryDropdownWrapper = () => (
  <div className="hidden md:block relative group">
    <p className="flex items-center text-white text-sm sm:text-base font-semibold cursor-pointer group relative">
      <span className="font-medium">All Categories</span>

      <MdArrowDropDown
        className="text-white  w-12  transition-transform duration-300 group-hover:rotate-180 group-hover:translate-y-2 absolute top-full left-1/2  w-50 transform -translate-x-1/2"
      />
    </p>
  </div>
);

export default CategoryDropdownWrapper;
