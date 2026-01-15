'use client'

import { useState, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Link from 'next/link'

import { participantSchema } from './schemas'
import { modulesData } from '../constants'
import { insertParticipantRegistration } from './api'

import { Input } from '@/components/ui/input'
import { Spinner } from '@/components/ui/spinner'
import { Progress } from '@/components/ui/progress'
import { ArrowLeft, ArrowRight, CreditCard, CheckCircle, LayoutGrid, Users, Mail, Phone, IdCard, Building, Hash, User, Gift } from 'lucide-react'

import Confirmation from "../../../components/Home/Launch/Confirmation";

type ParticipantFormData = z.infer<typeof participantSchema>

interface Module {
  name: string;
  description: string;
  minParticipants: number;
  maxParticipants: number;
  price: number;
  guideLink: string;
  category?: string;
}

export default function ParticipantForm() {
  const [stage, setStage] = useState(1)
  const [selectedModule, setSelectedModule] = useState<Module | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false);

  const form = useForm<ParticipantFormData>({
    resolver: zodResolver(participantSchema),
    mode: 'onTouched',
    defaultValues: {
      team_lead_email: '',
      module_name: '',
      participant1_name: '',
      participant1_phone: '',
      participant1_cnic: '',
      participant2_name: '',
      participant2_phone: '',
      participant2_cnic: '',
      participant3_name: '',
      participant3_phone: '',
      participant3_cnic: '',
      participant4_name: '',
      participant4_phone: '',
      participant4_cnic: '',
      institute_name: '',
      reference_number: '',
      brand_ambassador_code: ''
    }
  })

  const participantFields = [
    { name: 'participant1_name' as const, phone: 'participant1_phone' as const, cnic: 'participant1_cnic' as const },
    { name: 'participant2_name' as const, phone: 'participant2_phone' as const, cnic: 'participant2_cnic' as const },
    { name: 'participant3_name' as const, phone: 'participant3_phone' as const, cnic: 'participant3_cnic' as const },
    { name: 'participant4_name' as const, phone: 'participant4_phone' as const, cnic: 'participant4_cnic' as const },
  ]

  const max = Math.min(selectedModule?.maxParticipants ?? 1, participantFields.length)
  const progressPercentage = useMemo(() => {
    if (stage === 1) return 33
    if (stage === 2) return 66
    return 100
  }, [stage])

  const isStage1Valid = useMemo(() => {
    const email = form.watch('team_lead_email')
    return email && email.length > 0
  }, [form])


  // Helper: all-or-none for participant2/3/4
  function areOptionalParticipantsValid() {
    // participantFields[1], [2], [3] are participant2, 3, 4
    for (let i = 1; i <= 3; i++) {
      const field = participantFields[i];
      const name = form.getValues(field.name);
      const phone = form.getValues(field.phone);
      const cnic = form.getValues(field.cnic);
      const anyFilled = [name, phone, cnic].some(v => v && v.trim() !== '');

      if (anyFilled) {
        if (!name || name.trim().length < 2) return false;
        if (!phone || !/^\d{11}$/.test(phone)) return false;
        if (!cnic || !/^\d{13}$/.test(cnic)) return false;
      }
    }

    return true;
  }

  const isStage2Valid = useMemo(() => {
    const hasModule = selectedModule !== null;
    // Team lead email validation
    const teamLeadEmail = form.watch('team_lead_email');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const teamLeadEmailValid = teamLeadEmail && emailRegex.test(teamLeadEmail);

    // First participant validation
    const p1Name = form.watch('participant1_name');
    const p1Phone = form.watch('participant1_phone');
    const p1Cnic = form.watch('participant1_cnic');
    const p1Valid = p1Name && p1Name.length >= 2 && p1Phone && p1Phone.length >= 10 && p1Cnic && p1Cnic.length === 13;

    return hasModule && teamLeadEmailValid && p1Valid && areOptionalParticipantsValid();
  }, [selectedModule, form.watch('team_lead_email'), form.watch('participant1_name'), form.watch('participant1_phone'), form.watch('participant1_cnic'),
    form.watch('participant2_name'), form.watch('participant2_phone'), form.watch('participant2_cnic'),
    form.watch('participant3_name'), form.watch('participant3_phone'), form.watch('participant3_cnic'),
    form.watch('participant4_name'), form.watch('participant4_phone'), form.watch('participant4_cnic')]);

  const onSubmit = async (data: ParticipantFormData) => {
    setIsSubmitting(true)
    const { error } = await insertParticipantRegistration(data)
    setIsSubmitting(false)
    if (!error) {
      // Show confirmation dialog (toggle state so the component renders)
      setShowConfirm(true);
      form.reset()
      setStage(1)
      setSelectedModule(null)
    } else {
      alert('Error submitting registration. Please try again.')
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 font-text">
      {/* Progress Bar */}
      <Progress value={progressPercentage} className="h-3" />

      {/* STAGE 1 – Module Selection */}
      {stage === 1 && (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <LayoutGrid className="w-6 h-6 text-gray-700" />
              <h2 className="text-2xl font-bold font-heading text-gray-900">Step 1 of 3</h2>
            </div>
            <p className="text-base text-gray-600 mt-2">Select your module</p>
          </div>

          <div className="space-y-4 p-5 border border-white rounded-xl bg-white transition duration-150 hover:shadow-inner">
            <div className="flex items-center gap-2 border-b pb-2">
              <LayoutGrid className="w-5 h-5 text-gray-700" />
              <h3 className="text-xl font-semibold font-heading text-gray-800">Module Selection</h3>
            </div>
            <p className="text-base text-gray-600 mb-4">Choose the module you want to register for.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {modulesData.map(mod => (
                <div
                  key={mod.name}
                  onClick={() => setSelectedModule(mod)}
                  className={`p-4 border rounded-xl cursor-pointer transition ${selectedModule?.name === mod.name
                    ? 'border-(--colour-secondary) ring-2 ring-(--colour-secondary) bg-blue-50'
                    : 'border-gray-200 hover:shadow-md'
                    }`}
                >
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-base text-gray-900">{mod.name}</h3>
                    <span className="text-sm font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded">Max: {mod.maxParticipants}</span>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                if (selectedModule) {
                  form.setValue('module_name', selectedModule.name)
                  setStage(2)
                }
              }}
              disabled={!selectedModule || isSubmitting}
              className="w-full py-3 transition font-heading duration-200 colour-box-primary text-white rounded-lg disabled:opacity-80 disabled:cursor-not-allowed text-lg font-semibold mt-4 flex items-center justify-center gap-2"
            >
              Next: Team Details
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* STAGE 2 – Team Lead Email & Participant Details */}
      {stage === 2 && (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users className="w-6 h-6 text-gray-700" />
              <h2 className="text-2xl font-bold font-heading text-gray-900">Step 2 of 3</h2>
            </div>
            <p className="text-base text-gray-600 mt-2">Enter team lead and participant details</p>
          </div>

          <div className="space-y-6 p-5 border border-white rounded-xl bg-white transition duration-150 hover:shadow-inner">
            <div className="flex items-center gap-2 border-b pb-2">
              <Users className="w-5 h-5 text-gray-700" />
              <h3 className="text-xl font-semibold font-heading text-gray-800">Team Information</h3>
            </div>

            {/* Team Lead Email */}
            <div className="space-y-2">
              <label className="text-base font-semibold text-gray-900 font-heading flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-600" />
                Team Lead Email <span className="text-red-500">*</span>
              </label>
              <Input
                type="email"
                {...form.register('team_lead_email')}
                placeholder="E.g., sample@example.com"
                disabled={isSubmitting}
                className="border-gray-300 focus:border-blue-500 transition"
              />
              {form.formState.errors.team_lead_email && (
                <p className="text-sm text-red-500">{form.formState.errors.team_lead_email.message}</p>
              )}
            </div>

            {/* Participant Details */}
            <div className="border-t pt-6">
              <h4 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-gray-700" />
                Participant Details ({max} required)
              </h4>

              {participantFields.slice(0, max).map((field, idx) => (
                <div key={field.name} className="mb-6 pb-6 border-b last:border-b-0 last:pb-0 last:mb-0">
                  <h5 className="font-semibold text-base text-gray-800 mb-3">Participant {idx + 1} {idx === 0 && <span className="text-red-500">*</span>}</h5>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-base font-semibold text-gray-900 flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-600" />
                        Name {idx === 0 && <span className="text-red-500">*</span>}
                      </label>
                      <Input
                        {...form.register(field.name)}
                        placeholder={`E.g., Participant ${idx + 1}`}
                        disabled={isSubmitting}
                        className="border-gray-300 focus:border-blue-500 transition"
                      />
                      {form.formState.errors[field.name] && (
                        <p className="text-sm text-red-500">{form.formState.errors[field.name]?.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-base font-semibold text-gray-900 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-600" />
                        Phone {idx === 0 && <span className="text-red-500">*</span>}
                      </label>
                      <Input
                        {...form.register(field.phone)}
                        placeholder={`E.g., 03001234567`}
                        disabled={isSubmitting}
                        className="border-gray-300 focus:border-blue-500 transition"
                      />
                      {form.formState.errors[field.phone] && (
                        <p className="text-sm text-red-500">{form.formState.errors[field.phone]?.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-base font-semibold text-gray-900 flex items-center gap-2">
                        <IdCard className="w-4 h-4 text-gray-600" />
                        CNIC (13 digits) {idx === 0 && <span className="text-red-500">*</span>}
                      </label>
                      <Input
                        {...form.register(field.cnic)}
                        placeholder={`E.g., 3520123456789`}
                        disabled={isSubmitting}
                        className="border-gray-300 focus:border-blue-500 transition"
                      />
                      {form.formState.errors[field.cnic] && (
                        <p className="text-sm text-red-500">{form.formState.errors[field.cnic]?.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-8">
              <button
                type="button"
                onClick={() => {
                  setStage(1)
                  setSelectedModule(null)
                }}
                disabled={isSubmitting}
                className="px-4 sm:px-6 py-3 rounded-lg font-semibold transition colour-box-secondary text-gray-900 hover:scale-[1.02] disabled:opacity-80 flex items-center justify-center gap-2 shrink-0"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </button>
              <button
                type="button"
                onClick={() => setStage(3)}
                disabled={isSubmitting || !isStage2Valid}
                className="flex-1 py-3 transition font-heading duration-200 colour-box-primary text-white rounded-lg disabled:opacity-80 disabled:cursor-not-allowed text-base sm:text-lg font-semibold flex items-center justify-center gap-2 min-w-0"
              >
                <span className="truncate">Next: Payment</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STAGE 3 – Payment & Reference Number */}
      {stage === 3 && (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <CreditCard className="w-6 h-6 text-gray-700" />
              <h2 className="text-2xl font-bold font-heading text-gray-900">Step 3 of 3</h2>
            </div>
            <p className="text-base text-gray-600 mt-2">Complete payment and submit</p>
          </div>

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

            {/* Institute Name */}
            <div className="space-y-2 mt-6">
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

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setStage(2)}
              disabled={isSubmitting}
              className="px-4 sm:px-6 py-3 rounded-lg font-semibold transition colour-box-secondary text-gray-900 hover:scale-[1.02] disabled:opacity-80 flex items-center justify-center gap-2 shrink-0"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !form.watch('reference_number')}
              className="flex-1 py-4 sm:py-6 transition font-heading duration-200 colour-box-primary disabled:opacity-80 disabled:cursor-not-allowed text-base sm:text-lg font-semibold rounded-lg text-white flex items-center justify-center gap-2 min-w-0"
            >
              {isSubmitting ? (
                <>
                  <Spinner className="w-5 h-5 animate-spin shrink-0" />
                  <span className="truncate">Processing...</span>
                </>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span className="truncate">Submit Registration</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Confirmation dialog controlled by component state */}
      <Confirmation isOpen={showConfirm} onClose={() => setShowConfirm(false)} />
    </form>
  )
}

