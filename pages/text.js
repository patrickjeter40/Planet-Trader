

function Page({ exoplanets }) {
  return (
    <div>
      <h1>List of Habitable Exoplanets</h1>
      <ul>
        {exoplanets.map((exoplanet) => (
          <li key={exoplanet._id}>{exoplanet.PLANET}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    // Fetch the data from the endpoint using fetch
    const res = await fetch('http://localhost:3000/api/getplanets');
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

export default Page;
