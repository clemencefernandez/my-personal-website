"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import React, { PropsWithChildren } from "react";

export function ThemeProvider({
  children,
  ...props
}: PropsWithChildren<ThemeProviderProps>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
