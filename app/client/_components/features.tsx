"use client"
import Image, { StaticImageData } from "next/image";
import styles from "./features.module.css";
import NFCQR from "../../_img_vid/NFC+QR.webp";
import REALTIME from "../../_img_vid/RealTime.webp";
import SUBSTAINABLE from "../../_img_vid/Sustainable.webp";
import VERSATILITY from "../../_img_vid/Versatility.webp";
import COST from "../../_img_vid/costEffective.jpeg";
import React from "react";
export default function Features(){
    const [ID, setID] = React.useState(0);
    const features = React.useRef<feature>({
        ids: ["feat1","feat2","feat3","feat4","feat5"],
        titles: ["NFC + QR sharing","Real Time Editing","Substainable Network","Versatility","Cost Effective"],
        descriptions: [
            "Seamlessly exchange contact details, social links, and more with a simple tap or scan. Elevate your networking game with this cutting-edge technology.",
            "Gain a competitive edge with instant updates about your business performance. Our real-time editing tools provide data-driven information at your fingertips.",
            "Make a green choice for your business with our sustainable digital business cards. Crafted with the environment in mind, these cards reduce paper waste and contribute to a greener planet. Choose sustainability and leave a positive impact on both your audience and the Earth.",
            "Effortlessly share your contact details for both business and personal needs, providing quick access to a range of digital resources.",
            "The ability to offer affordable and efficient card options that provide excellent value for users. We aim to reduce expenses while maintaining quality and effectiveness in professional networking and communication.",
        ],
        imgs: [NFCQR,REALTIME,SUBSTAINABLE,VERSATILITY,COST],
        alts: ["NFC","Reat time","Substainable network","Versatility","Cost effective"]
    });
    const toggle = (index: number) =>{
        if(ID === index) return
        document.getElementById("focusedEle")!.style.top = `${index*20}%`;
        document.getElementById("rightSide")!.style.transitionDuration = "0s";
        document.getElementById("rightSide")!.style.opacity = "0";
        setTimeout(()=>{
            document.getElementById("rightSide")!.style.transitionDuration = ".3s";
            document.getElementById("rightSide")!.style.opacity = "1";
        },0)
        setID(index)
    }
    return(
        <div className={styles.container}>
            <h1 className={styles.heading}>Features that set SHRE apart!</h1>
            <p>Dive into a world of unbeatable features that SHRE has in store for you.</p>
            <div className={styles.featureContainer}>
                <div className={styles.leftSide}>
                    {features.current.ids.map((id,i)=>
                        <button 
                            key={id} 
                            onClick={()=>toggle(i)} 
                            className={i===ID? styles.selectedBtn : styles.button}
                        >
                            {features.current.titles[i]}
                        </button>
                    )}
                    <div id="focusedEle" className={styles.focusedEle} />
                </div>
                <div id="rightSide" className={styles.rightSide}>
                    <div>
                        <h2>{features.current.titles[ID]}</h2>
                        <p>{features.current.descriptions[ID]}</p>
                    </div>
                    <Image src={features.current.imgs[ID]} alt=""/>
                </div>
            </div>
        </div>
    )
}

interface feature {
    ids: string[],
    titles: string[],
    descriptions: string[],
    imgs: StaticImageData[],
    alts: string[]
}