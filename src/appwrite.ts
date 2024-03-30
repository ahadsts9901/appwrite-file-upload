import { Client, Storage } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6607b5f4cacef842651a') // Replace with your project ID

export const storage: any = new Storage(client);