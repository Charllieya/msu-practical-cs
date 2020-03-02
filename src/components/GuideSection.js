import React, { Component } from "react";
import GuideTile from "./GuideTile";

class GuideSection extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      guides: []
    };
  }
  //Life Cycle Hook: a method
  //Fetch promise based system

  componentDidMount() {
    fetch(
      "https://lgapi-us.libapps.com/1.1/guides/?site_id=8488&key=0b8da796b00334ae3471f60e6a10e8c6&sort_by=name&status=1"
    )
      .then(result => result.json())
      .then(resultData => {
        this.setState({
          loading: false,
          guides: resultData
        });
      });
  }

  render() {
    const guideTiles = this.state.loading
      ? "loading..."
      : this.state.guides.map((item, idx) => <GuideTile key={idx} {...item} />);
    return (
      <div className="main border-top container">
        <div className="row">
          <div className="col-sm-12">
            <h2> Guides </h2>
            <h3 className="guideHeading">Showing 180 Guides</h3>
          </div>{" "}
          {guideTiles}{" "}
        </div>{" "}
      </div>
    );
  }
}
export default GuideSection;
