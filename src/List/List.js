import React from "react";
import { connect } from "react-redux";
import { loadAuthors, loadPhotos, togglePhoto } from "../store/actions";
import ListItem from "./Item/ListItem";

import "./List.css";

const mapStateToProps = state => ({
  selectedPhotos: state.photos.selected,
  photos: state.photos.data
    .map(photo => {
      const author =
        state.authors.data.find(({ id }) => id === photo.authorId) || {};
      return {
        ...photo,
        by: author.name,
        authorRating: author.rating
      };
    })
    .sort((a, b) => a.id - b.id),
  loading: state.photos.loading || state.authors.loading
});

const mapDispatchToProps = {
  loadAuthors,
  loadPhotos,
  togglePhoto
};

class List extends React.Component {
  componentDidMount() {
    this.props.loadAuthors();
    this.props.loadPhotos();
  }

  render() {
    const { photos, selectedPhotos } = this.props;
    return (
      <div>
        <h1>Selected: {selectedPhotos.length}</h1>
        <div className="list">
          {photos.map(p => (
            <ListItem
              checked={selectedPhotos.includes(p.id)}
              photo={p}
              key={p.id}
              onChecked={() => this.props.togglePhoto(p.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
