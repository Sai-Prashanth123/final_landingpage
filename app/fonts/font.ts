import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

const inter_init = Inter({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-inter",
})

const poppins_init = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
})

export const inter = inter_init.variable
export const poppins = poppins_init.variable