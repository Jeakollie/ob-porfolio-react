import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import AuthorCard from './components/AuthorCard.js';
import Education from './components/Education.js';
import Hobbies from './components/Hobbies.js';
import Work from './components/Work.js';



function App() {
  const [isActive, setIsActive] = useState({
    active: true,
    name: 'education'
  });
  return (
 <>

          <Navbar />
      <div className="py-6">
        <main>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
           {/*  <!-- Replace with your content -->

            <!-- Work --> */}
           <AuthorCard isActive={isActive} setIsActive={setIsActive}/>
            {/* <!-- Work --> */}
            {isActive.name === 'education' ? <Education /> : isActive.name === 'hobbies' ? <Hobbies /> : <Work />}
            
             {/* <!-- Education --> */}
          </div>
            {/* <!-- Hobbies --> */}
            
          {/* <!-- /End replace --> */}
      </main>
      </div>
 </>

  )
 } 

export default App;
