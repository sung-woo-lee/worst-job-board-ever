import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const JobBoard = ({ data }) => {
  return (
    <Layout>
      <div style={{ width: "100%" }}>
        <h1>Job Board</h1>
        <p>Here is a list of jobs you can take!</p>
        <hr />
        <section style={{ width: "100%" }}>
          {data.allStrapiProject.nodes.map((job, index) => (
            <div key={index}>
              <h3>{job.Name}</h3>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "80%",
                    padding: "2rem",
                  }}
                >
                  <h4>Employer: </h4>
                  <p>{job.Employer}</p>

                  <h4> Description:</h4>
                  <p>{job.Description}</p>
                  <h4>Email:</h4>
                  <p>{job.Email}</p>
                </div>
                <Link
                  to={`/${job.id}`}
                  style={{ height: "4rem", width: "10%" }}
                >
                  <button style={{ height: "100%" }}>Details</button>
                </Link>
              </div>
              <hr style={{ width: "90%" }} />
            </div>
          ))}
        </section>
      </div>
    </Layout>
  )
}
export default JobBoard

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
`
