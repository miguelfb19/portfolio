import { CgSpinner } from "react-icons/cg";

export const LoadingSpinner = ({size = 35}) => {
  return (
    <section className="loadingSpinner">
      <CgSpinner size={size} />
    </section>
  );
};
