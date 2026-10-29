type EnquiryPayload = Record<string, string>;

export async function submitEnquiry(payload: EnquiryPayload): Promise<void> {
  const response = await fetch("https://arannetwork.com/email/email.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Enquiry submission failed with status ${response.status}`);
  }
}
