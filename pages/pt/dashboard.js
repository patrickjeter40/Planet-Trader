import Header from '../../components/layout/header';
import Footer from '../../components/layout/footer';
import SearchBar from '../../components/layout/searchBar';
import CardGrid from '../../components/common/cardGrid';


export default function dashboard({ exoplanets }) {
  
 
  if (!exoplanets) {
    return <p>Unable to fetch data... Please contact support@exoplanets</p>;
  }

  return (
    <div className='main-parent'>
      <Header title="Dashboard" />
        <div class="main">
          
          <SearchBar />
          <CardGrid exoplanets={exoplanets} gridCaption="Trending Planets" />
            
        </div>
      <Footer className='footer' />   
    </div>
  );
}

export async function getServerSideProps() {
  try {
    // Fetch the data from the endpoint using fetch
    
    const res = await fetch('https://planet-trader.vercel.app/api/getCardsTrending');
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

