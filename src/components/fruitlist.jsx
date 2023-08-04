import "@/styles/Home.module.css";

const fruits = [
    {
      id: 1,
      name: 'Apple',
      image: 'https://images.unsplash.com/photo-1576179635662-9d1983e97e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHwxfDB8fHwy&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      name: 'Orange',
      image: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    },
    {
      id: 3,
      name: 'Banana',
      image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFuYW58ZW58MHwxfDB8fHwy&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 4,
      name: 'Grapes',
      image: 'https://images.unsplash.com/photo-1601275868399-45bec4f4cd9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGVzfGVufDB8MXwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 5,
      name: 'Watermelon',
      image: 'https://images.unsplash.com/photo-1621961048737-a9993789e1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2F0ZXJtZWxvbnxlbnwwfDF8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 6,
      name: 'Pineapple',
      image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    },
    {
      id: 7,
      name: 'Mango',
      image: 'https://images.unsplash.com/photo-1575704775495-3db17d0b5522?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbmdvfGVufDB8MXwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 8,
      name: 'Strawberry',
      image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RyYXdiZXJyeXxlbnwwfDF8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 9,
      name: 'Cherry',
      image: 'https://images.unsplash.com/photo-1595657241488-468423581c23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    },
    {
      id: 10,
      name: 'Kiwi',
      image: 'https://images.unsplash.com/photo-1615385365748-9b46b7ae446e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    },
  ];




const FruitList = () => {
    return (
      <div>
        <h2 className="title">List of Fruits</h2>
        <ul className="">
          {fruits.map((fruit) => (
            <li key={fruit.id}>
              <h3 className="fruitName">{fruit.name}</h3>
              <img className="images" src={fruit.image} alt={fruit.name} />
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default FruitList;