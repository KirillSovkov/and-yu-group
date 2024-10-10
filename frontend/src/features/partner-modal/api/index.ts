import axios from 'axios';

export async function PartnerSendMail({ partner, phonePartner, activityPartner }: { partner: string, phonePartner: string, activityPartner: string }) {
  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/send-email-partner`, {
    partner: partner,
    phonePartner:phonePartner,
    activityPartner: activityPartner,
  })
  return response
}