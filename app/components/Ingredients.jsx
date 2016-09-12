import { List, ListItem } from 'material-ui/List';
import React from 'react';

const Ingredients = React.createClass({
  render() {
    return <List>
      {this.props.ingredients.map((ingredient, index) =>
        <ListItem
          disabled={true}
          key={index}
          primaryText={`- ${ingredient}`}
        />
      )}
    </List>;
  }
});

export default Ingredients;
