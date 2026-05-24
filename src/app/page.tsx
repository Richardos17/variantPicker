import Quiz from "@/components/Quiz";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <Quiz />
      <footer className="mt-12 text-xs text-gray-300 text-center">
        Made with ❤️ by a fellow CSE student · Not affiliated with TU Delft
      </footer>
    </main>
  );
}
