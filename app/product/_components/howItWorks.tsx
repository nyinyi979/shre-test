import styles from "./howItWorks.module.css"
import Process1 from "@/app/_img_vid/howItWorks1.png"
import Process2 from "@/app/_img_vid/howItWorks2.png"
import Process3 from "@/app/_img_vid/howItWorks3.png"
import Process4 from "@/app/_img_vid/howItWorks4.png"
import Image from "next/image"
export default function HowItWorks(){
    return(
        <div className={styles.container}>
            <h1 className={styles.heading}>How it works</h1>
            <div className={styles.imgContainer}>
                <div className={styles.img}>
                    <Image className={styles.img} src={Process1} alt="how it works 1"/>
                </div>
                <div className={styles.img}>
                    <Image className={styles.img} src={Process2} alt="how it works 2"/>
                </div>
                <div className={styles.img}>
                    <Image className={styles.img} src={Process3} alt="how it works 3"/>
                </div>
                <div className={styles.img}>
                    <Image className={styles.img} src={Process4} alt="how it works 4"/>
                </div>
            </div>
        </div>
    )
}