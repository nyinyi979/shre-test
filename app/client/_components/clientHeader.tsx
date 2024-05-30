import styles from "./clientHeader.module.css"
export default function ClientHeader(){
    return(
      <div className={styles.container}>
        <p className={styles.heading}>Our Clients</p>
			<div className={styles.flexContainer}>
				<div className={styles.diamond}>
					Diamond
				</div>
				<div className={styles.gold}>
					Gold
				</div>
				<div className={styles.silver}>
					Silver
				</div>
				<div className={styles.bronze}>
					Bronze
				</div>
			</div>
      </div>
    )
}