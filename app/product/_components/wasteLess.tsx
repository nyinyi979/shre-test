import Image from "next/image"
import styles from "./leftRight.module.css"
import Waste from "../../_img_vid/CostEffective.webp"
export default function WasteLess(){
    return(
        <div className={styles.container}>
            <Image className={styles.img} src={Waste} alt="digtal business"/>
            <div>
                <h1 className={styles.heading}>Waste less, save more</h1>
                <p>
                    Impress everyone you meet with the 
                    quickest and most effective way to share 
                    contact details, social media links, and more! 
                    Designed for both individuals and teams
                </p>
                <a href="" className={styles.btn}>
                    Get Started
                </a>
            </div>
        </div>
    )
}