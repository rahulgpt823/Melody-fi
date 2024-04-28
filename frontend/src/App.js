import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import './output.css'
// Beowser router act as a wrapper so all the route we need to add shuld go inside it 
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        {/*Adding route component here indicaticates to the package(react-router-dom) that */}
        <Route>
          {/* Here you define the single routes format: <Route path='/' element={<Home />} />*/}
          
        </Route>
        <Route path="/" element ={<div>This is the main page.</div>} />
        <Route path="/home" element ={<HomeComponent />} />
        <Route path="/test" element ={<div className="bg-yellow-200">testing the tailwind.</div>} />
        </Routes>
      
      </ BrowserRouter> 


    </div>
  );

}
 const HomeComponent=()=>{ // funct

  return <div>This is the home page </div>;
 };
export default App;
