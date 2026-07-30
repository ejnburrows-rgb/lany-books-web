interface ContactCardProps {
  email: string
  phone: string
  bookingHref?: string
}

export function ContactCard({ email, phone, bookingHref }: ContactCardProps) {
  const verifiedPhone = phone && !/^\(?555\)?[\s-]/.test(phone) ? phone : ''

  return (
    <div className="contactCard">
      <h3>Contact LANY Books</h3>
      <p>
        <strong>Email:</strong>{' '}
        <a href={`mailto:${email}`}>{email}</a>
      </p>
      {verifiedPhone ? (
        <p>
          <strong>Phone:</strong>{' '}
          <a href={`tel:${verifiedPhone.replace(/\D/g, '')}`}>{verifiedPhone}</a>
        </p>
      ) : null}
      {bookingHref ? (
        <p>
          <a className="button soft" href={bookingHref} target="_blank" rel="noopener noreferrer">
            Book a call
          </a>
        </p>
      ) : null}
    </div>
  )
}
