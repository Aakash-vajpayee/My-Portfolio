import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  constructor(props) {
    super(props);
    this.sigRef = React.createRef();
  }

  handleSignatureEnd = () => {
    if (this.props.onFinish) {
      this.props.onFinish();
    }
  };

  render() {
    const theme = this.props.theme;

    return (
      <div className="loaderWrapper">
        <div className="bgGlow"></div>

        <svg
          className="raw_logo"
          width="50%"
          height="48%"
          viewBox="0 0 440 305"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* OUTER HEXAGON */}
          <polygon
            className="hexOuter"
            points="178,50 262,50 305,124 262,198 178,198 135,124"
            stroke={theme.body}
            strokeWidth="4.5"
            fill="none"
            strokeLinejoin="round"
            transform="rotate(90 220 124)"
          />

          {/* INNER HEXAGON */}
          <polygon
            className="hexInner"
            points="185,63 255,63 292,124 255,185 185,185 148,124"
            stroke={theme.body}
            strokeWidth="3"
            fill="none"
            strokeLinejoin="round"
            transform="rotate(90 220 124)"
          />

          {/* LETTER A */}
          <text
            x="200"
            y="136"
            textAnchor="middle"
            fill="none"
            stroke={theme.body}
            strokeWidth="2"
            fontSize="48"
            fontFamily="Arvo, serif"
            fontWeight="bold"
            className="letterA"
          >
            A
          </text>

          {/* LETTER V */}
          <text
            x="240"
            y="156"
            textAnchor="middle"
            fill="none"
            stroke={theme.body}
            strokeWidth="2"
            fontSize="60"
            fontFamily="Arvo, serif"
            fontWeight="bold"
            className="letterV"
          >
            V
          </text>

          {/* SIGNATURE */}
          <text
            ref={this.sigRef}
            x="220"
            y="268"
            textAnchor="middle"
            fill="none"
            stroke={theme.body}
            strokeWidth="0.85"
            fontSize="46"
            fontFamily="Agustina, cursive"
            className="signature1"
            onAnimationEnd={this.handleSignatureEnd}
          >
            Aakash Vajpayee
          </text>
        </svg>
      </div>
    );
  }
}

export default LogoLoader;
