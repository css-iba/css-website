import { z } from 'zod'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const attendeeSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.email('Invalid email address').regex(emailRegex, 'Invalid email format'),
  phone_number: z.string().min(10, 'Phone number must be at least 10 digits'),
  cnic: z.string().length(13, 'CNIC must be exactly 13 digits'),
  institute_name: z.string().min(2, 'Institute name is required'),
  reference_number: z.string().min(1, 'Reference number is required'),
  brand_ambassador_code: z.string().optional()
})

const participantSchema = z.object({
  team_lead_email: z.email('Invalid email address').regex(emailRegex, 'Invalid email format'),
  module_name: z.string().min(1, 'Module selection is required'),

  participant1_name: z.string().min(2, 'Name must be at least 2 characters'),
  participant1_phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  participant1_cnic: z.string().length(13, 'CNIC must be exactly 13 digits'),

  participant2_name: z.string().optional().refine(val => !val || val.length >= 2, 'Name must be at least 2 characters'),
  participant2_phone: z.string().optional().refine(val => !val || val.length >= 10, 'Phone number must be at least 10 digits'),
  participant2_cnic: z.string().optional().refine(val => !val || val.length === 13, 'CNIC must be exactly 13 digits'),

  participant3_name: z.string().optional().refine(val => !val || val.length >= 2, 'Name must be at least 2 characters'),
  participant3_phone: z.string().optional().refine(val => !val || val.length >= 10, 'Phone number must be at least 10 digits'),
  participant3_cnic: z.string().optional().refine(val => !val || val.length === 13, 'CNIC must be exactly 13 digits'),

  participant4_name: z.string().optional().refine(val => !val || val.length >= 2, 'Name must be at least 2 characters'),
  participant4_phone: z.string().optional().refine(val => !val || val.length >= 10, 'Phone number must be at least 10 digits'),
  participant4_cnic: z.string().optional().refine(val => !val || val.length === 13, 'CNIC must be exactly 13 digits'),

  institute_name: z.string().min(2, 'Institute name is required'),
  reference_number: z.string().min(1, 'Reference number is required'),
  brand_ambassador_code: z.string().optional()
})

export { attendeeSchema, participantSchema }
