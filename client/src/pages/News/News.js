import React from "react";
import { Button } from "react-bootstrap";

import { CardHeader } from "../../components/Card";
import { NewsCardPlaceholderList } from "../../components/Placeholders";
import newsApi, { newsApiKey } from "../../api/newsApi";
import { newsCardList } from "../../components/NewsCard";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      articlesLoading: true,
    };
  }
  fetchNews = async () => {
    const response = await newsApi
      .get("/", {
        params: {
          token: newsApiKey,
          q: "cricket",
        },
      })
      .catch((error) => {
        console.log(error);
      });
    const articles = response.data.articles;
    this.setState({ articlesLoading: false });
    this.setState({ articles: articles });
  };

  componentDidMount() {
    this.fetchNews();
  }

  renderNewsCards = () => newsCardList(this.state.articles);

  render() {
    return (
      <React.Fragment>
        <div className="w-100 d-flex align-items-center justify-content-center mt-2 flex-column">
          <CardHeader className=" rounded-top card-header w-80">
            <p className="mb-0 font-weight-bold">News</p>
          </CardHeader>
          <NewsCardPlaceholderList
            loading={this.state.articlesLoading}
            count={4}
          />
          {this.renderNewsCards()}
        </div>
      </React.Fragment>
    );
  }
}

export default News;
