import { List, ListItem } from 'material-ui/List';
import React from 'react';

const Ingredients = React.createClass({
  render() {
    const styleListItem = {
      color: '#555555'
    };

    return <List>
      {this.props.ingredients.map((ingredient, index) =>
        <ListItem
          disabled={true}
          key={index}
          primaryText={`- ${ingredient}`}
          style={styleListItem}
        />
      )}
    </List>;
  }
});

export default Ingredients;
