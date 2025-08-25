export default function ProductCategoryCard({ name, description, bgColor, textColor }) {
  return (
    <div 
      className={`p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ${bgColor} ${textColor} flex flex-col justify-between`}
    >
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="text-sm sm:text-base">{description}</p>
    </div>
  );
}
