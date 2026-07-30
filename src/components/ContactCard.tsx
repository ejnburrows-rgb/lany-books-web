interface ContactCardProps { email: string }
export function ContactCard({ email }: ContactCardProps) {
  return (<div className="contactCard"><h3>Contact LANY Books</h3><p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p><p className="contactNote">Phone and scheduling information will appear here once configured.</p></div>)
}
