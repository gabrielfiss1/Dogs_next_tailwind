// app/page.tsx
import DogsFetcher from "../components/DogsFetcher";  // Importando o DogsFetcher

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <DogsFetcher />
    </div>
  );
};

export default Home;
