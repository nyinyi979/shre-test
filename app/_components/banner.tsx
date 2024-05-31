"use client"
import React from "react"
import Image from "next/image"
import Logo from "@/app/_img_vid/logo-violet.svg"
import styles from "./banner.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation"
import MenuSvg from "@/app/_img_vid/menu.svg"
export default function Banner(){
	let path = usePathname();
	// stationary is required for first stage hidden
	const [menuState, setMenuState] = React.useState<"hidden"|"shown"|"stationary">("stationary");
	const openMenu = () =>{
		setMenuState("shown");
	}
	const hideMenu = () =>{
		setMenuState("hidden")
	}
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
				<button className={styles.menuBtn} onClick={openMenu}>
					<Image src={MenuSvg} alt="Menu"/>
				</button>
				<div className={menuState==="shown"? styles.shownMenu : styles.hiddenMenu}>
					<div onClick={hideMenu} className={menuState==="stationary"? styles.stationary : menuState==="shown"? styles.openedLinkContainer : styles.closedLinkContainer}>
						<Link href="/product">Product</Link>
					</div>
					<div onClick={hideMenu} className={menuState==="stationary"? styles.stationary : menuState==="shown"? styles.openedLinkContainer : styles.closedLinkContainer}>
						<Link href="/client">Clients</Link>
					</div>
					<button className={menuState==="shown"? styles.closeBtn : styles.stationary} onClick={hideMenu}>
						x
					</button>
				</div>
			</div>
		</div>
  	)
}