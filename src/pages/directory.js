import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const Directory = ({ data }) => {
  return (
    <Layout>
      <div style={{ width: "100%" }}>
        <h1>Directory</h1>
        <p>Here is a list of everything you can find here!</p>
        <hr />

        <section>
          <h2>Companies</h2>
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
          <h2>Contractors</h2>
          {data.allStrapiContractor.nodes.map((contractor, index) => (
            <div key={index}>
              <h4>{contractor.Name}</h4>
              <p>{contractor.Gender}</p>
              <p>{contractor.Email}</p>
              <p>{contractor.Website}</p>
            </div>
          ))}
        </section>
        <hr />
        <section>
          <h2>Projects</h2>
          {data.allStrapiProject.nodes.map((project, index) => (
            <div key={index}>
              <h4>{project.Name}</h4>
              <p>{project.Description}</p>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  )
}

export default Directory

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
`
