//day6

import React from 'react';
// import FilterComp from './Components/FilterComp';
import BtnClick, { TernaryOp,ListImages ,LstObjects} from './Components/TernaryOp';
import './App.css';
import { Task } from './Components/Task';
;
// import UseStateExample from './Components/UseStateExample';

function App() {
  return (
   <div>
    {/* <FilterComp/> */}
    {/* <UseStateExample/> */}
    <TernaryOp/>
    <BtnClick/>
    <ListImages/>
    <LstObjects/>
    <center><Task/></center>
    </div>
  );
}


export default App;



//day5

// import React from  'react';
// import './App.css'
// import NewComp from './NewComp';

// class App extends React.Component{

//   styles={
//     fontstyle:"italic",
//     color:"pink"
//   }
 
//   render()
//     {
//       return (
//         <div className='App'>
//         <h1 style={this.styles}>WELCOME</h1>
//         <NewComp/>
//         </div>
//       )
//     }
    
  
// }

// export default App;


// import React from 'react';
// import './App.css';
// import Sample from './Components/Sample';
// import ClassComp from './Components/ClassComp';
// import FunComp from './Components/FunComp';
// import Table from './Components/Table';

// export default function App() {
//   return (
//     <div>
//       <h1>HI</h1>
//       <h1>WELCOME</h1>
//       <ClassComp/>
//       <FunComp/>
//       <Table/>                        
//     </div> 
//   );
// }

// function App(){
//   return(
//     <Sample name="Keerthana" com="B.Tech" />
//   );
// }

// export default App();
// import React from 'react';
// import './App.css';
// import Sample from './Sample';

// function App() {
//   const Students = [
//     { StuId: 1, StuName: "Keerthana", StuSec: "A" },
//     { StuId: 2, StuName: "Raj", StuSec: "B" },
//     { StuId: 3, StuName: "Priya", StuSec: "C" },
//     { StuId: 4, StuName: "Saravanan", StuSec: "A" },
//   ];

//   return (
//     <div>
//       <h1>App Component</h1>
//       <Sample name="Keerthana" com="B.Tech" />
//       <StudentsDetails stu={Students} />
//     </div>
//   );
// }

// function StudentsDetails({ stu }) {
//   return (
//     <div>
//       <h3>Student Details</h3>
//       <ul>
//         {stu.map((stu) => (
//           <li key={stu.StuId}>
//             {stu.StuId} {stu.StuName} {stu.StuSec}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;



//Assignment1


// import React, { useState } from 'react';
// import StudentList from './StudentList';
// import ProductList from './ProductList';
// import './ProductList.css';
// import './RecipeList.css';
// import RecipeList from './RecipeList';

// function App() {
//   const students = ['Keerthana', 'Rajendran', 'Janani', 'Priya'];

//   const [products, setProducts] = useState([
//     {
//       name: 'Mobile',
//       price: 20000,
//       image:
//         'https://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Transparent-HD-Photo.png',
//     },
//     {
//       name: 'Clothes',
//       price: 10000,
//       image:
//         'https://www.greenqueen.com.hk/wp-content/uploads/2021/07/Rental-Fashion-Causes-More-Emissions-Than-Throwing-Clothes-Away.jpg',
//     },
//     {
//       name: 'Watch',
//       price: 30000,
//       image:
//         'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg',
//     },
//     {
//       name: 'Shoes',
//       price: 1500,
//       image:
//         'https://image.shutterstock.com/image-photo/white-sneaker-sport-shoe-on-260nw-2155395817.jpg',
//     },
//     {
//       name: 'Laptop',
//       price: 800000,
//       image:
//         'https://thumbs.dreamstime.com/b/laptop-computer-travel-37983668.jpg',
//     },
//   ]);

//   const handleRemoveProduct = (index) => {
//     setProducts((prevProducts) => {
//       const updatedProducts = [...prevProducts];
//       updatedProducts.splice(index, 1);
//       return updatedProducts;
//     });
//   };

//   const Recipes = [
//     {
//       name: 'Chocolate Chip Cookies',
//       ingredients: ['flour', 'butter', 'sugar', 'chocolate chips', 'vanilla extract'],
//       instructions: [
//         'Preheat oven to 350°F (175°C).',
//         'In a bowl, cream together butter and sugar.',
//         'Add flour, chocolate chips, and vanilla extract.',
//         'Scoop spoonfuls of dough onto a baking sheet and bake for 10-12 minutes.',
//       ],
//       image:
//         'https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2022/02/Chocolate-chip-cookies-14-1200x675.jpg', // Replace with the actual image URL
//     },
//     {
//       name: 'Coffee',
//       ingredients: ['ground coffee', 'hot water', 'sugar', 'milk'],
//       instructions: [
//         'Brew hot water using your preferred method.',
//         'Add ground coffee to a coffee maker or a French press.',
//         'Pour the hot water over the coffee grounds and let it steep for a few minutes.',
//         'Strain the coffee into a cup.',
//         'Add sugar and milk according to taste.',
//       ],
//       image: 'https://img.freepik.com/premium-photo/hot-coffee-morning-wooden-table_838382-54.jpg', // Replace with the actual image URL
//     },
//   ];

//   return (
//     <div>
//       <h1>Student List</h1>
//       <StudentList students={students} />

//       <h1>Product List</h1>
//       <ProductList products={products} onRemoveProduct={handleRemoveProduct} />

//       <h1>Recipe List</h1>
//       <RecipeList recipes={Recipes} />
//     </div>
//   );
// }

// export default App;



//Assignment2
// import React from 'react';
// import Counter from './Counter';
// import ImageGallery from './ImageGallery/ImageGallery';
// import './App.css';

// function App() {
//   return (
//     <div className="app-container">
//       <div className="content-container">
//         <div className="counter-container">
//           <Counter />
//         </div>

//         <div className="image-gallery-container">
//           <h1>Image Gallery</h1>
//           <ImageGallery />
//         </div>
//       </div>
//     </div>
//   );
// }





// export default App;





