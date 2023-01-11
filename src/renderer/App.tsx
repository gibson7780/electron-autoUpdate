import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

const json = require('../../release/app/package.json');

const Hello = () => {
  console.log(json.version);
  return (
    <div>
      UPDATE DEMO <br /> version: {json.version}
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
