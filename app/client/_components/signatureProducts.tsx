import Image from "next/image"
import styles from "./signatureProducts.module.css"
import Metal from "../../_img_vid/metal-card.jpeg"
import PVC from "../../_img_vid/pvc.jpeg"
import PhoneTag from "../../_img_vid/phone.jpeg"
import TableTalker from "../../_img_vid/table-talker.jpeg"
export default function SignatureProducts(){
    return(
        <div className={styles.container}>
            <p className={styles.heading}>Our signature products</p>
            <div className={styles.flexContainer}>
                <div className={styles.metal}>
                    <p className={styles.heading2}>Metal business card</p>
                    <div className={styles.imgContainer}>
                        <Image src={Metal} width={0} height={0} alt="Metal business card"/>
                    </div>
                    <p>
                        Lorem Ipsum Dolar <br />
                        Lorem Ipsum <br />
                        DolarLorem Ipsum Dolar <br />
                        Lorem Ipsum <br />
                        DolarLorem Ipsum Dolar <br />
                        Lorem Ipsum Dolar <br />
                    </p>
                </div>
                <div className={styles.pvc}>
                    <p className={styles.heading2}>PVC business card</p>
                    <div className={styles.imgContainer}>
                        <Image src={PVC} width={0} height={0} alt="PVC business card"/>
                    </div>
                    <p>
                        Lorem Ipsum Dolar <br />
                        Lorem Ipsum <br />
                        DolarLorem Ipsum Dolar <br />
                        Lorem Ipsum <br />
                        DolarLorem Ipsum Dolar <br />
                        Lorem Ipsum Dolar <br />
                    </p>
                </div>
                <div className={styles.phone}>
                    <p className={styles.heading2}>Phone Tags</p>
                    <div className={styles.imgContainer}>
                        <Image src={PhoneTag} width={0} height={0} alt="Phone tags"/>
                    </div>
                    <p>
                        Lorem Ipsum Dolar <br />
                        Lorem Ipsum <br />
                        DolarLorem Ipsum Dolar <br />
                        Lorem Ipsum <br />
                        DolarLorem Ipsum Dolar <br />
                        Lorem Ipsum Dolar <br />
                    </p>
                </div>
                <div className={styles.table}>
                    <p className={styles.heading2}>Table Talker</p>
                    <div className={styles.imgContainer}>
                        <Image src={TableTalker} width={0} height={0} alt="Table talker"/>
                    </div>
                    <p>
                        Lorem Ipsum Dolar <br />
                        Lorem Ipsum <br />
                        DolarLorem Ipsum Dolar <br />
                        Lorem Ipsum <br />
                        DolarLorem Ipsum Dolar <br />
                        Lorem Ipsum Dolar <br />
                    </p>
                </div>
            </div>
        </div>
    )
}
