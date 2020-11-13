import React from 'react';

import Lottie from 'react-lottie';

import Layout from '../components/layout';
import SEO from '../components/seo';

import workAnimationData from '../images/36185-animation-about-seo-dashboard.json';

const IndexPage = () => (
	<Layout>
		<SEO title='Home' />
		<h1 style={{ textAlign: 'center' }}>
			Find the Top Talents and Projects in Your Industry
		</h1>
		<Lottie
			options={{
				loop: true,
				autoplay: true,
				animationData: workAnimationData,
				rendererSettings: {
					preserveAspectRation: 'xMidYMid slice',
				},
			}}></Lottie>
		<p>Welcome to this job dashboard.</p>
	</Layout>
);

export default IndexPage;
