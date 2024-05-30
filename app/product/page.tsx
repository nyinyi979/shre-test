import { Metadata } from "next";
import SignatureProducts from "../_components/_components/signatureProducts";
import CostEffective from "./_components/costEffective";
import SeamlessCRM from "./_components/crm";
import DigitalBusiness from "./_components/digitalBusiness";
import HowItWorks from "../_components/howItWorks";
import LeadToDeal from "./_components/leadToDeal";
import Plan from "./_components/plan";
import WasteLess from "./_components/wasteLess";
export default function(){
    return(
        <>
            <Plan />
            <DigitalBusiness />
            <LeadToDeal />
            <SeamlessCRM />
            <HowItWorks />
            <CostEffective />
            <WasteLess />
            <SignatureProducts />
        </>
    )
}

export const metadata:Metadata = {
    title: "Products",
    description: "SHREF Products"
}