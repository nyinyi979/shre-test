import Image from "next/image"
import styles from "./leftRight.module.css"
import Contact from "../../_img_vid/contact.jpeg"
export default function LeadToDeal(){
    return(
        <div className={styles.container}>
            <Image className={styles.img1} src={Contact} alt="lead to deal contact"/>
            <div>
                <h1 className={styles.heading}>From Lead to Deal<sup>TM</sup></h1>
                <p>
                    Impress everyone you meet with the <br />
                    quickest and most effective way to share <br />
                    contact details, social media links, and more! <br />
                    Designed for both individuals and teams<br />
                </p>
                <a href="" className={styles.btn}>
                    Get Started
                </a>
            </div>
            <Image className={styles.img} src={Contact} alt="lead to deal contact"/>
        </div>
    )
}