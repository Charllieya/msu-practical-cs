import React from "react";

const Home = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              {" "}
              <h2> WELCOME TO MISSISSIPPI STATE UNIVERSITY LIBRARIES</h2>
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="hero-wrapper">
        <div className="picture-hero-wrapper hero-edits container">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="hero-edits">
                {" "}
                CLICK "ALL GUIDES" TO ACCESS SERVICES{" "}
              </h2>
              <h4>Services Provided For: </h4>
              <ul>
                <li>Undergraduate Students</li>
                <li>Graduate Students</li>
                <li>Faculty and Instructors</li>
                <li>Scholars</li>
                <li>Alumni</li>
              </ul>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Home;

// class Home extends Component {
//   constructor() {
//     super();
//     this.state = {
//       loading: true,
//       guides: []
//     };
//   }
//   //Life Cycle Hook: a method
//   //Fetch promise based system

//   componentDidMount() {
//     fetch(
//       "https://lgapi-us.libapps.com/1.1/guides/?site_id=8488&key=0b8da796b00334ae3471f60e6a10e8c6&sort_by=name&status=1"
//     )
//       .then(result => result.json())
//       .then(resultData => {
//         this.setState({
//           loading: false,
//           guides: resultData
//         });
//       });
//   }

//   render() {
//     const guideTiles = this.state.loading
//       ? "loading..."
//       : this.state.guides.map((item, idx) => <GuideTile key={idx} {...item} />);
//     return (
//       <div className="main border-top container">
//         <div className="row">
//           <div className="col-sm-12">
//             <h2> Guides </h2>{" "}
//           </div>{" "}
//           {guideTiles}{" "}
//         </div>{" "}
//       </div>
//     );
//   }
// }
