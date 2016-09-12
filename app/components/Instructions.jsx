import { List, ListItem } from 'material-ui/List';
import React from 'react';

const Instructions = React.createClass({
  render() {
    return <List>
      {this.props.instructions.map((instruction, index) =>
        <ListItem
          key={index}
          leftIcon={
            <div
              style={{ display: 'flex' }}
              className="instructionCounter"
            >
              <div>{index + 1}</div>
            </div>}
          primaryText={instruction}
        />
      )}
    </List>;
  }
});

export default Instructions;
