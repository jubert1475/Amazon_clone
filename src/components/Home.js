import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/manishbanjare/Prime_Vedio_banner_1242x450.png"
        />
      </div>
      <div className="home_row">
        <Product 
        id='01'
        title="boAt Airdopes Atom 81 TWS Earbuds with Upto 50H Playtime" 
        price={114}
        rating={5}
        image='https://images-eu.ssl-images-amazon.com/images/G/31/img21/CE/HP2/Boat_Pc_CC_1x._SY304_CB596084660_.jpg'

        />

        <Product 
         id='02'
        title="hago Fridge Storage Boxes Freezer Storage Containers, Container for Kitchen Storage Set, Storage in Kitchen, Vegetable Storage, Draining Crisper Refrigerator Food Box (1)" 
        price={278}
        rating={3}
        image='https://m.media-amazon.com/images/I/8152LrdB7OL._SX569_.jpg'/>
      </div>
      <div className="home_row">
       
        <Product 
         id='03'
        title="IQOO Z9 5G (Brushed Green, 8GB RAM, 128GB Storage) | Dimensity 7200 5G Processor | Sony IMX882 OIS Camera | 120Hz AMOLED with 1800 nits Local Peak Brightness | 44W Charger in The Box" 
        price={21999}
        rating={4}
        image='https://m.media-amazon.com/images/I/61pt59LW-lL._SX679_.jpg'
/>
<Product 
         id='04'
        title="HP Laptop 15s, 12th Gen Intel Core i3, 15.6-inch (39.6 cm), 8GB DDR4, 512GB SSD, Thin & Light, Dual Speakers (Win 11, MSO 2021, Silver, 1.69 kg), fq5007TU / FQ5327TU" 
        price={37999}
        rating={5}
        image='https://m.media-amazon.com/images/I/71f2lQ3ESWL._SX679_.jpg'/>
        
    
      </div>
     
      <Product 
       id='05'
        title="Xiaomi 108 cm (43 inches) X Series 4K Ultra HD Smart Google TV L43M8-A2IN (Black)" 
        price={25700}
        rating={5}
        image='https://m.media-amazon.com/images/I/71L+JnVXFTL._SX679_.jpg'
        />
    </div>
  );
};
export default Home;
