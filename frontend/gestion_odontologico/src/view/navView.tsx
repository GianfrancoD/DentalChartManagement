import { ImageController } from "../controller/imgController";

export const Menu: typeof ImageController = ({ ...brev }) => {
  return (
    <>
      <ImageController {...brev} />
    </>
  );
};
