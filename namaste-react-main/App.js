import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./src/components/Header";
import Body from "./src/components/Body";


/**React.createElement convert into React Element(Object)**/
// const parent = React.createElement("div",{id:"parent"},
//     [
//     React.createElement("div",{id:"child"},
//     React.createElement("h1",{},"h1 Tag"),
//     React.createElement("h1",{},"h1 Tag"),
//     ),
//     React.createElement("div",{id:"child2"},
//     React.createElement("h1",{},"h1 Tag"),
//     React.createElement("h1",{},"h1 Tag"),
//     )
//    ]
// )
// const heading = React.createElement("h1",{id:'heading'},"Hello World from React")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(parent);

// console.log(parent);

/**code is transpiled before reach JS Engine using Parcel--In parcel all the transpilation handled by Babel**/

/** The flow of JSX into the React**/

/**JSX => React.createElemnent => React Element (JS Object) => HTML Element(render)**/

// const root = ReactDOM.createRoot(document.getElementById('root'))

// const jsxHeading = ( <h1 className="heading">Namaste React using JSX</h1> )

// root.render(jsxHeading);

/**React Component**/
// const HeadingComponent = () => <h1>Hello, Namaste React Functional Component </h1>;
/*Rendering React Component */
// root.render(<HeadingComponent/>);
/**/

/**Using Create Element**/
// const Element = React.createElement("div",{id:"title"},
//     [
//         React.createElement("h1",{id:"child_1"},"Namaste Javascript"),
//         React.createElement("h2",{id:"child_2"},"By Akshay Saini"),
//         React.createElement("h3",{id:"child_3"},"By Shraddha Raghav")
//     ]
// )


// root.render(Element);

/**Using JSX**/

// const JSX = (
//     <div className="title">
//           <h1>Namaste React Using JSX</h1>
//           <h2>By Akshay Saini</h2>
//           <h3>By Shraddha Raghav</h3>
//     </div>
// )

/**
 * Header
  ---Logo
  ---Nav Items
 * Body
  ---Search
  ---RestaurantContainer
       ^^RestaurantCrad
         --Img
         --Name
         --star ratings
 * Footer
  ---Copyright
  ---Links
  ---Addres
  ---Contact
 */



// const Header = () =>{
//     return(
//         <div className="header">
//          <div className="logo-container">
//             <img 
//             className="logo"
//             src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=restaurant-food&sf=&txt_keyword=All"></img>
//          </div>
//          <div className="nav-items">
//             <ul>
//                 <li>Home</li>
//                 <li>About Us</li>
//                 <li>Contact Us</li>
//                 <li>Cart</li>
//             </ul>
//          </div>
//         </div>
//     )
// }



// const Body = () =>{
//   return(
//   <div className="body">
//     <div className="search">Search</div>
//     <div className="res-container">
//       {
//        resObj.map((restaurant)=>(
//         <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
//       ))
//       }
      
//       </div>
//   </div>
// )
// }

// const RestaurantCard = (props) =>{
//   const {resData} = props;
// //   const {} = resData?.data;

//     return(
//       <div className="res-card"style={{backgroundColor:"#f0f0f0"}}>
//         <img
//         className="res-logo"
//         alt="res-logo"
//         src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}>
//         </img>
//          <h3>{resData.info.name}</h3>
//          <h4>{resData.info.cuisines.join(", ")}</h4>
//          <h4>{resData.info.avgRating}</h4>
//          <h4>{resData.info.deliveryTime}</h4>
//       </div>
//     )
// }

const AppLayout = () =>{
    return(
        <div className="app">
         <Header/>
         <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

