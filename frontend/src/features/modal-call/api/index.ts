import axios from 'axios';

export async function ClientSendMail({ client, phoneClient }: { client: string, phoneClient: string }) {
  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/send-email-client`, {
    client: client,
    phoneClient: phoneClient,
  })
  return response
}