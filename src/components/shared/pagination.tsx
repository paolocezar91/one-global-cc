import Button from "./button";

interface PaginationInterface {
  currentPage: number;
  totalPages: number;
  onNextClick(): void;
  onPrevClick(): void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPrevClick,
  onNextClick,
}: Readonly<PaginationInterface>) {
  return (
    <div className="flex justify-between mt-8">
      <Button
        className="w-25"
        onClick={onPrevClick}
        disabled={currentPage === 1}
      >
        &lt; Previous
      </Button>
      <p className="p-2 mx-6">{`Page ${currentPage} of ${totalPages}`}</p>
      <Button
        className="w-25"
        onClick={onNextClick}
        disabled={currentPage === totalPages}
      >
        Next &gt;
      </Button>
    </div>
  );
}
