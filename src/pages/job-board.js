import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';

const JobBoard = ({ data }) => {
	return (
		<Layout>
			<div style={{ width: '100%' }}>
				<h1>Job Board</h1>
				<p>Here is a list of jobs you can take!</p>
				<hr />
				<section style={{ width: '100%' }}>
					{data.allStrapiProject.nodes.map((job, index) => (
						<div key={index}>
							<h3>{job.Name}</h3>
							<div
								style={{
									width: '100%',
								}}>
								<div
									style={{
										width: '80%',
									}}>
									<h4>Employer: </h4>
									<p>{job.Employer}</p>

									<h4> Description:</h4>
									<p>{job.Description}</p>
									<h4>Email:</h4>
									<p>{job.Email}</p>
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
									to={`/${job.id}`}
									style={{
										height: '80px',
										width: '160px',
										textDecoration: 'none',
										margin: '0 0 0 10px',
									}}>
									<button
										style={{
											height: '80px',
											width: '160px',
											background: '#fff',
										}}>
										Details
									</button>
								</Link>
							</span>

							<hr style={{ marginTop: '1rem' }} />
						</div>
					))}
				</section>
			</div>
		</Layout>
	);
};
export default JobBoard;

export const jobQuery = graphql`
	query JobQuery {
		allStrapiProject {
			nodes {
				Name
				Description
				Employer
				Email
				id
			}
		}
	}
`;
