"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, FileText, User, Crosshair, ListTodo, Network, Lock, Loader2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"

function NavBar() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [imageWidth, setImageWidth] = useState(150)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth
      if (width >= 768 && width < 1024) {
        setImageWidth(150)
      } else if (width > 1024) {
        setImageWidth(250)
      } else if (width >= 400) {
        setImageWidth(200)
      } else {
        setImageWidth(150)
      }
    }
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const productItems = [
    {
      icon: FileText,
      label: "Resume Builder",
      description: "Effortlessly create AI-powered resumes that match job descriptions and boost your hiring chances.",
      href: "/resumeBuilder",
    },
    {
      icon: User,
      label: "Interview AI",
      description: "Effortlessly create AI-powered resumes that match job descriptions and boost your hiring chances.",
      href: "/interviewCoach",
    },
    {
      icon: Crosshair,
      label: "Auto Apply",
      description: "Auto-apply to every job effortlessly. Stay tuned for this amazing feature.",
      locked: true,
      href: "/",
    },
    {
      icon: ListTodo,
      label: "Job Tracking",
      description: "Auto-track every job effortlessly. Stay tuned for this amazing feature.",
      locked: true,
      href: "/",
    },
    {
      icon: Network,
      label: "Networking",
      description: "Auto-connect with professionals effortlessly. Stay tuned for this amazing feature.",
      locked: true,
      href: "/",
    },
  ]

  const menuItems = [
    { href: "/", label: "Products" },
    { href: "/about", label: "About us" },
    { href: "/contact", label: "Contact Us" },
  ]

  // Custom animated link component with loading state
  const AnimatedLink = ({ href, children, className = "" }) => {
    const handleClick = (e) => {
      e.preventDefault()
      setIsLoading(true)
      router.push(href)
    }

    return (
      <Link 
        href={href} 
        onClick={handleClick}
        className={`group relative inline-block ${className} ${isLoading ? 'pointer-events-none opacity-50' : ''}`}
      >
        <span className="relative flex items-center gap-2">
          {children}
          {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1B29CB] transition-all group-hover:w-full duration-300 ease-in-out" />
        </span>
      </Link>
    )
  }

  // Custom animated dropdown trigger
  const AnimatedDropdownTrigger = ({ children }) => {
    return (
      <DropdownMenuTrigger className="group relative  inline-block">
        <span className="relative">
          {children}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1B29CB] transition-all group-hover:w-full duration-300 ease-in-out" />
        </span>
      </DropdownMenuTrigger>
    )
  }

  // Update the product items click handler
  const handleProductClick = (href) => {
    setIsLoading(true)
    router.push(href)
  }

  return (
    <nav className="pt-[34px] flex justify-between left bg-white items-center px-4 py-4 md:px-8 backdrop-filter backdrop-blur-[8px] bg-opacity-30 fixed right-0 left-0 top-0 z-[999]">
     <Link href={"/"}>
      <Image
        src="/logo.svg"
        alt="Logo"
        width={imageWidth}
        height={50}
        className="lg:ml-[120px] ml-[24px] lg:mr-[205px]"
      />
      </Link>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <motion.button onClick={toggleMenu} className="z-[999] fixed right-4 top-8" whileTap={{ scale: 0.95 }}>
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X size={35} className="text-black" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={35} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <center className="hidden lg:block">
        <div className="flex justify-evenly items-center">
          <ul className="flex justify-center items-center gap-[45px] w-[21rem] relative right-[5rem] text-[0.93rem]">
            <li>
              <DropdownMenu>
                <AnimatedDropdownTrigger>Products</AnimatedDropdownTrigger>
                <DropdownMenuContent className="w-[350px] p-2 relative left-[8.6rem] top-6">
                  {productItems.map((item) => (
                    <DropdownMenuItem 
                      key={item.label} 
                      className="flex items-start gap-3 p-3 cursor-pointer"
                      onClick={() => handleProductClick(item.href)}
                      disabled={isLoading}
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-1 shrink-0">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{item.label}</span>
                            {item.locked && <Lock className="w-4 h-4 text-muted-foreground" />}
                            {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                          </div>
                          <span className="text-sm text-muted-foreground">{item.description}</span>
                        </div>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <AnimatedLink href="/">About us</AnimatedLink>
            </li>
            <li>
              <AnimatedLink href="/contact">Contact Us</AnimatedLink>
            </li>
          </ul>
          <div className="flex justify-evenly items-center gap-[14px] mr-[143px] ml-[143px]">
            <Button
              variant="outline"
              className="w-[99px] h-[44px] rounded-[0.93rem] bg-transparent text-[#1B29CB] border border-[#1B29CB] hover:border-[#1B29CB] hover:text-[#1B29CB] transition-transform duration-200 hover:scale-105"
            >
              <Link href={"/login"}>Signin</Link>
            </Button>
            <Button
              variant="default"
              className="w-[99px] h-[44px] rounded-[0.93rem] bg-[#1B29CB] text-white hover:bg-[#1b2acbe9] hover:text-white transition-transform duration-200 hover:scale-105"
            >
              <Link href={"/signup"}>Signup</Link>
            </Button>
          </div>
        </div>
      </center>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="fixed top-0 left-0 right-0 w-full h-screen bg-white z-[998]"
          >
            <div className="flex flex-col items-center justify-center h-full z-50">
              <motion.ul
                className="flex flex-col relative right-[2rem] text-2xl w-[18.69rem] flex-nowrap items-start gap-[45px] z-50"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                initial="hidden"
                animate="show"
              >
                {menuItems.map((item) => (
                  <motion.li
                    key={item.label}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      show: { opacity: 1, x: 0 },
                    }}
                    className="w-full"
                  >
                    {item.label === "Products" ? (
                      <DropdownMenu>
                        <AnimatedDropdownTrigger>Products</AnimatedDropdownTrigger>
                        <DropdownMenuContent className="w-[350px] p-2 relative z-[1000]">
                          {productItems.map((item) => (
                            <DropdownMenuItem 
                              key={item.label} 
                              className="flex items-start gap-3 p-3 cursor-pointer"
                              onClick={() => handleProductClick(item.href)}
                              disabled={isLoading}
                            >
                              <div className="flex items-start gap-3">
                                <div className="mt-1 shrink-0">
                                  <item.icon className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex flex-col gap-1">
                                  <div className="flex items-center gap-2">
                                    <span className="font-medium">{item.label}</span>
                                    {item.locked && <Lock className="w-4 h-4 text-muted-foreground" />}
                                    {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                                  </div>
                                  <span className="text-sm text-muted-foreground">{item.description}</span>
                                </div>
                              </div>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <AnimatedLink href={item.href}>{item.label}</AnimatedLink>
                    )}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                className="flex justify-center mt-[10rem] items-center gap-[14px] mx-auto relative right-[4.3rem] z-50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Button
                  variant="outline"
                  className="w-[99px] h-[44px] rounded-[0.93rem] text-[#1B29CB] border border-[#1B29CB] hover:border-[#1B29CB] hover:text-[#1B29CB] transition-transform duration-200 hover:scale-105"
                >
                  <Link href={"/login"}>Signin</Link>
                </Button>
                <Button
                  variant="default"
                  className="w-[99px] h-[44px] rounded-[0.93rem] bg-[#1B29CB] text-white hover:bg-[#1B29CB] hover:text-white transition-transform duration-200 hover:scale-105"
                >
                  <Link href={"/signup"}>Signup</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default NavBar

