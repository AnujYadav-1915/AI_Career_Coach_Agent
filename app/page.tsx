"use client"
import React from 'react';
import { MessageCircle, FileText, Map, Users, Brain, Target, TrendingUp, Star } from 'lucide-react';
import { SignInButton, UserButton, useUser } from "@/lib/clerk-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LearnMateHomepage() {
  const { user, isSignedIn } = useUser();
  const router = useRouter();

  // Handle protected route navigation
  const handleProtectedNavigation = (route: string) => {
    if (!isSignedIn) {
      // Show sign-in modal or redirect to sign-in
      return;
    }
    router.push(route);
  };

  // Handle Get Started button click
  const handleGetStarted = () => {
    if (isSignedIn) {
      router.push('/dashboard');
    }
    // If not signed in, the SignInButton will handle the modal
  };

  const features = [
    {
      icon: <MessageCircle className="w-8 h-8 text-slate-900" />,
      title: "Q&A Chatbot",
      description: "Get instant answers to your career questions with our intelligent AI assistant",
      color: "bg-gray-50 hover:bg-gray-100 border border-gray-200"
    },
    {
      icon: <FileText className="w-8 h-8 text-slate-900" />,
      title: "AI Resume Analyzer",
      description: "Detailed analysis with score and personalized improvement recommendations",
      color: "bg-gray-50 hover:bg-gray-100 border border-gray-200"
    },
    {
      icon: <Map className="w-8 h-8 text-slate-900" />,
      title: "Roadmap Generator",
      description: "Create personalized learning paths tailored to your career goals",
      color: "bg-gray-50 hover:bg-gray-100 border border-gray-200"
    },
    {
      icon: <Users className="w-8 h-8 text-slate-900" />,
      title: "Mock Interview Prep",
      description: "Practice with AI-powered interviews to boost your confidence",
      color: "bg-gray-50 hover:bg-gray-100 border border-gray-200",
      comingSoon: true
    }
  ];

  return (
    <div className={"min-h-screen bg-white"}>
      {/* Header */}
      <header className={"bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50"}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Image src={'/logo.svg'} alt="logo" width={40} height={40} />
              <span className="text-2xl font-bold text-slate-900">
                LearnMate
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Clerk Authentication */}
              {!isSignedIn ? (
                <>
                  <SignInButton mode='modal' signUpForceRedirectUrl={'/dashboard'}>
                    <button className="flex items-center gap-x-2 px-4 py-2 text-slate-900 hover:text-slate-900 font-medium transition-colors">
                      <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                      </svg>
                      Sign In
                    </button>
                  </SignInButton>
                  
                  <SignInButton mode='modal' signUpForceRedirectUrl={'/dashboard'}>
                    <button className="px-6 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                      Get Started
                    </button>
                  </SignInButton>
                </>
              ) : (
                <>
                  <Link href="/dashboard">
                    <button className="px-6 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
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
      <section className="relative overflow-hidden bg-white">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Announcement Badge */}
            <Link href="https://github.com/AnujYadav-1915" target="_blank" rel="noopener noreferrer">
              <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-slate-900 rounded-full text-sm font-medium mb-8 hover:bg-blue-200 transition-colors cursor-pointer">
                <Star className="w-4 h-4 mr-2" />
                Open Source Career Coach
                <svg className="flex-shrink-0 size-4 ml-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </Link>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Your AI-Powered
              <span className="block text-slate-900">
                Career Coach
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-4xl mx-auto leading-relaxed">
              Practice interviews and get instant resume feedback with your personal AI career coach.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {isSignedIn ? (
                <Link href="/dashboard">
                  <button className="px-8 py-4 bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center gap-2">
                    Go to Dashboard
                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </Link>
              ) : (
                <SignInButton mode='modal' signUpForceRedirectUrl={'/dashboard'}>
                  <button className="px-8 py-4 bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center gap-2">
                    Start Practicing
                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </SignInButton>
              )}
              <button className="px-8 py-4 text-lg border-2 bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 rounded-lg shadow-sm transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Four Powerful AI Agents
            </h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
              Each agent is designed to tackle specific aspects of your career development, 
              providing personalized insights and actionable recommendations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="${feature.color} rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:scale-105 border border-gray-200 relative overflow-hidden ${!isSignedIn ? 'cursor-pointer' : 'cursor-default'}"
                onClick={() => !isSignedIn && !feature.comingSoon && handleProtectedNavigation('/dashboard')}
              >
                {feature.comingSoon && (
                  <div className="absolute top-4 right-4 bg-indigo-600 text-white hover:bg-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                    Coming Soon
                  </div>
                )}
                {!isSignedIn && !feature.comingSoon && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Sign In Required
                  </div>
                )}
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 ml-4">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  {feature.description}
                </p>
                {isSignedIn && !feature.comingSoon ? (
                  <Link href="/dashboard">
                    <span className="inline-flex items-center gap-x-1.5 text-sm text-slate-900 decoration-2 hover:underline font-medium cursor-pointer">
                      Try Now
                      <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </span>
                  </Link>
                ) : feature.comingSoon ? (
                  <span className="inline-flex items-center gap-x-1.5 text-sm text-gray-400 font-medium">
                    Coming Soon
                  </span>
                ) : (
                  <SignInButton mode='modal' signUpForceRedirectUrl={'/dashboard'}>
                    <span className="inline-flex items-center gap-x-1.5 text-sm text-slate-900 decoration-2 hover:underline font-medium cursor-pointer">
                      Sign In to Access
                      <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </span>
                  </SignInButton>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Ready to start practicing?
          </h2>
          <p className="text-xl mb-8 leading-relaxed text-slate-500">
            Improve your interview skills and resume with instant AI feedback.
          </p>
          {isSignedIn ? (
            <Link href="/dashboard">
              <button className="px-10 py-4 text-lg font-semibold bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg shadow-sm font-semibold transition-all">
                Go to Dashboard
              </button>
            </Link>
          ) : (
            <SignInButton mode='modal' signUpForceRedirectUrl={'/dashboard'}>
              <button className="px-10 py-4 text-lg font-semibold bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg shadow-sm font-semibold transition-all">
                Get Started Now
              </button>
            </SignInButton>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">LearnMate</span>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="flex items-center gap-4">
                <Link href="https://github.com/AnujYadav-1915" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  GitHub
                </Link>
                <Link href="https://www.linkedin.com/in/anuj-kumar-918415295/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </Link>
                <Link href="https://x.com/AnujYadav1915" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Twitter
                </Link>
                <Link href="https://anujyadav-1915.github.io/updated-portfolio-website/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </div>
              <div className="text-gray-400 text-sm text-center md:text-right">
                <p>&copy; 2025 LearnMate. Built by <Link href="https://anujyadav-1915.github.io/updated-portfolio-website/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">Anuj Kumar</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}