import React, { Component } from "react";

class FavoriteMovie extends Component {
  render() {
    return (
      <div>
        <ol>
          {this.props.profiles.map((profile) => {
            const userName = this.props.users[profile.userID].name;
            const favMovieName = this.props.movies[profile.favoriteMovieID]
              .name;
            return (
              <li>
                <p>
                  {`${userName}'s favorite movie is "${favMovieName}"`}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default FavoriteMovie;
