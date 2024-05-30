import styles from "./clientLegend.module.css"
export default function ClientLegend(){
    return(
        <div className={styles.container}>
            <video className={styles.video} src="./hero.mp4" autoPlay loop/>
            <div>
                <h1 className={styles.heading}>Share anything, with a tap or scan!</h1>
                <p>
                    Impress everyone you meet with the 
                    quickest and most effective way to share 
                    contact details, social media links, and more! 
                    Designed for both individuals and teams. 
                </p>
                <a href="" className={styles.btn}>
                    Buy Now 
                </a>
            </div>
        </div>
    )
}