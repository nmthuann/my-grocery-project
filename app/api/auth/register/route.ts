import { ErrorInput, SystemError } from "@/constants/errors/errors";
import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/auth/register`
export async function POST(
  req: Request,
) {

    try {

    const body = await req.json();

    const {  first_name, last_name, gender, birthday, phone, email, password, } = body;

    if (!first_name) {
      return new NextResponse(`${ErrorInput.FIELD_MISSING} first_name`, { status: 400 });
    }

    if (!last_name) {
      return new NextResponse(`${ErrorInput.FIELD_MISSING} last_name`, { status: 400 });
    }

    if (!gender) {
      return new NextResponse(`${ErrorInput.FIELD_MISSING} gender`, { status: 400 });
    }

    if (!birthday) {
      return new NextResponse(`${ErrorInput.FIELD_MISSING} birthday`, { status: 400 });
    }

    if (!phone) {
      return new NextResponse(`${ErrorInput.FIELD_MISSING} phone`, { status: 400 });
    }

       if (!email) {
      return new NextResponse(`${ErrorInput.FIELD_MISSING} email`, { status: 400 });
    }
    
    if (!password) {
      return new NextResponse(`${ErrorInput.FIELD_MISSING} password`, { status: 400 });
    }

    //  call api in here
    const register = 
        await axios.post(URL, {email, password, first_name, last_name, gender, birthday, phone});
    if(register.data.message){
      console.log(register.data.message)
      return NextResponse.json({message: register.data.message});
    }
    if(!register.data.message){
       console.log(register.data.message)
      return NextResponse.json(register.data);
    }

    // return NextResponse.json(register.data);
  } catch (error) {
    console.log('[CHECK_REGISTER]', error);
    throw new NextResponse(SystemError.INTERNAL_SERVER_ERROR, { status: 500 })
  }
}