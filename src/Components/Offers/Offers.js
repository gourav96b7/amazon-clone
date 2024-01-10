import { Card, Drawer, Typography } from "@mui/material";
import styles from './offers.module.css';
import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import {
  BankOfferModal,
  NoCostEmiModal,
  PartnerOffersModal,
} from "./OffersModal";

function Offers() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const toggleDrawer = (value) => {
    setDrawerOpen(value);
  };
  const showModal = (value) => {
    setModalType(value);
  };
  return (
    <div className={styles.main}>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        transitionDuration={400}
      >
        <div className={styles.modal}>
          {modalType === "NoCostEmiModal" && (
            <NoCostEmiModal toggleDrawer={toggleDrawer} />
          )}
          {modalType === "BankOfferModal" && (
            <BankOfferModal toggleDrawer={toggleDrawer} />
          )}
          {modalType === "PartnerOffersModal" && (
            <PartnerOffersModal toggleDrawer={toggleDrawer} />
          )}
        </div>
      </Drawer>
      <Card className={styles.card}>
        <Typography className={styles.title}>No Cost EMI</Typography>
        <Typography className={styles.text}>
          No Cost EMI available on Amazon Pay Later.
        </Typography>
        <Typography
          className={styles.offer}
          onClick={() => {
            showModal("NoCostEmiModal");
            toggleDrawer(true);
          }}
        >
          1 offer <AiOutlineRight className={styles.offerIcon} />
        </Typography>
      </Card>
      <Card className={styles.card}>
        <Typography className={styles.title}>Bank Offer</Typography>
        <Typography className={styles.text}>
          5% Instant Discount up to INR 250 on HSBC Cashback Ca...
        </Typography>
        <Typography
          className={styles.offer}
          onClick={() => {
            showModal("BankOfferModal");
            toggleDrawer(true);
          }}
        >
          2 offers <AiOutlineRight className={styles.offerIcon} />
        </Typography>
      </Card>
      <Card className={styles.card}>
        <Typography className={styles.title}>Partner Offer</Typography>
        <Typography className={styles.text}>
          Get GST invoice and save up to 28% on business purchases.
        </Typography>
        <Typography
          className={styles.offer}
          onClick={() => {
            showModal("PartnerOffersModal");
            toggleDrawer(true);
          }}
        >
          1 offer <AiOutlineRight className={styles.offerIcon} />
        </Typography>
      </Card>
    </div>
  );
}

export default Offers;
