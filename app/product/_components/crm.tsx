import Image from "next/image"
import styles from "./leftRight.module.css"
import CRM from "../../_img_vid/contact.jpeg"
export default function SeamlessCRM(){
    return(
        <div className={styles.container}>
            <Image className={styles.img1} src={CRM} alt="Seamless crm"/>
            <Image className={styles.img} src={CRM} alt="Seamless crm"/>
            <div>
                <h1>Seamless CRM Integrations</h1>
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