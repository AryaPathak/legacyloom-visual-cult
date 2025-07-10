import { ButtonGradient } from "@/components/ui/button-gradient"
import { motion, useScroll } from "framer-motion"
import { ArrowRight, ChevronRight, MessageCircle, Sparkles, Linkedin, Star, Palette, Zap, Target, Users, Trophy, Lightbulb } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { useEffect, useState } from "react"
import BrandLogos from "@/components/BrandLogos"

const Index = () => {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const updateScrolled = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', updateScrolled)
    return () => window.removeEventListener('scroll', updateScrolled)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'backdrop-blur-md bg-background/80 border-b border-border shadow-sm py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3"
          >
          <span className="text-xl sm:text-2xl font-playfair font-semibold brand-text">LegacyLoom</span>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a href="https://calendly.com/itsmosin/15-minute-meeting" target="_blank" rel="noopener noreferrer">
              <ButtonGradient 
                variant="outline" 
                size="sm"
                className="button-hover-lift"
              >
                Contact
              </ButtonGradient>
            </a>
          </motion.div>
        </div>
      </motion.nav>

      <section className="relative min-h-screen flex items-center pt-32 pb-24 md:pt-24 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-muted/20"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-gentle-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-gentle-float" style={{animationDelay: '2s'}}></div>
        
        <div className="container mx-auto px-6 relative">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto"
          >
              <div className="text-center space-y-6 mb-16">
                <motion.div variants={fadeInUp} className="space-y-2">
                  <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-foreground">
                    Your Brand Deserves
                  </h2>
                  <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-foreground">
                    More Than Engagement
                  </h2>
                  <div className="relative">
                    <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                      It Deserves{" "}
                      <span className="relative inline-block text-primary">
                        Cult
                        <motion.div 
                          className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 1, delay: 1.5 }}
                        />
                      </span>
                    </h2>
                  </div>
                </motion.div>

                <motion.p 
                  variants={fadeInUp}
                  className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4"
                >
                We help brands tell stories that people actually remember and care about.
              </motion.p>
            </div>

              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
              >
              <a href="https://calendly.com/itsmosin/15-minute-meeting" target="_blank" rel="noopener noreferrer">
                <ButtonGradient 
                  size="lg" 
                  className="w-full sm:w-auto group button-hover-lift shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500"
                >
                  Book a Strategy Call
                  <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </ButtonGradient>
              </a>
              <motion.a 
                href="https://docsend.com/v/zqsgv/legacyloom-casestudies"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-8 py-4 transition-all border-2 border-transparent hover:border-border rounded-full hover:bg-muted/50 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">Case Studies</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-all group-hover:translate-x-2" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Brands We Worked With Section */}
      <section className="py-16 bg-muted/30 border-y border-border/50 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-4">
              Brands We Worked With
            </h3>
          </motion.div>
          
          {/* Moving strip of logos */}
          <div className="relative">
            <motion.div
              className="flex space-x-16 items-center"
              animate={{ x: [0, -1920] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {/* First set of logos */}
              <div className="flex space-x-16 items-center min-w-fit">
                <img src="/lovable-uploads/8edf337d-0006-40ad-ab3d-e12bcfb1da68.png" alt="MTV" className="h-8 w-auto opacity-60 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0" />
                <img src="/lovable-uploads/8c90bbb0-2170-45e6-9a98-a394e09dc4fe.png" alt="111PG" className="h-8 w-auto opacity-60 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0" />
                <img src="/lovable-uploads/074abf38-69a2-415b-b882-a25faac38dba.png" alt="Userology" className="h-8 w-auto opacity-60 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0" />
                <img src="/lovable-uploads/227e1629-b5ad-4e1b-b1c6-940645d288a8.png" alt="SayF" className="h-8 w-auto opacity-60 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0" />
                <img src="/lovable-uploads/02b4f325-7529-4a53-82dd-8f432af9a6b1.png" alt="Securr" className="h-8 w-auto opacity-60 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0" />
                <img src="/lovable-uploads/0db71c67-a3aa-4a02-a57f-d37570bf719d.png" alt="D" className="h-8 w-auto opacity-60 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0" />
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-16 items-center min-w-fit">
                <img src="/lovable-uploads/8edf337d-0006-40ad-ab3d-e12bcfb1da68.png" alt="MTV" className="h-8 w-auto opacity-60 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0" />
                <img src="/lovable-uploads/8c90bbb0-2170-45e6-9a98-a394e09dc4fe.png" alt="111PG" className="h-8 w-auto opacity-60 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0" />
                <img src="/lovable-uploads/074abf38-69a2-415b-b882-a25faac38dba.png" alt="Userology" className="h-8 w-auto opacity-60 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0" />
                <img src="/lovable-uploads/227e1629-b5ad-4e1b-b1c6-940645d288a8.png" alt="SayF" className="h-8 w-auto opacity-60 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0" />
                <img src="/lovable-uploads/02b4f325-7529-4a53-82dd-8f432af9a6b1.png" alt="Securr" className="h-8 w-auto opacity-60 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0" />
                <img src="/lovable-uploads/0db71c67-a3aa-4a02-a57f-d37570bf719d.png" alt="D" className="h-8 w-auto opacity-60 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="what-we-craft" className="py-32 relative overflow-hidden bg-gradient-to-br from-muted/30 via-background to-primary/5">
        <div className="absolute inset-0">
          <div className="absolute left-10 top-20 w-2 h-40 bg-gradient-to-b from-primary/20 to-transparent opacity-30"></div>
          <div className="absolute right-10 bottom-20 w-2 h-40 bg-gradient-to-t from-primary/20 to-transparent opacity-30"></div>
          <div className="absolute left-1/4 top-1/2 w-1 h-24 bg-gradient-to-b from-primary/15 to-transparent opacity-20 transform -translate-y-1/2"></div>
          <div className="absolute right-1/4 top-1/3 w-1 h-32 bg-gradient-to-b from-primary/15 to-transparent opacity-20"></div>
        </div>

        <div className="container mx-auto px-6 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              What We <span className="text-primary">Craft</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Like the ancient Greeks who built monuments to last millennia, we create brand legacies that endure and inspire devotion across generations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-center lg:text-left">
                <h3 className="font-playfair text-2xl sm:text-3xl font-bold mb-4 text-foreground">The Pillars of Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our foundation rests on timeless principles, much like the enduring columns of ancient temples.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { 
                    icon: Palette, 
                    title: "Brand Strategy", 
                    desc: "Build a brand that stands for something people actually believe in" 
                  },
                  { 
                    icon: Zap, 
                    title: "Content Creation", 
                    desc: "Create content that gets shared, saved, and remembered" 
                  },
                  { 
                    icon: Target, 
                    title: "Growth Marketing", 
                    desc: "Marketing that actually drives results, not just vanity metrics" 
                  },
                  { 
                    icon: Users, 
                    title: "Community Growth", 
                    desc: "Turn customers into fans who can't stop talking about you" 
                  }
                ].map((pillar, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <pillar.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{pillar.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-center lg:text-left mb-8">
                <h3 className="font-playfair text-2xl sm:text-3xl font-bold mb-4 text-foreground">Monument to Success</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every brand we touch becomes a lasting legacy, inspiring awe and commanding respect in their domain.
                </p>
              </div>

              <div className="relative bg-gradient-to-br from-card to-muted/30 rounded-3xl p-8 border border-border/50 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl"></div>
                
                <div className="relative space-y-6">
                  <div className="flex justify-center">
                    <div className="w-40 h-8 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-t-full relative">
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                        <Trophy className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { metric: "400%", label: "Brand Loyalty Increase" },
                      { metric: "300%", label: "Engagement Growth" },
                      { metric: "250%", label: "Lead Generation" }
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center"
                      >
                        <div className="w-full h-24 bg-gradient-to-b from-primary/20 to-primary/10 rounded-lg mb-3 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary mb-1">{stat.metric}</div>
                            <Lightbulb className="h-4 w-4 text-primary/70 mx-auto" />
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="w-full h-4 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 rounded-lg"></div>
                </div>
              </div>

              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full blur-sm"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/20 rounded-full blur-sm"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-background"></div>
        <div className="container mx-auto px-6 relative">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-foreground px-4">Let's Make Something Worth Remembering.</h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <a href="https://calendly.com/itsmosin/15-minute-meeting" target="_blank" rel="noopener noreferrer">
                <ButtonGradient 
                  size="lg"
                  className="button-hover-lift shadow-2xl shadow-primary/20 hover:shadow-3xl hover:shadow-primary/30 transition-all duration-500 animate-glow"
                >
                  Start Your Legacy
                  <ArrowRight className="h-5 w-5 ml-1" />
                </ButtonGradient>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="py-16 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-lg font-brand font-semibold brand-text">LegacyLoom</span>
              </div>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">Crafting brand narratives that cultivate cult-like devotion.</p>
              <div className="flex gap-6 text-muted-foreground">
                <a href="https://wa.me/918446603369" aria-label="WhatsApp" className="hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full">
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold text-foreground mb-6">Contact</h4>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">Ready to start your brand legacy?</p>
              <a href="mailto:mosin@legacyloom.co" className="text-foreground font-medium hover:text-primary transition-colors block mb-3">mosin@legacyloom.co</a>
            </div>
          </div>
          <Separator className="my-10 bg-border" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-muted-foreground text-sm">Crafting Legacy Since 2024</span>
            </div>
            <p className="text-muted-foreground text-sm">© 2024 LegacyLoom. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
