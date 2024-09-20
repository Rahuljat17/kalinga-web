import React from "react";
import { useCallback } from "react";
import useRazorpay from "react-razorpay";
import Button from "@mui/material/Button";
export default function Payment(props) {
  const [Razorpay] = useRazorpay();
  console.log(props.org_details);
  const handlePayment = async (params) => {
    console.log("called");
    // const order = await createOrder(params); //  Create order on your backend
    const response = await fetch(
      "https://9fe5-103-191-198-65.ngrok-free.app/create-order",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: props.amount }),
      }
    );

    const order = await response.json();
    console.log(order);
    console.log("pppppppppppp", props.org_details._id);
    const options = {
      key: "rzp_live_ShsSitka8ryWRM", // Enter the Key ID generated from the Dashboard
      amount: props.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      order_id: order.result.id,
      prefill: {
        name: props.org_details.org_name,
        email: props.org_details.email,
        contact: props.org_details.phone,
      }, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      notes: {
        address: "Razorpay Corporate Office",
        org_id: props.org_details._id.toString(),
      },
    };

    const rzp1 = new Razorpay(options);

    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    rzp1.open();
  };
  return (
    <div>
      <Button onClick={handlePayment} fullWidth variant="outlined">
        Click to Pay
      </Button>
    </div>
  );
}
