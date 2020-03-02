import React, { Component } from "react";

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
      <>
        <div className="container guide-single">
          <div className="row">
            <div className="col-sm-12">
              <h2> {guide.name} </h2>
            </div>{" "}
          </div>{" "}
          <div className="row">
            <div className="guideDesc col-sm-12">
              <h3 className="guideHeading"> Description </h3>{" "}
              <p> {guide.description} </p>
              <p>Guide Date Created: {guide.created} </p>
              <p>
                Link to MSU Guide Site:{" "}
                <a
                  href={guide.friendly_url}
                  target="_blank"
                  rel="noopener noreferrer">
                  {guide.name}
                </a>{" "}
              </p>{" "}
            </div>
          </div>
        </div>
        <div className="news-section-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h2>More Search Tools</h2>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <div className="other-sources color-blue">
                  <h3>Online Catalog</h3>
                  <a
                    href="https://mlp.ent.sirsi.net/client/en_US/msstate/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Find Books, Maps, Multimedia
                  </a>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="other-sources color-orange">
                  <h3>Databases</h3>
                  <a
                    href="https://guides.library.msstate.edu/az.php#_ga=2.50936809.1579731439.1583023384-2121390865.1575660215"
                    target="_blank"
                    rel="noopener noreferrer">
                    Find Articles in specific databases
                  </a>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="other-sources color-green">
                  <h3>E-Journals</h3>
                  <a
                    href="https://cas.its.msstate.edu/cas/login?service=https%3A%2F%2Fshibboleth.its.msstate.edu%2Fidp%2FAuthn%2FExtCas%3Fconversation%3De4s1&entityId=https%3A%2F%2Flogin.openathens.net%2Fsaml%2F2%2Fmetadata-sp"
                    target="_blank"
                    rel="noopener noreferrer">
                    Find Articles in specific Journals
                  </a>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="other-sources color-maroon">
                  <h3>EBSCO Discovery</h3>
                  <a
                    href="https://cas.its.msstate.edu/cas/login?service=https%3A%2F%2Fshibboleth.its.msstate.edu%2Fidp%2FAuthn%2FExtCas%3Fconversation%3De3s1&entityId=https%3A%2F%2Flogin.openathens.net%2Fsaml%2F2%2Fmetadata-sp#_ga=2.84679897.1579731439.1583023384-2121390865.1575660215"
                    target="_blank"
                    rel="noopener noreferrer">
                    Search Across a ranges of sources
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="news-section-wrapper">
          <div className="container">
            <div className="row">
              <div className="hidden-xs col-sm-12">
                <h2>What's Happening at MSU?</h2>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="hidden-xs col-sm-4">
                <h3>MSU News</h3>
                <img
                  className="msuStaff-img"
                  src="/img/msuStaff.png"
                  alt="MSU Libraries"
                  srcset=""
                />
              </div>
              <div className="hidden-xs col-sm-4">
                <h3>Workshops</h3>
                <ol>
                  <li>Crafting the Winning Curriculum Vitae (Online)</li>
                  <li>Using Chicago and Turabian Citation Style</li>
                  <li>Using APA Citation Style</li>
                  <li>Introduction to EndNote Desktop (Online)</li>
                  <li>Introduction to ICPSR</li>
                  <li>
                    Thesis and Dissertation Formatting ADA Web-Accessibility
                  </li>
                </ol>
              </div>
              <div className="hidden-xs col-sm-4">
                <h3>About MSU Libraries</h3>
                <p>
                  We are committed to Mississippi State University's overall
                  goals of teaching, research, and service, and to making MSU
                  Libraries "The Place" with the facilities, services,
                  resources, assistance, and support that you need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default GuideSingle;
