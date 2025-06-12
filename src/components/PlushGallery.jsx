export default function PlushGallery() {
  const plushies = [
    {
      name: 'Dino Plush',
      img: 'https://bioparqueshop.com/wp-content/uploads/2020/09/DSC_0881-1024x682.png',
    },
    {
      name: 'Cow Plush',
      img: 'https://i.pinimg.com/originals/80/f6/1d/80f61d67a27350593064ab90740a25f0.png',
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {plushies.map((plush, idx) => (
        <div key={idx} className="bg-white p-4 rounded-xl shadow text-center">
          <img src={plush.img} alt={plush.name} className="h-32 w-full object-contain mx-auto" />
        </div>
      ))}
    </div>
  );
}
