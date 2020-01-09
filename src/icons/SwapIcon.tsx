interface  ISwapIconProp {
  color: string;
  size: string
}
const SwapIcon: React.FC<ISwapIconProp> = ({color="#ffffff" , size="24"}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill={color} width={size} height={size} viewBox="0 0 24 24">
      <path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
};

export default SwapIcon;
