import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

const AuthPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mode, setMode] = useState('signin');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState('');

  useEffect(() => {
    if (location.state?.mode === 'signup') {
      setMode('signup');
    } else {
      setMode('signin');
    }
  }, [location.state]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  // Sign In state
  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
  });

  // Sign Up state
  const [signUpData, setSignUpData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSignUpChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSignUpData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateSignIn = () => {
    const newErrors = {};
    if (!signInData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signInData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!signInData.password) {
      newErrors.password = 'Password is required';
    }
    return newErrors;
  };

  const validateSignUp = () => {
    const newErrors = {};
    if (!signUpData.fullName) {
      newErrors.fullName = 'Full name is required';
    }
    if (!signUpData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signUpData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!signUpData.password) {
      newErrors.password = 'Password is required';
    } else if (signUpData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (!signUpData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (signUpData.password !== signUpData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!signUpData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms and conditions';
    }
    return newErrors;
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const newErrors = validateSignIn();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setStatusMessage('');
    setStatusType('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, signInData.email, signInData.password);

      if (!userCredential.user.emailVerified) {
        setStatusType('error');
        setStatusMessage('Please verify your email before logging in. Check your inbox or spam folder.');
        await signOut(auth);
      } else {
        setStatusType('success');
        setStatusMessage('Sign in successful! Welcome back to AutetMart.');
        setSignInData({ email: '', password: '' });
        navigate('/');
      }
    } catch (error) {
      setStatusType('error');
      setStatusMessage(error.message || 'Unable to sign in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const newErrors = validateSignUp();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setStatusMessage('');
    setStatusType('');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, signUpData.email, signUpData.password);
      await sendEmailVerification(userCredential.user);

      setStatusType('success');
      setStatusMessage('Account created successfully! A verification link has been sent to your email. Please verify before signing in.');
      setSignUpData({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false,
      });
      setMode('signin');
      await signOut(auth);
    } catch (error) {
      setStatusType('error');
      setStatusMessage(error.message || 'Unable to create account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#fffdfa] min-h-screen py-10 sm:py-16 lg:py-20">
      <section className="border-b border-gray-100 bg-white px-4 py-8 sm:px-6 lg:px-10 mb-8">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm text-[#84a9ac]">
            Home / <span className="font-bold text-[#12393d]">{mode === 'signin' ? 'Sign In' : 'Create Account'}</span>
          </p>
          <h1 className="text-4xl font-extrabold text-[#12393d] md:text-5xl">
            {mode === 'signin' ? 'Welcome Back' : 'Create Your Account'}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-[#567175]">
            {mode === 'signin'
              ? 'Enter your credentials to access your account and manage your orders.'
              : 'Join us today and start shopping with exclusive member benefits!'}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
        <div className="rounded-[24px] border border-[#edf0ee] bg-white p-8 shadow-[0_12px_30px_rgba(18,57,61,0.04)]">
          <div className="mb-8 flex rounded-full bg-[#f5f8f7] p-1">
            <button
              onClick={() => {
                setMode('signin');
                setErrors({});
                setStatusMessage('');
                setStatusType('');
              }}
              className={`flex-1 rounded-full py-3 px-4 font-bold transition-all ${
                mode === 'signin'
                  ? 'bg-white text-[#12393d] shadow-sm'
                  : 'text-[#567175] hover:text-[#12393d]'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setMode('signup');
                setErrors({});
                setStatusMessage('');
                setStatusType('');
              }}
              className={`flex-1 rounded-full py-3 px-4 font-bold transition-all ${
                mode === 'signup'
                  ? 'bg-white text-[#12393d] shadow-sm'
                  : 'text-[#567175] hover:text-[#12393d]'
              }`}
            >
              Sign Up
            </button>
          </div>

          {statusMessage && (
            <div
              className={`mb-5 rounded-2xl border p-4 text-[14px] font-bold ${
                statusType === 'success'
                  ? 'border-[#a2e0d3] bg-[#e8f5f1] text-[#12393d]'
                  : 'border-red-100 bg-red-50 text-red-600'
              }`}
            >
              {statusMessage}
            </div>
          )}

          {mode === 'signin' && (
            <form onSubmit={handleSignIn} className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-bold text-[#12393d]">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#84a9ac]" />
                  <input
                    type="email"
                    name="email"
                    value={signInData.email}
                    onChange={handleSignInChange}
                    placeholder="you@example.com"
                    className={`w-full rounded-lg border-2 bg-[#fafbfa] py-3 pl-12 pr-4 outline-none transition-all ${
                      errors.email
                        ? 'border-red-400 focus:border-red-500 focus:bg-white'
                        : 'border-[#e5eae8] focus:border-[#ef7f22] focus:bg-white'
                    }`}
                  />
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#12393d]">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#84a9ac]" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={signInData.password}
                    onChange={handleSignInChange}
                    placeholder="••••••••"
                    className={`w-full rounded-lg border-2 bg-[#fafbfa] py-3 pl-12 pr-12 outline-none transition-all ${
                      errors.password
                        ? 'border-red-400 focus:border-red-500 focus:bg-white'
                        : 'border-[#e5eae8] focus:border-[#ef7f22] focus:bg-white'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#84a9ac] hover:text-[#12393d]"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
              </div>

              <div className="text-right">
                <a href="#" className="text-sm font-semibold text-[#ef7f22] hover:text-orange-600">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-[#ef7f22] py-3.5 font-bold text-white transition-all hover:bg-orange-600 disabled:opacity-70"
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
            </form>
          )}

          {mode === 'signup' && (
            <form onSubmit={handleSignUp} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-bold text-[#12393d]">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#84a9ac]" />
                  <input
                    type="text"
                    name="fullName"
                    value={signUpData.fullName}
                    onChange={handleSignUpChange}
                    placeholder="John Doe"
                    className={`w-full rounded-lg border-2 bg-[#fafbfa] py-3 pl-12 pr-4 outline-none transition-all ${
                      errors.fullName
                        ? 'border-red-400 focus:border-red-500 focus:bg-white'
                        : 'border-[#e5eae8] focus:border-[#ef7f22] focus:bg-white'
                    }`}
                  />
                </div>
                {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#12393d]">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#84a9ac]" />
                  <input
                    type="email"
                    name="email"
                    value={signUpData.email}
                    onChange={handleSignUpChange}
                    placeholder="you@example.com"
                    className={`w-full rounded-lg border-2 bg-[#fafbfa] py-3 pl-12 pr-4 outline-none transition-all ${
                      errors.email
                        ? 'border-red-400 focus:border-red-500 focus:bg-white'
                        : 'border-[#e5eae8] focus:border-[#ef7f22] focus:bg-white'
                    }`}
                  />
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#12393d]">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#84a9ac]" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={signUpData.password}
                    onChange={handleSignUpChange}
                    placeholder="••••••••"
                    className={`w-full rounded-lg border-2 bg-[#fafbfa] py-3 pl-12 pr-12 outline-none transition-all ${
                      errors.password
                        ? 'border-red-400 focus:border-red-500 focus:bg-white'
                        : 'border-[#e5eae8] focus:border-[#ef7f22] focus:bg-white'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#84a9ac] hover:text-[#12393d]"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#12393d]">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#84a9ac]" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={signUpData.confirmPassword}
                    onChange={handleSignUpChange}
                    placeholder="••••••••"
                    className={`w-full rounded-lg border-2 bg-[#fafbfa] py-3 pl-12 pr-12 outline-none transition-all ${
                      errors.confirmPassword
                        ? 'border-red-400 focus:border-red-500 focus:bg-white'
                        : 'border-[#e5eae8] focus:border-[#ef7f22] focus:bg-white'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#84a9ac] hover:text-[#12393d]"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  name="agreeTerms"
                  checked={signUpData.agreeTerms}
                  onChange={handleSignUpChange}
                  className="mt-1 h-5 w-5 rounded border-2 border-[#e5eae8] accent-[#ef7f22]"
                />
                <label htmlFor="terms" className="text-sm text-[#567175]">
                  I agree to the{' '}
                  <a href="/terms" className="font-semibold text-[#ef7f22] hover:text-orange-600">
                    Terms & Conditions
                  </a>{' '}
                  and{' '}
                  <a href="/privacy-policy" className="font-semibold text-[#ef7f22] hover:text-orange-600">
                    Privacy Policy
                  </a>
                </label>
              </div>
              {errors.agreeTerms && <p className="text-sm text-red-500">{errors.agreeTerms}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-[#ef7f22] py-3.5 font-bold text-white transition-all hover:bg-orange-600 disabled:opacity-70"
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>
          )}
        </div>

        <p className="mt-6 text-center text-sm text-[#567175]">
          {mode === 'signin' ? (
            <>
              Don't have an account?{' '}
              <button
                onClick={() => setMode('signup')}
                className="font-bold text-[#ef7f22] hover:text-orange-600"
              >
                Sign up here
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                onClick={() => setMode('signin')}
                className="font-bold text-[#ef7f22] hover:text-orange-600"
              >
                Sign in here
              </button>
            </>
          )}
        </p>
      </section>
    </div>
  );
};

export default AuthPage;
