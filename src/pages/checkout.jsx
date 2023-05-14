import { useState, useContext, useEffect } from "react";
import Head from "next/head";
import { v4 as uuid } from "uuid";
import Image from "next/image";
import Modal from "react-modal";
import { CartContext } from "@/context/Context";
import styles from "@/styles/Checkout.module.css";
import lookupShortName from "@/helpers/lookupShortName";
import lookupItem from "@/helpers/lookupItem";
import splitPrice from "@/helpers/splitPrice";
import LinkButton from "@/components/LinkButton";
import Button from "@/components/AddButton";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import checkoutTick from "/public/assets/checkout/icon-order-confirmation.svg";
import GoBackLink from "@/components/GoBackLink";

const checkout = () => {
  const { cartState, cartDispatch } = useContext(CartContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("emoney");
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  const vat = cartState.total * 0.15;
  const vatFormatted = splitPrice(vat);
  let otherItems;
  const numberOfOtherItems = cartState.cart.length - 1;
  if (numberOfOtherItems > 0) {
    otherItems = (
      <div className={styles.modalotheritems}>
        <div className={styles.modalspacer} />
        <p className={styles.modalotheritemsp}>
          and {numberOfOtherItems} other item
        </p>
      </div>
    );
  }
  if (numberOfOtherItems > 1) {
    otherItems = (
      <div className={styles.modalotheritems}>
        <div className={styles.modalspacer} />

        <p className={styles.modalotheritemsp}>
          and {numberOfOtherItems} other items
        </p>
      </div>
    );
  }

  let eMoneySection;
  if (paymentMethod === "emoney") {
    eMoneySection = (
      <div className={styles.emoneysection}>
        <label className={styles.label} htmlFor="emoney-number">
          <p>e-Money Number</p>
          <input
            className={styles.textinput}
            type="text"
            id="emoney-number"
            placeholder="Enter your e-Money number"
          />
        </label>
        <label className={styles.label} htmlFor="emoney-pin">
          <p>e-Money PIN</p>
          <input
            className={styles.textinput}
            type="password"
            id="emoney-pin"
            placeholder="Enter your e-Money PIN"
          />
        </label>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Audiophile</title>
        <meta name="description" content="Audiophile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Menu page="home" />
      </header>
      <main className={styles.main}>
        <GoBackLink referer={cartState.lastPageVisited} color="orange" />
        <div className={styles.page}>
          <section className={styles.section}>
            <form className={styles.form}>
              <h1 className={styles.h1}>Checkout</h1>
              <div className={styles.formcontainer}>
                <h2 className={styles.h2}>Billing Details</h2>
                <label className={styles.label} htmlFor="name">
                  <p>Name</p>
                  <input
                    className={styles.textinput}
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                  />
                </label>

                <label className={styles.label} htmlFor="email">
                  <p>Email Address</p>
                  <input
                    className={styles.textinput}
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                  />
                </label>

                <label className={styles.label} htmlFor="phone">
                  <p>Phone Number</p>
                  <input
                    className={styles.textinput}
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                  />
                </label>
              </div>
              <div className={styles.formcontainer}>
                <h2 className={styles.h2}>Shipping Info</h2>
                <label className={styles.label} htmlFor="address">
                  <p>Your Address</p>
                  <input
                    className={styles.textinput}
                    type="text"
                    id="address"
                    placeholder="Enter your address"
                  />
                </label>
                <label className={styles.label} htmlFor="zip">
                  <p>ZIP Code</p>
                  <input
                    className={styles.textinput}
                    type="text"
                    id="zip"
                    placeholder="Enter your ZIP Code"
                  />
                </label>
                <label className={styles.label} htmlFor="city">
                  <p>City</p>
                  <input
                    className={styles.textinput}
                    type="text"
                    id="city"
                    placeholder="Enter your city"
                  />
                </label>
                <label className={styles.label} htmlFor="country">
                  <p>Country</p>
                  <input
                    className={styles.textinput}
                    type="text"
                    id="country"
                    placeholder="Enter your name"
                  />
                </label>
              </div>
              <div className={styles.formcontainer}>
                <h2 className={styles.h2}>Payment Details</h2>
                <fieldset className={styles.fieldset}>
                  <legend className={styles.legend}>Payment Method</legend>
                  <label className={styles.paymentmethodlabel} htmlFor="emoney">
                    <input
                      type="radio"
                      id="emoney"
                      name="payment"
                      value="emoney"
                      defaultChecked
                      onClick={() => {
                        setPaymentMethod("emoney");
                      }}
                    />
                    e-Money
                  </label>
                  <label className={styles.paymentmethodlabel} htmlFor="cash">
                    <input
                      type="radio"
                      id="cash"
                      name="payment"
                      value="cash"
                      onClick={() => {
                        setPaymentMethod("cash");
                      }}
                    />
                    Cash on Delivery
                  </label>
                </fieldset>
                {eMoneySection}
              </div>
            </form>
          </section>
          <section className={styles.section}>
            <div className={styles.summarycontainer}>
              <h1>Summary</h1>
              <div className={styles.itemcontainer}>
                {cartState.cart.map((product, index) => {
                  const item = lookupItem(product.slug);

                  const addItemsToCart = () => {
                    cartDispatch({ type: "ADD_TO_CART", payload: item });
                  };

                  const removeItemsFromCart = (prod) => {
                    cartDispatch({ type: "REMOVE_FROM_CART", payload: item });
                  };

                  return (
                    <div key={uuid()} className={styles.item}>
                      <div className={styles.imagecontainer}>
                        <Image
                          src={product.image}
                          alt={product.name}
                          className={styles.image}
                        />
                      </div>

                      <div className={styles.namepricecontainer}>
                        <p className={styles.name}>
                          {lookupShortName(product.slug)}
                        </p>
                        <p className={styles.price}>
                          $ {splitPrice(product.price)}
                        </p>
                      </div>
                      <p className={styles.quantity}>{product.quantity}</p>
                    </div>
                  );
                })}
                <div className={styles.totalscontainer}>
                  <div className={styles.totalcontainer}>
                    <p className={styles.total}>Total</p>
                    <p className={styles.totalprice}>
                      $ {splitPrice(cartState.total)}
                    </p>
                  </div>
                  <div className={styles.shippingcontainer}>
                    <p className={styles.total}>Shipping</p>
                    <p className={styles.totalprice}>$ 50</p>
                  </div>
                  <div className={styles.vatcontainer}>
                    <p className={styles.total}>VAT (Included)</p>
                    <p className={styles.totalprice}>$ {vatFormatted}</p>
                  </div>
                  <br />
                  <div className={styles.grandtotalcontainer}>
                    <p className={styles.total}>Grand Total</p>
                    <p className={styles.totalprice}>
                      $ {splitPrice(cartState.total + 50)}
                    </p>
                  </div>
                  <Button
                    content="Continue & pay"
                    color="orangefullwidth"
                    onClick={toggleModal}
                  />
                </div>
              </div>
            </div>
          </section>
          <Modal
            style={{
              overlay: { backgroundColor: "#00000080" },
              content: {
                width: "327px",
                margin: "auto",
                marginTop: "100px",
                inset: "20px",
                display: "flex",
                flexDirection: "column",
                maxHeight: "1000px",
              },
            }}
            isOpen={modalIsOpen}
            onRequestClose={toggleModal}
            className={styles.modal}
          >
            <div className={styles.checkoutimagecontainer}>
              <Image
                src={checkoutTick}
                alt="Checkout completed"
                className={styles.modalimage}
              />
            </div>
            <h1 className={styles.thankyouh1}>Thank you for your order</h1>
            <p className={styles.thankyoup}>
              You will receive an email confirmation shortly.
            </p>
            <div className={styles.modalitemoutercontainer}>
              <div className={styles.modalitemcontainer}>
                {cartState.cart.map((product, index) => (
                  <div key={uuid()} className={styles.modalitem}>
                    <div className={styles.modalimagecontainer}>
                      <Image
                        src={product.image}
                        alt={product.name}
                        className={styles.modalimage}
                      />
                    </div>
                    <div className={styles.modalpricecontainer}>
                      <p className={styles.modalname}>
                        {lookupShortName(product.slug)}
                      </p>
                      <p className={styles.modalprice}>
                        $ {splitPrice(product.price)}
                      </p>
                    </div>
                    <div className={styles.modalquantitycontainer}>
                      <p className={styles.modalquantity}>
                        x {product.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {otherItems}
            <div className={styles.modaltotalcontainer}>
              <p className={styles.modaltotaltitle}>Grand Total</p>
              <p className={styles.modaltotal}>
                $ {splitPrice(cartState.total)}
              </p>
            </div>
            <LinkButton
              url="/"
              content="Back to home"
              color="orangefullwidth"
            />
          </Modal>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default checkout;
