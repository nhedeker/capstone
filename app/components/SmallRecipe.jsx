import Favorite from 'material-ui/svg-icons/action/favorite';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import React from 'react';

const SmallRecipe = React.createClass({
  handleLikeTouchTap(event) {
    event.preventDefault();
    const { recipe } = this.props;

    this.props.changeLikeStatus(recipe);
  },

  render() {
    const { recipe } = this.props;

    const userColor = '#00bcd4';

    let backgroundColor;

    if (recipe.liked) {
      backgroundColor = '#ff1744';
    }
    else {
      backgroundColor = userColor;
    }

    const styleLikeButton = {
      position: 'absolute',
      background: userColor,
      borderRadius: '50%',
      marginTop: '.25rem',
      marginLeft: '.25rem',
      display: this.props.showLiked ? 'inline-block' : 'none',
      backgroundColor
    };

    const styleLikeButtonIcon = {
      color: 'white'
    };

    const stylePaper = {
      borderRadius: '1rem',
      color: '#555555'
    };

    return <Paper
      className="smallRecipePaper"
      style={stylePaper}
    >
      <div className="recipeImgContainer">
        <IconButton
          iconStyle={styleLikeButtonIcon}
          onTouchTap={this.handleLikeTouchTap}
          style={styleLikeButton}
        >
          <Favorite />
        </IconButton>
        <Link to={`/recipe/${recipe.code}`}>
          <img className="recipeImg" src={recipe.imgUrl} />
        </Link>
      </div>
      <div className="smallRecipeContentsContainer">
        <Link
          style={{ textDecoration: 'none', color: '#555555' }}
          to={`/recipe/${recipe.code}`}
        >
          <h3>
            {`${recipe.name}`}
          </h3>
        </Link>
        <Link to={`/user/${recipe.username}`}>
          <img
            className="gridProfileImg"
            src={recipe.profileImg}
          />
        </Link>
      </div>
    </Paper>;
  }
});

export default SmallRecipe;
