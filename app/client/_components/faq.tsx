"use client"
import React from "react"
import styles from "./faq.module.css"
export default function FAQs(){
    const [opened, setOpened] = React.useState<boolean[]>(new Array(8).fill(false));
    const toggle = (index: number) =>{
        let newArray = [...opened];
        newArray[index] = !opened[index];
        setOpened(newArray);
    }
    return(
        <div className={styles.container}>
            <h1>FAQs</h1>
            <div onClick={()=>toggle(0)} className={styles.headingContainer}>
                <h2 unselectable="on">What is SHRE?</h2>
                <span className={opened[0]? styles.openedArrow : styles.closedArrow}>&gt;</span>
            </div>
            <p className={opened[0]? styles.opened : styles.closed}>
                SHRE is a cutting-edge digital business card platform revolutionizing modern networking possibilities. Seamlessly bridge traditional and digital
                networking methods for more impactful connections, real-time updates on your critical details, and effortless sharing of information with your contacts.
            </p>
            <div onClick={()=>toggle(1)} className={styles.headingContainer}>
                <h2 onClick={()=>toggle(1)} unselectable="on">What products do you offer?</h2>
                <span className={opened[1]? styles.openedArrow : styles.closedArrow}>&gt;</span>
            </div>
            <p className={opened[1]? styles.opened : styles.closed}>
                We offer a range of innovative networking solutions, including metal and PVC business cards, phone tags, and table talkers, all designed to streamline
                your networking experience            
            </p>
            <div onClick={()=>toggle(2)} className={styles.headingContainer}>
                <h2 unselectable="on">How do SHRE products work?</h2>
                <span className={opened[2]? styles.openedArrow : styles.closedArrow}>&gt;</span>
            </div>
            <p className={opened[2]? styles.opened : styles.closed}>
                1. Order: Choose your preferred SHRE NFC-enabled product.
                2. Setup: Customize your profile via our dashboard and app.
                3. Sharing via NFC: Tap your device against the tag for instant sharing.
                4. Sharing via QR Code: Scan the QR code for quick access.
                5. Effortless Networking: One tap, effortless sharing, instant access.
            </p>
            <div onClick={()=>toggle(3)} className={styles.headingContainer}>
                <h2 unselectable="on">What are the advantages of SHRE products?</h2>
                <span className={opened[3]? styles.openedArrow : styles.closedArrow}>&gt;</span>
            </div>
            <p className={opened[3]? styles.opened : styles.closed}>
                With our products, you'll experience effortless connections for an enhanced networking experience. SHRE products also offer real-time updates, to
                keep your contacts updated with your latest
                information, and lead conversion capabilities, to accelerate the process of turning contats into customers. Whether for business or personal use, SHRE
                products are designed to modernize and
                maximize the way you network.
            </p>
            <div onClick={()=>toggle(4)} className={styles.headingContainer}>
                <h2 unselectable="on">Can the other person save and exchange contacts without the SHRE app?</h2>
                <span className={opened[4]? styles.openedArrow : styles.closedArrow}>&gt;</span>
            </div>
            <p className={opened[4]? styles.opened : styles.closed}>
                Yes, recipients can save and exchange contacts without being SHRE users or having the SHRE app.
            </p>
            <div onClick={()=>toggle(5)} className={styles.headingContainer}>
                <h2 unselectable="on">How much does it cost?</h2>
                <span className={opened[5]? styles.openedArrow : styles.closedArrow}>&gt;</span>
            </div>
            <p className={opened[5]? styles.opened : styles.closed}>
                Our Freemium plan is (and will always be) completely free, meaning you can start your SHRE journey without risk. We are also working on SHRE Pro and
                SHRE Teams, both coming soon, for more bespoke and tailored networking solutions.
            </p>
            <div onClick={()=>toggle(6)} className={styles.headingContainer}>
                <h2 unselectable="on">I'd like to hear more about your sustainability commitment.</h2>
                <span className={opened[6]? styles.openedArrow : styles.closedArrow}>&gt;</span>
            </div>
            <p className={opened[6]? styles.opened : styles.closed}>
                Our sustainable digital business cards reduce paper waste, contributing to a greener planet while leaving a positive impact on your audience and the Earth.
            </p>
            <div onClick={()=>toggle(7)} className={styles.headingContainer}>
                <h2 unselectable="on">What is the lead collection process?</h2>
                <span className={opened[7]? styles.openedArrow : styles.closedArrow}>&gt;</span>
            </div>
            <p className={opened[7]? styles.opened : styles.closed}>
                Automatically store and centralize your lead data on our mobile app. You can easily save and filter leads by various criteria (including recency, industry, job title or country), without the need for
                the other party to be a SHRE user or to have the SHRE app.
            </p>
        </div>
    )
}