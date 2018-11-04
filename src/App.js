import _ from "lodash"
import React, { Component } from "react";
import keys from "./config/keys";
import ImageGrid from "./components/ImageGrid";
import SearchBar from "./components/SearchBar";
import { authenticate } from 'pixabay-api';
import "./App.css";
import logo from "./images/pixabay-logo.png";

const API_KEY = keys.PIXABAY_API_KEY;
const { searchImages } = authenticate(API_KEY);



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    }
  }

  componentDidMount() {
    this.imageSearch("mountain");
  }

  async imageSearch(term) {
    const images = await searchImages(term, { per_page: 9 });

    this.setState({
      images: images
    })
  }
  render() {
    const imageSearch = _.debounce(term => {
      this.imageSearch(term);
    }, 300)
    return (
      <div className="container">
        <img src={logo} alt="logo" className="logo mb-5" />
        <SearchBar onSearchTermChange={imageSearch} />
        <ImageGrid images={this.state.images} />
      </div>
    )
  }

}


export default App;
