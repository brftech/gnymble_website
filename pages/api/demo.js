
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, company, message } = req.body;

    console.log('New demo request:', { name, email, company, message });

    return res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
