"use client"
import Image from "next/image"
import Logo from "@/app/_img_vid/logo-violet.svg"
import styles from "./banner.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
export default function Banner(){
	let path = usePathname();
	// const [menuState, setMenuState] = React.useState<"hidden"|"shown"|"stationary">("stationary");
	// const openMenu = () =>{
	// 	setMenuState("shown");
	// }
	// const hideMenu = () =>{
	// 	setMenuState("hidden")
	// }
  	return(
		<div className={styles.bannerContainer}>
			<Link href={"/"}><Image alt="logo" src={Logo} priority/></Link>
			<div className={styles.rightContainer}>
				<Link 
					href={"/client"}
					className={path==="/client"? styles.activeLink : styles.link}
				>
					CLIENT
				</Link>
				<Link 
					href={"/product"}
					className={path==="/product"? styles.activeLink : styles.link}
				>
					PRODUCTS
				</Link>
				{/* still need changes */}
				{/* <button className={styles.menuBtn} onClick={openMenu}>
					=
					<div onClick={hideMenu} className={menuState==="shown"? styles.shownMenu : styles.hiddenMenu}>
						<div className={menuState==="shown"? styles.openedLinkContainer : styles.closedLinkContainer}>
							<a href="">Product</a>
						</div>
						<div className={ menuState==="shown"? styles.openedLinkContainer : styles.closedLinkContainer}>
							<a href="">Clients</a>
						</div>
					</div>
				</button> */}
			</div>
		</div>
  	)
}