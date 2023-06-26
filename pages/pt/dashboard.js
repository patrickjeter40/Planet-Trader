import Header from '../../components/layout/header';
import Footer from '../../components/layout/footer';
import SearchBar from '../../components/layout/searchBar';
import CardGrid from '../../components/common/cardGrid';


export default function dashboard({ exoplanets }) {
  
 
  if (!exoplanets) {
    return <p>Unable to fetch data... Please contact support@exoplanets</p>;
  }

  return (
    <div class="main">
      <Header title="Dashboard" />
      <SearchBar />
      <CardGrid exoplanets={exoplanets} gridCaption="Trending Planets" />
      <Footer />      
    </div>
  );
}

export async function getServerSideProps() {
  try {
    let res = await fetch('http://localhost:3000/api/getCardsTrending');
    let exoplanets = [];

    // Check if the response was successful
    if (res.ok) {
      exoplanets = await res.json();
    } else {
      // Fallback to the alternative URL if the first one is unavailable
      res = await fetch('https://planet-trader.vercel.app/api/getCardsTrending');
      exoplanets = await res.json();
    }

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


