import { List, ListItem } from 'material-ui/List';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import React from 'react';

const Instructions = React.createClass({
  render() {
    // let i = 0;
    //
    // const initial = <div
    //   className="instructionCounter"
    //   style={{ display: 'flex' }}
    // >
    //   <div>{i + 1}</div>
    // </div>;
    //
    // const completed = <CheckCircle />

    return <List>
      {this.props.instructions.map((instruction, index) => {
        // i = index;

        return <ListItem
          key={index}
          leftIcon={
            <CheckCircle color={'#ffa726'} />
            // <div
            //   className="instructionCounter"
            //   style={{ display: 'flex' }}
            // >
            //   <div>{index + 1}</div>
            // </div>
          }
          primaryText={instruction}
        />;
      })}
    </List>;
  }
});

export default Instructions;
