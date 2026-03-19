export default async function handler(req, res) {
    // Allow CORS from your domain
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { email, name, groupId } = req.body;

    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }

    const MAILERLITE_TOKEN = process.env.MAILERLITE_TOKEN;

    if (!MAILERLITE_TOKEN) {
        console.error("[SafetyBridge API] MAILERLITE_TOKEN env var is not set on the server.");
        return res.status(500).json({ error: "Server configuration error." });
    }

    try {
        const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${MAILERLITE_TOKEN}`
            },
            body: JSON.stringify({
                email,
                fields: { name: name || "" },
                groups: groupId ? [groupId] : []
            })
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("[SafetyBridge API] MailerLite error:", data);
            return res.status(response.status).json({ error: data.message || "MailerLite API error" });
        }

        console.log(`[SafetyBridge API] Successfully synced ${email} to MailerLite.`);
        return res.status(200).json({ success: true, data });

    } catch (err) {
        console.error("[SafetyBridge API] Unexpected error:", err);
        return res.status(500).json({ error: "Internal server error" });
    }
}
