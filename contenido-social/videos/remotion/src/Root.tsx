import { Composition } from "remotion";
import { Reel10sOperaciones } from "./compositions/Reel10sOperaciones";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Reel10sOperaciones"
        component={Reel10sOperaciones}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
