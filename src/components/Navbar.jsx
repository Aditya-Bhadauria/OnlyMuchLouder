import React from 'react';
import Tooltip from './TooltipMedia';
import logo from '../assets/Images/logo4.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-4 py-2 bg-white shadow-md z-50 md:px-8 md:py-4">
      {/* Logo Image */}
      <div>
        <img
          src={logo} // Update with the actual logo path
          alt="Organization Logo"
          className="w-24 h-auto md:w-32" // Adjust width as needed for different screen sizes
        />
      </div>

      
      <Tooltip />
    </nav>
  );
};

export default Navbar;

// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-4 py-1 bg-white shadow-md z-50 md:px-6 md:py-2">
//       {/* Logo Image */}
//       <div>
//         <img
//           src="src/assets/Images/logo4.png" // Update with the actual logo path
//           alt="Organization Logo"
//           className="w-20 h-auto md:w-28" // Adjust width as needed for different screen sizes
//         />
//       </div>

//       {/* Contact Us Button */}
//       <a
//         href="#contact"
//         className="px-2 py-1 text-white bg-black rounded-full hover:bg-purple-800 transition duration-300 text-sm md:text-base"
//       >
//         Contact Us
//       </a>
//     </nav>
//   );
// };

// export default Navbar;
