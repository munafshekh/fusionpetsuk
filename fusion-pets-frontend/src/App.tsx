import { useState } from 'react'
import './App.css'
import type { Pet } from './types';
import PetCard from './components/PetCard';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


// Temporary Mock Data for testing the UI
const MOCK_PETS: Pet[] = [
  {
    id: '1',
    name: 'Max',
    species: 'dog',
    breed: 'Siberian Husky',
    price: 0,
    imageUrl: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8',
    description: 'Energetic and friendly Husky looking for a new home.',
    isAvailable: true
  },
  {
    id: '2',
    name: 'Bella',
    species: 'dog',
    breed: 'Golden Retriever',
    price: 0,
    imageUrl: 'https://images.unsplash.com/photo-1587305666224-6b0c8f8f8f8f',
    description: 'Energetic and friendly Golden Retriever looking for a new home.',
    isAvailable: true
  },
  {
    id: '3',
    name: 'Charlie',
    species: 'cat',
    breed: 'Maine Coon',
    price: 0,
    imageUrl: 'https://images.unsplash.com/photo-1587305666224-6b0c8f8f8f8f',
    description: 'Energetic and friendly Maine Coon looking for a new home.',
    isAvailable: true
  }
];

function App() {
  const [cart, setCart] = useState<Pet[]>([]);

  const addToCart = (pet: Pet) => {
    setCart([...cart, pet]);
    alert(`${pet.name} added to cart!`);
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-white text-blue p-8 font-mono">

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_PETS.map(pet => (
          <PetCard key={pet.id} pet={pet} onAddToCart={addToCart} />
        ))}
      </main>
    </div>
    <Footer />
    </>
  );
}

export default App;