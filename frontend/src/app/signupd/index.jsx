"use client";

import React, { useState, useEffect } from "react";
import { Heading, Button, Text, Input, Img } from "../../components";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

export default function SignUpDPage() {
  const router = useRouter();
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    hasLetter: false,
    hasNumber: false,
    hasSymbol: false
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear specific field errors when user types
    if (name === 'name') {
      setNameError("");
    } else if (name === 'email') {
      setEmailError("");
    } else if (name === 'password') {
      setPasswordError("");
      checkPasswordStrength(value);
    } else if (name === 'confirmPassword') {
      setConfirmPasswordError("");
    }
    
    setError("");

    if (name === 'password' || name === 'confirmPassword') {
      if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
        setConfirmPasswordError("Passwords do not match");
      } else if (formData.password && formData.confirmPassword) {
        setConfirmPasswordError("");
      }
    }
  };

  const checkPasswordStrength = (password) => {
    setPasswordStrength({
      length: password.length >= 8,
      hasLetter: /[a-zA-Z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSymbol: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
    });
  };

  const validateName = (name) => {
    if (!name) {
      setNameError("Name is required");
      return false;
    }
    
    if (name.length < 2) {
      setNameError("Name must be at least 2 characters");
      return false;
    }
    
    if (!/^[a-zA-Z\s]*$/.test(name)) {
      setNameError("Name can only contain letters and spaces");
      return false;
    }
    
    return true;
  };

  const validateEmail = (email) => {
    if (!email) {
      setEmailError("Email is required");
      return false;
    }
    
    // Strong email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    
    return true;
  };

  const validatePassword = (password) => {
    if (!password) {
      setPasswordError("Password is required");
      return false;
    }
    
    // Strong password validation
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      return false;
    }
    
    if (!/[a-zA-Z]/.test(password)) {
      setPasswordError("Password must contain at least one letter");
      return false;
    }
    
    if (!/[0-9]/.test(password)) {
      setPasswordError("Password must contain at least one number");
      return false;
    }
    
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      setPasswordError("Password must contain at least one special character");
      return false;
    }
    
    return true;
  };

  const validateConfirmPassword = (confirmPassword) => {
    if (!confirmPassword) {
      setConfirmPasswordError("Please confirm your password");
      return false;
    }
    
    if (confirmPassword !== formData.password) {
      setConfirmPasswordError("Passwords do not match");
      return false;
    }
    
    return true;
  };

  const validateForm = () => {
    const isNameValid = validateName(formData.name);
    const isEmailValid = validateEmail(formData.email);
    const isPasswordValid = validatePassword(formData.password);
    const isConfirmPasswordValid = validateConfirmPassword(formData.confirmPassword);
    
    return isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    setError("");

    try {
      const result = await signup(formData.name, formData.email, formData.password);
      
      if (!result.success) {
        if (result.error && result.error.includes("already exists")) {
          setEmailError("This email is already registered. Please sign in instead.");
        } else {
          throw new Error(result.error);
        }
      } else {
        router.push('/loading');
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
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
                Sign Up
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
                  Name
                </Text>
                <Input
                  shape="round"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`self-stretch rounded !border px-[0.63rem] ${nameError ? 'border-red-500' : ''}`}
                  required
                />
                {nameError && (
                  <Text size="texts" as="p" className="text-[0.56rem] font-normal !text-red-500">
                    {nameError}
                  </Text>
                )}
              </div>
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
                <div className="mt-1 w-full text-xs">
                  <div className={`flex items-center gap-1 ${passwordStrength.length ? 'text-green-600' : 'text-gray-500'}`}>
                    <span>{passwordStrength.length ? '✓' : '○'}</span>
                    <span>At least 8 characters</span>
                  </div>
                  <div className={`flex items-center gap-1 ${passwordStrength.hasLetter ? 'text-green-600' : 'text-gray-500'}`}>
                    <span>{passwordStrength.hasLetter ? '✓' : '○'}</span>
                    <span>Contains letters</span>
                  </div>
                  <div className={`flex items-center gap-1 ${passwordStrength.hasNumber ? 'text-green-600' : 'text-gray-500'}`}>
                    <span>{passwordStrength.hasNumber ? '✓' : '○'}</span>
                    <span>Contains numbers</span>
                  </div>
                  <div className={`flex items-center gap-1 ${passwordStrength.hasSymbol ? 'text-green-600' : 'text-gray-500'}`}>
                    <span>{passwordStrength.hasSymbol ? '✓' : '○'}</span>
                    <span>Contains symbols</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[0.38rem] self-stretch">
                <Text size="textlg" as="p" className="text-[0.69rem] font-normal">
                  Confirm Password
                </Text>
                <Input
                  shape="round"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className={`self-stretch rounded !border px-[0.63rem] ${confirmPasswordError ? 'border-red-500' : ''}`}
                  required
                />
                {confirmPasswordError && (
                  <Text size="texts" as="p" className="text-[0.56rem] font-normal !text-red-500">
                    {confirmPasswordError}
                  </Text>
                )}
              </div>
              <Button
                type="submit"
                color="amber_500"
                size="3xl"
                shape="round"
                className="self-stretch rounded px-[2.13rem] font-lexenddeca sm:px-[1.25rem]"
                disabled={loading}
              >
                {loading ? "Signing up..." : "Sign Up"}
              </Button>
              <Heading size="headingmd" as="h2" className="text-[0.69rem] font-bold !text-gray-500">
                <span className="font-normal text-gray-500">Already have an account?</span>
                <span className="text-gray-500">&nbsp;</span>
                <Link href="/signind">
                  <span className="text-amber-500">Sign in</span>
                </Link>
              </Heading>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
