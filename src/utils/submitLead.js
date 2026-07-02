// TODO: wire this up to a real backend (e.g. a Google Apps Script webhook,
// Formspree, or a custom API). For now leads are only kept locally so the
// forms remain functional in production.
export async function submitLead(data) {
  const lead = { ...data, submittedAt: new Date().toISOString() }
  const stored = JSON.parse(localStorage.getItem('sm_leads') || '[]')
  stored.push(lead)
  localStorage.setItem('sm_leads', JSON.stringify(stored))
  return lead
}
