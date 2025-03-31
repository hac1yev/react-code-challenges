import ApolloWrapper from "./ApolloWrapper";
import Countries from "./Countries";

function GraphQLWrapper() {
  return (
    <ApolloWrapper>
      <div>
        <h1>GraphQL with React</h1>
        <Countries />
      </div>
    </ApolloWrapper>
  );
}

export default GraphQLWrapper;