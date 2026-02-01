import { useState } from "react";
import { ArrowRight, Check, Play } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/landing/Footer";

// Import testimonial images
import pinkyImage from "@/assets/testimonials/pinky-travel.png";
import tiffanyImage from "@/assets/testimonials/tiffany-appliance.png";
import cynthiaImage from "@/assets/testimonials/cynthia-phone.png";
import sarahImage from "@/assets/testimonials/sarah-nfl.png";
import krystalImage from "@/assets/testimonials/krystal-grocery.png";
import laurieImage from "@/assets/testimonials/laurie-lifestyle.png";
import deborahImage from "@/assets/testimonials/deborah-aaa.png";
import bunmiImage from "@/assets/testimonials/bunmi-convenience.png";

const videoTestimonials = [
  {
    name: "Giovanni B.",
    result: "$8,321 Saved",
    quote: "We used to spend $1,500 per night on hotels. Now we pay $300 for the same quality. This has completely changed how our family travels.",
    videoUrl: "https://storage.googleapis.com/msgsndr/jl8KxwwRlu6AL9Saacdc/media/685df8235c72d2bd8430333f.mp4",
  },
  {
    name: "Elijah",
    result: "Earns $10K+/month",
    quote: "I was skeptical at first, but after years on the road as a long-haul truck driver, I finally found a way home. Within 18 months, I replaced my full-time income. Now I work from anywhere and travel with my family whenever we want.",
    videoUrl: "https://storage.googleapis.com/msgsndr/jl8KxwwRlu6AL9Saacdc/media/68fc556cd9a00d039973793b.mp4",
  },
  {
    name: "53-Year Travel Expert",
    result: "Industry Veteran",
    quote: "After 53 years in the travel industry, I've never seen wholesale access like this made available to everyday families. It's revolutionary.",
    videoUrl: "https://storage.googleapis.com/msgsndr/jl8KxwwRlu6AL9Saacdc/media/68fc57bbf1ef98075802046a.mp4",
  },
];

const socialProofImages = [
  { image: pinkyImage, name: "Pinky", savings: "$900+" },
  { image: tiffanyImage, name: "Tiffany", savings: "$1,140" },
  { image: cynthiaImage, name: "Cynthia", savings: "$270/mo" },
  { image: sarahImage, name: "Sarah", savings: "$1,490" },
  { image: krystalImage, name: "Krystal", savings: "$250" },
  { image: laurieImage, name: "Laurie", savings: "$2,200+" },
  { image: deborahImage, name: "Deborah", savings: "FREE" },
  { image: bunmiImage, name: "Bunmi", savings: "$140+" },
];

const faqItems = [
  {
    question: "How much is the membership?",
    answer: "The Platinum membership is $135/month. But here's the key: when you refer just 3 people, your monthly fee becomes $0 forever. Plus, most families save $2,000+ on their first trip, which more than covers several months of membership."
  },
  {
    question: "Can I really deduct family travel?",
    answer: "Yes! With a legitimate home-based travel business, you can legally deduct travel expenses, home office costs, marketing spend, and even pay your kids as employees. My full-time employed husband + this business = $8,000+ tax refund. Consult with your tax professional for your specific situation."
  },
  {
    question: "Do I have to recruit people?",
    answer: "No. You can join JUST for the wholesale travel savings and never refer anyone. But if you DO want your membership free and want to build income, referring others is optional (and honestly pretty easy when you're showing them how to save thousands on travel)."
  },
  {
    question: "Is there a contract?",
    answer: "No long-term contract. You can cancel anytime. We believe if this doesn't deliver value, you shouldn't be stuck paying for it."
  },
  {
    question: "What if I don't travel that much?",
    answer: "The savings extend beyond vacations: work trips, weekend getaways, visiting family, theme parks, dining, entertainment, electronics, insurance, and more. Plus, you might start traveling more once you see how affordable it becomes!"
  },
  {
    question: "How is this different from Expedia/Booking.com?",
    answer: "Those sites show retail prices. This system gives you wholesale access — the same rates travel agents and industry insiders get. Plus, your travel becomes tax-deductible, AND you can earn commissions."
  },
  {
    question: "Is this a pyramid scheme?",
    answer: "No. This is a legitimate MLM (multi-level marketing) business operating in 180+ countries with full regulatory compliance. You're getting real wholesale travel access and real tax benefits. The income opportunity is optional and based on referring others to genuine value."
  },
  {
    question: "What's the 'First 3 Fast' strategy?",
    answer: "It's the simple system I teach for enrolling your first 3 people within 30 days. Their commissions cover your $135/month fee, making your membership free forever. Bonus 1 walks you through it step-by-step."
  },
  {
    question: "How does the legacy income work?",
    answer: "At the Director rank, your residual income becomes a transferable asset. When you pass away, your monthly commissions continue flowing to your heirs AND keep growing. Guy's grandchildren are still earning from his work. That's Proverbs 13:22 in action."
  },
  {
    question: "What if my spouse isn't on board?",
    answer: "Have them watch this webinar with you. Many skeptical spouses become the biggest advocates once they see the tax benefits and wholesale savings. This isn't about 'recruiting' — it's about stewardship."
  },
];

