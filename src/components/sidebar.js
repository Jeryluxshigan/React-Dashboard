import React from 'react';


function Sidebar() {
  const title = "FORTUDE";
  return (
    <div className="sidebar">
      <div className='logo'> {title} </div>
      <hr className='separator' />
    </div>
  );
}

export default Sidebar;