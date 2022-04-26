import React from "react";
import "./card.scss";
import { generateSearchUrl } from "../../utils/url";

const model = "NEW HONDA CITY 1.0 TURBO S CVT 2021";

const Card: React.FC = () => {
	return (
		<div className="card__container">
			<div className="card__wrapper">
				<div className="card__top">
					<h1>HONDA</h1>
					<a href={generateSearchUrl(model)} target="_blank" rel="noreferrer">
						<img src="new_tab_icon.png" alt="new tab" />
					</a>
				</div>
				<div className="card__content">
					<h3>{model}</h3>
					<h4>
						Currently owned by: <p>Thanathip Suwannakhot</p>
					</h4>
				</div>
				<div className="card__bottom">
					<h2>Price: 2000 ฿</h2>
				</div>
			</div>
		</div>
	);
};

export default Card;
