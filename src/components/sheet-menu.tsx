import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export function SheetMenu() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <nav aria-label="Global">
                    <ul className="flex flex-col items-start font-bold gap-6 text-xl">
                        <li>
                            <a
                                className="text-zinc-900 transition hover:text-zinc-900/75 font-semibold"
                                href="#hero"
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                className="text-zinc-900 transition hover:text-zinc-900/75 font-semibold"
                                href="#Descriptions"
                            >
                                Descripción
                            </a>
                        </li>

                        <li>
                            <a
                                className="text-zinc-900 transition hover:text-zinc-900/75 font-semibold"
                                href="#WhyUs"
                            >
                                Porque elegirnos
                            </a>
                        </li>

                        <li>
                            <a
                                className="text-zinc-900 transition hover:text-zinc-900/75 font-semibold"
                                href="#Service"
                            >
                                Servicios
                            </a>
                        </li>

                        <li>
                            <a
                                className="text-zinc-900 transition hover:text-zinc-900/75 font-semibold"
                                href="#Testimonials"
                            >
                                Testimonios
                            </a>
                        </li>

                        <li>
                            <a
                                className="text-zinc-900 transition hover:text-zinc-900/75 font-semibold"
                                href="#Reserva"
                            >
                                Contáctenos
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-zinc-900 transition hover:text-zinc-900/75 font-semibold"
                                href="#Faqs"
                            >
                                Pregunta frecuentes
                            </a>
                        </li>
                    </ul>
                </nav>
            </SheetContent>
        </Sheet>
    )
}