import { Container } from '../Container'
import { TextField } from '../TextField'
import { Textarea } from '../Textarea'
import Button from '../Button'
import { Icon } from '../Icon'
import { useForm } from '../../hooks/useForm'

const ContactSection = ({
  title = 'Get in Touch',
  subtitle,
  fields = [
    { name: 'name', label: 'Full Name', type: 'text', validation: 'required' },
    { name: 'email', label: 'Email Address', type: 'email', validation: ['required', 'email'] },
    { name: 'message', label: 'Message', type: 'textarea', validation: 'required' },
  ],
  onSubmit,
  submitLabel = 'Send Message',
  contactInfo,
  className = '',
}) => {
  const validate = {}
  fields.forEach(f => { if (f.validation) validate[f.name] = f.validation })

  const initial = {}
  fields.forEach(f => { initial[f.name] = '' })

  const form = useForm({ initial, validate, onSubmit: onSubmit || (() => {}) })

  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <Container maxWidth="lg">
        {(title || subtitle) && (
          <div className="text-center max-w-2xl mx-auto mb-12">
            {title && <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">{title}</h2>}
            {subtitle && <p className="text-base text-gray-600 dark:text-gray-400">{subtitle}</p>}
          </div>
        )}
        <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
          <form onSubmit={form.handleSubmit} className="md:col-span-3 space-y-5">
            {fields.map((field) => (
              field.type === 'textarea' ? (
                <Textarea
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  value={form.values[field.name]}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  error={form.touched[field.name] ? form.errors[field.name] : ''}
                  required={field.validation?.includes('required')}
                />
              ) : (
                <TextField
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  type={field.type}
                  value={form.values[field.name]}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  error={form.touched[field.name] ? form.errors[field.name] : ''}
                  required={field.validation?.includes('required')}
                />
              )
            ))}
            <Button variant="primary" label={form.submitting ? 'Sending...' : submitLabel} type="submit" disabled={form.submitting} loading={form.submitting} />
          </form>
          {contactInfo && (
            <div className="md:col-span-2 space-y-5">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                    {typeof item.icon === 'string' ? <Icon name={item.icon} size={16} className="text-gray-600 dark:text-gray-400" /> : item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{item.label}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

export { ContactSection }
