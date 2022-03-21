import './landing.css';

import {Component} from 'react';

import Arrow from '../../resources/arrow.png';
import Land1 from '../../resources/SweatshirtShopLending.png';
import Land2 from '../../resources/WeddingSalonLending.png';
import Land3 from '../../resources/PickAimLending.png';
import Land4 from '../../resources/TouristBaseLending.png';

class Landing extends Component {
	constructor(props){
		super(props)
		this.state = {
			arrLand:[
				{name: 'Landing page for shop "Sweatshirt Shop"', path: Land1, link:'https://www.figma.com/file/zKFXhQnv2P0f5xpo8tMKi5/SweatshirtShop?node-id=0%3A1', id:1},
				{name: 'Landing page for wedding salon "Valeriya"', path: Land2, link:'https://www.figma.com/file/53ietayJtcYVYh2xQlzCBQ/WeddingSalon?node-id=0%3A1', id:2},
				{name: 'Website design for it-team "PickAim"', path: Land3, link:'https://www.figma.com/file/lJRs2P45nUOJn3j0BVs0sh/PickAim---Main?node-id=0%3A1', id:3},
				{name: 'Landing for the camp site "In the forest"', path: Land4, link:'https://www.figma.com/file/pIbfJlKMcJyFKXTNvdfcar/TouristBase?node-id=0%3A1', id:4},
			],
			activeLand:'',
			active:'',
			arr:[1],
		}
	}

	onChangeActive = (id) => {
		let newId = id;
		if(this.state.activeLand == ''){
			this.setState({
				activeLand:newId,
				active:'',
			})
		}
		if(this.state.activeLand == id){
			this.setState({
				activeLand:'',
				active:id,
			})
		}
	}


	render(){
		let {arrLand, activeLand, active,arr} = this.state;
		let {onChangeActive} = this;
		let newClass = '';
		let activeClass = '';

		return(
			<div className="wrapperLanding">
				<div className="contentLanding">
					{
						arrLand.map((item)=>{
							if(item.id == activeLand){
								newClass = 'Active';
							}
							else if(activeLand == ''){
								newClass = 'None';
								activeClass = '';
								if(active == item.id){
									activeClass = 'Anim';
								}
							}
							else{
								newClass = '';
							} 



							return(
								<div className={`landing${newClass}${activeClass}`}>
									<div className={`landing-name${newClass}${activeClass}`}>{item.name}</div>
									<div className={`landing-info${newClass}${activeClass}`}>
										<a href={item.link} className={`landing-info_image${newClass}${activeClass}`}>
											<img src={item.path} alt="" className={`landing-image_img${newClass}${activeClass}`} />
										</a>
										<img onClick={() => onChangeActive(item.id)} src={Arrow} alt="" className={`landing-info_arrow${newClass}${activeClass}`} />
									</div>
								</div>
							)
						})
					}
					{
						arr.map(()=>{
							if(activeLand=='') newClass = 'None';
							else newClass = '';
							return(
								<div className={`infoLanding${newClass}`}>
									<div className={`infoLanding-first`}>
										Hello to all those who are interested in my work.
										In a year, after graduating from the university, I will officially become a software developer for computer systems and networks, but for now I am a novice web designer and website layout designer.
									</div>
									<div className={`infoLanding-second`}>
										I am ready to create beauty for you in the form of website designs, landing pages, spas. My works are not stereotyped, they are always of high quality and emphasize the individuality of each project that I undertake.
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
		)
	}
}

export default Landing;