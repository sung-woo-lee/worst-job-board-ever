import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<>
			<Header siteTitle={data.site.siteMetadata?.title || `Title`} />
			<div
				style={{
					margin: `0 auto`,
					maxWidth: 960,
					padding: `4rem 0 0 0`,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
				}}>
				<main>{children}</main>
				<footer
					style={{
						marginTop: `2rem`,
					}}>
					© {new Date().getFullYear()}, Don't look too intently at the design.
				</footer>
			</div>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
