import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import TaskTrackerList from './components/TaskTrackerList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container py-4">
      <TaskTrackerList></TaskTrackerList>
      <Footer></Footer>
    </div>
  );
}

export default App;
