import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import ContactUs from './Components/ContactUs';
import Skills from './Components/Skills';

function App() {
  return (
    <div className='p-[20px]'>

      
      {/* Nav Bar */}

    <NavBar />

       {/* Intro */}

       <Home/>

        {/* About Me */}
        <AboutMe/>
         {/* Skills */}
<Skills />

          {/* Portfolio */}

           {/* Companies */}
            {/* Contact Us */}
<ContactUs/>
             {/* Footer */}
    </div>
  );
}

export default App;
