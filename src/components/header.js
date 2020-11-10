import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#fcb21a`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 15%`,
        maxWidth: "100vw",
        padding: "1.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div
        style={{
          width: "30%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          to="/directory"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Directory
        </Link>

        <Link
          to="/job-board"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Job Board
        </Link>

        <Link
          to="/login"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Log in
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
