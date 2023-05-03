import React, { useState } from "react";
import './App.css';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import MyButton from './components/MyButton';
import Navbar from './components/Navbar';

const App = () => {
	const name = 'Candra';
	const name2 = 'Gulo';

	const clicked = () => {
		return (
			alert('Button dipencet')
		)
	}

	const paragraf = () => {
		return <i>mantap bang</i>;	
	}

	const [getNavbarValue, setNavbarValue] = useState("");
	const changeNavbarValue = () => {
		setNavbarValue("Website Candra");
	};


	return (
		<div className="App-header">
			<Navbar navValue={getNavbarValue} />
			<Introduction name={name} />
			<MyButton clicked={clicked} />
			<Introduction name={name2} />
			<button onClick={() => changeNavbarValue()}>Ubah Navbar</button>
			<Footer paragraf={paragraf}/>
		</div>
	);
};

export default App;
