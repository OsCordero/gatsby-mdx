import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <section className="error-page">
      <div className="page-center">
        <span>404</span>
        <h3>Whoops, seems like you're lost</h3>
        <Link to="/" className="btn">
          Take me home
        </Link>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
