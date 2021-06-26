import styles from "../styles/Home.module.scss";
import Deck from "../components/Deck";
import React from "react";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});
// const tableQuery = `
// query table {
//   cards{
//     number
//     symbol
//   }
// }
// `;

export default function Home({ tableData, title, table, hand }) {
  // console.log(tableData.data.table);
  return (
    <React.Fragment>
      <h1>Cards.js</h1>
      <div className={styles.deck}>
        <Deck title="Cards" path="api/cards/fulldeck" />
      </div>
      {/* <div className="deck table">
        <Deck title="Table" path="api/cards/table" flipped="2" />
      </div>
      <div className="deck hand">
        <Deck
          title="Hand"
          path="api/cards/2"
          flipped="2"
          flipCards="flipCards"
        />
      </div> */}
      {/* <Button id="flip" value="flip" />
      <Button id="hold" value="hold" />
      <Button id="withdraw" value="withdraw" /> */}
    </React.Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const { data } = await client.query({
//     query: gql`
//       query table {
//         cards {
//           number
//           symbol
//         }
//       }
//     `,
//   });

//   return { props: { cards: cards } };
// }
