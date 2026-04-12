"use client";

import Link from "next/link";
import {
  ClerkProvider as BaseClerkProvider,
  PricingTable as BasePricingTable,
  SignIn as BaseSignIn,
  SignInButton as BaseSignInButton,
  SignUp as BaseSignUp,
  UserButton as BaseUserButton,
  UserProfile as BaseUserProfile,
  useUser as baseUseUser,
} from "@clerk/nextjs";
import { isClerkPublishableKeyConfigured } from "@/lib/clerk-config";

const clerkEnabled = isClerkPublishableKeyConfigured();

type UserState = {
  isLoaded: boolean;
  isSignedIn: boolean;
  user: null;
};

function AuthUnavailable({ title }: { title: string }) {
  return (
    <div className="mx-auto max-w-md rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center text-amber-900">
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="mt-3 text-sm leading-6">
        Authentication is not configured yet for this deployment. Add valid Clerk keys in Vercel to enable sign in.
      </p>
      <Link
        href="/"
        className="mt-4 inline-flex rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-white"
      >
        Back to home
      </Link>
    </div>
  );
}

function MockClerkProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

function MockSignInButton({ children }: { children: React.ReactNode }) {
  return (
    <Link href="/sign-in" className="contents">
      {children}
    </Link>
  );
}

function MockUserButton() {
  return null;
}

function useMockUser(): UserState {
  return {
    isLoaded: true,
    isSignedIn: false,
    user: null,
  };
}

function MockSignIn() {
  return <AuthUnavailable title="Sign in unavailable" />;
}

function MockSignUp() {
  return <AuthUnavailable title="Sign up unavailable" />;
}

function MockPricingTable() {
  return <AuthUnavailable title="Billing unavailable" />;
}

function MockUserProfile() {
  return <AuthUnavailable title="Profile unavailable" />;
}

export const ClerkProvider = clerkEnabled ? BaseClerkProvider : MockClerkProvider;
export const SignInButton = clerkEnabled ? BaseSignInButton : MockSignInButton;
export const UserButton = clerkEnabled ? BaseUserButton : MockUserButton;
export const useUser = clerkEnabled ? baseUseUser : useMockUser;
export const SignIn = clerkEnabled ? BaseSignIn : MockSignIn;
export const SignUp = clerkEnabled ? BaseSignUp : MockSignUp;
export const PricingTable = clerkEnabled ? BasePricingTable : MockPricingTable;
export const UserProfile = clerkEnabled ? BaseUserProfile : MockUserProfile;
