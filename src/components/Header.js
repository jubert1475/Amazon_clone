import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";


const Header = () => {
   const basketItemCount=useSelector(store=>store.cart.basket.length)

  return (
    <div className="header">
      <Link to='/'>
      <img
        className="logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
        
      </div>
      <div className="header_search_nav">
        <div className="header__options">
          <span className="option_lineOne">Hello,sign in</span>
          <span className="option_lineTwo">Accounts & Lists</span>
        </div>
        <div className="header__options">
          <span className="option_lineOne">Returns</span>
          <span className="option_lineTwo">& Orders</span>
        </div>
        <div className="header__options">
          <span className="option_lineOne">Your</span>
          <span className="option_lineTwo">Prime</span>
        </div>

        <div className="header_optionBasket">
          <Link to='/checkout'>
          <AddShoppingCartSharpIcon />
          <span className="header_optionBasket_count">{basketItemCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
