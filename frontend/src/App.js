
import './App.css';
import {

  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import './output.css'
import LoginComponent from './routes/login.js';
import SignupComponent from './routes/signup.js'
// Beowser router act as a wrapper so all the route we need to add shuld go inside it 
function App() {
  return (
    <div className="App w-screen h-screen font-poppins">
      
      <BrowserRouter>
      <Routes>
        
        {/*Adding route component here indicaticates to the package(react-router-dom) that */}
        <Route>
          {/* Here you define the single routes format: <Route path='/' element={<Home />} />*/}
          
        </Route>
        <Route path="/" element ={<div>This is the main page.</div>} />
        <Route path="/home" element ={<HomeComponent />} />
        <Route path="/test" element ={<div className="bg-yellow-200">testing the tailwind.</div>} />
        <Route path="/login" element ={<LoginComponent />} />
        <Route path="/signup" element ={<SignupComponent />} />
        
        </Routes>
      
      </ BrowserRouter> 


    </div>
  );

}
 const HomeComponent=()=>{ // funct

  return <div>This is the home page </div>;
 };
export default App;
