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
    // Fetch the data from the endpoint using fetch
    
    const res = await fetch('http://localhost:3000/api/getCardsTrending');
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

