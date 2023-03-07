import React, { Suspense } from "react";
const Navbar = React.lazy(() => import("app1/Navbar"));
const CardList = React.lazy(() => import("app1/CardList"));
const Footer = React.lazy(() => import("app2/Footer"));

const list = [
  {
    "id":1,
    "title":"Title one",
    "body":"Some quick example text to build on the card title and make up the bulk of the card's content.",
    "img":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
  },
  {
    "id":2,
    "title":"Title two",
    "body":"Some quick example text to build on the card title and make up the bulk of the card's content.",
    "img":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
  },
  {
    "id":3,
    "title":"Title one",
    "body":"Some quick example text to build on the card title and make up the bulk of the card's content.",
    "img":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
  },
  {
    "id":4,
    "title":"Title two",
    "body":"Some quick example text to build on the card title and make up the bulk of the card's content.",
    "img":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
  }
]

const App = () => {
  return (
    <div>
      <Suspense fallback={"loading..."}>
        <Navbar organizationName="Media Unit" />
        <CardList list={list}/>
        <Footer/>
      </Suspense>
    </div>)
}


export default App;
