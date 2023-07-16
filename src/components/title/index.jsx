export const MetaTitle = (props) => {
  return <h3 className={` text-secondary text-xl font-bold font-serif ${props.align}`}>{props.name}</h3>;
};

export const Title = (props) => {
  return (
    <h3
      className={` text-third text-4xl font-bold font-serif ${props.align}`}
    >
      {props.name}
    </h3>
  );
};
