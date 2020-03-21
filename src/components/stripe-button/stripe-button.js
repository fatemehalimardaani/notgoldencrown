import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
const StripeButton = ({ price }) => {

    const priceForStripe = price*100
    const publishedKey='pk_test_dBmZuXhwMbPG7f5K4FfrIrVd00f6B1Bo8v'

    const onToken=(token)=>{
        console.log(token)

        alert('Payment successfull')

    }

     return(
         <StripeCheckout

            label='Pay Now'
            name='CRWN clothing Ltd.'
            billingAddress
            shippingAddress
            description={`Your total is $ ${price}`}
            image='http://svgshare.com/i/CUz.svg'
            amount={priceForStripe}
            panelLabel='pay now'
            token={onToken}
            stripeKey={publishedKey}
         
         
         
         />


        )
}

export default StripeButton;