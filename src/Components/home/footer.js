import { Typography } from "@mui/material";
import styles from '../../css/footer.module.css';
import React from "react";

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.row}>
                <Typography className="rowHeading">Get to Know Us</Typography>
                <ul>
                    <li><a href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer" target="blank">About Us</a></li>
                    <li><a href="https://amazon.jobs/" target="blank">Careers</a></li>
                    <li><a href="https://press.aboutamazon.in/?utm_source=gateway&utm_medium=footer" target="blank">Press Releases</a></li>
                    <li><a href="https://www.amazon.science/" target="blank">Amazon Science</a></li>
                </ul>
            </div>
            <div className={styles.row}>
                <Typography className="rowHeading">Connect with Us</Typography>
                <ul>
                    <li><a href="https://www.amazon.in/gp/redirect.html/ref=footer_fb?location=http://www.facebook.com/AmazonIN&token=2075D5EAC7BB214089728E2183FD391706D41E94&6" target="blank">Facebook</a></li>
                    <li><a href="https://www.amazon.in/gp/redirect.html/ref=footer_twitter?location=http://twitter.com/AmazonIN&token=A309DFBFCB1E37A808FF531934855DC817F130B6&6" target="blank">Twitter</a></li>
                    <li><a href="https://www.amazon.in/gp/redirect.html?location=https://www.instagram.com/amazondotin&token=264882C912E9D005CB1D9B61F12E125D5DF9BFC7&source=standards" target="blank">Instagram</a></li>
                </ul>
            </div>
            <div className={styles.row}>
                <Typography className="rowHeading">Make Money with Us</Typography>
                <ul>
                    <li><Typography>Sell on Amazon</Typography></li>
                    <li><Typography>Sell under Amazon Accelerator</Typography></li>
                    <li><Typography>Protect and Build Your Brand</Typography></li>
                    <li><Typography>Amazon Global Selling</Typography></li>
                    <li><Typography>Become an Affiliate</Typography></li>
                    <li><Typography>Fulfilment by Amazon</Typography></li>
                    <li><Typography>Advertise Your Products</Typography></li>
                    <li><Typography>Amazon Pay on Merchants</Typography></li>
                </ul>
            </div>
            <div className={styles.row}>
                <Typography className="rowHeading">Let Us Help You</Typography>
                <ul>
                    <li><a href="https://www.amazon.in/gp/help/customer/display.html?nodeId=GDFU3JS5AL6SYHRD&ref_=footer_covid" target="blank">COVID-19 and Amazon</a></li>
                    <li><a href="https://www.amazon.in/gp/help/customer/display.html?nodeId=201083470&ref_=footer_swc" target="blank">100% Purchase Protection</a></li>
                    <li><a href="https://www.amazon.in/gp/browse.html?node=6967393031&ref_=footer_mobapp" target="blank">Amazon App Download</a></li>
                    <li><a href="https://www.amazon.in/gp/help/customer/display.html?nodeId=200507590&ref_=footer_gw_m_b_he" target="blank">Help</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;