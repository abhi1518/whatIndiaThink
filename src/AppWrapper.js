import React, { useEffect } from 'react';

const AppWrapper = ({ children }) => {
  useEffect(() => {
    const handleClickOutsideNavbar = (event) => {
      const navbar = document.querySelector('.navbar-collapse');
      if (navbar && !navbar.contains(event.target)) {
        // Close the navbar
        navbar.classList.remove('show');
      }
    };

    document.addEventListener('click', handleClickOutsideNavbar);

    return () => {
      document.removeEventListener('click', handleClickOutsideNavbar);
    };
  }, []);

  return <div>{children}</div>;
};

export default AppWrapper;
