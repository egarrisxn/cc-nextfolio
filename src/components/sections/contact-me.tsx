import { ShellSection } from "@/components/ui/shell";
import Link from "next/link";

export function ContactMe() {
  return (
    <ShellSection index={5} title="Connect">
      <div className="prose prose-zinc dark:prose-invert text-[15px]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
          <CustomLink href="#">Email</CustomLink>. sed do eiusmod{" "}
          <CustomLink href="#">Discord</CustomLink>. tempor incididunt ut labore
          et dolore magna <CustomLink href="#">Github</CustomLink> and{" "}
          <CustomLink href="h#">X</CustomLink> ut enim ad minim veniam.
        </p>
      </div>
    </ShellSection>
  );
}

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
}

export function CustomLink({ href, children }: CustomLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="prose prose-zinc dark:prose-invert underline-offset-4 text-[15px]  border-b border-dashed border-neutral-700 no-underline pb-[1.4px] hover:border-solid "
    >
      {children}
    </Link>
  );
}
