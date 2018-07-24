import React from 'react'
import { Link } from 'gatsby'
import { css } from 'react-emotion';

const headerLinks = css({
  float: 'right',
  paddingLeft: '10px',
  paddingRight: '10px'
});

const Header = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Link to='/about' className={headerLinks}>
          About
      </Link>
      <Link to='/books-i-read' className={headerLinks}>
          Books
      </Link>
    </div>
  </div>
)

export default Header
