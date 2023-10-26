import { CheckoutError, MiddlewareError } from "@/constants/errors/errors";
import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


const URL=`${process.env.SERVER_URL}/checkout`

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(
  req: Request,
//   { params }: { params: { storeId: string } }
) {

    const token = cookies().get('token')?.value;
    if(!token){
      return NextResponse.json({message: MiddlewareError.TOKEN_MISSING});
    }
    
    const { productIds } = await req.json();

    if (!productIds || productIds.length === 0) {
        return new NextResponse(CheckoutError.PRODUCT_IDS_REQUIRED, { status: 400 });
    }
    
    console.log(productIds)
  // call API in here
  const res_products = await axios.post(URL, productIds,{
     headers: {
          'Authorization': `Bearer ${token}` 
        }
  }); // -> return url



  return NextResponse.json({ url: res_products.data }, {
    headers: corsHeaders
  });
};