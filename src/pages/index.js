import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Posts from '../components/Posts';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data;

  return (
    <Layout>
      <Hero showPerson />
      <Posts posts={posts} title="recently published" />
    </Layout>
  );
};

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 3) {
      nodes {
        id
        excerpt
        frontmatter {
          slug
          date(formatString: "MMM Do, YYYY")
          author
          category
          readTime
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
