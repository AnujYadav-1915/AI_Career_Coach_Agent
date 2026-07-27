"use client"
import React, { useEffect, useState } from 'react';
import { MessageCircle, FileText, Map, Users, Brain, Star, ArrowRight } from 'lucide-react';
import { SignInButton, UserButton, useUser } from "@/lib/clerk-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LearnMateHomepage() {
  const { user, isSignedIn } = useUser();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleProtectedNavigation = (route: string) => {
    if (!isSignedIn) return;
    router.push(route);
  };

  const features = [
    {
      icon: <MessageCircle className="w-6 h-6 text-[#635BFF]" />,
      title: "Q&A Chatbot",
      description: "Get instant answers to your career questions with our intelligent AI assistant.",
    },
    {
      icon: <FileText className="w-6 h-6 text-[#635BFF]" />,
      title: "AI Resume Analyzer",
      description: "Detailed analysis with score and personalized improvement recommendations.",
    },
    {
      icon: <Map className="w-6 h-6 text-[#635BFF]" />,
      title: "Roadmap Generator",
      description: "Create personalized learning paths tailored to your career goals.",
    },
    {
      icon: <Users className="w-6 h-6 text-[#635BFF]" />,
      title: "Mock Interview Prep",
      description: "Practice with AI-powered interviews to boost your confidence.",
      comingSoon: true
    }
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#F6F9FC] font-sans selection:bg-[#635BFF]/20 text-slate-900 relative overflow-hidden">
      {/* Stripe-like background diagonal elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[120%] bg-white transform -skew-y-6 z-0 border-b border-slate-100 shadow-[0_20px_40px_rgba(0,0,0,0.02)]"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#635BFF]/5 to-transparent rounded-full blur-3xl z-0"></div>

      {/* Header */}
      <header className="relative z-50 pt-6 pb-4">
        <nav className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#635BFF] rounded-xl flex items-center justify-center shadow-lg shadow-[#635BFF]/20">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-900">
                LearnMate
              </span>
            </div>
            
            <div className="flex items-center space-x-6">
              {!isSignedIn ? (
                <>
                  <SignInButton mode='modal' signUpForceRedirectUrl={'/dashboard'}>
                    <button className="text-slate-600 hover:text-slate-900 font-semibold transition-colors">
                      Sign In
                    </button>
                  </SignInButton>
                  <SignInButton mode='modal' signUpForceRedirectUrl={'/dashboard'}>
                    <button className="px-5 py-2.5 bg-slate-900 text-white hover:bg-slate-800 rounded-full font-medium transition-all shadow-[0_4px_14px_0_rgb(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] transform hover:-translate-y-0.5">
                      Get Started
                    </button>
                  </SignInButton>
                </>
              ) : (
                <>
                  <Link href="/dashboard">
                    <button className="px-5 py-2.5 bg-slate-900 text-white hover:bg-slate-800 rounded-full font-medium transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
                      Dashboard
                    </button>
                  </Link>
                  <UserButton />
                </>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Link href="https://github.com/AnujYadav-1915" target="_blank" rel="noopener noreferrer">
            <div className="inline-flex items-center px-4 py-1.5 bg-[#635BFF]/10 text-[#635BFF] rounded-full text-sm font-bold mb-8 hover:bg-[#635BFF]/20 transition-colors cursor-pointer ring-1 ring-[#635BFF]/20">
              <Star className="w-4 h-4 mr-2" fill="currentColor" />
              Open Source Career Coach
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </Link>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-slate-900 mb-8 leading-[1.1]">
            Unlock your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#635BFF] to-[#00D4FF]">career potential</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Practice interviews, optimize your resume, and map out your learning path with an intelligent AI career coach by your side.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {isSignedIn ? (
              <Link href="/dashboard">
                <button className="px-8 py-4 bg-[#635BFF] text-white hover:bg-[#524BEE] rounded-full font-bold text-lg transition-all shadow-[0_8px_30px_rgb(99,91,255,0.3)] hover:shadow-[0_8px_40px_rgb(99,91,255,0.4)] transform hover:-translate-y-1 flex items-center gap-2">
                  Go to Dashboard <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            ) : (
              <SignInButton mode='modal' signUpForceRedirectUrl={'/dashboard'}>
                <button className="px-8 py-4 bg-[#635BFF] text-white hover:bg-[#524BEE] rounded-full font-bold text-lg transition-all shadow-[0_8px_30px_rgb(99,91,255,0.3)] hover:shadow-[0_8px_40px_rgb(99,91,255,0.4)] transform hover:-translate-y-1 flex items-center gap-2 group">
                  Start Practicing <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </SignInButton>
            )}
            <button className="px-8 py-4 bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 rounded-full font-bold text-lg shadow-sm transition-all hover:shadow-md transform hover:-translate-y-1 flex items-center gap-2">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 py-24 bg-white">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              A complete toolkit for your career
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Everything you need to land your dream job, powered by state-of-the-art AI technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-10 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-slate-100 relative group overflow-hidden ${!isSignedIn ? 'cursor-pointer' : 'cursor-default'} transform hover:-translate-y-1`}
                onClick={() => !isSignedIn && !feature.comingSoon && handleProtectedNavigation('/dashboard')}
              >
                {feature.comingSoon && (
                  <div className="absolute top-6 right-6 bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Coming Soon
                  </div>
                )}
                
                <div className="w-14 h-14 bg-blue-50/50 rounded-2xl flex items-center justify-center mb-6 border border-[#635BFF]/10 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                  {feature.title}
                </h3>
                
                <p className="text-slate-500 text-lg leading-relaxed mb-8">
                  {feature.description}
                </p>
                
                {isSignedIn && !feature.comingSoon ? (
                  <Link href="/dashboard">
                    <span className="inline-flex items-center text-[#635BFF] font-semibold group-hover:text-[#524BEE] transition-colors">
                      Try Now <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ) : feature.comingSoon ? (
                  <span className="inline-flex items-center text-slate-400 font-semibold">
                    In Development
                  </span>
                ) : (
                  <SignInButton mode='modal' signUpForceRedirectUrl={'/dashboard'}>
                    <span className="inline-flex items-center text-[#635BFF] font-semibold group-hover:text-[#524BEE] transition-colors">
                      Sign In to Access <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </SignInButton>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A2540] text-slate-300 py-16 relative overflow-hidden">
        {/* Subtle background element in footer */}
        <div className="absolute top-[-50%] right-[-10%] w-[50%] h-[200%] bg-[#635BFF]/10 transform rotate-12 blur-3xl z-0"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-slate-700/50 pb-12 mb-8">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">LearnMate</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 font-medium text-sm">
              <Link href="https://github.com/AnujYadav-1915" target="_blank" className="hover:text-white transition-colors">GitHub</Link>
              <Link href="https://www.linkedin.com/in/anuj-kumar-918415295/" target="_blank" className="hover:text-white transition-colors">LinkedIn</Link>
              <Link href="https://x.com/AnujYadav1915" target="_blank" className="hover:text-white transition-colors">Twitter</Link>
              <Link href="https://anujyadav-1915.github.io/updated-portfolio-website/" target="_blank" className="hover:text-white transition-colors">Portfolio</Link>
            </div>
          </div>
          <div className="text-center md:text-left text-sm text-slate-500 font-medium flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2025 LearnMate. All rights reserved.</p>
            <p className="mt-4 md:mt-0">Built with <span className="text-red-400">♥</span> by <Link href="https://anujyadav-1915.github.io/updated-portfolio-website/" target="_blank" className="text-slate-300 hover:text-white transition-colors">Anuj Kumar</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}