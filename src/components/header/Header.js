import React from "react";

import { graphql, Link } from "gatsby";

//data
const headerStaticData = [
  { pageName: "Home", path: "/" },
  { pageName: "About", path: "/about" },
  { pageName: "London", path: "/locations/london", locationSub: true },
  { pageName: "Singapore", path: "/locations/singapore", locationSub: true },
  { pageName: "Saigon", path: "/locations/saigon", locationSub: true },
];

const Header = ({ data }) => {
  return (
    <nav>
      {headerStaticData.map((item, index) => (
        <li key={index}>
          <Link to={item.path}>{item.pageName}</Link>
        </li>
      ))}
    </nav>
  );
};

// export const query = graphql`
//   query MyQuery {
//     allContentfulCity {
//       nodes {
//         postcode
//         name
//         id
//       }
//     }
//   }
// `;

export default Header;
