import { List, ListItem } from 'material-ui/List';
import React from 'react';

const Instructions = React.createClass({
  render() {
    const styleListItem = {
      color: '#555555'
    };

    return <List>
      {this.props.instructions.map((instruction, index) => {
        // i = index;

        return <ListItem
          key={index}
          leftIcon={
            <div
              className="instructionCounter"
              style={{ display: 'flex' }}
            >
              <div>{index + 1}</div>
            </div>
          }
          primaryText={instruction}
          style={styleListItem}
        />;
      })}
    </List>;
  }
});

export default Instructions;
