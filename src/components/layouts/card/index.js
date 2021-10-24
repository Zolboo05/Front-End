import React, { Component } from "react";
import {
  FcGraduationCap,
  FcPodiumWithSpeaker,
  FcReading,
  FcSpeaker,
} from "react-icons/fc";
import "./index.scss";
class Card extends Component {
  render() {
    return (
      <div class="cardContent">
        <div class="card">
          <div class="card-avatar">
            <img src="https://scontent.fuln6-1.fna.fbcdn.net/v/t1.0-9/120113236_104162791452548_4289297123082670263_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGnGiaoC2rB0x0eV15LvBQ0qcIzYQas7oSpwjNhBqzuhOFI7Pci4Cq4b9np9WPsEFTHcCvMGfU6u-x7ePhABpWr&_nc_ohc=sJaEi_at400AX9w1i5H&_nc_ht=scontent.fuln6-1.fna&oh=9be22383a20a709e56a21ed92e4f3f51&oe=6043DD02" />
          </div>
          <div class="card-details">
            <div class="name">Б.Тэмүүжин</div>
            <div class="teacher">
              <div class="teacherBorder">Багш</div>
            </div>
            <div className="dd">
              <div class="occupation">
                {" "}
                <FcReading size={20} style={{ marginRight: "5px" }} />
                Заах чиглэл :
              </div>
              <ul>
                <li>Програмчлал</li>
                <li>Стартап бизнес</li>
                <li>Digital Маркетинг</li>
              </ul>
            </div>
            <div className="dd">
              <div class="occupation">
                {" "}
                <FcGraduationCap size={20} style={{ marginRight: "5px" }} />
                Боловсрол :
              </div>
              <ul>
                <li>
                  2000 – 2001 : Компьютерийн ухааны магистер, Компьютер Техник
                  Менежментийн Сургууль (KTMC)
                </li>
                <li>
                  1996 – 2000 : Компьютерийн ухааны бакалавр, Компьютер Техник
                  Менежментийн Сургууль (KTMC)
                </li>
                <li>1986 – 1996 : Арван жилийн нэгдүгээр дунд сургууль</li>
              </ul>
            </div>
            <div className="dd">
              <div class="occupation">
                {" "}
                <FcPodiumWithSpeaker size={20} style={{ marginRight: "5px" }} />
                Танилцуулга:
              </div>
              <ul>
                <li>2019 – Одоо : Photobank, Zoraida үүсгэн байгуулагч</li>
                <li>
                  2016 – Одоо : 1234.mn - онлайн видео сургалтын пллатформ
                  үүсгэн байгуулагч
                </li>
                <li>2014 – Одоо : Primitive Mind LLC, захирал</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
