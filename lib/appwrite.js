// import { useState } from "react";
// import { Platform } from "react-native";
// import { Client,Account, ID,Models, Databases} from "react-native-appwrite";

// export const appwriteConfig = {
//     endpoint:'https://cloud.appwrite.io/v1',
//     Platform: 'com.onetyten.RideShare',
//     projectId: '674dd5ec0032af417aae ',
//     databaseId:'674dd8940027b32a0ef6',
//     userCollectionID: '674dd8d400138f276548',
//     profileimageCollectionID: '674dd911002333cda38a',
//     carimageCollectionID: '674dd968000551bcd6e2',
//     storageID: '674ecc0900119a47d776',
// }
// const client = new Client()
// client
//     .setEndpoint(appwriteConfig.endpoint)
//     .setProject(appwriteConfig.projectId)
//     .setPlatform(appwriteConfig.Platform)
// const account = new Account(client);

// const [userInfo, setuserInfo] = useState(null);
// export async function createUser(username,email,password) {
//         try {
//             const user = await account.create(ID.unique(),email,password,username)
//             setuserInfo(await account.get())
//             console.log("user created successfully",user,userInfo)
//             return user
            
//         } catch (error) {
//             console.log("error creating user",error)
//             throw error
//         }
        
//     }


// export async function Authenticate(email,password) {
//     try {
//         await account.createEmailPasswordSession(email,password)
//         setuserInfo(await account.get())
//         console.log("user logged in successfully",userInfo)
//     }
//      catch (error) {
//         console.log("error loggin in user",error)
//         throw error  
//     }
// }

// export async function getCurrentUser () {
//     try {
//         setuserInfo(await account.get())
//         console.log(userInfo)
//         if (!currentAccount) throw Error
//     } catch (error) {
//         console.log(error)
//     }
    
// }

