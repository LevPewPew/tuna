"use client";

import { Button } from "~/components/button";

export default function Feed() {
  return (
    <div>
      <h1>FEED</h1>
      <Button onClick={() => alert("foobar")}>DOES NOTHING</Button>
    </div>
  );
}
