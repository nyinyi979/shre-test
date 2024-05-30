import Image from "next/image"
import styles from "./leftRight.module.css"
import Cost from "../../_img_vid/costEffective.jpeg"
export default function CostEffective(){
    return(
        <div className={styles.container}>
            <div>
                <h1 className={styles.heading}>The cost-effective networking solution</h1>
                <Image className={styles.img1} src={Cost} alt="Cost effective"/>
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
            <Image className={styles.img} src={Cost} alt="Cost effective"/>
        </div>
    )
}