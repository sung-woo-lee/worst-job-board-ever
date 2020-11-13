import { Link } from 'gatsby';

import React from 'react';

import Lottie from 'react-lottie';

import animatedLogo from '../images/20130-compass-needle-animation-with-axis.json';

const Header = () => (
	<header
		style={{
			marginBottom: `1.45rem`,
		}}>
		<div
			style={{
				height: '10vh',
				margin: `0 15%`,
				maxWidth: '100vw',
				padding: '1.5rem',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}>
			<h1 style={{ margin: 0 }}>
				<Link
					to='/'
					style={{
						textDecoration: `none`,
					}}>
					<Lottie
						height={100}
						options={{
							loop: true,
							autoplay: true,
							animationData: animatedLogo,
							rendererSettings: {
								preserveAspectRation: 'xMidYMid slice',
							},
						}}></Lottie>
				</Link>
			</h1>
			<div
				style={{
					width: '30%',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}>
				<Link
					to='/directory'
					style={{
						color: 'black',
						textDecoration: `none`,
					}}>
					Directory
				</Link>

				<Link
					to='/job-board'
					style={{
						color: 'black',
						textDecoration: `none`,
					}}>
					Job Board
				</Link>

				<Link
					to='/login'
					style={{
						color: 'black',
						textDecoration: `none`,
					}}>
					Log in
				</Link>
			</div>
		</div>
	</header>
);

export default Header;
