"use server";

// import { jwtDecode } from "jwt-decode";


export async function loginUser(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/v1/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
 
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.message || "Invalid credentials");
    }
    // const token = data.data.token;
    // (await cookies()).set("accessToken", token);
    
    return { success: true, data };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}


// import axios from "axios";

// const API_BASE_URL = "http://localhost:5000/api/v1"; // your Express backend

// Login function (client-side, similar to Server Action)
// export async function loginUser(email: string, password: string) {
//   try {
//     const res = await axios.post(
//       `${API_BASE_URL}/auth/login`,
//       { email, password },
//       {
//         withCredentials: true, // allows cookies
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     return { success: true, data: res.data };
//   } catch (error: any) {
//     return {
//       success: false,
//       message: error.response?.data?.message || error.message,
//     };
//   }
// }











export const registerUser = async(formData:FormData)=>{

  

     const name = formData.get("name")
     const email = formData.get("email")
     const password = formData.get("password")

     try {

      const res= await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/v1/auth/register`,{
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({ name,email, password }),



      })

      const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.message || "Invalid credentials");
    }

    return { success: true, data };
      
     } catch (error:any) {
       return { success: false, message: error.message };
      
     }


}
