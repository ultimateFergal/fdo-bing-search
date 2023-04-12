import React from 'react';
import Search from '@/src/components/elements/Search';

function App() {
  return (
    <div className="flex flex-col justify-start w-screen h-screen bg-[url('https://www.bing.com/th?id=OHR.ElephantTwins_ROW11…336_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&qlt=50')]">
      <span className='mx-auto text-white text-5xl font-medium mt-44'>Fdo Bing Search</span>
      <div className='w-1/3 mx-auto my-20'>      
        <Search />
      </div>
    </div>
  );
}

export default App;