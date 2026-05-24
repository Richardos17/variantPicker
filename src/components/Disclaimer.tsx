export default function Disclaimer({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="text-xs text-gray-400 text-center mt-4 px-4">
        ⚠️ Unofficial tool — not affiliated with TU Delft. For fun only. Always
        check the{" "}
        <a
          href="https://studiegids.tudelft.nl"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-600"
        >
          official study guide
        </a>{" "}
        and register your variant preference by{" "}
        <strong>June 1st 23:59</strong>.
      </p>
    );
  }

  return (
    <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4 text-sm text-yellow-800">
      <p className="font-semibold mb-1">⚠️ Disclaimer</p>
      <p>
        This is an <strong>unofficial</strong> tool created by a student — it is
        not affiliated with or endorsed by TU Delft. Results are purely for fun
        and should <strong>not</strong> be taken seriously or used to make your
        actual variant choice. Always consult the{" "}
        <a
          href="https://studiegids.tudelft.nl"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-medium hover:text-yellow-900"
        >
          official study guide
        </a>{" "}
        and register your preference via{" "}
        <a
          href="https://projectforum.tudelft.nl"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-medium hover:text-yellow-900"
        >
          projectforum.tudelft.nl
        </a>{" "}
        by <strong>June 1st 23:59</strong>.
      </p>
    </div>
  );
}
