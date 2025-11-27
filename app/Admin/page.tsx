'use client'

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { LogOut, RefreshCw, ShieldUser, EyeOff, Eye } from "lucide-react";
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

// Data Tables
import DataTable from "@/components/Home/Launch/DataTable";
import CodeClashDataTable from "@/components/Codex/CodeClash2/DataTable";

import { signIn, signOut } from "@/app/Launch/Supabase/api";
import { fetchCompetitionRows, type CompetitionKey, type AnyCompetitionRecord, type CodeClash2Record, type LaunchRecord } from "@/app/Admin/Registration_Rows";

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

// ✅ Type API responses
interface SignInResponse {
  error?: { message?: string } | null | unknown;
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
  const [rows, setRows] = useState<AnyCompetitionRecord[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedCompetition, setSelectedCompetition] = useState<CompetitionKey>('Launch');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

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

    const dataRes = await fetchCompetitionRows(selectedCompetition as CompetitionKey);
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
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter admin password"
                            {...field}
                            disabled={loading}
                            className="border-gray-300 focus:border-blue-500 transition pr-10"
                          />
                          <Button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-0 flex items-center pr-3 bg-gray-100 rounded-r-md hover:bg-gray-200 transition"
                            aria-label={showPassword ? "Hide password" : "Show password"}
                            variant="outline"
                          >
                            {showPassword ? (
                              <EyeOff className="w-5 h-5 text-gray-700" />
                            ) : (
                              <Eye className="w-5 h-5 text-gray-700" />
                            )}
                          </Button>
                        </div>
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
                    setLoading(true);
                    const result = await signOut();
                    if (!result?.error) {
                      setAuthed(false);
                      methods.reset();
                      setRows([]);
                      setLoading(false);
                    } else {
                      setError('Sign-out failed');
                    }
                  }}
                  aria-label="Sign Out"
                  className="flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 colour-text hover:text-[var(--colour-text)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400"
                >
                  {loading ? (
                    <>
                      <Spinner className="w-5 h-5 animate-spin" />
                    </>
                  ) : (
                    <LogOut size={20} />
                  )}
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-3">
              {/* Competition selector - using shadcn Select */}
              <Select
                value={selectedCompetition}
                onValueChange={(val) => setSelectedCompetition(val as CompetitionKey)}
              >
                <SelectTrigger className="w-48 flex items-center justify-between rounded-md backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 colour-text hover:text-[var(--colour-text)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400 [&_svg]:stroke-white">
                  <SelectValue placeholder="Select competition" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectGroup>
                    <SelectLabel>Competitions</SelectLabel>
                    <SelectItem value="Launch">Launch</SelectItem>
                    <SelectItem value="CodeClash2">CodeClash 2.0</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                onClick={async () => {
                  setError(null);
                  // fetch again for the selected competition
                  try {
                    const r = await fetchCompetitionRows(selectedCompetition as CompetitionKey);
                    if (r?.error) {
                      setError('Failed to load registrations');
                    } else {
                      setRows(r.data ?? []);
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
              {selectedCompetition === 'Launch' && <DataTable data={rows as LaunchRecord[]} />}
              {selectedCompetition === 'CodeClash2' && <CodeClashDataTable data={rows as CodeClash2Record[]} />}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
