import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"

const Projects = ({ data }) => {
  const {
    Name,
    Email,
    Description,
    ProjectLength,
    Employer,
  } = data.strapiProject

  return (
    <Layout>
      <div style={{ width: "100%" }}>
        <h1>{Name}</h1>
        <p>LOOK AT THIS JOB LOOK AT IT!</p>
        <hr />
        <section style={{ width: "100%" }}>
          <div>
            <h3>{Name}</h3>
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
                  width: "100%",
                  padding: "2rem",
                }}
              >
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
            <hr style={{ width: "100%" }} />
          </div>
        </section>
      </div>
    </Layout>
  )
}
export default Projects

export const projectQuery = graphql`
  query {
    strapiProject {
      Name
      Email
      Description
      ProjectLength
      Employer
      id
    }
  }
`
