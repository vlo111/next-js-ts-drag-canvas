import dynamic from "next/dynamic";
import React from "react";

const NoSSRComponent = dynamic(() => import("./scheme/index"), {
    ssr: false,
});

export default function TestsPage() {
    return <NoSSRComponent  />;
}
