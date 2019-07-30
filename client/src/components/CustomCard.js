import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';


function CustomCard(props) {
  var links = []
  if (props.links) {
    links = Object.keys(props.links).map((name, i) => {
      // const capitalized = name.charAt(0).toLocaleUpperCase + name.slice(1);
      return (
        <a key={i} style={{ marginRight: "30px" }} href={props.links[name]}>
          <Button basic color='grey'>
            {name}
          </Button>
        </a>
      )
    })
  }

  return (
    <Card>
      {props.image &&
        <div style={{ maxHeight: "300px", overflow: "hidden", minHeight: "250px" }}>

          <a href={props.links.repo}>
            <Image src={props.image} />
          </a>
        </div>
      }
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Description>
          {props.description}
          <div style={{ marginTop: "20px" }}>
            {links}
          </div>

        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default CustomCard;
