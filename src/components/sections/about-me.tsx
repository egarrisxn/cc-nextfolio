import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { Newsreader } from "next/font/google"

const newsreader = Newsreader({
  style: "italic",
  subsets: ["latin"]
})

export function AboutMe() {
  return (
    <section className="prose prose-zinc dark:prose-invert text-[15px] animate-slide-from-down-and-fade-2 text-pretty">
      <p className="leading-relaxed">
        Ut enim ad{" "}
        <span
          className={cn(
            "font-medium font-reader text-[16px] text-foreground",
            newsreader.className
          )}
        >
          Minima Veniam
        </span>{" "}
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium
      </p>
      <p className="leading-relaxed">
        Nam libero{" "}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <span className="italic hover:underline underline-offset-4">
                Lorem,{" "}
              </span>
            </TooltipTrigger>
            <TooltipContent align="start">
              <span className="italic prose prose-zinc dark:prose-invert text-sm">
                At vero eos et accusamus et iusto odio dignissimos ducimus
              </span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>{" "}
        Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
        voluptatibus maiores alias consequatur aut perferendis doloribus
        asperiores repellat.
      </p>
    </section>
  )
}
