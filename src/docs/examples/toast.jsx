import { ToastProvider, useToast, Button } from '../../index'

function TypesDemo() {
  const { toast } = useToast()
  return (
    <div className="flex flex-wrap gap-2">
      <Button label="Success" onClick={() => toast.success('Saved to inventory')} />
      <Button variant="outline" label="Info" onClick={() => toast.info('Profile updated')} />
      <Button variant="outline" label="Warning" onClick={() => toast.warning('Check the input')} />
      <Button variant="danger" label="Error" onClick={() => toast.error('Payment could not be verified')} />
    </div>
  )
}

function PromiseDemo() {
  const { toast } = useToast()
  return (
    <Button
      label="Publish changes"
      onClick={() =>
        toast.promise(new Promise((resolve) => setTimeout(resolve, 1500)), {
          loading: 'Publishing…',
          success: 'Published to production',
          error: 'Could not publish',
        })
      }
    />
  )
}

export const examples = [
  {
    id: 'types',
    title: 'Types and durations',
    description: 'Success, info and warning dismiss after 4s; errors stay for 6s. Toasts stack and cap themselves.',
    code: `const { toast } = useToast()

toast.success('Saved to inventory')
toast.info('Profile updated')
toast.warning('Check the input')
toast.error('Payment could not be verified')`,
    Demo: () => (
      <ToastProvider position="top-right">
        <TypesDemo />
      </ToastProvider>
    ),
  },
  {
    id: 'promise',
    title: 'Promise state',
    description: 'One call owns the loading, success and error states, so a slow request cannot leave a spinner behind.',
    code: `toast.promise(publish(), {
  loading: 'Publishing…',
  success: 'Published to production',
  error: 'Could not publish',
})`,
    Demo: () => (
      <ToastProvider position="top-right">
        <PromiseDemo />
      </ToastProvider>
    ),
  },
]
