"use client";

import React, { useState, useEffect } from "react";
import { Heading, Button, Text, Input, Img } from "../../components";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

export default function SignInDPage() {
  const router = useRouter();
  const { login, signInWithGoogle } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    if (localStorage.getItem('user')) {
      router.push('/dashboard'); 
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (name === 'email') {
      setEmailError("");
    } else if (name === 'password') {
      setPasswordError("");
    }
    
    setError("");
  };

  // Enhanced email validation
  const validateEmail = (email) => {
    if (!email) {
      setEmailError("Email is required");
      return false;
    }
    
    // More comprehensive email validation regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    
    return true;
  };

  // Enhanced password validation
  const validatePassword = (password) => {
    if (!password) {
      setPasswordError("Password is required");
      return false;
    }
    
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return false;
    }
    
    // Check for letter, number, and special character
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
    
    if (!hasLetter || !hasNumber || !hasSymbol) {
      setPasswordError("Password must include at least one letter, one number, and one special character");
      return false;
    }
    
    return true;
  };

  const validateForm = () => {
    const isEmailValid = validateEmail(formData.email);
    const isPasswordValid = validatePassword(formData.password);
    
    return isEmailValid && isPasswordValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    setError("");

    try {
      const result = await login(formData.email, formData.password);
      
      if (!result.success) {
        // Handle specific Firebase auth errors with more detailed messages
        if (result.error.includes("user-not-found") || result.error.includes("not found")) {
          setEmailError("This email is not registered. Please sign up first.");
        } else if (result.error.includes("wrong-password") || result.error.includes("invalid password")) {
          setPasswordError("Incorrect password. Please try again.");
        } else if (result.error.includes("invalid-email")) {
          setEmailError("Invalid email format.");
        } else if (result.error.includes("user-disabled")) {
          setError("This account has been disabled. Please contact support.");
        } else if (result.error.includes("too-many-requests")) {
          setError("Too many failed login attempts. Please try again later or reset your password.");
        } else {
          throw new Error(result.error);
        }
      } else {
        router.push('/loading');
      }
    } catch (err) {
      setError(err.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    setLoading(true);
    try {
      console.log("Attempting Google sign-in...");
      const result = await signInWithGoogle();
      console.log("Google sign-in result:", result);
      
      if (!result.success) {
        // Check for specific error cases
        if (result.error && result.error.includes("new email")) {
          setError("This email is not registered. Please sign up first.");
        } else if (result.error && result.error.includes("popup")) {
          setError("Google sign-in popup was blocked. Please allow popups and try again.");
        } else if (result.error && result.error.includes("cancelled")) {
          setError("Google sign-in was cancelled. Please try again.");
        } else if (result.error && result.error.includes("network")) {
          setError("Network error. Please check your internet connection and try again.");
        } else {
          // Log the specific error for debugging
          console.error("Google sign-in error:", result.error);
          setError(`Google sign-in failed: ${result.error || "Unknown error"}`);
        }
      } else {
        console.log("Google sign-in successful, redirecting to loading page");
        router.push('/loading');
      }
    } catch (err) {
      console.error("Google sign-in exception:", err);
      setError(`Google sign-in error: ${err.message || "Please try again later"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-gray-200_01">
      <div className="mb-[9.13rem] flex flex-col items-center">
        <header className="flex items-start justify-center self-stretch bg-gradient1 py-[1.75rem] sm:py-[1.25rem]">
          <div className="container-xs mb-[17.50rem] flex justify-center md:px-[1.25rem]">
            <div className="flex w-full items-center justify-between gap-[1.25rem]">
              <Img
                src="img_header_logo.svg"
                width={138}
                height={46}
                alt="Header Logo"
                className="h-[2.88rem] w-[8.63rem] object-contain"
              />
              <Link href="/landingpaged">
                <Button
                  color="amber_A400"
                  size="xl"
                  variant="outline"
                  shape="round"
                  className="min-w-[4.25rem] rounded-md !border-[1.3px] px-[0.75rem]"
                >
                  Back
                </Button>
              </Link>
            </div>
          </div>
        </header>
        <div className="container-xs relative mt-[-9.63rem] flex flex-col items-center px-[3.50rem] md:px-[1.25rem]">
          <div className="flex w-[28%] flex-col items-center justify-center gap-[2.13rem] rounded-[14px] bg-black_amp_white-white px-[1.13rem] py-[3.88rem] shadow-xs md:w-full md:py-[1.25rem]">
            <Link href="#">
              <Heading size="text8xl" as="h1" className="!font-inter text-[1.25rem] font-medium !text-black-900_01">
                Sign In
              </Heading>
            </Link>
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-[2.13rem] self-stretch">
              {error && (
                <div className="w-full rounded bg-red-100 p-2 text-center text-red-600">
                  {error}
                </div>
              )}
              <div className="flex flex-col items-start gap-[0.38rem] self-stretch">
                <Text size="textlg" as="p" className="text-[0.69rem] font-normal">
                  Email
                </Text>
                <Input
                  shape="round"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className={`self-stretch rounded !border px-[0.63rem] ${emailError ? 'border-red-500' : ''}`}
                  required
                />
                {emailError && (
                  <Text size="texts" as="p" className="text-[0.56rem] font-normal !text-red-500">
                    {emailError}
                  </Text>
                )}
              </div>
              <div className="flex flex-col items-start gap-[0.38rem] self-stretch">
                <Text size="textlg" as="p" className="text-[0.69rem] font-normal">
                  Password
                </Text>
                <Input
                  shape="round"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Your password"
                  className={`self-stretch rounded !border px-[0.63rem] ${passwordError ? 'border-red-500' : ''}`}
                  required
                />
                {passwordError && (
                  <Text size="texts" as="p" className="text-[0.56rem] font-normal !text-red-500">
                    {passwordError}
                  </Text>
                )}
              </div>
              <div className="flex gap-[0.50rem]">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300 text-amber-500 focus:ring-amber-500"
                />
                <Text size="texts" as="p" className="text-[0.56rem] font-normal !text-gray-800">
                  Remember me
                </Text>
              </div>
              <Button
                type="submit"
                color="amber_500"
                size="3xl"
                shape="round"
                className="self-stretch rounded px-[2.13rem] font-lexenddeca sm:px-[1.25rem]"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign In"}
              </Button>
              <div className="flex w-full items-center gap-2">
                <div className="h-px flex-1 bg-gray-300"></div>
                <Text size="texts" as="p" className="text-[0.56rem] font-normal !text-gray-500">
                  OR
                </Text>
                <div className="h-px flex-1 bg-gray-300"></div>
              </div>
              <Button
                type="button"
                color="white_A700"
                size="3xl"
                shape="round"
                className="self-stretch rounded border border-gray-300 px-[2.13rem] font-lexenddeca sm:px-[1.25rem]"
                onClick={handleGoogleSignIn}
                disabled={loading}
              >
                <div className="flex items-center justify-center gap-2">
                  <Img
                    src="img_google.svg"
                    width={20}
                    height={20}
                    alt="Google"
                    className="h-5 w-5"
                  />
                  <span>Sign in with Google</span>
                </div>
              </Button>
              <Heading size="headingmd" as="h2" className="text-[0.69rem] font-bold !text-gray-500">
                <span className="font-normal text-gray-500">Don't have an account?</span>
                <span className="text-gray-500">&nbsp;</span>
                <Link href="/signupd">
                  <span className="text-amber-500">Sign up</span>
                </Link>
              </Heading>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
