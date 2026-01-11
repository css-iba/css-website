import { z } from 'zod'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const digitsOnly = /^\d+$/

const attendeeSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.email('Invalid email address').regex(emailRegex, 'Invalid email format'),
  phone_number: z.string().length(11, 'Phone number must be exactly 11 digits').regex(digitsOnly, 'Phone number must contain only digits'),
  cnic: z.string().length(13, 'CNIC must be exactly 13 digits').regex(digitsOnly, 'CNIC must contain only digits'),
  institute_name: z.string().min(2, 'Institute name is required'),
  reference_number: z.string().min(1, 'Reference number is required'),
  brand_ambassador_code: z.string().optional().refine(val => !val || val.length <= 15, 'Brand ambassador code must be less than 15 characters')
})

const participantSchema = z.object({
  team_lead_email: z.email('Invalid email address').regex(emailRegex, 'Invalid email format'),
  module_name: z.string().min(1, 'Module selection is required'),

  participant1_name: z.string().min(2, 'Name must be at least 2 characters'),
  participant1_phone: z.string().length(11, 'Phone number must be exactly 11 digits').regex(digitsOnly, 'Phone number must contain only digits'),
  participant1_cnic: z.string().length(13, 'CNIC must be exactly 13 digits').regex(digitsOnly, 'CNIC must contain only digits'),

  participant2_name: z.string().optional().refine(val => !val || val.length >= 2, 'Name must be at least 2 characters'),
  participant2_phone: z.string().optional().refine(val => !val || digitsOnly.test(val), 'Phone number must contain only digits').refine(val => !val || val.length === 11, 'Phone number must be exactly 11 digits'),
  participant2_cnic: z.string().optional().refine(val => !val || digitsOnly.test(val), 'CNIC must contain only digits').refine(val => !val || val.length === 13, 'CNIC must be exactly 13 digits'),

  participant3_name: z.string().optional().refine(val => !val || val.length >= 2, 'Name must be at least 2 characters'),
  participant3_phone: z.string().optional().refine(val => !val || digitsOnly.test(val), 'Phone number must contain only digits').refine(val => !val || val.length === 11, 'Phone number must be exactly 11 digits'),
  participant3_cnic: z.string().optional().refine(val => !val || digitsOnly.test(val), 'CNIC must contain only digits').refine(val => !val || val.length === 13, 'CNIC must be exactly 13 digits'),

  participant4_name: z.string().optional().refine(val => !val || val.length >= 2, 'Name must be at least 2 characters'),
  participant4_phone: z.string().optional().refine(val => !val || digitsOnly.test(val), 'Phone number must contain only digits').refine(val => !val || val.length === 11, 'Phone number must be exactly 11 digits'),
  participant4_cnic: z.string().optional().refine(val => !val || digitsOnly.test(val), 'CNIC must contain only digits').refine(val => !val || val.length === 13, 'CNIC must be exactly 13 digits'),

  institute_name: z.string().min(2, 'Institute name is required'),
  reference_number: z.string().min(1, 'Reference number is required'),
  brand_ambassador_code: z.string().optional().refine(val => !val || val.length <= 15, 'Brand ambassador code must be less than 15 characters')
})

export { attendeeSchema, participantSchema }
