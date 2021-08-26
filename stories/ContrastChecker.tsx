import React from "react";

// Separate local imports from dependencies
import { Crad, HeaderCrad, BodyCrad, LoadingCard, TestColor } from "./stitches/Card";

export default class ContrastChecker extends React.Component<any, any> {
  // Initialize state here (ES7) or in a constructor method (ES6)

  constructor(props: any) {
    super(props);

    this.state = {
      pantone: '',
      colorHex: props.colorHex,
      colorRgb: '',
      colorName: props.colorName,
      colorCmyk: '',
      darkRatio: '',
      lightRatio: '',
      loaded: false
    };
  }

  componentDidMount() {
    fetch("/api/ContrastChecker", {
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "accept": "application/json"
      },
      "body": JSON.stringify({
        Hex: this.state.colorHex
      })
    })
    .then(response => response.json())
    .then(response => {
      this.setState(response);
      this.setState({loaded: true});

    })
    .catch(err => {
      alert(err);
    });
  }

  render() {
    return (
      <Crad>
        <HeaderCrad css={{ backgroundColor: this.state.colorHex }}>
          <h3>{this.state.colorName}</h3>
          <ul>
            <li className="dark">
              <p>Aa Bb Cc</p>
              <TestColor color={this.state.darkRatio}>
                {this.state.darkRatio}
              </TestColor>
            </li>
            <li className="light">
              <p>Aa Bb Cc</p>
              <TestColor color={this.state.lightRatio}>
              {this.state.lightRatio}
              </TestColor>
            </li>
          </ul>
        </HeaderCrad>
        <BodyCrad>
          <ul>
            <li>
              <label>HEX</label>
              <p>{this.state.colorHex}</p>
            </li>
            <li>
              <label>RGB</label>
              <p>{this.state.colorRgb}</p>
            </li>
            <li>
              <label>CMYK</label>
              <p>{this.state.colorCmyk}</p>
            </li>
            <li>
              <label>Pantone</label>
              <p>{this.state.pantone}</p>
            </li>
          </ul>
        </BodyCrad>
        {
          !this.state.loaded && 
          <LoadingCard>
            <svg className="spinner" viewBox="0 0 50 50">
              <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
            </svg>
          </LoadingCard>
        }
      </Crad>
    );
  }
}
