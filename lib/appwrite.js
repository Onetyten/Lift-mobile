import { Platform } from "react-native";
import { Client,Account, ID, Avatars, Databases } from "react-native-appwrite";

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


const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)   // Your Project ID
  .setPlatform(appwriteConfig.Platform);   // Your package name / bundle identifier
 
const account = new Account(client);
const avatar = new Avatars(client);
const databases = new Databases(client)

export const createUser = async (email,password,username)=> {

    try {
        const newAccocunt = await account.create(
            ID.unique(),
            email,
            password,
            username
        )
    
    if (!newAccocunt) throw Error;
    const avatarURL = avatar.getInitials(username)

    await SignIn(email,password)
    const newUser = await databases.createDocument(appwriteConfig.databaseId,appwriteConfig.userCollectionID,ID.unique(),{
        accountId : newAccocunt.$id,
        email,
        password,
        username,
        avatar:avatarURL
    }
    

)
    return newUser


    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export async function SignIn(email,password) {
    try {
        const session = await account.createEmailPasswordSession(email,password)
        return session
    }
     catch (error) {
       throw Error(error) 
    }
}