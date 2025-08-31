import Home from "./components/Home";

interface PageProps {
  searchParams: Record<string, string | string[] | undefined>;
}

export default async function Page({ searchParams }: PageProps) {
  const { page, search } = await searchParams;

  let currentPage: number;
  if (Array.isArray(page)) {
    currentPage = Number(page[0]) || 1;
  } else {
    currentPage = Number(page) || 1;
  }

  const searchQuery = Array.isArray(search) ? search[0] : search;

  return (
    <>
      <Home currentPage={currentPage} searchQuery={searchQuery} />
    </>
  );
}
