interface ContactCardProps { email: string; lang?: 'en'|'es' }
export function ContactCard({ email, lang = 'en' }: ContactCardProps) {
  return (<div className="contactCard"><h3>{lang === 'es' ? 'Contactar a LANY Books' : 'Contact LANY Books'}</h3><p><strong>{lang === 'es' ? 'Correo electrónico:' : 'Email:'}</strong> <a href={`mailto:${email}`}>{email}</a></p></div>)
}
