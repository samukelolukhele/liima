import React, { useState, useEffect } from "react";

export default function Message({ variant, children }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => clearTimeout(timeId);
  });

  if (!show) return null;

  return <div className="mx-auto p-2 my-3 rounded-lg bg-black">{children}</div>;
}
