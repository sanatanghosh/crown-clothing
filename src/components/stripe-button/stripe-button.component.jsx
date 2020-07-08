import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {

    const priceForStripe = price * 100;

    const publishableKey = 'pk_test_51H2g8cJlGhcpu44upjniD1MifJogQFIwPHlkT2Zz9d7EQd08EFSt1EkVFUsLzRUm8V9DgMTyqUMGTwjHNPJbifDq002oRAL8vm';

  const   onToken = token => {
        console.log(token);
        alert ('Payment Sucessful');
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name='CROWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;