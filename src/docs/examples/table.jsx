import { Table, Badge } from '../../index'

const COLUMNS = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'role', label: 'Role' },
  { key: 'status', label: 'Status', render: (value) => <Badge color={value === 'Active' ? 'green' : 'gray'} size="sm">{value}</Badge> },
]

const ROWS = [
  { id: 1, name: 'John Mwangi', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Wanjiku', role: 'Cashier', status: 'Active' },
  { id: 3, name: 'Peter Otieno', role: 'Stock', status: 'Inactive' },
]

export const examples = [
  {
    id: 'sortable',
    title: 'Sortable and striped',
    description: 'Click a sortable header to reorder. `render` lets a column return any node, not just text.',
    code: `<Table
  columns={[
    { key: 'name', label: 'Name', sortable: true },
    { key: 'role', label: 'Role' },
    {
      key: 'status',
      label: 'Status',
      render: (value) => <Badge color="green" size="sm">{value}</Badge>,
    },
  ]}
  data={rows}
  sortable
  striped
/>`,
    Demo: () => <Table columns={COLUMNS} data={ROWS} sortable striped />,
  },
  {
    id: 'compact',
    title: 'Compact rows',
    description: 'Less padding for dense operations screens. `onRowClick` makes each row actionable.',
    code: `<Table
  columns={columns}
  data={rows}
  compact
  onRowClick={(row) => console.log(row.id)}
/>`,
    Demo: () => (
      <Table
        columns={COLUMNS}
        data={ROWS}
        compact
        onRowClick={() => {}}
      />
    ),
  },
]
