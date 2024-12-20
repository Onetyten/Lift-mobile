import { useState } from "react";
import { Platform } from "react-native";
import { Client,Account, ID,Models} from "react-native-appwrite";

export const appwriteConfig = {
    endpoint:'https://cloud.appwrite.io/v1',
    Platform: 'com.onetyten.RideShare',
    projectId: '674dd5ec0032af417aae ',
    databaseId:'674dd8940027b32a0ef6',
    userCollectionID: '674dd8d400138f276548',
    profileimageCollectionID: '674dd911002333cda38a',
    carimageCollectionID: '674dd968000551bcd6e2',
    storageID: '674ecc0900119a47d776',
}
const client = new Client()
client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.Platform)
const account = new Account(client);

    const [loggedInUser, setLoggedInUser] = useState(null);
export async function createUser(username,email,password) {
        try {
            const user = await account.create(ID.unique(),email,password,username)
            setLoggedInUser(await account.get())
            console.log("user created successfully",user,loggedInUser)
            return user
            
        } catch (error) {
            console.log("error creating user",error)
            throw error
        }
        
    }
export async function Authenticate(email,password) {
    try {
        await account.createEmailPasswordSession(email,password)
        // setLoggedInUser(await account.get())
        console.log("user logged in successfully")
    }
     catch (error) {
        console.log("error loggin in user",error)
        throw error  
    }
}


