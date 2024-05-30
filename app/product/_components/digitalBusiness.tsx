import Image from "next/image"
import styles from "./leftRight.module.css"
import Digital from "../../_img_vid/digital.jpeg"
export default function DigitalBusiness(){
    return(
        <div className={styles.container}>
            <Image className={styles.img1} src={Digital} alt="digtal business"/>
            <Image className={styles.img} src={Digital} alt="digtal business"/>
            <div>
                <h1 className={styles.heading}>Digital Business Cards</h1>
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