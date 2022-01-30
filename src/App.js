//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Error404 from './page/Error404';
import Home from './page/Home';
import Login from './page/Login';
import Register from './page/Register';


//rfc
function App() {
//state


//function

//return

  return (
    
         <Router>
            <Routes>
                 <Route path="/" element={<Home/>}/>
             //     <Route Path="/Login" element={<Login/>}/>
                  <Route path="/Login" element={<Login/>}/>
                 <Route path="/Register" element={<Register/>}/>
                 <Route path="*" element={<Error404/>}/>

                
            </Routes>
         </Router>
   );
}


export default App;
