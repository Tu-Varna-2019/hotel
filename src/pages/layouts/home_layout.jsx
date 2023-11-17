import FigHome from "../../ui-components/FigHome";
import { FuncHomeOverride } from "../overrides/home_override";

export default function HomeLayout() {
  const { homeOverride } = FuncHomeOverride();
  return (
    <>
      <div
        className="amplify-container"
        style={{
          position: "relative",
          display: "inline-block",
          overflow: "hidden",
        }}
      >
        <FigHome overrides={homeOverride} />
      </div>
    </>
  );
}
