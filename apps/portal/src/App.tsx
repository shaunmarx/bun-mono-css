import { Button as PandaButton } from "@local/components-panda";
import { Button as StylexButton } from "@local/components-stylex";
import { Button as TailwindButton } from "@local/components-tailwind";

import "@local/components-panda/styles.css";
import "@local/components-stylex/styles.css";
import "@local/components-tailwind/styles.css";

function App() {
  return (
      <div>
          <h1>Woop</h1>
          <PandaButton onClick={() => alert("moo")}>Panda</PandaButton>
          <StylexButton onClick={() => alert("moo")}>Stylex</StylexButton>
          <TailwindButton variant={"secondary"}  onClick={() => alert("moo")}>Tailwind</TailwindButton>
      </div>
  )
}

export default App
