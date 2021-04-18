import React from "react";

const QuoteCard = ({ quote }) => {
  return (
    <div>
      <img src={quote.image} alt={quote.character} />
      <p>{quote.character}</p>
      <p>{quote.quote}</p>
    </div>
  );
};

export default QuoteCard;
