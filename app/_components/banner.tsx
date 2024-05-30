"use client"
import Image from "next/image"
import Logo from "@/app/_img_vid/logo-violet.svg"
import styles from "./banner.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
export default function Banner(){
	let path = usePathname();
  	return(
    	<div className={styles.bannerContainer}>
    	  	<Image alt="logo" src={Logo} priority/>
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
			</div>
    	</div>
  	)
}