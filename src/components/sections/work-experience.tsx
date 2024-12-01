import { buttonVariants } from "@/components/ui/button"
import { ShellSection } from "@/components/ui/shell"
import { workExperience } from "@/lib/constants"
import { cn } from "@/lib/utils"
import Link from "next/link"
import type React from "react"

export interface WorkProps {
  href: string
  title: string
  status?: "freelancing" | "contract"
  buttonText?: string
}

export function WorkExperience() {
  return (
    <ShellSection index={3} title="Work Experience">
      {workExperience.map((work, index) => (
        <div
          key={index}
          className={cn(
            "w-full justify-between items-center flex border-input"
          )}
        >
          <div className="flex items-center space-x-2">
            <span className="text-[15px] leading-4">{work.title}</span>
            {work.status && (
              <div className="inline-flex items-center rounded-full border border-input px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs font-normal text-muted-foreground">
                {work.status}
              </div>
            )}
          </div>
          <Link
            href={work.href}
            className={buttonVariants({
              variant: "outline",
              size: "xs",
              className: " text-xs text-muted-foreground"
            })}
          >
            {work.buttonText ? work.buttonText : "View Details "}
          </Link>
        </div>
      ))}
    </ShellSection>
  )
}
