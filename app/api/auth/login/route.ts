
 
import { AuthExceptionMessages, ErrorInput, SystemError } from '@/constants/errors/errors';
import { Messages } from '@/constants/notifications/message';
import axios from 'axios';
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server';
 
const URL=`${process.env.SERVER_URL}/auth/login`
export async function POST(
  req: Request,
) {
     const token = cookies().get('token')?.value;
    // console.log("token:::", token)
    if(token){
      return new NextResponse(Messages.EMAIL_VALID, { status: 200 });
    }

    const body = await req.json();

    const { email, password } = body;

    if (!email) {
      return new NextResponse(ErrorInput.FIELD_MISSING, { status: 400 });
    }
       if (!password) {
      return new NextResponse(ErrorInput.FIELD_MISSING, { status: 400 });
    }

    const checkLogin = await axios.post(URL, {email, password});
    // console.log("checkLogin:::", checkLogin.data.access_token)
    const oneDay = 24 * 60 * 60 * 1000;
    // cookies().set({
    //     name: 'token',
    //     value: checkLogin.data.access_token,
    //     httpOnly: true,
    //     path: '/', 
    //     expires: Date.now() - oneDay
    //   })
    cookies().set('token', checkLogin.data.access_token) // {httpOnly: true, expires: Date.now() - oneDay }
    console.log(`${cookies().get('token')?.value}`)  

    if(checkLogin.data.message === AuthExceptionMessages.PASSWORD_WRONG){
      return NextResponse.json({message: checkLogin.data.message});
    }
    else if (checkLogin.data.message === AuthExceptionMessages.LOGIN_INVAILD){
      return NextResponse.json({message: checkLogin.data.message});
    }
    return NextResponse.json(checkLogin.data);
}