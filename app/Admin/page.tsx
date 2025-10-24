'use client'

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { LogOut, RefreshCw, ShieldUser } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";

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
import { GetData as fetchRegistrations, signIn, signOut } from "@/app/Launch/Supabase/api";

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

// ✅ Define a strict yet flexible type for registration rows
export interface RegistrationRow {
  id: number;
  created_at: string;
  participant1Name: string;
  participant2Name: string;
  teamLeadEmail: string;
  studentYear: "freshman" | "sophomore" | "junior" | "senior" | "";
  difficulty: "easy" | "hard" | "";
  // Allow for additional fields without using `any`
  [key: string]: string | number | undefined;
}

// ✅ Type API responses
interface SignInResponse {
  // signIn can return a typed error object or an unknown error shape depending on the runtime,
  // so allow unknown here and handle extraction safely where the response is used.
  error?: { message?: string } | null | unknown;
}

interface GetDataResponse {
  data?: RegistrationRow[];
  error?: { message?: string } | unknown;
}

export default function Admin() {
  const methods = useForm<AdminSignInFormData>({
    resolver: zodResolver(adminSignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [authed, setAuthed] = useState<boolean>(false);
  const [rows, setRows] = useState<RegistrationRow[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedCompetition, setSelectedCompetition] = useState<string>('Launch');

  const onSubmit = async (data: AdminSignInFormData) => {
    setLoading(true);
    const res: SignInResponse = await signIn(data.email, data.password);
    setLoading(false);

    if (res?.error) {
      // Safely extract a message if present; the error may be `unknown` at compile time.
      const err = res.error as unknown;
      const msg =
        typeof err === "object" && err !== null && "message" in err
          ? ( (err as { message?: string }).message ?? "Sign-in failed" )
          : "Sign-in failed";
      setError(msg);
      return;
    }

    const dataRes: GetDataResponse = await fetchRegistrations();
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
                <h2 className="text-2xl flex items-center justify-center font-heading font-bold text-gray-800 border-b pb-2 mb-4">
                  Admin Sign In
                  <span className="inline-flex items-center justify-center w-9 h-9 ml-3 rounded-full bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-all duration-300 text-blue-700">
                    <ShieldUser className="w-5 h-5" />
                  </span>
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

            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-heading font-bold colour-text border-b-3 inline-block pb-2 mb-4">
                Registrations
              </h2>

              <div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={async () => {
                    const result = await signOut();
                    if (!result?.error) {
                      setAuthed(false);
                      methods.reset();
                      setRows([]);
                    } else {
                      setError('Sign-out failed');
                    }
                  }}
                  aria-label="Sign Out"
                  className="flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 colour-text hover:text-[var(--colour-text)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400"
                >
                  <LogOut size={20} />
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-3">
              {/* Competition selector - using shadcn Select */}
              <Select
                value={selectedCompetition}
                onValueChange={(val) => setSelectedCompetition(val)}
              >
                <SelectTrigger className="w-48 flex items-center justify-between rounded-md backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 colour-text hover:text-[var(--colour-text)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400 [&_svg]:stroke-white">
                  <SelectValue placeholder="Select competition" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectGroup>
                    <SelectLabel>Competitions</SelectLabel>
                    <SelectItem value="Launch">Launch</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                onClick={async () => {
                  setError(null);
                  // fetch again for the selected competition
                  try {
                    if (selectedCompetition === 'Launch') {
                      const r = await fetchRegistrations();
                      if (r?.error) {
                        setError('Failed to load registrations');
                      } else {
                        setRows(r.data ?? []);
                      }
                    } else {
                      // placeholder for other competitions' fetchers
                      setRows([]);
                    }
                  } catch (e) {
                    setError('Failed to load registrations');
                  }
                }}
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
            </div>

            {error && <div className="text-sm text-red-600">{error}</div>}

            <div className="p-4 border border-white rounded-xl bg-white transition duration-150 hover:shadow-inner">
              {/* Map: competition name -> component. For Launch we use DataTable. */}
              {selectedCompetition === 'Launch' && <DataTable data={rows} />}
              {/* future: render different component based on selectedCompetition */}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
