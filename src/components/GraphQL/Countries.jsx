import { useQuery, gql } from "@apollo/client";

const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      emoji
    }
  }
`;

const Countries = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Countries List</h2>
      <ul>
        {data.countries.slice(0, 10).map((country) => (
          <li key={country.code}>
            {country.emoji} {country.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;