const TravelWebinar = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white">
      {/* SECTION 1: HERO */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <p className="text-sm uppercase tracking-wide text-cyan-600 font-semibold mb-4">
            You're One Step Away From Freedom
          </p>
          <h1 
            className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Watch The Complete Freedom Funding Training
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-5xl mx-auto mb-12">
            Discover exactly how the wholesale travel system works, why families are saving $2,000+ per trip, and how you can legally deduct every vacation while building residual income that passes to your children
          </p>
        </div>
      </section>

      {/* SECTION 2: VIDEO CONTEXT BOX */}
      <section className="pb-8">
        <div 
          className="max-w-5xl mx-auto px-4"
        >
          <div 
            className="p-8 md:p-10 rounded-2xl border-2 border-cyan-300"
            style={{
              background: 'linear-gradient(135deg, #e6fffc 0%, #f9f5e8 100%)'
            }}
          >
            <h2 
              className="text-2xl md:text-3xl font-bold text-foreground mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What You're About to Watch
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              This is the complete training presented by one of our top leaders who's helped thousands of families access wholesale travel and build tax-advantaged income.
            </p>
            <p className="font-semibold text-foreground mb-4">
              In the next 60 minutes, you'll discover:
            </p>
            <ul className="space-y-3">
              {[
                "How the wholesale travel system really works (no fluff, just facts)",
                "Real examples of families saving $2,000-$8,000 per trip",
                "The first incentive trip (how new members book their first stay)",
                "Exclusive world tours (save up to 90% with member points)",
                "The tax advantages (why full-time professionals love this)",
                "Guy's legacy income story (generational wealth in action)",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-cyan-600 mt-0.5">✅</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3: WEBINAR VIDEO EMBED */}
      <section className="pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="aspect-video rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-cyan-600 to-gold-600 relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mb-4">
                <Play className="w-12 h-12 text-white fill-white" />
              </div>
              <p className="text-xl font-semibold">Webinar Video Goes Here</p>
              <p className="text-sm opacity-80 mt-2">Add your video URL to display the training</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: POST-VIDEO CTA */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8">
            If you've finished watching and you're ready to access wholesale travel + build your freedom lifestyle, scroll down to see your complete bonus package and join today.
          </p>
          <a
            href="https://travorium.com/wealthways"
            className="inline-flex items-center gap-3 font-bold text-xl px-12 py-5 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 text-white"
            style={{
              background: 'linear-gradient(135deg, #2dd4bf 0%, #14b8a6 100%)',
              boxShadow: '0 15px 40px rgba(45, 212, 191, 0.4)'
            }}
          >
            Yes, I'm Ready to Join
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* SECTION 5: WHAT'S INCLUDED */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, #f9fafb 0%, #ffffff 100%)' }}>
        <div className="container mx-auto px-4">
          <h2 
            className="text-4xl md:text-5xl font-bold text-center text-foreground mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What You Get As a Member
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-4xl mx-auto">
            This isn't just a 'travel discount.' It's a complete business system with tax advantages, income potential, and legacy wealth building.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Column 1 */}
            <div className="bg-white border-2 border-border rounded-xl p-8 hover:border-cyan-400 hover:shadow-xl transition-all duration-300">
              <div className="text-6xl mb-4 text-center">🌍</div>
              <h3 className="text-xl font-bold text-cyan-700 mb-4 text-center">Wholesale Travel Access</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" /> Hotels & resorts (20-70% off retail)</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" /> Flights & vacation packages</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" /> Cruises (member-only rates)</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" /> Car rentals (25-35% savings)</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" /> Theme parks & attractions</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" /> World tours (save up to 90%)</li>
              </ul>
              <p className="text-sm text-muted-foreground italic mt-4 text-center">Value: Thousands saved per year</p>
            </div>

            {/* Column 2 */}
            <div className="bg-white border-2 border-border rounded-xl p-8 hover:border-cyan-400 hover:shadow-xl transition-all duration-300">
              <div className="text-6xl mb-4 text-center">💰</div>
              <h3 className="text-xl font-bold text-cyan-700 mb-4 text-center">Tax-Advantaged Business</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" /> Deduct family travel as business expense</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" /> Home office deductions</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" /> Marketing expense write-offs</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" /> Pay your kids as employees</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" /> Transform spending into investment</li>
              </ul>
              <p className="text-sm text-muted-foreground italic mt-4 text-center">Value: $5,000-$15,000+ annual tax savings</p>
            </div>

            {/* Column 3 */}
            <div className="bg-white border-2 border-border rounded-xl p-8 hover:border-cyan-400 hover:shadow-xl transition-all duration-300">
              <div className="text-6xl mb-4 text-center">📈</div>
              <h3 className="text-xl font-bold text-cyan-700 mb-4 text-center">Residual Income System</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" /> Earn when you refer others</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" /> Enroll 3 = Membership FREE</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" /> Build monthly recurring commissions</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" /> Director income passes to heirs</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" /> Guy's legacy: income after passing</li>
              </ul>
              <p className="text-sm text-muted-foreground italic mt-4 text-center">Value: $500-$5,000+ monthly potential</p>
            </div>

            {/* Column 4 */}
            <div className="bg-white border-2 border-border rounded-xl p-8 hover:border-cyan-400 hover:shadow-xl transition-all duration-300">
              <div className="text-6xl mb-4 text-center">🎓</div>
              <h3 className="text-xl font-bold text-cyan-700 mb-4 text-center">Personal Mentorship</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" /> Direct access to Lourdes for 90 days</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" /> "First 3 Fast" enrollment training</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" /> Authority-based marketing coaching</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" /> Private faith-driven community</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" /> Monthly group strategy calls</li>
              </ul>
              <p className="text-sm text-muted-foreground italic mt-4 text-center">Value: $4,997 (included for founding members)</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: BONUS PACKAGE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Claim Your{" "}
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #f0d976 0%, #c7a043 50%, #a68635 100%)',
              }}
            >
              $5,812
            </span>{" "}
            Founding Member Bonus Package
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-4xl mx-auto">
            When you join today, you get instant access to these 6 powerful resources (normally sold separately, yours FREE as a founding member)
          </p>

          <div 
            className="max-w-5xl mx-auto p-10 md:p-12 rounded-2xl shadow-2xl"
            style={{
              background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #2fe0d5, #c7a043) border-box',
              border: '3px solid transparent'
            }}
          >
            {/* Bonus Items */}
            {[
              { icon: "🎁", title: "BONUS 1: The 'First Three Free' Cheatsheet", desc: "Simple 3-step plan to get your travel membership FREE", value: "$97" },
              { icon: "🎁", title: "BONUS 2: The 'Content That Converts' Prompt Pack", desc: "10 copy-paste social media templates to spark curiosity", value: "$147" },
              { icon: "🎁", title: "BONUS 3: The 'Objection Melter' Response Guide", desc: "Your guide to answering the top 10 questions with confidence", value: "$127" },
              { icon: "🎁", title: "BONUS 4: The 'Wanderpreneur' Destination Directory", desc: "Your first 10 dream trips: Instagrammable & affordable getaways", value: "$197" },
              { icon: "🎁", title: "BONUS 5: The '30-Day Freedom' Action Plan", desc: "Your first month to a free membership & your first paycheck", value: "$247" },
            ].map((bonus, index) => (
              <div 
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center gap-4 pb-6 mb-6 border-b-2 border-border hover:bg-cyan-50/30 rounded-lg transition-all p-3 -m-3"
              >
                <span className="text-4xl">{bonus.icon}</span>
                <div className="flex-1">
                  <h4 className="font-bold text-foreground">{bonus.title}</h4>
                  <p className="text-sm text-muted-foreground">{bonus.desc}</p>
                </div>
                <div className="text-right">
                  <span className="text-muted-foreground line-through text-sm">{bonus.value}</span>
                  <span 
                    className="ml-2 px-3 py-1 rounded-full text-white text-sm font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #f0d976 0%, #c7a043 100%)'
                    }}
                  >
                    FREE
                  </span>
                </div>
              </div>
            ))}

            {/* Special Bonus 6 */}
            <div 
              className="flex flex-col md:flex-row items-start md:items-center gap-4 pb-6 mb-6 border-b-2 border-gold-400 bg-gold-50 rounded-lg p-4"
            >
              <span className="text-4xl">💎</span>
              <div className="flex-1">
                <h4 className="font-bold text-foreground">BONUS 6: Personal Mentorship with Lourdes</h4>
                <p className="text-sm text-muted-foreground">Private access to mentorship, guidance & strategic support</p>
              </div>
              <div className="text-right">
                <span className="text-muted-foreground line-through text-sm">$4,997</span>
                <span 
                  className="ml-2 px-3 py-1 rounded-full text-white text-sm font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #f0d976 0%, #c7a043 100%)'
                  }}
                >
                  FREE for founding members
                </span>
              </div>
            </div>

            {/* Total Value */}
            <div className="border-t-4 border-gold-500 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <span className="text-2xl font-bold text-foreground">TOTAL VALUE:</span>
              <span 
                className="text-5xl font-black bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #f0d976 0%, #c7a043 50%, #a68635 100%)',
                  filter: 'drop-shadow(0 2px 4px rgba(199, 160, 67, 0.4))'
                }}
              >
                $5,812
              </span>
            </div>

            {/* Investment Box */}
            <div 
              className="py-6 rounded-xl text-center mt-8"
              style={{
                background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)'
              }}
            >
              <p className="text-2xl font-bold text-white">YOUR INVESTMENT TODAY: $135/month</p>
              <p className="text-lg text-white/90">(goes to $0 when you refer 3)</p>
            </div>

            {/* How to Claim */}
            <div className="mt-8 p-6 bg-cyan-50 border-l-4 border-cyan-600 rounded-lg">
              <p className="text-foreground">
                <span className="font-bold">HOW TO CLAIM:</span> After joining, send a screenshot of your receipt to{" "}
                <a href="mailto:friends@wanderpreneur.org" className="text-cyan-600 underline">friends@wanderpreneur.org</a>
                {" "}and we'll deliver all 6 bonuses within 24 hours!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: VIDEO TESTIMONIALS */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, #f9fafb 0%, #ffffff 100%)' }}>
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 
            className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Real Families. Real Results. Real Freedom.
          </h2>

          {/* Video Testimonials */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-16">
            {videoTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-800 to-cyan-900 relative">
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    controls
                    preload="metadata"
                    poster={testimonial.videoUrl + "#t=3"}
                  >
                    <source src={testimonial.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-8">
                  <p className="font-bold text-foreground mb-2">{testimonial.name}</p>
                  <p 
                    className="text-2xl font-extrabold mb-4"
                    style={{
                      color: '#c7a043',
                      textShadow: '0 2px 4px rgba(0,0,0,0.2), 0 0 20px rgba(199,160,67,0.3)'
                    }}
                  >
                    {testimonial.result}
                  </p>
                  <p className="text-muted-foreground text-sm italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Proof Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {socialProofImages.map((item, index) => (
              <div
                key={index}
                className="rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #f0d976, #c7a043, #a68635, #c7a043, #f0d976)',
                  padding: '2px'
                }}
              >
                <div className="bg-white rounded-xl overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={`${item.name}'s savings`}
                    className="w-full aspect-square object-contain p-2"
                    loading="lazy"
                  />
                  <div 
                    className="absolute top-2 right-2 px-2 py-1 rounded-full font-bold text-white text-xs shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #f0d976 0%, #c7a043 100%)'
                    }}
                  >
                    {item.savings}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ ACCORDION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 
            className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Your Questions Answered
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                className="border-2 border-border rounded-xl overflow-hidden hover:border-cyan-400 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-cyan-50/50 transition-colors"
                >
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                  <span className={`text-cyan-600 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                <div 
                  className="grid transition-all duration-300 ease-in-out"
                  style={{
                    gridTemplateRows: openFaq === index ? '1fr' : '0fr'
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 pt-2 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section 
        className="py-20 text-white"
        style={{
          background: 'linear-gradient(135deg, #0d9488 0%, #0a756b 100%)'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Your Freedom Lifestyle Starts Today
          </h2>
          <p className="text-2xl text-cyan-100 mb-12 max-w-4xl mx-auto">
            Join thousands of families who are traveling more, keeping more of their money, and building generational wealth — all while living out their faith.
          </p>

          {/* What Happens Next */}
          <div className="max-w-3xl mx-auto mb-12 p-8 rounded-xl bg-white/10 backdrop-blur border border-white/20">
            <h3 className="text-xl font-bold mb-6">What Happens Next:</h3>
            <div className="space-y-3 text-left">
              {[
                "Click 'Join Now' below",
                "Complete your membership registration",
                "Email your receipt to friends@wanderpreneur.org",
                "Receive all 6 bonuses within 24 hours",
                "Start planning your first wholesale-priced trip!"
              ].map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Investment Breakdown */}
          <div className="max-w-3xl mx-auto mb-12 p-8 rounded-xl bg-white/10 backdrop-blur">
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span>Monthly Membership:</span>
                <span className="font-bold">$135/month</span>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span>First 3 Referrals:</span>
                <span className="font-bold">$0/month</span>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span>Annual Travel Savings:</span>
                <span className="font-bold">$3,000-$8,000</span>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span>Tax Advantages:</span>
                <span className="font-bold">$5,000-$15,000</span>
              </div>
              <div className="flex justify-between md:col-span-2 pt-2">
                <span>Legacy Income Potential:</span>
                <span className="font-bold">Unlimited (passes to heirs)</span>
              </div>
            </div>
          </div>

          {/* Large CTA */}
          <a
            href="https://travorium.com/wealthways"
            className="inline-flex items-center gap-4 font-black text-xl md:text-2xl px-12 md:px-16 py-5 md:py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 text-white mb-8"
            style={{
              background: 'linear-gradient(135deg, #f0d976 0%, #c7a043 50%, #a68635 100%)',
              boxShadow: '0 15px 40px rgba(199, 160, 67, 0.4)'
            }}
          >
            Yes! I'm Ready to Join & Claim My Bonuses
            <ArrowRight className="w-6 h-6" />
          </a>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto mb-8 text-sm">
            {[
              "No long-term contract",
              "Cancel anytime",
              "50,000+ families served globally",
              "Operating in 180+ countries",
              "$2.3M+ in travel savings (last 24 months)",
              "500+ mission trips funded"
            ].map((badge, index) => (
              <div key={index} className="flex items-center gap-2 justify-center">
                <Check className="w-4 h-4 text-cyan-300" />
                <span className="text-cyan-100">{badge}</span>
              </div>
            ))}
          </div>

          {/* Urgency Box */}
          <div className="max-w-2xl mx-auto p-6 rounded-xl bg-red-600 text-white">
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">⏰</span>
              <p className="text-left">
                <span className="font-bold">Founding Member Bonus Expires:</span> Bonus 6 (Personal Mentorship - $4,997 value) is only available for founding members. Secure your spot today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: FOOTER */}
      <Footer />
    </main>
  );
};

export default TravelWebinar;
