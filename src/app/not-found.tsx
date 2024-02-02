import { Metadata } from "next";

export function generateMetadata() : Metadata {
  return {
    title: "Not Found",
    description: "Error 404: Page not found"
  }
}

export default function NotFoundPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen w-screen">
      <h1 className="font-bold text-9xl">
        404
      </h1>
      <h2 className="text-3xl">
        Page Not Found
      </h2>
    </main>
  )
}
