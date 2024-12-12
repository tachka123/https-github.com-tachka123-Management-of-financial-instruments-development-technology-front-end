import React, { ChangeEvent, ChangeEventHandler, Fragment, useContext, useEffect, useMemo, useState } from "react";
import "./s.css";
import { ProductsCardContext } from "../../Contexts/ProductsCardContext";
import ProductItemMinimized from "../../Components/ProductItemMinimized";
import { useNavigate } from "react-router";
import Routes from "../../Routing/Routes";
import stripeAPI from "../../api/stripeAPI";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import purchaseAPI from "../../api/purchaseAPI";


const ProductsCartPage = () => {
  const stripe = useStripe();
  const elements = useElements();
  const {
    fetchItemsFromProductsCart,
    cardProductsListByIds,
    clearCart,
    cardProductsList,
  } = useContext(ProductsCardContext);
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    surname: "",
    shippingAddress: "",
  });


  const handleChangeByField = (field: keyof typeof values) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      setValues(s => ({ ...s, [field]: e.target.value }));
    };

  const handleName = handleChangeByField("name");
  const handleSurname = handleChangeByField("surname");
  const handleShippingAddress = handleChangeByField("shippingAddress");


  useEffect(() => {
    fetchItemsFromProductsCart();
  }, []);

  const productsSummeryPrice = useMemo(() => cardProductsListByIds.reduce((acc, item) => {
    acc += item.price;
    return acc;
  }, 0), [cardProductsListByIds]);

  const handlePurchase = async () => {
    if (!stripe || !elements) {
      alert("Stripe или Elements is not initialized");
      return;
    }

    const cardElement = elements.getElement(CardElement);
    try {
      const createPurchaseResponse = await stripeAPI.makePurchase(productsSummeryPrice);
      const clientSecret = createPurchaseResponse.data.clientSecret;
      if (!clientSecret) {
        return alert("Failed to pay");
      }
      if (!stripe) {
        return alert("Failed to connect with payment system");
      }
      if (!cardElement) {
        return alert("Failed to initialize card component");
      }
      const { error, paymentIntent } = await stripe?.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });
      if (error) {
        return alert(error.message);
      }
      purchaseAPI.savePurchase({
        address: values.shippingAddress,
        amount: productsSummeryPrice,
        currency: "USD",
        firstName: values.name,
        lastName: values.surname,
        products: cardProductsList,
      });
      alert("Purchase is sucessfull ");
      clearCart();
      navigate(Routes.home);
    } catch (err) {
      alert(err.message);
    }
  };


  const navigateToProduct = (id: number) => () => {navigate(Routes.product(id));};
  return (
    <div className={"cartPageWrapper"}>
      <h1>Cart</h1>
      <h2>Items list</h2>
      <div className={"cartListWrapper"}>
        {cardProductsListByIds.map(product =>
          <ProductItemMinimized
            onClick={navigateToProduct(product.id)}
            product={product} />)}
      </div>
      <br />
      Products final price: {productsSummeryPrice} $
      <br />
      <br />
      {cardProductsListByIds.length === 0 ? "Please go to home page and add products to purchase cart" : <Fragment>
        <div className={"inputsWrapper"}>
          <ColumnInput onChange={handleName} title={"First name"} value={values.name} />
          <ColumnInput onChange={handleSurname} title={"Last name"} value={values.surname} />
          <ColumnInput onChange={handleShippingAddress} title={"Shipping address"} value={values.shippingAddress} />

        </div>
        <div className={"cardElementWrapper"}>
          <CardElement />

        </div>
        <button onClick={handlePurchase}>Purchase</button>
      </Fragment>}

    </div>
  );
};

interface ColumnInputProps {
  title?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const ColumnInput = ({
  title,
  value,
  onChange,
}: ColumnInputProps) => {
  return <div className={"columnInput"}>
    <label>{title}</label>
    <input value={value} onChange={onChange} />
  </div>;
};

export default ProductsCartPage;