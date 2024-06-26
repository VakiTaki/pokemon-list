import useCount from "../atoms/Count";
// import { useAtom } from "jotai";

interface IMyTestComponentProps {
  str?: string;
}

export default function MyTestComponent({
  str = "Default string",
}: IMyTestComponentProps) {
  //   const [count] = useAtom(countState);
  const [count, setCount] = useCount();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.state = count;

  return (
    <div>
      <h2 style={{ fontSize: "50px" }}>Count from main app = {count}</h2>
      <span>Строка из пропсов {str}</span>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
