import Header from '../../components/layout/header';
import Footer from '../../components/layout/footer';
import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/layout/searchBar';
import { useRouter } from 'next/router';
import CardGrid from '../../components/common/cardGrid';

export default function Dashboard({ exoplanets, gridCaption }) {
  const router = useRouter();
  const { query } = router.query; // Retrieve the query parameter from the URL

  if (!exoplanets) {
    return <p>Unable to fetch data... Please contact support@exoplanets</p>;
  }

  const [selectedExoplanetId, setSelectedExoplanetId] = useState(null);
  const [fetchedExoplanets, setFetchedExoplanets] = useState([]);

  useEffect(() => {
    if (query) {
      const fetchExoplanets = async () => {
        try {
          const res = await fetch(`https://planet-trader.vercel.app/api/getCardSearched?query=${query}`);
          const data = await res.json();
          console.log('Exoplanets:', data);
          setFetchedExoplanets(data);
        } catch (error) {
          console.error('Failed to fetch exoplanets:', error);
        }
      };
      fetchExoplanets();
    }
  }, [query]);

  return (
    <>
      <Header title="Dashboard" />
        <div className="main">
          <SearchBar textSV={query} />
          <CardGrid exoplanets={fetchedExoplanets} gridCaption="Results" />
        </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const { query } = context.req;
    const { searchValue } = query;

    // Fetch the data from the endpoint using fetch, passing the searchValue as a query parameter
    const res = await fetch(`https://planet-trader.vercel.app/api/getCardSearched?query=${searchValue}`);
    const exoplanets = await res.json();

    // Return the data as props
    return {
      props: { exoplanets },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { exoplanets: [] },
    };
  }
}
