"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
    AlertDialogDescription,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

import problemsMap  from "@/app/Codex/Problems";

interface Problem {
    id: string;
    title: string;
    language?: string;
    code: string;
}

interface ProblemModalProps {
    trigger?: React.ReactNode;
    problems?: Problem[];
    listenForId?: string; // optional data-problem-trigger id to listen for
}

export default function ProblemModal({listenForId }: ProblemModalProps) {
    const problems = listenForId && problemsMap[listenForId] ? problemsMap[listenForId] : [];
    const [active, setActive] = useState<string>(problems[0]?.id ?? '');
    const [open, setOpen] = useState<boolean>(false);

    React.useEffect(() => {
        if (!listenForId) return;

        const handler = (e: MouseEvent) => {
            const target = e.target as HTMLElement | null;

            if (!target) return;
            const el = target.closest(`[data-problem-trigger="${listenForId}"]`) as HTMLElement | null;
            
            if (el) {
                setOpen(true);
            }
        };

        document.addEventListener('click', handler);
        return () => document.removeEventListener('click', handler);
    }, [listenForId]);

    return (
        <AlertDialog open={open} onOpenChange={(o) => setOpen(o)}>

            <AlertDialogPortal>
                <AlertDialogOverlay />
                <AlertDialogContent className="w-full max-w-[95vw] sm:max-w-[720px] mx-auto px-3 overflow-hidden">
                <AlertDialogHeader>
                    <div className="flex items-center justify-between gap-4">
                        <div className="min-w-0">
                            <AlertDialogTitle className="text-base sm:text-lg">{listenForId} — Problems</AlertDialogTitle>
                            <AlertDialogDescription className="text-sm text-muted-foreground">
                                Select a problem tab to view the solution code. Use the close button to dismiss this dialog.
                            </AlertDialogDescription>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                            <AlertDialogCancel asChild>
                                <Button variant="ghost" className="p-2 rounded-md">
                                    <X className="w-4 h-4" />
                                </Button>
                            </AlertDialogCancel>
                        </div>
                    </div>
                </AlertDialogHeader>

                <div className="mt-4">
                    <div className="flex gap-2 border-b pb-2 overflow-x-auto">
                        {problems.map((p) => (
                            <button
                                key={p.id}
                                onClick={() => setActive(p.id)}
                                className={`px-3 py-1 rounded-md text-sm font-medium whitespace-nowrap ${active === p.id ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                            >
                                {p.title}
                            </button>
                        ))}
                    </div>

                    <div className="mt-4">
                        {problems.map((p) => (
                            <div key={p.id} hidden={active !== p.id} className="min-w-0">
                            <div className="mb-2 text-sm text-gray-600">Solution ({p.language})</div>
                                                        <div className="rounded-md bg-black text-white overflow-auto text-sm">
                                                            <pre className="p-4 m-0 w-full whitespace-pre-wrap break-words overflow-auto max-h-[55vh] sm:max-h-[40vh]">
                                <code>
{p.code}
                                </code>
                              </pre>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>

                <AlertDialogFooter>
                    <AlertDialogCancel asChild>
                        <Button className="w-full sm:w-auto text-muted-foreground hover:text-primary transition-colors">Close</Button>
                    </AlertDialogCancel>
                </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogPortal>
        </AlertDialog>
    );
}
