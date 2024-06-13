import { BrowserRouter as Router, Link } from 'react-router-dom'
import './App.css'
import AppRoutes from './components/AppRoutes';
import "./features/categories/Category.css"

function App() {
  return (
    <Router>
      <div className='app'>
        <h1>One Stop Service</h1>
        <Link to="/categories">CATEGORY</Link>
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App
