import { Metadata } from "next";
import ClientHeader from "./_components/clientHeader";
import ClientLegend from "./_components/clientLegend";
import FAQs from "./_components/faq";
import Features from "./_components/features";
import GetStarted from "./_components/getStarted";
import SignatureProducts from "../_components/signatureProducts";
import HowItWorks from "../_components/howItWorks";

export default function Client(){
    return(
        <>
            <ClientHeader />
            <ClientLegend />
            <SignatureProducts />
            <HowItWorks />
            <GetStarted />
            <Features />
            <FAQs />
        </>
    )
}

export const metadata:Metadata = {
    title: "Clients",
    description: "SHREF Client"
}