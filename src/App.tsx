import "./App.css";

const Image = () => {
  return (
    <img
      src="https://theovenchef.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-11-01-at-5.39.28-PM-1-scaled-e1698841246352.jpeg"
      className="h-60 w-60 p-1"
    />
  );
};

const Title = ({ name }: { name: string }) => {
  return <h2 className="text-4xl font-bold text-gray-900">{name}</h2>;
};

const Desc = ({ desc }: { desc: string }) => {
  return <p className="text-xl font-light text-gray-600 mt-3">{desc}</p>;
};

const Price = ({ price }: { price: number }) => {
  return <p className="text-xl font-medium mt-3">{price}</p>;
};

const ItemButton = ({
  btnText,
  btnStyle,
}: {
  btnText: string;
  btnStyle: string;
}) => {
  return (
    <button
      className={`text-xl font-medium text-white px-4 py-2 rounded-md ${btnStyle}`}
    >
      {btnText}
    </button>
  );
};

const Cake = ({
  name,
  desc,
  price,
}: {
  name: string;
  desc: string;
  price: number;
}) => {
  return (
    <div className="grid place-items-center my-3">
      <div className="flex gap-4 shadow-lg rounded-xl mx-5 my-5 w-1/2">
        <Image />
        <div className="p-4 md:p-8">
          <Title name={name} />
          <Desc desc={desc} />
          <Price price={price} />
          <div className="flex gap-3 mt-3">
            <ItemButton
              btnText="View More"
              btnStyle="bg-sky-500 hover:bg-sky-600"
            />
            <ItemButton
              btnText="Place Order"
              btnStyle="bg-rose-500 hover:bg-rose-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const data = [
  { id: 1, name: "Vanila", desc: "Vanila cake is a cake", price: 600 },
  { id: 2, name: "Chocolate", desc: "Chocolate cake is a cake", price: 5500 },
  {
    id: 3,
    name: "Red Velvate",
    desc: "Red Velvate cake is a cake",
    price: 4300,
  },
  {
    id: 4,
    name: "Butter Cake",
    desc: "Butter Cake cake is a cake",
    price: 1300,
  },
  {
    id: 5,
    name: "Carrot Cake",
    desc: "Red Velvate cake is a cake",
    price: 2300,
  },
];

function App() {
  return (
    <>
      {data.map((cake) => {
        return (
          <Cake
            key={cake.id}
            name={cake.name}
            desc={cake.desc}
            price={cake.price}
          />
        );
      })}
    </>
  );
}

export default App;
