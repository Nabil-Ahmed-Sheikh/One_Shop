import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeButton({ price, pay }) {
  const priceForStripe = price * 100; //stripe asks amount in cents
  const publishableKey = "pk_test_CXkmJ4cc7Ap4BZJDGLDH8R3A00fs1ubI6N";

  const onToken = (token) => {
    pay(token, price);
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="One Shop"
      image="https://image.flaticon.com/icons/png/512/102/102655.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeButton;
