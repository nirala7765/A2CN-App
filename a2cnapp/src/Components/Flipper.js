import React from 'react';

const FlipCard = ({ title, content, buttonText, backgroundColor, animationDuration }) => {
  const cardStyle = {
    backgroundColor,
  };

  return (
    <div className="card">
      <div className="card">
        <div className="front" style={cardStyle}>
          <h3>{title}</h3>
          <p>Hover to flip</p>
          <strong>&#x21bb;</strong>
        </div>
        <div className="back" style={cardStyle}>
          <h3>Back Side {title}</h3>
          <p>{content}</p>
         
        </div>
      </div>
    </div>
  );
};

const ResponsiveFlipCards = () => {
  return (
    <div className="boxesContainer">
      <FlipCard
        title="One"
        content="Content in card one"
        buttonText="Button 1"
        backgroundColor="#ffcc00"
        animationDuration="1.5s"
      />
      <FlipCard
        title="Two"
        content="Content in card two"
        buttonText="Button 2"
        backgroundColor="#1c87c9"
        animationDuration="1.5s"
      />
      <FlipCard
        title="Three"
        content="Content in card three"
        buttonText="Button 3"
        backgroundColor="#ff6347"
        animationDuration="2s"
      />
      <FlipCard
        title="Four"
        content="Content in card four"
        buttonText="Button 4"
        backgroundColor="#8ebf42"
        animationDuration="2.5s"
      />
    </div>
  );
};

export default ResponsiveFlipCards;
