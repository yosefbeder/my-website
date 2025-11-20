import Link from "next/link";
import ArrowTopRightOnSquare from "./ArrowTopRightOnSquare";

const ArrowLink = ({ href, children }: { href: string; children: string }) => (
  <Link
    href={href}
    target="_blank"
    className="text-blue-500 hover:text-blue-600 transition-colors font-medium"
  >
    <span className="underline">{children}</span>
    <ArrowTopRightOnSquare />
  </Link>
);

export default ArrowLink;
