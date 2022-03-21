import './app.css';

import Main from '../main/main';
import Portfolio from '../portfolio/portfolio';
import Footer from '../footer/footer';

import Line_ from '../../resources/line_.png';
import Line__ from '../../resources/line__.png';

let App = () => {
	return(
		<>
			<Main/>
			<Portfolio/>
			<Footer/>
			<img src={Line_} alt="" className="line_" />
			<img src={Line__} alt="" className="line__" />
		</>
	)
}

export default App;