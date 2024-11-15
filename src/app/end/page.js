'use client';
import Footer from "../inlcude/footer";
import Header from "../inlcude/header";

export default function Home() {
  return (
    <>
    <Header />
    
    <h1 className="text-center text-danger mt-5">Please wait...</h1>
    <div className="text-center ">
      <img src="/assets/loader.gif" width={100} />
    </div>
    <p className="text-center text-danger" >We are Verifying Your Request...</p>
    <Footer />
</>
  );
}
