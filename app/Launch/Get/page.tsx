// import DataTable from '@/components/Home/Launch/DataTable'
// import { GetData as fetchRegistrations } from '@/app/Launch/Supabase/api'

// // Server component that fetches registration rows and passes them to the DataTable
// export default async function GetData() {
//   const res = await fetchRegistrations()
//   const rows = res?.data ?? []

//   return (
//     <main className="min-h-screen p-8 colour-bg">
//       <div className="mx-auto max-w-6xl">
//         <h2 className="text-3xl font-heading font-extrabold mb-6 colour-text">Registrations</h2>
//         <div className="bg-white rounded-xl shadow p-4">
//           <DataTable data={rows} />
//         </div>
//       </div>
//     </main>
//   )
// }
'use client'

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

import DataTable from "@/components/Home/Launch/DataTable";
import { GetData as fetchRegistrations, signIn } from "@/app/Launch/Supabase/api";

// ✅ Define Zod schema for admin login
const adminSignInSchema = z.object({
  email: z
    .email({ message: "Please enter a valid email address." })
    .refine(
      (val) => /^[a-zA-Z]+\.[a-zA-Z]+\.\d{5}@khi\.iba\.edu\.pk$/.test(val),
      { message: "Email must be in the format firstname.lastname.12345@khi.iba.edu.pk" }
    ),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." }),
});

// ✅ Infer the TypeScript type from the Zod schema
type AdminSignInFormData = z.infer<typeof adminSignInSchema>;

interface RegistrationRow {
  id: number;
  created_at: string;
  participant1Name: string;
  participant2Name: string;
  teamLeadEmail: string;
  studentYear: 'freshman' | 'sophomore' | 'junior' | 'senior' | '';
  difficulty: 'easy' | 'hard' | '';
  [key: string]: any;
}

export default function GetPage() {
  const methods = useForm<AdminSignInFormData>({
    resolver: zodResolver(adminSignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [rows, setRows] = useState<RegistrationRow[]>([]);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: AdminSignInFormData) => {
    setLoading(true);
    setError(null);

    const res = await signIn(data.email, data.password);
    setLoading(false);

    if (res?.error) {
      const msg = (res.error as any)?.message ?? "Sign-in failed";
      setError(msg);
      return;
    }

    const dataRes = await fetchRegistrations();
    if (dataRes?.error) {
      setError("Failed to load registrations.");
      return;
    }

    setRows(dataRes.data ?? []);
    setAuthed(true);
  };

  return (
    <main className="min-h-screen p-8 colour-bg font-text">
      <div className="mx-auto max-w-3xl">
        {!authed ? (
          <FormProvider {...methods}>
            <Form {...methods}>
              <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="space-y-8 p-6 border border-white rounded-xl bg-white transition duration-150 hover:shadow-inner"
              >
                <h2 className="text-2xl font-heading font-bold text-gray-800 border-b pb-2 mb-4">
                  Admin Sign In
                </h2>

                {/* Email Field */}
                <FormField
                  control={methods.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="firstname.lastname.12345@khi.iba.edu.pk"
                          {...field}
                          disabled={loading}
                          className="border-gray-300 focus:border-blue-500 transition"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Password Field */}
                <FormField
                  control={methods.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter admin password"
                          {...field}
                          disabled={loading}
                          className="border-gray-300 focus:border-blue-500 transition"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Global error message */}
                {error && (
                  <p className="text-sm text-red-600 italic -translate-y-2">{error}</p>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full py-6 text-lg font-heading font-semibold transition duration-200 colour-box-primary disabled:opacity-80 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Spinner className="w-5 h-5 mr-3 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </form>
            </Form>
          </FormProvider>
        ) : (
          <div className="mx-auto max-w-6xl space-y-6">
            <h2 className="text-3xl font-heading font-bold colour-text border-b-3 inline-block pb-2 mb-4">
              Registrations
            </h2>
            <div className="p-4 border border-white rounded-xl bg-white transition duration-150 hover:shadow-inner">
              <DataTable data={rows} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
