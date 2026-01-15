'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { User, CreditCard, CheckCircle, Mail, Phone, Building, IdCard, Hash, Gift } from 'lucide-react'

import { attendeeSchema } from './schemas'
import { insertAttendeeRegistration } from './api'

import { Input } from '@/components/ui/input'
import { Spinner } from '@/components/ui/spinner'
import { Progress } from '@/components/ui/progress'

import Confirmation from "../../../components/Home/Launch/Confirmation";

type AttendeeFormData = {
  name: string;
  email: string;
  phone_number: string;
  cnic: string;
  institute_name: string;
  reference_number: string;
  brand_ambassador_code?: string;
}

export default function AttendeeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false);

  const form = useForm<AttendeeFormData>({
    resolver: zodResolver(attendeeSchema),
    mode: 'onTouched',
    defaultValues: {
      name: '',
      email: '',
      phone_number: '',
      cnic: '',
      institute_name: '',
      reference_number: '',
      brand_ambassador_code: '',
    }
  })

  const onSubmit = async (data: AttendeeFormData) => {
    setIsSubmitting(true)
    const { error } = await insertAttendeeRegistration(data)
    setIsSubmitting(false)

    if (!error) {
      // Show confirmation dialog (toggle state so the component renders)
      setShowConfirm(true);

      form.reset()
    } else {
      alert('Error submitting registration. Please try again.')
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 font-text">
      {/* Progress Bar */}
      <Progress value={100} className="h-3" />

      {/* Stage Label */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <User className="w-6 h-6 text-gray-700" />
          <h2 className="text-2xl font-bold font-heading text-gray-900">Attendee Details</h2>
        </div>
        <p className="text-base text-gray-600 mt-2">Complete your registration information</p>
      </div>

      <div className="space-y-6 p-5 border border-white rounded-xl bg-white transition duration-150 hover:shadow-inner">
        <div className="flex items-center gap-2 border-b pb-2">
          <User className="w-5 h-5 text-gray-700" />
          <h3 className="text-xl font-semibold font-heading text-gray-800">Personal Information</h3>
        </div>

        {/* Full Name */}
        <div className="space-y-2">
          <label className="text-base font-semibold text-gray-900 font-heading flex items-center gap-2">
            <User className="w-4 h-4 text-gray-600" />
            Full Name <span className="text-red-500">*</span>
          </label>
          <Input
            {...form.register('name')}
            placeholder="E.g., Abdullah Tariq"
            disabled={isSubmitting}
            className="border-gray-300 focus:border-blue-500 transition"
          />
          {form.formState.errors.name && (
            <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-base font-semibold text-gray-900 font-heading flex items-center gap-2">
            <Mail className="w-4 h-4 text-gray-600" />
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            type="email"
            {...form.register('email')}
            placeholder="E.g., sample@example.com"
            disabled={isSubmitting}
            className="border-gray-300 focus:border-blue-500 transition"
          />
          {form.formState.errors.email && (
            <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
          )}
        </div>

        {/* Phone Number */}
        <div className="space-y-2">
          <label className="text-base font-semibold text-gray-900 font-heading flex items-center gap-2">
            <Phone className="w-4 h-4 text-gray-600" />
            Phone Number <span className="text-red-500">*</span>
          </label>
          <Input
            {...form.register('phone_number')}
            placeholder="E.g., 03001234567"
            disabled={isSubmitting}
            className="border-gray-300 focus:border-blue-500 transition"
          />
          {form.formState.errors.phone_number && (
            <p className="text-sm text-red-500">{form.formState.errors.phone_number.message}</p>
          )}
        </div>

        {/* CNIC */}
        <div className="space-y-2">
          <label className="text-base font-semibold text-gray-900 font-heading flex items-center gap-2">
            <IdCard className="w-4 h-4 text-gray-600" />
            CNIC (13 digits) <span className="text-red-500">*</span>
          </label>
          <Input
            {...form.register('cnic')}
            placeholder="E.g., 3520123456789"
            disabled={isSubmitting}
            className="border-gray-300 focus:border-blue-500 transition"
          />
          {form.formState.errors.cnic && (
            <p className="text-sm text-red-500">{form.formState.errors.cnic.message}</p>
          )}
        </div>

        {/* Institute Name */}
        <div className="space-y-2">
          <label className="text-base font-semibold text-gray-900 font-heading flex items-center gap-2">
            <Building className="w-4 h-4 text-gray-600" />
            Institute Name <span className="text-red-500">*</span>
          </label>
          <Input
            {...form.register('institute_name')}
            placeholder="E.g., IBA Karachi"
            disabled={isSubmitting}
            className="border-gray-300 focus:border-blue-500 transition"
          />
          {form.formState.errors.institute_name && (
            <p className="text-sm text-red-500">{form.formState.errors.institute_name.message}</p>
          )}
        </div>
      </div>

      {/* Payment Section */}
      <div className="space-y-6 p-5 border border-white rounded-xl bg-white transition duration-150 hover:shadow-inner">
        <div className="flex items-center gap-2 border-b pb-2">
          <CreditCard className="w-5 h-5 text-gray-700" />
          <h3 className="text-xl font-semibold font-heading text-gray-800">Payment Information</h3>
        </div>

        {/* <p className="text-base text-gray-600 mb-4">
          Please complete your payment using the link below before submitting your registration.
        </p>

        <Link
          href="https://ibaapps.iba.edu.pk/society_events/register/event/probattle-26"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-lg font-semibold transition colour-box-primary text-white hover:scale-[1.02] duration-200"
        >
          Go to Payment Portal →
        </Link> */}

        <p className="text-base text-gray-600 mb-4">
          For payment, please contact at <Link href="tel:+923323450675" className="text-blue-500 hover:underline">92 332 3450675</Link>. <span className="font-semibold">Use the reference number &apos;PR26&apos;</span>.
        </p>

        {/* Reference Number */}
        <div className="space-y-2 mt-6">
          <label className="text-base font-semibold text-gray-900 font-heading flex items-center gap-2">
            <Hash className="w-4 h-4 text-gray-600" />
            Reference Number <span className="text-red-500">*</span>
          </label>
          <Input
            {...form.register('reference_number')}
            placeholder="Enter your payment reference number"
            disabled={isSubmitting}
            className="border-gray-300 focus:border-blue-500 transition"
          />
          {form.formState.errors.reference_number && (
            <p className="text-sm text-red-500">{form.formState.errors.reference_number.message}</p>
          )}
          <p className="text-sm text-gray-500 italic">
            Enter the reference number you received after payment in your email.
          </p>
        </div>

        {/* Brand Ambassador Code */}
        <div className="space-y-2">
          <label className="text-base font-semibold text-gray-900 font-heading flex items-center gap-2">
            <Gift className="w-4 h-4 text-gray-600" />
            Brand Ambassador Code (Optional)
          </label>
          <Input
            {...form.register('brand_ambassador_code')}
            placeholder="Enter brand ambassador code if any"
            disabled={isSubmitting}
            className="border-gray-300 focus:border-blue-500 transition"
          />
          {form.formState.errors.brand_ambassador_code && (
            <p className="text-sm text-red-500">{form.formState.errors.brand_ambassador_code.message}</p>
          )}
          <p className="text-sm text-gray-500 italic">
            If you have a brand ambassador code, please enter it here
          </p>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting || !form.formState.isValid}
        className="w-full py-6 transition font-heading duration-200 colour-box-primary disabled:opacity-80 disabled:cursor-not-allowed text-lg font-semibold rounded-lg text-white flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Spinner className="w-5 h-5 mr-3 animate-spin inline-block" />
            Processing Registration...
          </>
        ) : (
          <>
            <CheckCircle className="w-5 h-5" />
            Submit Registration
          </>
        )}
      </button>

      {/* Confirmation dialog controlled by component state */}
      <Confirmation isOpen={showConfirm} onClose={() => setShowConfirm(false)} />
    </form>
  )
}

