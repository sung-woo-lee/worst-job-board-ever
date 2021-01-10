import React from 'react';

import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';

const Projects = ({ data }) => {
	const {
		Name,
		Email,
		Description,
		ProjectLength,
		Employer,
	} = data.strapiProject;

	return (
		<Layout>
			<div style={{ width: '100%' }}>
				<h1>{Name}</h1>
				<hr />
				<section style={{ width: '100%' }}>
					<div>
						<h3>{Name}</h3>
						<div
							style={{
								width: '100%',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}>
							<div
								style={{
									width: '100%',
								}}>
								<h4>Employer: </h4>
								<p>{Employer}</p>

								<h4>Project Length</h4>
								<p>{ProjectLength}</p>
								<h4> Description:</h4>
								<p>{Description}</p>
								<h4>Email:</h4>
								<p>{Email}</p>
							</div>
						</div>
						<span
							style={{
								width: '100%',
								margin: '0 100px 20px 0',
								display: 'flex',
								justifyContent: 'flex-end',
								boxSizing: 'border-box',
							}}>
							<Link
								to={`/login`}
								style={{
									height: '80px',
									width: '160px',
									textDecoration: 'none',
									margin: '0 10px 0 10px',
								}}>
								<button
									style={{
										height: '80px',
										width: '160px',
										background: '#fff',
									}}>
									Apply
								</button>
							</Link>
							<Link
								to={`/job-board`}
								style={{
									height: '80px',
									width: '160px',
									textDecoration: 'none',
									margin: '0 10px 0 10px',
								}}>
								<button
									style={{
										height: '80px',
										width: '160px',
										background: '#fff',
									}}>
									Back
								</button>
							</Link>
						</span>
						<hr style={{ width: '100%' }} />
					</div>
				</section>
			</div>
		</Layout>
	);
};
export default Projects;

export const projectQuery = graphql`
	query($id: String!) {
		strapiProject(id: { eq: $id }) {
			Name
			Email
			Description
			ProjectLength
			Employer
			id
		}
	}
`;
