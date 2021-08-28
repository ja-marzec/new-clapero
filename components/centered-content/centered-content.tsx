import { useNavHeight } from "../../utils/nav-height";

export const CenteredContent = ({ children }) => {
  const { navHeight } = useNavHeight();

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: `calc(100vh - ${navHeight}px)`,
      }}
    >
      {children}
    </div>
  );
};
