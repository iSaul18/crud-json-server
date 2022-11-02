export const Alerta = ({ condition, asunt }) => {
  return <>{condition && <p className="font-bold mx-auto text-2xl mt-60 col-span-full">{asunt}</p>}</>;
};
