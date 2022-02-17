import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects'; 
import MainHeader from './components/MainHeader'

function App() {
return (
	<div>
    <MainHeader></MainHeader>
    <main>
		<div className='content'>
		<Route path='/home'><Home/></Route>
		<Route path='/projects'><Projects/></Route>
		</div>
		</main>
	</div>
);
}

export default App;
