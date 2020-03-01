import React, { Component } from "react";
// import nametoLowerCase from '../helpers/nameToLowerCase'
import { Link } from "react-router-dom";

class GuideSingle extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      guide: {
        id: "",
        name: "",
        description: "",
        created: "",
        friendly_url: ""
      }
    };
  }
  componentDidMount() {
    fetch(
      `https://lgapi-us.libapps.com/1.1/guides/${this.props.match.params.id}?site_id=8488&key=0b8da796b00334ae3471f60e6a10e8c6&expand=owner,pages`
    )
      .then(response => response.json())
      .then(responseData => {
        let guide = responseData[0];
        this.setState({
          loading: false,
          guide
        });
      });
  }

  render() {
    const guide = this.state.guide;
    return (
      <div className="container guide-single">
        <div className="row">
          <div className="col-sm-12">
            <h2> {guide.name} </h2> <h3> Description </h3>{" "}
            <p> {guide.description} </p>
            <p>Created: {guide.created} </p>
            <p>
              Link to MsState:{" "}
              <a href={guide.friendly_url} target="_blank">
                {guide.name}
              </a>{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default GuideSingle;
