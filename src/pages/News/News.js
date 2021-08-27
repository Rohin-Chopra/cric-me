import React from "react";
import { Container } from "react-bootstrap";

import { CardHeader } from "../../components/Card";
import { NewsCardPlaceholderList } from "../../components/Placeholders";
import { fetchNews } from "../../helper";
import { newsCardList } from "../../components/NewsCard";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      articlesLoading: true,
    };
  }
  getNews = async () => {
    const articles = await fetchNews();
    this.setState({ articlesLoading: false });
    this.setState({ articles });
  };

  componentDidMount() {
    this.getNews();
  }

  renderNewsCards = () => newsCardList(this.state.articles);

  render() {
    return (
      <Container>
        <div className="w-100 d-flex align-items-center justify-content-center my-2 flex-column">
          <CardHeader className=" rounded-top card-header w-80">
            <p className="mb-0 font-weight-bold">News</p>
          </CardHeader>
          <NewsCardPlaceholderList
            loading={this.state.articlesLoading}
            count={4}
          />
          {this.renderNewsCards()}
        </div>
      </Container>
    );
  }
}

export default News;
