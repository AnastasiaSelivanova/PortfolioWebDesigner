import './portfolio.css';
import Landing from '../landing/landing';



// import Line6 from '../../resources/line6.png';
// import Line7 from '../../resources/line7.png';
import Line8 from '../../resources/line8.png';
import Line9 from '../../resources/line9.png';

let Portfolio = () => {
	return(
		<>
		<div className="wrapperPortfolio">
			<div className="contentPortfolio">
				<div className="headerPortfolio">Anastasia S.</div>
				<Landing/>	
			</div>
		</div>
		{/* <div className="imagePortfolio">
			<img src={Line6} alt="" className="line6" />
			<img src={Line7} alt="" className="line7" /> 
		</div> */}
		<div className="imagePortfolio2">
			<img src={Line8} alt="" className="line8" />
			<img src={Line9} alt="" className="line9" /> 
		</div>
		</>
	)
}

export default Portfolio;