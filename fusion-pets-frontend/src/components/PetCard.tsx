import type { Pet } from "../types";

interface PetCardProps {
  pet: Pet;
  onAddToCart: (pet: Pet) => void;
}

const PetCard = ({ pet, onAddToCart }: PetCardProps) => {
  return (
    <div className="border border-gray-800 bg-[#121b24] p-4 rounded-xl shadow-lg transition-transform hover:scale-105">
      <img 
        src={pet.imageUrl} 
        alt={pet.name} 
        className="h-48 w-full object-cover rounded-lg mb-4" 
      />
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-bold text-blue uppercase tracking-tighter">{pet.name}</h3>
        <span className="text-blue-400 font-bold">£{pet.price}</span>
      </div>
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{pet.description}</p>
      <button 
        onClick={() => onAddToCart(pet)}
        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded-lg transition-colors"
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default PetCard;