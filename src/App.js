import './App.css';
import header_logo from "./img/header_logo.svg"
import cart from "./img/cart.svg"
import phone from "./img/phone.svg"
import line from "./img/Line.svg"
import MaskGroup from "./img/MaskGroup.png"
import imges from "./img/images.png"
import pizza from "./img/pizza.png"
import hamburger from "./img/hamburger.png"
import dots from "./img/dots.svg"
import burger from "./img/Mask Group (1).png"
import avatar from "./img/Mask Group (2).png"
import Rectangle from "./img/Rectangle.png"
import big_img from "./img/big_img.png"
import coffee from "./img/coffee.png"
import goulash from "./img/goulash.png"
import one from "./img/one.png"
import two from "./img/two.png"
import three from "./img/three.png"
import string from "./img/string.png"
import {useState} from "react";
function App() {
  const [vis, setVis] = useState(true)
  const [open, setOpen] = useState("")
  const [active, setActive] = useState("")
  return (
    <div className="App">
      <div className={"nav_bar" + open}>
        <div className="nav_bar_list_item">ГЛАВНАЯ</div>
        <div className="nav_bar_list_item">МЕНЮ</div>
        <div className="nav_bar_list_item">О НАС</div>
        <div className="nav_bar_list_item">БРОНЬ</div>
        <div className="nav_bar_list_info">
          <button className="btn">ЗАКАЗ СТОЛИКА</button>
        </div>
      </div>
      <div className="header">
        <div className="container">
          <div className="header_row">
            <div className="header_logo"><img src={header_logo} alt=""/></div>
            <div onClick={
              ()=>{
                setVis(!vis)
                console.log(vis)
                if(vis){
                  setOpen(" open")
                  setActive(" active")
                }else{
                  setOpen("")
                  setActive("")
                }
              }
            } className={"burger" + active}>
              <span></span>
            </div>
            <div className="header_row_list">
              <div className="header_row_list_item">ГЛАВНАЯ</div>
              <div className="header_row_list_item">МЕНЮ</div>
              <div className="header_row_list_item">О НАС</div>
              <div className="header_row_list_item">БРОНЬ</div>
              <div className="header_row_list_info">
                <img src={cart} alt="" className="cart"/>
                <div className="header_row_list_info_block">
                  <div className="header_row_list_info_number">
                    <div className="header_row_list_info_number_img"><img src={phone} alt=""/></div>
                    <div className="header_row_list_info_number_number">+999-888-76-54</div>
                  </div>
                  <div className="header_row_list_info_number_text">Свяжитесь с нами для
                    бронирования</div>
                </div>
                <button className="btn">ЗАКАЗ СТОЛИКА</button>
              </div>
            </div>
          </div>
          <div className="header_block_container">
            <div className="header_block">
              <div className="header_block_title">Добро пожаловать в</div>
              <div className="header_block_subtitle">Наш ресторан</div>
              <div className="header_block_subsubtitle">
                <img src={line} alt=""/>
                <div className="header_block_subsubtitle_text">ДОМ ЛУЧШЕЙ ЕДЫ</div>
                <img src={line} alt=""/>
              </div>
              <div className="btn header_block_btn">VIEW MENU</div>
            </div>
          </div>
        </div>
      </div>
      <div className="body_1">
        <div className="container">
          <div className="body_1_row">
            <div className="body_1_row_item">
              <img className="body_1_row_item_img" src={MaskGroup} alt=""/>
              <div className="body_1_row_item_title"><div className="black">Магическая</div><div className="yellow">Атмосфера</div></div>
              <div className="body_1_row_item_text">В нашем заведении царит магическая атмосфера
                наполненная вкусными ароматами</div>
            </div>
            <div className="body_1_row_item">
              <img className="body_1_row_item_img" src={MaskGroup} alt=""/>
              <div className="body_1_row_item_title"><div className="black">Магическая</div><div className="yellow">Атмосфера</div></div>
              <div className="body_1_row_item_text">В нашем заведении царит магическая атмосфера
                наполненная вкусными ароматами</div>
            </div>
            <div className="body_1_row_item">
              <img className="body_1_row_item_img" src={MaskGroup} alt=""/>
              <div className="body_1_row_item_title"><div className="black">Магическая</div><div className="yellow">Атмосфера</div></div>
              <div className="body_1_row_item_text">В нашем заведении царит магическая атмосфера
                наполненная вкусными ароматами</div>
            </div>
          </div>
          <div className="body_1_block">
            <div className="body_1_block_side_left">
              <div className="body_1_block_side_left_title"><div className="black">Наша</div><div className="yellow">История</div></div>
              <div className="body_1_block_side_left_text">Как и у любого другого самобытного места, у нас есть своя, особая история. Идея ресторана пришла основателям неожиданно. Во время прогулки по лесу создатель нашего ресторана застрял в сотнях километров от ближайшего населенного пункта. Вдали от цивилизации и связи им пришлось навремя обустровать себе нехитрый быт, добывать и готовить себе еду.</div>
              <div className="body_1_block_side_left_info_row">
                <div className="body_1_block_side_left_info_colum">
                  <div className="body_1_block_side_left_info_colum_number">93</div>
                  <div className="body_1_block_side_left_info_colum_title">Напитки</div>
                </div>
                <div className="body_1_block_side_left_info_colum">
                  <div className="body_1_block_side_left_info_colum_number">206</div>
                  <div className="body_1_block_side_left_info_colum_title">Еда</div>
                </div>
                <div className="body_1_block_side_left_info_colum">
                  <div className="body_1_block_side_left_info_colum_number">71</div>
                  <div className="body_1_block_side_left_info_colum_title">Закуски</div>
                </div>
              </div>
            </div>
            <img className="body_1_block_side_right" img src={imges} alt=""/>
          </div>
        </div>
      </div>
      <div className="body_2">
        <div className="container">
          <div className="body_2_block">
            <div className="body_2_block_side_left">
              <div className="body_2_block_title">Отпразднуйте в одном из
                самых лучших ресторанов.</div>
              <div className="body_2_block_text">Только в этом месяце бизнес-ланч от 250 ₽</div>
            </div>
            <div className="body_2_block_side_right">
              <button className="btn body_2_block_side_right_btn">ЗАКАЗ СТОЛИКА</button>
            </div>
          </div>
        </div>
      </div>
      <div className="body_3">
        <div className="container">
          <div className="body_3_block">
            <div className="body_3_block_title"><div className="black">Наши</div><div className="yellow">Блюда</div></div>
            <div className="body_3_block_row">
              <img className="idk_img" src={pizza} alt=""/>
              <div className="body_3_block_row_colum">
                <div className="body_3_block_row_colum_row">
                  <img src={hamburger}  alt=""/>
                  <div className="body_3_block_row_colum_row_text">
                    <div className="body_3_block_row_colum_row_title">Гамбургер мини</div>
                    <div className="dots"><img src={dots} alt=""/></div>
                    <div className="body_3_block_row_colum_row_price">220 ₽</div>
                  </div>
                </div>
                <div className="body_3_block_row_colum_row">
                  <img src={hamburger}  alt=""/>
                  <div className="body_3_block_row_colum_row_text">
                    <div className="body_3_block_row_colum_row_title">Гамбургер мини</div>
                    <div className="dots"><img src={dots} alt=""/></div>
                    <div className="body_3_block_row_colum_row_price">220 ₽</div>
                  </div>
                </div>
                <div className="body_3_block_row_colum_row">
                  <img src={hamburger}  alt=""/>
                  <div className="body_3_block_row_colum_row_text">
                    <div className="body_3_block_row_colum_row_title">Гамбургер мини</div>
                    <div className="dots"><img src={dots} alt=""/></div>
                    <div className="body_3_block_row_colum_row_price">220 ₽</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body_4">
        <div className="container">
          <div className="body_4_block">
            <div className="body_4_block_title">Наше меню</div>
            <div className="body_4_block_row">
              <div className="body_4_block_row_item_bg_recommended">
                <div className="recommended_text">RECOMMENDED</div>
                <div className="body_4_block_row_item_recommended">
                  <img src={burger} alt=""/>
                  <div className="body_4_block_row_item_title">Гамбургер макси</div>
                  <div className="body_4_block_row_item_subtitle">Максимально толстый
                    слой мяса</div>
                  <div className="body_4_block_row_item_btn btn">ЗАКАЗАТЬ</div>
                </div>
              </div>
              <div className="body_4_block_row_item_bg">
                <div className="body_4_block_row_item">
                  <img src={burger} alt=""/>
                  <div className="body_4_block_row_item_title">Гамбургер макси</div>
                  <div className="body_4_block_row_item_subtitle">Максимально толстый
                    слой мяса</div>
                  <div className="body_4_block_row_item_btn btn">ЗАКАЗАТЬ</div>
                </div>
              </div>
              <div className="body_4_block_row_item_bg">
                <div className="body_4_block_row_item">
                  <img src={burger} alt=""/>
                  <div className="body_4_block_row_item_title">Гамбургер макси</div>
                  <div className="body_4_block_row_item_subtitle">Максимально толстый
                    слой мяса</div>
                  <div className="body_4_block_row_item_btn btn">ЗАКАЗАТЬ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body_5">
        <div className="container">
          <div className="body_5_block">
            <div className="body_5_block_text">
              Я надолго запомню мой День рождения, проведённый в этом ресторане! Кусочек родной Армении!!! Отдельное спасибо за комплепент в виде фруктовой тарелки. Будем рекомендовать этот ресторан своим друзьям и родственникам также за рубежом, путешествующих в Санкт-Петербург!!!
            </div>
            <img src={avatar} alt="" className="body_5_block_img"/>
            <div className="body_5_block_title">Посетитель</div>
            <div className="body_5_block_subtitle">Николай</div>
          </div>
        </div>
      </div>
      <div className="body_6">
        <div className="container">
          <div className="body_6_block">
            <div className="body_6_block_title">
              <div className="black">Галерея</div>
              <div className="yellow">Блюд</div>
            </div>
            <img className="idk right" src={Rectangle} alt=""/>
            <img className="idk left" src={Rectangle} alt=""/>
            <div className="body_6_block_images">
              <div className="body_6_block_images_colum">
                <img className="idk_img" src={big_img} alt=""/>
                <div className="body_6_block_images_colum_row">
                  <img className="idk_img" src={coffee} alt=""/>
                  <img className="idk_img" src={goulash} alt=""/>
                </div>
              </div>
              <div className="body_6_block_images_colum">
                <div className="body_6_block_images_colum_row">
                  <img className="idk_img" src={coffee} alt=""/>
                  <img className="idk_img" src={goulash} alt=""/>
                </div>
                <img className="idk_img" src={big_img} alt=""/>
              </div>
            </div>
          </div>
          <div className="body_6_block_second">
            <div className="body_6_block_second_title"><div className="black">Наши</div><div className="yellow">Повара</div></div>
            <div className="body_6_block_second_row">
              <div><img src={one} alt=""/></div>
              <div><img src={two} alt=""/></div>
              <div><img src={three  } alt=""/></div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="sybota">S7b0t4</div>
      </div>
    </div>
  );
}

export default App;
