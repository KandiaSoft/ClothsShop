import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GrSe1EneHEFggkWVkfbSi4kLMDjaEqJTRgMVopvGsk1q40z1ovwhOC4pBnf6fMVZ1kV4AAibbwU9d50XLfqdS3f00ly48a6kh';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label = 'Pay Now'
            name = 'CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/LqX.svg'
            description = {`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel= 'Pay Now'
            token={onToken}
            stripeKey ={publishableKey}
        />

  
    );
};

export default StripeCheckoutButton;