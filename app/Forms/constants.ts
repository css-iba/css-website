export type FormStatus = "Open" | "Closed" | "Coming Soon";

export interface Form {
  title: string;
  description: string;
  link: string;
  status: FormStatus;
}

export const forms: Form[] = [
  {
    title: "MT Application Form",
    description: "This form is for the management team positions.",
    link: "https://forms.gle/WoPPxGfPCcMmyVMAA",
    status: "Closed",
  },
  {
    title: "EC Application Form",
    description: "This form is for the executive council positions.",
    link: "https://forms.gle/bd6tte7whexgpqXC8",
    status: "Closed",
  }
];
