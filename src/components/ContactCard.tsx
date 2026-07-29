interface ContactCardProps {
  email: string
  phone: string
  bookingHref?: string
}

export function ContactCard({ email, phone, bookingHref }: ContactCardProps) {
  return (
    <div className="contactCard">
      <h3>Contact LANY Books</h3>
      <p>
        <strong>Email:</strong>{' '}
        <a href={`mailto:${email}`}>{email}</a>
      </p>
      <p>
        <strong>Phone:</strong>{' '}
        <a href={`tel:${phone.replace(/\D/g, '')}`}>{phone}</a>
      </p>
      {bookingHref ? (
        <p>
          <a className="button soft" href={bookingHref} target="_blank" rel="noopener noreferrer">
            Book a call
          </a>
        </p>
      ) : (
        <p className="bookingPlaceholder">Booking/calendar link: add to .env VITE_BOOKING_HREF</p>
      )}
    </div>
  )
}
