import React, { useState } from "react";
import img1 from './Images/image1.jpg'
import img2 from './Images/image2.jpg'
import img3 from './Images/image3.jpg'
import img4 from './Images/image4.jpg'


export function ListImages(){

    const images = [img1,img2,img3,img4]
    const [showlist,setShowlist] = useState(false)

    return(
        <div>
            <button  className="btn btn-warning" onClick={() =>setShowlist(!showlist)}>
                {showlist ? 'IMAGES ARE DISPLAYED': 'NO IMAGES'}
            </button>
            {showlist && (
                <ul>
                    {images.map(itm => 
                        <li> <img src={itm} alt=" " className="images"></img></li>)}
                </ul>
            )}
        </div>
    )
}

export function TernaryOp()
{
    const islogged = true;
    const name='Keerthana'

    return(
        <div>
            {islogged ? (<h1>Hello.{name}</h1>): <button className="btn btn-primary">Login</button>}
        </div>
    )
}

export default function BtnClick()
{
    const [islogged,setlogged] = useState(false)

    const styling = true

    const buttonchange = () =>{
        setlogged(!islogged)

     }
     return(
        <div>
            <button className="btn btn-info" onClick={buttonchange}>
                {islogged ? 'HIDE DETAILS' : 'SHOW DETAILS'}
            </button>

            {islogged && <p style={{backgroundColor:styling?'pink':'transparent'}}>LOGGED IN</p>}
        </div>
     )
}

export function LstObjects() {
  const [items, setItems] = useState([]);

  //Adding new items - object destructuring using useState hooks

  const [newItem,setNewItem] = useState(
    {
        id:'',
        name:'',
        image:''

    }
  )

  const addItem = (e) =>
  {
    e.preventDefault();
    const updatedItems = [...items,{

        id : newItem.id,
        name:newItem.name,
        image:newItem.image
    }]

    setItems(updatedItems,() => {
        setNewItem({id:'',name:'',image:''})
    })
  }

  const removeItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  const handlechange =(e) =>
  {
    const {name,value} = e.target ;

    setNewItem((prevItem) => ({...prevItem,[name]:value}));
  };

  const displayItems = () => {
    if (items.length === 0) {
      const newItems = [
        {
          id: 1,
          name: 'Nature1',
          image: img1,
        },
        {
          id: 2,
          name: 'Nature2',
          image: img2,
        },
        {
          id: 3,
          name: 'Nature3',
          image: img3,
        },
        {
          id: 4,
          name: 'Nature4',
          image: img4,
        },
      ];
      setItems(newItems);
    }
  };

  return (
    <div>
      <button className="btn btn-success" onClick={displayItems}>
        {items.length ? 'ITEMS DISPLAYED' : 'NO ITEMS IN THE LIST'}
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>IMAGES</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <img src={item.image} alt="" className="image" />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={addItem}>
        <input type ="text" name="id" value={newItem.id}
        onChange={handlechange}
        placeholder="Enter ID"/>


        <input type ="text" name="name" value={newItem.name}
        onChange={handlechange}
        placeholder="Enter Name"/>

        
        <input type ="text" name="image" value={newItem.image}
        onChange={handlechange}
        placeholder="Enter Image"/>
        
        <button className="btn btn-primary" type="submit">ADD ITEMS</button>

      </form>
    </div>
  );
}


// export function LstObjects()
// {
//     const [items,setItems]= useState ([]);

//     const Remove =(itemid) =>{
//         const itm = items.filter(itm => itm.id !== itemid) 
//         setItems(itm)
//     }


//     const Display =() =>
//     {
//         if(items.length===0)
//         {
//         const newItems = [
//             {
//                 id:1,
//                 name:'Nature1',
//                 image:img1

//             },
//             {
//                 id:1,
//                 name:'Nature2',
//                 image:img2

//             },
//             {
//                 id:1,
//                 name:'Nature3',
//                 image:img3

//             },
//             {
//                 id:1,
//                 name:'Nature4',
//                 image:img4

//             },

//         ]
//         setItems(newItems)
//     }
   


//     }
//     return(
//         <div>
//             <button className="btn btn-success" onClick={Display}>
//                 {items.length? 'ITEM DISPLAYED' : 'NO ITEMS IN THE LIST'}
//             </button>
//             <table>
//                 <thead>
//                     <th>ID</th>
//                     <th>NAME</th>
//                     <th>IMAGES</th>
//                     <th>Actions</th>
//                 </thead>
//                 {items.map(itm =>
//                     <tbody>
//                         <tr>
//                             <td>{itm.id}</td>
//                             <td>{itm.name}</td>
//                             <td><img src={itm.image} alt=" " className="image"></img></td>
//                             <td><button className="btn btn-danger" onClick={()=>Remove(itm.id)}>Remove</button></td>
                           
//                         </tr> 
//                     </tbody>)}
//             </table>
//         </div>
//     );

// }

