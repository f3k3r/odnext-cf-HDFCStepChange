import styles from '../css.module.css';

export default function Footer() {
  return (

    <>
    <div style={{ backgroundColor: "#e2effa", padding: 10 }} className='mt-4' >
      Dear Customer,
      <br /> Welcome to the new login page of HDFC Bank NetBanking. <br /> Its
      lighter look and feel is designed to give you the best possible user
      experience. Please continue to login using your customer ID and password.
    </div>

    <footer className={`mt-4 ${styles.Centering}`}>
      <div className={`${styles.bgPrimaryColor} ${styles.textCenterDiv}`} style={{fontSize:"14px", marginTop:"100px"}}>
        
					© Copyright HDFC Bank Ltd. Terms and Conditions Privacy Policy
							
      </div>
  </footer>  
    </>
  

  );
}
