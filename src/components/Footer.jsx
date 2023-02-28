import React from "react";

class Footer extends React.PureComponent {
  render() {
    return (
      <div className="footer bg-db fff">
        <p>
          Created by{" "}
          <a className="no-dec bold" href="github.com/Mlodzieniak">
            @Mlodzieniak
          </a>{" "}
          for Odin Project
        </p>
      </div>
    );
  }
}

export default Footer;
