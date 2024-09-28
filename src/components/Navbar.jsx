const dataNavbar = [
  {
    id: 1,
    name: "Man",
  },
  {
    id: 2,
    name: "Woman",
  },
  {
    id: 3,
    name: "Kids",
  },
  {
    id: 4,
    name: "Accessoris",
  },
];



export default function Navbar() {
  return (
    <div className="w-full cursor-pointer justify-center flex flex-row gap-4 text-black text-base mt-5 mb-4">
      {dataNavbar?.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </div>
  );
}
