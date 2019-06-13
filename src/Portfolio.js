import React, { Component } from 'react';
import portfolioData from './data/portfolio.json';

class Portfolio extends Component {

  constructor(props) {
      super(props);
      this.state = {
          indexes: [...Array(12).keys()],
          columns: 4,
          images: []
      };
  }

  componentWillMount() {
    this.splitImages();
  }

  splitImages() {
    const images = [];
    this.state.indexes.forEach((imageIndex) => {
        let column = imageIndex % this.state.columns;
        if (images[column] === undefined) {
            images[column] = [];
        }
        images[column].push(imageIndex + '.jpeg');
    });
    this.setState({ images: images});
  }

  render() {
      const images = this.state.images;
      return (
          <div className="portfolio">
            <h2>{portfolioData.title}</h2>
            <div className="row">
                {images.map((columnImages, index) =>
                    <div className="column" key={index}>
                        {columnImages.map((image) =>
                            <img src={`/images/${image}`} alt={image} key={image} />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
  }
}

export default Portfolio;
