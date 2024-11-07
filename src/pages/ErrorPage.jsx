import { Link } from "react-router-dom";

export default function ErrorPage({ errorMsg }) {
  return (
    <div className="text-center flex flex-col gap-8">
      <p className="text-xl font-semibold">{errorMsg}</p>
      <Link to="/" className="px-4 py-2 bg-zinc-700 text-white self-center">
        Back to home
      </Link>
    </div>
  );
}
