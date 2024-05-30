import ClientHeader from "./_components/clientHeader";
import ClientLegend from "./_components/clientLegend";
import FAQs from "./_components/faq";
import Features from "./_components/features";
import GetStarted from "./_components/getStarted";
import SignatureProducts from "./_components/signatureProducts";

export default function Client(){
    return(
        <>
            <ClientHeader />
            <ClientLegend />
            <SignatureProducts />
            
            <GetStarted />
            <Features />
            <FAQs />
        </>
    )
}