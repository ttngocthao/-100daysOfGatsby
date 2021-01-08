import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout/Layout";

const Location = (props) => {
  const { data, params } = props;
  return (
    <Layout>
      <h1>Location - {params.name}</h1>
      <h5>{data.contentfulCity.postcode}</h5>
    </Layout>
  );
};
export const query = graphql`
  query($id: String) {
    contentfulCity(id: { eq: $id }) {
      id
      name
      postcode
    }
  }
`;
export default Location;
