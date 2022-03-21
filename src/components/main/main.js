import './main.css';

import BackImage from '../../resources/backimage.png';
import Line1 from '../../resources/line1.png';
import Line2 from '../../resources/line2.png';
import Line3 from '../../resources/line3.png';
// import Line4 from '../../resources/line4.png';
// import Line5 from '../../resources/line5.png';

let Main = () => {
	let arr = [1];

	return(
		<>
		<div className="wrapper">
			<div className="content">
				<div className="header">Anastasia S.</div>
				<div className="dportfolio">
					<div className="dportfolio-p">p</div>
					<div className="dportfolio-o1">o</div>
					<div className="dportfolio-r">r</div>
					<div className="dportfolio-t">t</div>
					<div className="dportfolio-f">f</div>
					<div className="dportfolio-o2">o</div>
					<div className="dportfolio-l">l</div>
					<div className="dportfolio-i">i</div>
					<div className="dportfolio-o3">o</div>
				</div>
				<div className="box">
					<div className="info">
						<div className="info-text">
							<div className="info-text_offer">Web Designer</div>
							<div className="info-text_create">I create for you a high-quality and exciting design of your future sites and applications</div>
							<div className="info-text_design">I like to create beauty among boring pages and therefore I would be glad to make an interesting, solid design for you</div>
						</div>
						<div className="info-field">
							Website design
							Landings
							SPA design
						</div>
					</div>
					<img src={BackImage} alt="" className="backimage" />
				</div>
			</div>
			<div className="imageMain">
				<div className="portfolio">
					<div className="portfolio-p">p</div>
					<div className="portfolio-o1">o</div>
					<div className="portfolio-r">r</div>
					<div className="portfolio-t">t</div>
					<div className="portfolio-f">f</div>
					<div className="portfolio-o2">o</div>
					<div className="portfolio-l">l</div>
					<div className="portfolio-i">i</div>
					<div className="portfolio-o3">o</div>
				</div>
				<img src={Line1} alt="" className="line1" />
				<img src={Line2} alt="" className="line2" />
				<img src={Line3} alt="" className="line3" />
			</div>
		</div>
		{/* <div className="wrapImg">
			<img src={Line4} alt="" className="line4" />
			<img src={Line5} alt="" className="line5" />
		</div> */}
		</>
	)
}

export default Main;