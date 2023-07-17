export const PrimaryButton  = (props) => {
    return (
      <button className=" bg-secondary text-white btn md:px-10  rounded-full border-none">
        {props.name}
      </button>
    );
}