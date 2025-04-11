import React from "react";
import './Header.css';

type Props = {
	scroll_dir: string
}

//幅1100以上で表示
const Header : React.FC<Props> = props => {
    return(
        <div className="header">
            <div className="menu">
                {props.scroll_dir}
            </div>
        </div>
    )
}

export default Header