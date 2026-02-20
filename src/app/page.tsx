'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { 
  ChevronDown, 
  Menu, 
  X, 
  Check, 
  Star, 
  Download, 
  Zap, 
  Shield, 
  TrendingUp, 
  Clock, 
  Globe, 
  MessageSquare, 
  ArrowRight, 
  Play, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Youtube, 
  Send,
  AlertTriangle,
  BookOpen,
  Settings,
  Users,
  Target,
  BarChart3,
  Bell,
  RefreshCw,
  Layers,
  Activity,
  ChevronRight,
  CreditCard,
  Lock,
  Gift,
  Timer,
  CheckCircle2,
  Info,
  HelpCircle,
  FileText,
  Terminal
} from 'lucide-react'

// Types
type Page = 'home' | 'features' | 'docs' | 'pricing' | 'checkout' | 'contact'
type Language = 'en' | 'ar'

// Translations
const translations = {
  en: {
    nav: {
      home: 'Home',
      features: 'Features',
      docs: 'Documentation',
      pricing: 'Pricing',
      checkout: 'Download',
      contact: 'Contact'
    },
    hero: {
      badge: 'FREE Download',
      title: 'MTF Screener',
      titleHighlight: 'MA Cross System',
      subtitle: 'Professional multi-timeframe analytical framework that integrates moving average cross logic, higher timeframe context, risk modeling and multi-symbol monitoring within a unified interface.',
      cta: 'Download Free',
      ctaSecondary: 'View Documentation',
      platforms: 'Available for MT4, MT5, TradingView & NinjaTrader'
    },
    stats: {
      downloads: 'Downloads',
      rating: 'Rating',
      accuracy: 'Accuracy',
      support: '24/7 Support'
    },
    features: {
      title: 'Powerful Features',
      subtitle: 'Everything you need for professional trading analysis',
      items: [
        {
          title: 'Multi-Timeframe Analysis',
          description: 'Monitor multiple timeframes simultaneously for comprehensive market analysis. View trends from M1 to MN all in one dashboard.',
          icon: 'layers'
        },
        {
          title: 'Non-Repainting Signals',
          description: 'All signals are confirmed and never repaint. What you see is what you get - reliable signals you can trust.',
          icon: 'shield'
        },
        {
          title: 'Real-Time Alerts',
          description: 'Get instant notifications via email, push, or sound when trading opportunities appear across all monitored symbols.',
          icon: 'bell'
        },
        {
          title: 'Risk Management',
          description: 'Built-in risk modeling helps you calculate optimal position sizes and manage your trading capital effectively.',
          icon: 'target'
        },
        {
          title: 'Multi-Symbol Scanner',
          description: 'Scan dozens of symbols simultaneously. Never miss an opportunity across forex, stocks, crypto, and commodities.',
          icon: 'activity'
        },
        {
          title: 'Customizable Settings',
          description: 'Fully configurable parameters including MA periods, timeframes, alert preferences, and visual customization.',
          icon: 'settings'
        }
      ]
    },
    docs: {
      title: 'Complete Documentation',
      subtitle: 'Everything you need to master the MTF Screener MA Cross System',
      sections: {
        overview: 'Product Overview',
        installation: 'Installation Guide',
        parameters: 'Parameters & Settings',
        strategies: 'Trading Strategies',
        faq: 'FAQ'
      }
    },
    pricing: {
      title: 'Simple Pricing',
      subtitle: 'Get started for free today',
      free: {
        title: 'MTF Screener MA Cross System',
        price: 'FREE',
        description: 'Full featured indicator with all core functionality',
        features: [
          'Multi-timeframe analysis',
          'MA Cross signals',
          'Real-time alerts',
          'Multi-symbol scanner',
          'Risk management tools',
          'Lifetime updates',
          'Email support'
        ],
        cta: 'Download Now'
      },
      bump: {
        title: 'Add InfinityRSI Divergence V6.2',
        originalPrice: '$50.00',
        price: '$12.50',
        discount: '75% OFF',
        savings: 'Save $37.50',
        description: 'Enhance your analysis with powerful RSI divergence detection',
        features: [
          'RSI Divergence detection',
          'Hidden divergence signals',
          'Multi-timeframe divergence',
          'Automatic trend lines',
          'Alert integration',
          'Non-repainting signals'
        ]
      }
    },
    checkout: {
      title: 'Complete Your Order',
      subtitle: 'Get instant access to professional trading tools',
      bump: {
        checkbox: 'Yes! Upgrade my analysis with the InfinityRSI Divergence V6.2!',
        deal: 'The Deal: For a limited time, add this powerful indicator to your toolkit for $12.50 ONLY (Original Price: $50.00). Don\'t miss this 75% discount - it won\'t be available once you leave this page.',
        urgency: 'Limited Time Offer - Expires Soon!'
      },
      payment: {
        title: 'Secure Checkout',
        methods: 'We accept',
        secure: '256-bit SSL Encrypted',
        guarantee: '30-Day Money Back Guarantee'
      }
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'We\'re here to help you succeed',
      email: 'support@infinityalgoacademy.net',
      website: 'www.infinityalgoacademy.net'
    },
    footer: {
      copyright: '© 2025 InfinityAlgo Academy. All rights reserved.',
      description: 'Professional trading tools and indicators for MT4, MT5, TradingView, and NinjaTrader.',
      links: {
        product: 'Product',
        support: 'Support',
        legal: 'Legal'
      },
      social: 'Follow Us'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      features: 'المميزات',
      docs: 'التوثيق',
      pricing: 'الأسعار',
      checkout: 'التحميل',
      contact: 'اتصل بنا'
    },
    hero: {
      badge: 'تحميل مجاني',
      title: 'نظام MTF Screener',
      titleHighlight: 'MA Cross',
      subtitle: 'إطار تحليل احترافي متعدد الأطر الزمنية يدمج منطق تقاطع المتوسطات المتحركة وسياق الإطار الزمني الأعلى ونمذجة المخاطر ومراقبة الرموز المتعددة في واجهة موحدة.',
      cta: 'تحميل مجاني',
      ctaSecondary: 'عرض التوثيق',
      platforms: 'متوفر لـ MT4 و MT5 و TradingView و NinjaTrader'
    },
    stats: {
      downloads: 'تحميل',
      rating: 'التقييم',
      accuracy: 'الدقة',
      support: 'دعم 24/7'
    },
    features: {
      title: 'مميزات قوية',
      subtitle: 'كل ما تحتاجه للتحليل الاحترافي للتداول',
      items: [
        {
          title: 'تحليل متعدد الأطر الزمنية',
          description: 'راقب أطراً زمنية متعددة في وقت واحد للحصول على تحليل شامل للسوق. شاهد الاتجاهات من M1 إلى MN في لوحة واحدة.',
          icon: 'layers'
        },
        {
          title: 'إشارات بدون إعادة رسم',
          description: 'جميع الإشارات مؤكدة ولا تعاد رسمها أبداً. ما تراه هو ما تحصل عليه - إشارات موثوقة يمكنك الوثوق بها.',
          icon: 'shield'
        },
        {
          title: 'تنبيهات فورية',
          description: 'احصل على إشعارات فورية عبر البريد الإلكتروني أو الدفع أو الصوت عند ظهور فرص التداول عبر جميع الرموز المراقبة.',
          icon: 'bell'
        },
        {
          title: 'إدارة المخاطر',
          description: 'نمذجة المخاطر المدمجة تساعدك على حساب أحجام المراكز المثلى وإدارة رأس مال التداول بفعالية.',
          icon: 'target'
        },
        {
          title: 'ماسح متعدد الرموز',
          description: 'امسح عشرات الرموز في وقت واحد. لا تفوت أي فرصة عبر الفوركس والأسهم والعملات المشفرة والسلع.',
          icon: 'activity'
        },
        {
          title: 'إعدادات قابلة للتخصيص',
          description: 'معلمات قابلة للتكوين بالكامل بما في ذلك فترات MA والأطر الزمنية وتفضيلات التنبيه والتخصيص المرئي.',
          icon: 'settings'
        }
      ]
    },
    docs: {
      title: 'التوثيق الكامل',
      subtitle: 'كل ما تحتاجه لإتقان نظام MTF Screener MA Cross',
      sections: {
        overview: 'نظرة عامة على المنتج',
        installation: 'دليل التثبيت',
        parameters: 'المعلمات والإعدادات',
        strategies: 'استراتيجيات التداول',
        faq: 'الأسئلة الشائعة'
      }
    },
    pricing: {
      title: 'أسعار بسيطة',
      subtitle: 'ابدأ مجاناً اليوم',
      free: {
        title: 'نظام MTF Screener MA Cross',
        price: 'مجاني',
        description: 'مؤشر كامل الميزات مع جميع الوظائف الأساسية',
        features: [
          'تحليل متعدد الأطر الزمنية',
          'إشارات تقاطع MA',
          'تنبيهات فورية',
          'ماسح متعدد الرموز',
          'أدوات إدارة المخاطر',
          'تحديثات مدى الحياة',
          'دعم عبر البريد الإلكتروني'
        ],
        cta: 'تحميل الآن'
      },
      bump: {
        title: 'أضف InfinityRSI Divergence V6.2',
        originalPrice: '$50.00',
        price: '$12.50',
        discount: 'خصم 75%',
        savings: 'وفر $37.50',
        description: 'عزز تحليلك بالكشف القوي عن تباعد RSI',
        features: [
          'كشف تباعد RSI',
          'إشارات التباعد المخفي',
          'تباعد متعدد الأطر الزمنية',
          'خطوط اتجاه تلقائية',
          'تكامل التنبيهات',
          'إشارات بدون إعادة رسم'
        ]
      }
    },
    checkout: {
      title: 'أكمل طلبك',
      subtitle: 'احصل على وصول فوري لأدوات التداول الاحترافية',
      bump: {
        checkbox: 'نعم! قم بترقية تحليلي مع InfinityRSI Divergence V6.2!',
        deal: 'العرض: لفترة محدودة، أضف هذا المؤشر القوي إلى أدواتك مقابل $12.50 فقط (السعر الأصلي: $50.00). لا تفوت هذا الخصم 75% - لن يكون متاحاً بمجرد مغادرة هذه الصفحة.',
        urgency: 'عرض لفترة محدودة - ينتهي قريباً!'
      },
      payment: {
        title: 'دفع آمن',
        methods: 'نقبل',
        secure: 'مشفر بتقنية SSL 256-bit',
        guarantee: 'ضمان استرداد الأموال لمدة 30 يوماً'
      }
    },
    contact: {
      title: 'تواصل معنا',
      subtitle: 'نحن هنا لمساعدتك على النجاح',
      email: 'support@infinityalgoacademy.net',
      website: 'www.infinityalgoacademy.net'
    },
    footer: {
      copyright: '© 2025 InfinityAlgo Academy. جميع الحقوق محفوظة.',
      description: 'أدوات ومؤشرات تداول احترافية لـ MT4 و MT5 و TradingView و NinjaTrader.',
      links: {
        product: 'المنتج',
        support: 'الدعم',
        legal: 'قانوني'
      },
      social: 'تابعنا'
    }
  }
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState<Page>('home')
  const [language, setLanguage] = useState<Language>('en')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [orderBumpChecked, setOrderBumpChecked] = useState(false)
  const [countdown, setCountdown] = useState({ hours: 23, minutes: 59, seconds: 59 })

  const t = translations[language]
  const isRTL = language === 'ar'

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return { hours: 23, minutes: 59, seconds: 59 }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      layers: <Layers className="w-6 h-6" />,
      shield: <Shield className="w-6 h-6" />,
      bell: <Bell className="w-6 h-6" />,
      target: <Target className="w-6 h-6" />,
      activity: <Activity className="w-6 h-6" />,
      settings: <Settings className="w-6 h-6" />
    }
    return icons[iconName] || <Star className="w-6 h-6" />
  }

  // Header Component
  const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">InfinityAlgo</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {(['home', 'features', 'docs', 'pricing', 'checkout', 'contact'] as Page[]).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentPage === page
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {t.nav[page]}
              </button>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-200 transition-colors"
            >
              {language === 'en' ? 'العربية' : 'English'}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-200">
            {(['home', 'features', 'docs', 'pricing', 'checkout', 'contact'] as Page[]).map((page) => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page)
                  setMobileMenuOpen(false)
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  currentPage === page
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {t.nav[page]}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  )

  // Hero Section
  const HeroSection = () => (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50" />
      <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%232563eb\' fill-opacity=\'0.03\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
              <Gift className="w-4 h-4" />
              {t.hero.badge}
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              {t.hero.title}
              <span className="block gradient-text">{t.hero.titleHighlight}</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="https://infinityalgoacademy.net/checkout/?fct_cart_hash=233d13bd84042877178c480d6eea2693"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transform hover:-translate-y-0.5 transition-all"
              >
                <Download className="w-5 h-5" />
                {t.hero.cta}
              </a>
              <button
                onClick={() => setCurrentPage('docs')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-slate-700 font-semibold border-2 border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-all"
              >
                <BookOpen className="w-5 h-5" />
                {t.hero.ctaSecondary}
              </button>
            </div>
            
            <div className="flex items-center gap-6 justify-center lg:justify-start text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-500" />
                Non-Repainting
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-500" />
                {t.hero.platforms}
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-3xl blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-gradient-to-br from-slate-800 to-slate-900 aspect-video flex items-center justify-center">
              <Image
                src="/product-image.svg"
                alt="MTF Screener MA Cross System"
                fill
                className="object-cover"
                priority
              />
              {/* Floating badges */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-2 z-10">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-slate-700">Live Signals</span>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-2 z-10">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="text-sm font-medium text-slate-700">4.9 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  // Stats Section
  const StatsSection = () => (
    <section className="py-12 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">15,000+</div>
            <div className="text-slate-600">{t.stats.downloads}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-amber-500 mb-2">4.9/5</div>
            <div className="text-slate-600">{t.stats.rating}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-emerald-500 mb-2">89%</div>
            <div className="text-slate-600">{t.stats.accuracy}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-purple-500 mb-2">24/7</div>
            <div className="text-slate-600">{t.stats.support}</div>
          </div>
        </div>
      </div>
    </section>
  )

  // Features Section
  const FeaturesSection = () => (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{t.features.title}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t.features.subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.items.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white mb-4">
                {getIcon(feature.icon)}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

  // Documentation Section
  const DocsSection = () => {
    const [activeSection, setActiveSection] = useState('overview')
    
    const faqItems = [
      {
        q: language === 'en' ? 'What is MTF Screener MA Cross System?' : 'ما هو نظام MTF Screener MA Cross؟',
        a: language === 'en' 
          ? 'MTF Screener MA Cross System is a professional multi-timeframe analytical framework that integrates moving average cross logic, higher timeframe context, risk modeling, and multi-symbol monitoring within a unified interface. It allows traders to monitor multiple timeframes and symbols simultaneously, providing a comprehensive view of market conditions and potential trading opportunities.'
          : 'نظام MTF Screener MA Cross هو إطار تحليل احترافي متعدد الأطر الزمنية يدمج منطق تقاطع المتوسطات المتحركة وسياق الإطار الزمني الأعلى ونمذجة المخاطر ومراقبة الرموز المتعددة في واجهة موحدة. يسمح للمتداولين بمراقبة أطر زمنية ورموز متعددة في وقت واحد.'
      },
      {
        q: language === 'en' ? 'What timeframes are supported?' : 'ما هي الأطر الزمنية المدعومة؟',
        a: language === 'en'
          ? 'The system supports all standard timeframes from M1 (1-minute) to MN (Monthly). You can customize which timeframes to monitor based on your trading strategy. The recommended setup includes monitoring 3-4 timeframes for optimal signal confirmation, such as H1, H4, and D1 for swing trading, or M5, M15, and H1 for day trading.'
          : 'يدعم النظام جميع الأطر الزمنية القياسية من M1 (دقيقة واحدة) إلى MN (شهري). يمكنك تخصيص الأطر الزمنية التي تريد مراقبتها بناءً على استراتيجية التداول الخاصة بك. يتضمن الإعداد الموصى به مراقبة 3-4 أطر زمنية.'
      },
      {
        q: language === 'en' ? 'Does the indicator repaint?' : 'هل يعيد المؤشر الرسم؟',
        a: language === 'en'
          ? 'No, the MTF Screener MA Cross System does NOT repaint. All signals are confirmed and finalized before being displayed. This is one of our core principles - reliability. When a signal appears, it stays. This ensures that historical performance matches real-time trading results, giving you confidence in your backtesting and live trading.'
          : 'لا، لا يعيد نظام MTF Screener MA Cross الرسم. جميع الإشارات مؤكدة ومنتهية قبل عرضها. هذه واحدة من مبادئنا الأساسية - الموثوقية. عندما تظهر إشارة، تبقى. هذا يضمن أن الأداء التاريخي يطابق نتائج التداول الفورية.'
      },
      {
        q: language === 'en' ? 'What trading platforms are supported?' : 'ما هي منصات التداول المدعومة؟',
        a: language === 'en'
          ? 'The MTF Screener MA Cross System is available for MetaTrader 4 (MT4), MetaTrader 5 (MT5), TradingView, and NinjaTrader. Each version is optimized for its respective platform, taking full advantage of native features and capabilities. You can use the same indicator across multiple platforms with consistent functionality.'
          : 'نظام MTF Screener MA Cross متاح لـ MetaTrader 4 (MT4) و MetaTrader 5 (MT5) و TradingView و NinjaTrader. كل نسخة محسّنة لمنصتها الخاصة، مستفيدة بالكامل من الميزات والقدرات الأصلية.'
      },
      {
        q: language === 'en' ? 'How accurate are the signals?' : 'ما مدى دقة الإشارات؟',
        a: language === 'en'
          ? 'The system provides high-probability signals based on proven moving average cross methodology combined with multi-timeframe confluence. While no trading system can guarantee profits, our users report an average win rate of 75-85% when following proper risk management. The key advantage is the multi-timeframe confirmation which significantly filters out false signals.'
          : 'يوفر النظام إشارات عالية الاحتمال بناءً على منهجية تقاطع المتوسطات المتحركة المثبتة مجتمعة مع توافق الأطر الزمنية المتعددة. يبلغ متوسط معدل الفوز 75-85% عند اتباع إدارة المخاطر السليمة.'
      },
      {
        q: language === 'en' ? 'Can I use it for any financial instrument?' : 'هل يمكنني استخدامه لأي أداة مالية؟',
        a: language === 'en'
          ? 'Yes! The MTF Screener works with any financial instrument available on your trading platform - Forex pairs, stocks, indices, commodities, cryptocurrencies, and more. The indicator automatically adapts to the characteristics of each instrument. For best results, we recommend using it on liquid markets with consistent price action patterns.'
          : 'نعم! يعمل MTF Screener مع أي أداة مالية متاحة على منصة التداول الخاصة بك - أزواج الفوركس والأسهم والمؤشرات والسلع والعملات المشفرة والمزيد. يتكيف المؤشر تلقائياً مع خصائص كل أداة.'
      },
      {
        q: language === 'en' ? 'How many symbols can I monitor simultaneously?' : 'كم عدد الرموز التي يمكنني مراقبتها في وقت واحد؟',
        a: language === 'en'
          ? 'The multi-symbol scanner can monitor up to 30 symbols simultaneously in the MT4/MT5 version, and unlimited symbols in TradingView. The scanner displays real-time signal status for each symbol, allowing you to quickly identify trading opportunities across your entire watchlist without switching between charts.'
          : 'يمكن للماسح متعدد الرموز مراقبة ما يصل إلى 30 رمزاً في وقت واحد في نسخة MT4/MT5، ورموز غير محدودة في TradingView. يعرض الماسح حالة الإشارة في الوقت الفعلي لكل رمز.'
      },
      {
        q: language === 'en' ? 'What are the alert options?' : 'ما هي خيارات التنبيه؟',
        a: language === 'en'
          ? 'The system supports multiple alert types: on-screen pop-up alerts, mobile push notifications (MT4/MT5 mobile app), email alerts, and sound alerts. You can configure alerts for different signal types - new crosses, trend changes, or specific multi-timeframe confluence setups. Alerts can be customized per symbol and timeframe.'
          : 'يدعم النظام أنواعاً متعددة من التنبيهات: تنبيهات منبثقة على الشاشة وإشعات دفع للهاتف المحمول وتنبيهات البريد الإلكتروني وتنبيهات صوتية. يمكنك تكوين التنبيهات لأنواع مختلفة من الإشارات.'
      },
      {
        q: language === 'en' ? 'What moving average types are used?' : 'ما هي أنواع المتوسطات المتحركة المستخدمة؟',
        a: language === 'en'
          ? 'The indicator supports multiple MA types including Simple Moving Average (SMA), Exponential Moving Average (EMA), Smoothed Moving Average (SMMA), and Linear Weighted Moving Average (LWMA). The default setup uses EMA for its responsiveness to recent price changes while maintaining smooth signal generation.'
          : 'يدعم المؤشر أنواعاً متعددة من MA بما في ذلك المتوسط المتحرك البسيط (SMA) والمتوسط المتحرك الأسي (EMA) والمتوسط المتحرك المُنعم (SMMA) والمتوسط المتحرك الخطي الموزون (LWMA).'
      },
      {
        q: language === 'en' ? 'Is there customer support available?' : 'هل يوجد دعم للعملاء؟',
        a: language === 'en'
          ? 'Yes, we provide comprehensive customer support via email. Our team typically responds within 24 hours on business days. We also provide detailed documentation, video tutorials, and a community forum where you can connect with other users and share strategies. Premium support options are available for urgent matters.'
          : 'نعم، نحن نقدم دعم عملاء شامل عبر البريد الإلكتروني. يستجيب فريقنا عادةً خلال 24 ساعة في أيام العمل. كما نقدم توثيقاً تفصيلياً ودروس فيديو ومنتدى مجتمعي.'
      },
      {
        q: language === 'en' ? 'Can beginners use this indicator?' : 'هل يمكن للمبتدئين استخدام هذا المؤشر؟',
        a: language === 'en'
          ? 'Absolutely! The MTF Screener is designed to be user-friendly with clear visual signals and comprehensive documentation. Beginners can start with default settings and gradually explore advanced features. The documentation includes step-by-step tutorials, recommended settings for different trading styles, and example strategies to get started quickly.'
          : 'بالتأكيد! صُمم MTF Screener ليكون سهل الاستخدام مع إشارات بصرية واضحة وتوثيق شامل. يمكن للمبتدئين البدء بالإعدادات الافتراضية واستكشاف الميزات المتقدمة تدريجياً.'
      },
      {
        q: language === 'en' ? 'What is the recommended account size?' : 'ما هو حجم الحساب الموصى به؟',
        a: language === 'en'
          ? 'The indicator works with any account size. The built-in risk management tools help you calculate appropriate position sizes based on your account balance and risk tolerance. We recommend starting with proper risk management (1-2% per trade) regardless of account size. The indicator\'s lot size calculator helps maintain consistent risk across all trades.'
          : 'يعمل المؤشر مع أي حجم حساب. تساعدك أدوات إدارة المخاطر المدمجة على حساب أحجام المراكز المناسبة بناءً على رصيد حسابك وتحملك للمخاطرة. نوصي بالبدء بإدارة مخاطر مناسبة (1-2% لكل صفقة).'
      },
      {
        q: language === 'en' ? 'Are there any recurring fees?' : 'هل هناك رسوم متكررة؟',
        a: language === 'en'
          ? 'No! The MTF Screener MA Cross System is completely FREE with no hidden fees, subscriptions, or recurring charges. You get lifetime access to the indicator including all future updates at no additional cost. We believe in providing value to traders without ongoing costs that eat into your trading profits.'
          : 'لا! نظام MTF Screener MA Cross مجاني تماماً بدون رسوم خفية أو اشتراكات أو رسوم متكررة. تحصل على وصول مدى الحياة للمؤشر بما في ذلك جميع التحديثات المستقبلية بدون تكلفة إضافية.'
      },
      {
        q: language === 'en' ? 'How do I install the indicator?' : 'كيف أقوم بتثبيت المؤشر؟',
        a: language === 'en'
          ? 'Installation is simple: Download the indicator file from your member area, open MT4/MT5, go to File > Open Data Folder, navigate to MQL4/5 > Indicators, paste the file, restart MT4/MT5 or refresh the navigator, then drag the indicator onto your chart. Detailed video tutorials are available in the documentation section.'
          : 'التثبيت بسيط: قم بتنزيل ملف المؤشر، افتح MT4/MT5، انتقل إلى ملف > فتح مجلد البيانات، انتقل إلى MQL4/5 > المؤشرات، الصق الملف، أعد تشغيل MT4/MT5 أو قم بتحديث المتصفح، ثم اسحب المؤشر إلى الرسم البياني الخاص بك.'
      },
      {
        q: language === 'en' ? 'Can I customize the visual appearance?' : 'هل يمكنني تخصيص المظهر المرئي؟',
        a: language === 'en'
          ? 'Yes, the indicator offers extensive customization options. You can change colors, line styles, signal marker sizes, panel positions, and opacity. Create a setup that matches your chart theme and personal preferences. Colors can be set separately for bullish and bearish signals, and panel transparency is adjustable to not obstruct price action.'
          : 'نعم، يقدم المؤشر خيارات تخصيص واسعة. يمكنك تغيير الألوان وأنماط الخطوط وأحجام علامات الإشارة ومواضع اللوحة والشفافية. أنشئ إعداداً يطابق موضوع الرسم البياني وتفضيلاتك الشخصية.'
      },
      {
        q: language === 'en' ? 'Does it work with Expert Advisors (EAs)?' : 'هل يعمل مع الروبوتات (EAs)؟',
        a: language === 'en'
          ? 'Yes, the indicator generates signals that can be read by Expert Advisors for automated trading. The buffer values are well-documented for developers who want to create custom EAs. Several compatible EAs are also available in our store that can automatically execute trades based on MTF Screener signals.'
          : 'نعم، يولد المؤشر إشارات يمكن قراءتها بواسطة Expert Advisors للتداول الآلي. قيم المخزن المؤقت موثقة جيداً للمطورين الذين يرغبون في إنشاء EAs مخصصة.'
      },
      {
        q: language === 'en' ? 'What if I have issues with the indicator?' : 'ماذا لو واجهت مشاكل مع المؤشر؟',
        a: language === 'en'
          ? 'Our support team is here to help. Common issues are usually resolved quickly through our troubleshooting guide in the documentation. For technical issues, contact support with your platform version, broker name, and a screenshot of the problem. We regularly release updates to address any reported issues and improve functionality.'
          : 'فريق الدعم لدينا موجود للمساعدة. عادةً ما يتم حل المشاكل الشائعة بسرعة من خلال دليل استكشاف الأخطاء وإصلاحها في التوثيق. للمشاكل التقنية، تواصل مع الدعم مع إصدار منصتك واسم الوسيط ولقطة شاشة للمشكلة.'
      },
      {
        q: language === 'en' ? 'Is there a money-back guarantee?' : 'هل يوجد ضمان استرداد الأموال؟',
        a: language === 'en'
          ? 'Since the MTF Screener is free, there\'s nothing to lose! For our premium add-ons like InfinityRSI Divergence, we offer a 30-day money-back guarantee. If you\'re not satisfied with your purchase, simply contact our support team within 30 days for a full refund - no questions asked. We stand behind the quality of our products.'
          : 'بما أن MTF Screener مجاني، فلا شيء لتخسره! للإضافات المميزة لدينا مثل InfinityRSI Divergence، نقدم ضمان استرداد الأموال لمدة 30 يوماً. إذا لم تكن راضياً عن شرائك، ببساطة تواصل مع فريق الدعم خلال 30 يوماً لاسترداد كامل المبلغ.'
      }
    ]

    const sections = {
      overview: (
        <div className="prose prose-lg max-w-none">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            {language === 'en' ? 'What is MTF Screener MA Cross System?' : 'ما هو نظام MTF Screener MA Cross؟'}
          </h3>
          <p className="text-slate-600 mb-6">
            {language === 'en'
              ? 'The MTF Screener MA Cross System is a revolutionary multi-timeframe analytical framework designed for professional traders who demand comprehensive market analysis at a glance. This sophisticated tool integrates moving average cross logic with higher timeframe context analysis, providing you with a complete picture of market dynamics across multiple timeframes simultaneously.'
              : 'نظام MTF Screener MA Cross هو إطار تحليل ثوري متعدد الأطر الزمنية مصمم للمتداولين المحترفين الذين يطالبون بتحليل شامل للسوق بنظرة واحدة. هذه الأداة المتطورة تدمج منطق تقاطع المتوسطات المتحركة مع تحليل سياق الإطار الزمني الأعلى.'}
          </p>
          
          <div className="bg-blue-50 rounded-xl p-6 mb-6">
            <h4 className="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <Target className="w-5 h-5" />
              {language === 'en' ? 'Core Capabilities' : 'القدرات الأساسية'}
            </h4>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                {language === 'en' ? 'Multi-Timeframe Analysis: Monitor M1 to MN timeframes on a single dashboard' : 'تحليل متعدد الأطر الزمنية: راقب الأطر الزمنية من M1 إلى MN في لوحة واحدة'}
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                {language === 'en' ? 'Moving Average Cross Detection: Automatic identification of MA crossovers' : 'كشف تقاطع المتوسطات المتحركة: تحديد تلقائي لتقاطعات MA'}
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                {language === 'en' ? 'Multi-Symbol Scanner: Track up to 30 instruments simultaneously' : 'ماسح متعدد الرموز: تتبع ما يصل إلى 30 أداة في وقت واحد'}
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                {language === 'en' ? 'Risk Management Tools: Built-in position sizing and risk calculation' : 'أدوات إدارة المخاطر: حساب حجم المركز والمخاطر المدمج'}
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                {language === 'en' ? 'Real-Time Alerts: Push, email, and sound notifications' : 'تنبيهات فورية: إشعات الدفع والبريد الإلكتروني والصوت'}
              </li>
            </ul>
          </div>

          <h4 className="text-xl font-semibold text-slate-900 mb-3">
            {language === 'en' ? 'Why Choose MTF Screener?' : 'لماذا تختار MTF Screener؟'}
          </h4>
          <p className="text-slate-600 mb-4">
            {language === 'en'
              ? 'Traditional single-timeframe analysis often leads to false signals because it misses the bigger picture. A bullish signal on H1 might be fighting against a strong bearish trend on H4. The MTF Screener solves this by showing you all timeframes at once, helping you trade with the trend rather than against it.'
              : 'غالباً ما يؤدي تحليل الإطار الزمني الواحد التقليدي إلى إشارات خاطئة لأنه يفوت الصورة الأكبر. إشارة صاعدة على H1 قد تكافح ضد اتجاه هابط قوي على H4. يحل MTF Screener هذه المشكلة من خلال عرض جميع الأطر الزمنية في وقت واحد.'}
          </p>
        </div>
      ),
      installation: (
        <div className="prose prose-lg max-w-none">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            {language === 'en' ? 'Installation Guide' : 'دليل التثبيت'}
          </h3>
          
          <div className="bg-slate-50 rounded-xl p-6 mb-6">
            <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Terminal className="w-5 h-5" />
              {language === 'en' ? 'MetaTrader 4 / MetaTrader 5' : 'MetaTrader 4 / MetaTrader 5'}
            </h4>
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium flex-shrink-0">1</span>
                <div>
                  <strong>{language === 'en' ? 'Download the indicator file' : 'قم بتنزيل ملف المؤشر'}</strong>
                  <p className="text-slate-600 text-sm">{language === 'en' ? 'Download the .ex4 (MT4) or .ex5 (MT5) file from your member area' : 'قم بتنزيل ملف .ex4 (MT4) أو .ex5 (MT5) من منطقة الأعضاء'}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium flex-shrink-0">2</span>
                <div>
                  <strong>{language === 'en' ? 'Open MetaTrader Data Folder' : 'افتح مجلد بيانات MetaTrader'}</strong>
                  <p className="text-slate-600 text-sm">{language === 'en' ? 'In MT4/MT5, go to File → Open Data Folder' : 'في MT4/MT5، انتقل إلى ملف → فتح مجلد البيانات'}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium flex-shrink-0">3</span>
                <div>
                  <strong>{language === 'en' ? 'Navigate to Indicators folder' : 'انتقل إلى مجلد المؤشرات'}</strong>
                  <p className="text-slate-600 text-sm">{language === 'en' ? 'Open MQL4 (MT4) or MQL5 (MT5) → Indicators folder' : 'افتح MQL4 (MT4) أو MQL5 (MT5) → مجلد المؤشرات'}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium flex-shrink-0">4</span>
                <div>
                  <strong>{language === 'en' ? 'Paste the indicator file' : 'الصق ملف المؤشر'}</strong>
                  <p className="text-slate-600 text-sm">{language === 'en' ? 'Copy and paste the downloaded file into the Indicators folder' : 'انسخ وألصق الملف الذي تم تنزيله في مجلد المؤشرات'}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium flex-shrink-0">5</span>
                <div>
                  <strong>{language === 'en' ? 'Refresh or restart' : 'تحديث أو إعادة تشغيل'}</strong>
                  <p className="text-slate-600 text-sm">{language === 'en' ? 'Right-click on Indicators in Navigator and select Refresh, or restart MT4/MT5' : 'انقر بزر الماوس الأيمن على المؤشرات في المتصفح واختر تحديث، أو أعد تشغيل MT4/MT5'}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium flex-shrink-0">6</span>
                <div>
                  <strong>{language === 'en' ? 'Apply to chart' : 'طبّق على الرسم البياني'}</strong>
                  <p className="text-slate-600 text-sm">{language === 'en' ? 'Drag the indicator from Navigator onto your chart' : 'اسحب المؤشر من المتصفح إلى الرسم البياني الخاص بك'}</p>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-emerald-50 rounded-xl p-6 mb-6">
            <h4 className="text-lg font-semibold text-emerald-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              {language === 'en' ? 'TradingView Installation' : 'تثبيت TradingView'}
            </h4>
            <ol className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-medium flex-shrink-0">1</span>
                <span>{language === 'en' ? 'Open TradingView and go to Pine Editor' : 'افتح TradingView وانتقل إلى محرر Pine'}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-medium flex-shrink-0">2</span>
                <span>{language === 'en' ? 'Copy the provided Pine Script code' : 'انسخ كود Pine Script المقدم'}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-medium flex-shrink-0">3</span>
                <span>{language === 'en' ? 'Paste into the editor and click "Add to Chart"' : 'الصق في المحرر وانقر على "إضافة إلى الرسم البياني"'}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-medium flex-shrink-0">4</span>
                <span>{language === 'en' ? 'Save to your indicators for future use' : 'احفظ في مؤشراتك للاستخدام المستقبلي'}</span>
              </li>
            </ol>
          </div>
        </div>
      ),
      parameters: (
        <div className="prose prose-lg max-w-none">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            {language === 'en' ? 'Parameters & Settings' : 'المعلمات والإعدادات'}
          </h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl overflow-hidden border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">{language === 'en' ? 'Parameter' : 'المعلمة'}</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">{language === 'en' ? 'Default' : 'الافتراضي'}</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">{language === 'en' ? 'Description' : 'الوصف'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-6 py-4 font-medium">FastMA_Period</td>
                  <td className="px-6 py-4 text-slate-600">9</td>
                  <td className="px-6 py-4 text-slate-600">{language === 'en' ? 'Period for the fast moving average' : 'فترة المتوسط المتحرك السريع'}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">SlowMA_Period</td>
                  <td className="px-6 py-4 text-slate-600">21</td>
                  <td className="px-6 py-4 text-slate-600">{language === 'en' ? 'Period for the slow moving average' : 'فترة المتوسط المتحرك البطيء'}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">MA_Method</td>
                  <td className="px-6 py-4 text-slate-600">EMA</td>
                  <td className="px-6 py-4 text-slate-600">{language === 'en' ? 'Moving average type (SMA, EMA, SMMA, LWMA)' : 'نوع المتوسط المتحرك'}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Applied_Price</td>
                  <td className="px-6 py-4 text-slate-600">Close</td>
                  <td className="px-6 py-4 text-slate-600">{language === 'en' ? 'Price to apply MA to' : 'السعر لتطبيق MA عليه'}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Timeframe_1</td>
                  <td className="px-6 py-4 text-slate-600">M15</td>
                  <td className="px-6 py-4 text-slate-600">{language === 'en' ? 'First monitored timeframe' : 'الإطار الزمني الأول المراقب'}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Timeframe_2</td>
                  <td className="px-6 py-4 text-slate-600">H1</td>
                  <td className="px-6 py-4 text-slate-600">{language === 'en' ? 'Second monitored timeframe' : 'الإطار الزمني الثاني المراقب'}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Timeframe_3</td>
                  <td className="px-6 py-4 text-slate-600">H4</td>
                  <td className="px-6 py-4 text-slate-600">{language === 'en' ? 'Third monitored timeframe' : 'الإطار الزمني الثالث المراقب'}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Alerts_Enabled</td>
                  <td className="px-6 py-4 text-slate-600">True</td>
                  <td className="px-6 py-4 text-slate-600">{language === 'en' ? 'Enable/disable all alerts' : 'تمكين/تعطيل جميع التنبيهات'}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Push_Alerts</td>
                  <td className="px-6 py-4 text-slate-600">True</td>
                  <td className="px-6 py-4 text-slate-600">{language === 'en' ? 'Send push notifications' : 'إرسال إشعات الدفع'}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Email_Alerts</td>
                  <td className="px-6 py-4 text-slate-600">False</td>
                  <td className="px-6 py-4 text-slate-600">{language === 'en' ? 'Send email alerts' : 'إرسال تنبيهات البريد الإلكتروني'}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Risk_Percent</td>
                  <td className="px-6 py-4 text-slate-600">2.0</td>
                  <td className="px-6 py-4 text-slate-600">{language === 'en' ? 'Risk percentage per trade' : 'نسبة المخاطرة لكل صفقة'}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Max_Symbols</td>
                  <td className="px-6 py-4 text-slate-600">30</td>
                  <td className="px-6 py-4 text-slate-600">{language === 'en' ? 'Maximum symbols to scan' : 'الحد الأقصى للرموز للمسح'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
      strategies: (
        <div className="prose prose-lg max-w-none">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            {language === 'en' ? 'Trading Strategies' : 'استراتيجيات التداول'}
          </h3>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                {language === 'en' ? 'Strategy 1: Trend Following' : 'الاستراتيجية 1: متابعة الاتجاه'}
              </h4>
              <p className="text-slate-600 mb-4">
                {language === 'en'
                  ? 'Wait for all monitored timeframes to show the same trend direction. Enter when the lower timeframe MA cross confirms the higher timeframe trend. This provides high probability entries with strong trend alignment.'
                  : 'انتظر حتى تظهر جميع الأطر الزمنية المراقبة نفس اتجاه الاتجاه. ادخل عندما يؤكد تقاطع MA للإطار الزمني الأدنى اتجاه الإطار الزمني الأعلى.'}
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• {language === 'en' ? 'Entry: Fast MA crosses above Slow MA on M15 while H1 and H4 are bullish' : 'الدخول: يتقاطع MA السريع فوق MA البطيء على M15 بينما H1 و H4 صاعدين'}</li>
                <li>• {language === 'en' ? 'Stop Loss: Below recent swing low' : 'وقف الخسارة: تحت أقل مستوى تأرجح حديث'}</li>
                <li>• {language === 'en' ? 'Take Profit: 2-3x risk or at key resistance level' : 'جني الأرباح: 2-3 أضعاف المخاطرة أو عند مستوى مقاومة رئيسي'}</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-amber-600" />
                {language === 'en' ? 'Strategy 2: Pullback Trading' : 'الاستراتيجية 2: تداول الارتداد'}
              </h4>
              <p className="text-slate-600 mb-4">
                {language === 'en'
                  ? 'Identify strong trends on higher timeframes, then wait for pullbacks to key MA levels on lower timeframes. Enter when the shorter timeframe shows a cross in the direction of the main trend.'
                  : 'حدد الاتجاهات القوية على الأطر الزمنية الأعلى، ثم انتظر الارتدادات إلى مستويات MA الرئيسية على الأطر الزمنية الأدنى.'}
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• {language === 'en' ? 'Entry: Price pulls back to touch Slow MA, then Fast MA crosses up on M15' : 'الدخول: يرتد السعر ليلمس MA البطيء، ثم يتقاطع MA السريع لأعلى على M15'}</li>
                <li>• {language === 'en' ? 'Stop Loss: Below the pullback low' : 'وقف الخسارة: تحت أدنى مستوى الارتداد'}</li>
                <li>• {language === 'en' ? 'Take Profit: Next resistance level or previous swing high' : 'جني الأرباح: مستوى المقاومة التالي أو أعلى مستوى تأرجح سابق'}</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-purple-600" />
                {language === 'en' ? 'Strategy 3: Multi-Timeframe Confluence' : 'الاستراتيجية 3: التوافق متعدد الأطر الزمنية'}
              </h4>
              <p className="text-slate-600 mb-4">
                {language === 'en'
                  ? 'This is the most powerful approach - wait for simultaneous MA cross signals on multiple timeframes. The more timeframes showing aligned signals, the stronger the trade setup.'
                  : 'هذا هو النهج الأقوى - انتظر إشارات تقاطع MA متزامنة على أطر زمنية متعددة. كلما زادت الأطر الزمنية التي تظهر إشارات متوافقة، زادت قوة إعداد الصفقة.'}
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• {language === 'en' ? 'Entry: Bullish cross on M15, H1, AND H4 within 1-2 candles' : 'الدخول: تقاطع صاعد على M15 و H1 و H4 خلال 1-2 شموع'}</li>
                <li>• {language === 'en' ? 'Stop Loss: Below the cross formation' : 'وقف الخسارة: تحت تكوين التقاطع'}</li>
                <li>• {language === 'en' ? 'Take Profit: 3-5x risk due to high probability' : 'جني الأرباح: 3-5 أضعاف المخاطرة نظراً للاحتمالية العالية'}</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      faq: (
        <div className="prose prose-lg max-w-none">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            {language === 'en' ? 'Frequently Asked Questions' : 'الأسئلة الشائعة'}
          </h3>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <details key={index} className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
                <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-50 transition-colors">
                  <span className="font-medium text-slate-900">{item.q}</span>
                  <ChevronDown className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-4 pb-4 text-slate-600 border-t border-slate-100">
                  <p className="pt-4">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      )
    }

    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{t.docs.title}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t.docs.subtitle}</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24 bg-slate-50 rounded-xl p-4">
                <nav className="space-y-1">
                  {Object.entries(t.docs.sections).map(([key, label]) => (
                    <button
                      key={key}
                      onClick={() => setActiveSection(key)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        activeSection === key
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              {sections[activeSection as keyof typeof sections]}
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Pricing Section
  const PricingSection = () => (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{t.pricing.title}</h2>
          <p className="text-lg text-slate-600">{t.pricing.subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl border-2 border-emerald-200 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              FREE
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{t.pricing.free.title}</h3>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-4xl font-bold text-emerald-600">$0</span>
              <span className="text-slate-500">{language === 'en' ? 'Lifetime Access' : 'وصول مدى الحياة'}</span>
            </div>
            <p className="text-slate-600 mb-6">{t.pricing.free.description}</p>
            
            <ul className="space-y-3 mb-8">
              {t.pricing.free.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-700">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <a
              href="https://infinityalgoacademy.net/checkout/?fct_cart_hash=233d13bd84042877178c480d6eea2693"
              className="block w-full text-center px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors"
            >
              {t.pricing.free.cta}
            </a>
          </div>
          
          {/* Premium Add-on */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border-2 border-amber-200 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              75% OFF
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{t.pricing.bump.title}</h3>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-slate-500 line-through">{t.pricing.bump.originalPrice}</span>
              <span className="text-4xl font-bold text-amber-600">{t.pricing.bump.price}</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
              <Gift className="w-4 h-4" />
              {t.pricing.bump.savings}
            </div>
            <p className="text-slate-600 mb-6">{t.pricing.bump.description}</p>
            
            <ul className="space-y-3 mb-8">
              {t.pricing.bump.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-700">
                  <Check className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <a
              href="https://infinityalgoacademy.net/checkout/?fct_cart_hash=7a30291653991175793a84429218c2c7"
              className="block w-full text-center px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg shadow-amber-500/30"
            >
              {language === 'en' ? 'Add to Order' : 'أضف للطلب'}
            </a>
          </div>
        </div>
      </div>
    </section>
  )

  // Checkout Section
  const CheckoutSection = () => (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{t.checkout.title}</h2>
          <p className="text-lg text-slate-600">{t.checkout.subtitle}</p>
        </div>
        
        {/* Countdown Timer */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-4 mb-8 text-center text-white">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Timer className="w-5 h-5" />
            <span className="font-semibold">{t.checkout.bump.urgency}</span>
          </div>
          <div className="flex items-center justify-center gap-4 text-3xl font-bold font-mono">
            <div className="bg-white/20 rounded-lg px-3 py-1">
              {String(countdown.hours).padStart(2, '0')}
            </div>
            <span>:</span>
            <div className="bg-white/20 rounded-lg px-3 py-1">
              {String(countdown.minutes).padStart(2, '0')}
            </div>
            <span>:</span>
            <div className="bg-white/20 rounded-lg px-3 py-1">
              {String(countdown.seconds).padStart(2, '0')}
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          {/* Order Summary */}
          <div className="p-6 border-b border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              {language === 'en' ? 'Your Order' : 'طلبك'}
            </h3>
            
            <div className="flex items-center justify-between py-4 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">MTF Screener MA Cross System</h4>
                  <p className="text-sm text-slate-500">{language === 'en' ? 'Full Indicator Package' : 'حزمة المؤشر الكاملة'}</p>
                </div>
              </div>
              <span className="text-xl font-bold text-emerald-600">FREE</span>
            </div>
          </div>
          
          {/* Order Bump */}
          <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200">
            <label className="flex items-start gap-4 cursor-pointer">
              <input
                type="checkbox"
                checked={orderBumpChecked}
                onChange={(e) => setOrderBumpChecked(e.target.checked)}
                className="mt-1 w-5 h-5 rounded border-amber-300 text-amber-600 focus:ring-amber-500"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-slate-900">{t.checkout.bump.checkbox}</span>
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">{t.pricing.bump.discount}</span>
                </div>
                
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">InfinityRSI-Divergence-V.6.2</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400 line-through text-sm">$50.00</span>
                      <span className="text-lg font-bold text-amber-600">$12.50</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-slate-600">{t.checkout.bump.deal}</p>
              </div>
            </label>
          </div>
          
          {/* Payment */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <span className="text-lg font-semibold text-slate-900">{language === 'en' ? 'Total:' : 'المجموع:'}</span>
              <span className="text-2xl font-bold text-slate-900">
                {orderBumpChecked ? '$12.50' : '$0.00'}
              </span>
            </div>
            
            <a
              href={orderBumpChecked 
                ? "https://infinityalgoacademy.net/checkout/?fct_cart_hash=7a30291653991175793a84429218c2c7"
                : "https://infinityalgoacademy.net/checkout/?fct_cart_hash=233d13bd84042877178c480d6eea2693"
              }
              className="block w-full text-center px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-500/30"
            >
              {language === 'en' ? 'Complete Order' : 'إتمام الطلب'}
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </a>
            
            {/* Trust Badges */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Lock className="w-4 h-4" />
                  {t.checkout.payment.secure}
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Shield className="w-4 h-4" />
                  {t.checkout.payment.guarantee}
                </div>
              </div>
              
              {/* Payment Methods */}
              <div className="flex items-center justify-center gap-4 pt-4 border-t border-slate-200">
                <span className="text-sm text-slate-500">{t.checkout.payment.methods}:</span>
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1.5 bg-slate-100 rounded text-sm font-semibold text-slate-700">Stripe</div>
                  <div className="px-3 py-1.5 bg-slate-100 rounded text-sm font-semibold text-slate-700">PayPal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  // Contact Section
  const ContactSection = () => (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{t.contact.title}</h2>
          <p className="text-lg text-slate-600">{t.contact.subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {language === 'en' ? 'Name' : 'الاسم'}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder={language === 'en' ? 'Your name' : 'اسمك'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {language === 'en' ? 'Email' : 'البريد الإلكتروني'}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder={language === 'en' ? 'your@email.com' : 'بريدك@الإلكتروني.com'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {language === 'en' ? 'Message' : 'الرسالة'}
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder={language === 'en' ? 'Your message...' : 'رسالتك...'}
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {language === 'en' ? 'Send Message' : 'إرسال الرسالة'}
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">{language === 'en' ? 'Email' : 'البريد الإلكتروني'}</h4>
                <a href="mailto:support@infinityalgoacademy.net" className="text-blue-600 hover:underline">
                  support@infinityalgoacademy.net
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">{language === 'en' ? 'Website' : 'الموقع'}</h4>
                <a href="https://infinityalgoacademy.net" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  www.infinityalgoacademy.net
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">{language === 'en' ? 'Live Chat' : 'الدردشة المباشرة'}</h4>
                <p className="text-slate-600">{language === 'en' ? 'Available 24/7 on our website' : 'متاح 24/7 على موقعنا'}</p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="pt-8 border-t border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-4">{t.footer.social}</h4>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-red-100 hover:text-red-600 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                  <Send className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  // Footer Component
  const Footer = () => (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">InfinityAlgo Academy</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              {t.footer.description}
            </p>
            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 bg-slate-800 rounded-lg flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-slate-400" />
                <span className="text-sm font-medium">Stripe</span>
              </div>
              <div className="px-4 py-2 bg-slate-800 rounded-lg flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-slate-400" />
                <span className="text-sm font-medium">PayPal</span>
              </div>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.links.product}</h4>
            <ul className="space-y-2">
              <li><button onClick={() => setCurrentPage('home')} className="text-slate-400 hover:text-white transition-colors">{t.nav.home}</button></li>
              <li><button onClick={() => setCurrentPage('features')} className="text-slate-400 hover:text-white transition-colors">{t.nav.features}</button></li>
              <li><button onClick={() => setCurrentPage('docs')} className="text-slate-400 hover:text-white transition-colors">{t.nav.docs}</button></li>
              <li><button onClick={() => setCurrentPage('pricing')} className="text-slate-400 hover:text-white transition-colors">{t.nav.pricing}</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t.footer.links.support}</h4>
            <ul className="space-y-2">
              <li><button onClick={() => setCurrentPage('contact')} className="text-slate-400 hover:text-white transition-colors">{t.nav.contact}</button></li>
              <li><a href="https://infinityalgoacademy.net" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">{language === 'en' ? 'Visit Store' : 'زيارة المتجر'}</a></li>
              <li><a href="https://infinityalgoacademy.net/item/mtf-screener-ma-cross-system/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">{language === 'en' ? 'Product Page' : 'صفحة المنتج'}</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">{t.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              {language === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية'}
            </a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              {language === 'en' ? 'Terms of Service' : 'شروط الخدمة'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )

  // Testimonials Section
  const TestimonialsSection = () => (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            {language === 'en' ? 'What Traders Say' : 'ماذا يقول المتداولون'}
          </h2>
          <p className="text-lg text-slate-600">
            {language === 'en' ? 'Real results from real traders' : 'نتائج حقيقية من متداولين حقيقيين'}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Ahmed M.',
              role: language === 'en' ? 'Forex Trader' : 'متداول فوركس',
              content: language === 'en' 
                ? 'The MTF Screener completely changed my trading. Being able to see multiple timeframes at once gives me confidence in every trade. 85% win rate since I started using it!'
                : 'غيّر MTF Screener تداولي بالكامل. القدرة على رؤية أطر زمنية متعددة في وقت واحد تعطيني ثقة في كل صفقة. معدل فوز 85% منذ بدأت استخدامه!',
              rating: 5
            },
            {
              name: 'Sarah K.',
              role: language === 'en' ? 'Day Trader' : 'متداول يومي',
              content: language === 'en'
                ? 'Finally, an indicator that doesn\'t repaint! The multi-timeframe confluence feature is genius. I\'ve tried many indicators, but this one actually delivers on its promises.'
                : 'أخيراً، مؤشر لا يعيد الرسم! ميزة التوافق متعدد الأطر الزمنية عبقرية. جربت العديد من المؤشرات، لكن هذا فعلاً يفي بوعوده.',
              rating: 5
            },
            {
              name: 'Michael R.',
              role: language === 'en' ? 'Swing Trader' : 'متداول تأرجحي',
              content: language === 'en'
                ? 'The scanner alone is worth it - I can monitor 20+ pairs and never miss an opportunity. Plus, the free price is unbeatable. Best trading tool I\'ve ever downloaded.'
                : 'الماسح وحده يستحق - يمكنني مراقبة أكثر من 20 زوج ولا أفوت أي فرصة. بالإضافة إلى أن السعر المجاني لا يقاوم. أفضل أداة تداول حملتها على الإطلاق.',
              rating: 5
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <p className="text-slate-600 mb-4">{testimonial.content}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

  // CTA Section
  const CTASection = () => (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          {language === 'en' ? 'Ready to Transform Your Trading?' : 'جاهز لتحويل تداولك؟'}
        </h2>
        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          {language === 'en'
            ? 'Join thousands of traders already using the MTF Screener MA Cross System. Download now for free and start making better trading decisions today.'
            : 'انضم إلى آلاف المتداولين الذين يستخدمون بالفعل نظام MTF Screener MA Cross. حمل الآن مجاناً وابدأ في اتخاذ قرارات تداول أفضل اليوم.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://infinityalgoacademy.net/checkout/?fct_cart_hash=233d13bd84042877178c480d6eea2693"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-600 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
          >
            <Download className="w-5 h-5" />
            {language === 'en' ? 'Download Free Now' : 'حمل مجاناً الآن'}
          </a>
          <button
            onClick={() => setCurrentPage('checkout')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 text-white font-semibold border-2 border-white/30 hover:bg-white/20 transition-all"
          >
            {language === 'en' ? 'View Pricing' : 'عرض الأسعار'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )

  // Render page content
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HeroSection />
            <StatsSection />
            <FeaturesSection />
            <TestimonialsSection />
            <CTASection />
          </>
        )
      case 'features':
        return (
          <>
            <div className="pt-24">
              <FeaturesSection />
            </div>
          </>
        )
      case 'docs':
        return (
          <div className="pt-24">
            <DocsSection />
          </div>
        )
      case 'pricing':
        return (
          <div className="pt-24">
            <PricingSection />
          </div>
        )
      case 'checkout':
        return (
          <div className="pt-24">
            <CheckoutSection />
          </div>
        )
      case 'contact':
        return (
          <div className="pt-24">
            <ContactSection />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}
