import Image from "next/image"
import styles from "./plan.module.css"
import Free from "@/app/_img_vid/freemium.svg"
import Pro from "@/app/_img_vid/shrepro.svg"
import Team from "@/app/_img_vid/shreteams.svg"
export default function Plan(){
    return(
        <div className={styles.container}>
            <h1 className={styles.heading}>Our plans</h1>
            <div className={styles.plansContainer}>
                <div className={styles.plan}>
                    <Image width={80} height={80} src={Pro} alt="SHRE PRO"/>
                    <p className={styles.pckName}>SHRE Pro</p>
                    <p className={styles.pckHead}>Elevate your game</p>
                    <p className={styles.p}>Upgrade to our Pro Plan and unlock a world of possibilities. In addition to Free Plan features, Pro Plan users can also:</p>
                    <button disabled className={styles.otherPlanBtn}>Coming Soon!</button>
                </div>
                <div className={styles.mainPlan}>
                    <Image width={80} height={80} src={Free} alt="free"/>
                    <p className={styles.pckName}>Freemium User</p>
                    <p><span className={styles.price}>£ 0</span><sub>/forever</sub></p>
                    <p className={styles.pckHead}>Networking essentials</p>
                    <p className={styles.p}>Our Free Plan is perfect for individuals who want to experience the power of SHRE. With this plan, you can:</p>
                    <button className={styles.primaryBtn}>Get your now!</button>
                </div>
                <div className={styles.plan}>
                    <Image width={80} height={80} src={Team} alt="free"/>
                    <p className={styles.pckName}>SHRE Teams</p>
                    <p className={styles.pckHead}>Tailored for your success</p>
                    <p className={styles.p}>Our Teams Plan is fully customisable, it includes all the features of the Pro Plan and can be tailored further, such as:</p>
                    <button disabled className={styles.otherPlanBtn}>Coming Soon!</button>
                </div>
            </div>
        </div>
    )
}