import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import PropTypes from "prop-types";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
});

const ApolloWrapper = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

ApolloWrapper.propTypes = {
  children: PropTypes.element
}

export default ApolloWrapper;