import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './spinner.js';

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1 // Initialize page state here
      
    };
    
    document.title = `${this.props.category}- DailyNews`;
  }

  async componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
    this.setState({ loading: true });
    const { page } = this.state;
    const { pageSize } = this.props;
    const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=0cdc1ee3184c44239eb1da21f4499707&page=${page}&pageSize=${pageSize}`;
    try {
      let data = await fetch(url);
      let personData = await data.json();
      console.log("API Response:", personData); // Debug: Log the API response
      this.setState({ articles: personData.articles, loading: false });
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ loading: false });
    }
  }

  handleClickPrev = async () => {
    this.setState(
      (state) => ({ page: state.page - 1 }),
      this.fetchNews
    );
  }

  handleClickNext = async () => {
    this.setState(
      (state) => ({ page: state.page + 1 }),
      this.fetchNews
    );
  }

  render() {
    return (
      <div>
        <br />
        <div className="container my-3">
          <h1 className="text-center">Daily News - Top Headlines on {this.props.category}</h1>
          <br />
          <div className="row">
          {this.state.loading ? (
              <Spinner />
            ) :
            (
              this.state.articles && this.state.articles.length > 0 ? (
                this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewsItem 
                        title={element.title ? element.title : ""} 
                        description={element.description ? element.description : ""} 
                        imageUrl={element.urlToImage} // Correct property name
                        newsUrl={element.url} 
                        author  ={element.author}
                        date = {element.publishedAt}
                      />
                    </div>
                  );
                })
              ) : (
                <p>No articles found</p> // Show message if no articles are found
              )
            )}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-secondary" onClick={this.handleClickPrev}> &#8249;  Previous</button>
          <button type="button" className="btn btn-primary" onClick={this.handleClickNext}>Next  &#8250;</button>
        </div>
      </div>
    );
  }
}

export default News;
