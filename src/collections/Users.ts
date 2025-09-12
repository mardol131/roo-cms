import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Customer', value: 'customer' },
        { label: 'Advertiser', value: 'advertiser' },
      ],
      required: true,
      defaultValue: 'user',
    },
    // Email added by default
    // Add more fields as needed
  ],
}
