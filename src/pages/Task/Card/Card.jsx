import React from 'react';
import './Card.scss'
function Card() {
    return (
        <div className="my-card">
            <img className="left" src="https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg" />
            <div className="right">
                <div className="title">Why you Need More Magnesium in Your Daily Diet</div>
                <div className="author">
                    {/* <img src="https://randomuser.me/api/portraits/men/95.jpg" /> */}
                    <h2>Igor MARTY</h2>
                </div>
                <div className="separator"></div>
                <p>Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your
                DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...</p>
            </div>
            <div className="card-date">
                <div className="date">12</div>
                <div className="month">JANUARY</div>
            </div>
        </div>
    )
}

export default Card;