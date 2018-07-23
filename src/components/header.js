import React from 'react'
import { Link } from 'gatsby'
import { css } from '../../node_modules/emotion';

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
      <Link to='/about' className={css({ float: 'right'})}>
          About
      </Link>
    </div>
  </div>
)

export default Header
