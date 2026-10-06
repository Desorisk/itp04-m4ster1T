import Header from "./components/Header";
import Product from "./components/Product";
import Footer from "./components/Footer";
import {courses} from "./data/courses"
import "./index.css"

function App() {
  return (
    <div className="page">
      <div className="container">
        <Header/>
          <div className="products">

            {/* <Product title="book1" price="10.00" image="https://lightroom-photoshop-tutorials.com/wp-content/uploads/2020/06/Adobe-Photoshop-Training-course-2022.jpg" discription="Adobe Photoshop"/>
            <Product title="book2" price="20.00" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSICDRs5HsS5ASTWmJFtjmf0Yz9OTn7z_Olq5FSZINLg&s=10" discription="Adobe Photoshop 2"/>
            <Product title="book3" price="40.00" image="https://t4.ftcdn.net/jpg/02/42/55/89/360_F_242558919_XtgUjW50qICrYe68nOO0kj9doe1sWxeu.jpg" discription="Book Cover"/>
            <Product title="book4" price="30.00" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpkQ0L7D2feJ3fSbUG2B-JuH5Qm0eNpcyxvHwxMjzZWCD9eQ85lg1e8bU&s=10" discription="Pet Book Ever"/>   */}

            {courses.map((c)=>(
              <Product
              key={c.id}
              title={c.title}
              image={c.image}
              des={c.des}
              price={c.price}
              soldOut={c.soldOut}
              />
            ))}

          </div>
          <Footer/>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;