import React from "react";
import './Header.css';

type Props = {
	scroll_dir: string;
    scroll_pos: number;
}

//幅1100以上で表示
const Header : React.FC<Props> = props => {
    return(
        <div className={`header ${props.scroll_pos > window.innerHeight * 0.9 ? 'is_scrolled' : ''}`}>
            <div className="header-wrap">
                <div className="header_logo">
                    <h1>
                        <a href="/">
                            <img src="./images/h_logo_black.svg"></img>
                        </a>
                    </h1>
                </div>
                <div className={`header_nav ${props.scroll_dir == 'down' ? 'is_hidden' : ''}`}>
                    <div></div>
                    <ul className="nav">
                        <li className="spa">
                            <a href="/onnyoku">温浴</a>
                        </li>
                        <li className="spa">
                            <a href="/shyokuhin">食品</a>
                        </li>
                        <li className="spa">
                            <a href="/shyukuhaku ">宿泊</a>
                        </li>
                        <li className="spa">
                            <a href="/sugoshikata">過ごし方</a>
                        </li>
                    </ul>
                    <ul  className="nav2">
                        <li className="osirase">
                            <a>お知らせ</a>
                        </li>
                        <li className="toiawase">
                            <a>問い合わせ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header