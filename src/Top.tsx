import React from "react";
import './Top.css';
import useDetectScroll, { Axis } from '@smakss/react-scroll-direction';
import Header from "./Header";

//幅1100以上で表示
function Top(){
    const { scrollDir, scrollPosition } = useDetectScroll({
      axis: Axis.Y, // Y軸でスクロール方向を検知
    });
    return(
        <>
            <div className="top">
                <Header scroll_dir={scrollDir}/>
            </div>
        </>
    )
}

export default Top;