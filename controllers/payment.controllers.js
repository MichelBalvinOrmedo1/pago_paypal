import axios from "axios"
import { PAYPAL_API,PAYPAL_API_CLIENT, PAYPAL_API_SECRET } from "../config";

export const  createOrder = async (req,res) => {
    const order ={
        intent: 'CAPTURE',
        purchase_units:[
            {
                amount:{
                    currency_code: 'USD',
                    value: '1000'
                },
                description: "Pago"
            }
        ],
        application_context:{
            brand_name: "mycompany.com",
            landing_page: "LOGIN",
            user_action: "PAY_NOW",
            return_url: "http://localhost:8000/capture-order",
            cancel_url: "http://localhost:8000/cancel-order",
        }
    };
    const response= await axios.post(`${PAYPAL_API}/v2/checkout/orders`,order, {
        auth:{
            username: PAYPAL_API_CLIENT,
            password: PAYPAL_API_SECRET,
        },
    });
    console.log(response.data);
    res.send("create Order")
}


export const  captureOrder = (req,res) => {
    res.send("Captured Order")
}
export const  cancelOrder = (req,res) => {
    res.send("Canceled Order")
}