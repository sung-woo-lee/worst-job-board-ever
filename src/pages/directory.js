import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const Directory = ({ data }) => {
	return (
		<Layout>
			<div style={{ width: '100%' }}>
				<h1>Directory</h1>
				<p>
					Here is a registry of all companies, contractors, and available
					projects.
				</p>
				<hr />

				<section>
					<h1>Companies</h1>
					<br />
					{data.allStrapiCompany.nodes.map((company, index) => (
						<div key={index}>
							<h4>{company.Name}</h4>
							<p>{company.Address}</p>
							<p>{company.Website}</p>
						</div>
					))}
				</section>
				<hr />
				<section>
					<h1>Contractors</h1>
					<br />
					{data.allStrapiContractor.nodes.map((contractor, index) => (
						<div key={index}>
							<h4>{contractor.Name}</h4>
							<p>Gender: {contractor.Gender}</p>
							<p>Website: {contractor.Website}</p>
							<p>Email: {contractor.Email}</p>
						</div>
					))}
				</section>
				<hr />
				<section>
					<h1>Projects</h1>
					<br />
					{data.allStrapiProject.nodes.map((project, index) => (
						<div key={index}>
							<h4>{project.Name}</h4>
							<p>{project.Description}</p>
						</div>
					))}
				</section>
			</div>
		</Layout>
	);
};

export default Directory;

export const pageQuery = graphql`
	query PageQuery {
		allStrapiCompany {
			nodes {
				Name
				Address
				Website
			}
		}
		allStrapiProject {
			nodes {
				Name
				Description
			}
		}
		allStrapiContractor {
			nodes {
				Name
				Gender
				Email
				Website
			}
		}
	}
`;
