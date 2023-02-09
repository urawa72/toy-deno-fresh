import { useState } from "preact/hooks";
import { Button } from "@mui/material";
import MuiDialog from "../components/MuiDialog.tsx";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  return (
    <div>
      <p>{count}</p>
      <Button onClick={() => setCount(count - 1)}>-1</Button>
      <Button onClick={() => setCount(count + 1)}>+1</Button>
      <MuiDialog />
    </div>
  );
}
