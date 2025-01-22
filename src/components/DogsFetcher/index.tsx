import React from "react";

const DogsFetcher = async () => {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random/8");
    const data = await response.json();

    const dogs = data.message || [];
    const error = null;

    return (
      <div className="p-4">
        <h1 className="flex justify-center text-2xl font-bold mb-4">Lista de Dogs</h1>
        {error && <p className="text-red-500">{error}</p>}

        {dogs.length === 0 ? (
          <p className="text-gray-500">Nenhum cão encontrado.</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-4">
            {dogs.map((dog: string | undefined, index: React.Key | null | undefined) => (
              <div key={index} className="w-96 h-96 border p-2 rounded-lg overflow-hidden">
                <img
                  src={dog}
                  alt="Dog"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  } catch (error: any) {
    console.error("Erro ao carregar as imagens:", error);
    return <p className="text-red-500">Erro ao carregar as imagens.</p>;
  }
};

export default DogsFetcher;
