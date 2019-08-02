import React from 'react';
import { Card } from 'semantic-ui-react';
import CustomCard from './CustomCard';
import { content, settings } from '../config';

function CardHolder(props) {

  const cards = content.cards.map((card, i) => {
    return (
      < CustomCard
        key={i}
        name={card.name}
        image={card.image}
        description={card.description}
        links={card.links}
      />
    )

  });

  const cardGroups = (
    <div style={{ textAlign: "center" }}>
      <h2>Personal Projects</h2>
      <br />
      <Card.Group itemsPerRow={settings.cardholder.itemsPerRow}>
        {cards}
      </Card.Group>
    </div>

  );

  return cardGroups;
}

export default CardHolder;
