import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Posts from '../components/Posts';
import { graphql } from 'gatsby';

const CategoryTemplate = props => {
  const {
    data: {
      categories: { nodes: posts },
    },
    pageContext: { category },
  } = props;

  return (
    <Layout>
      <Hero />
      <Posts posts={posts} title={`Category / ${category}`} />
    </Layout>
  );
};

export const query = graphql`
  query getCategories($category: String) {
    categories: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
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
                src
              }
            }
          }
        }
      }
    }
  }
`;
export default CategoryTemplate;
