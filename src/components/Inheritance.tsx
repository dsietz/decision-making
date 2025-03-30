"use client";

import React, { useMemo } from "react";
import Image from "next/image";

const InheritanceDiagram = () => {
    return (
        <div
            className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto"
            id="diagram"
        >
            Diagram Here
            <Image
                src="/assets/globe.svg"
                alt="Globe"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
            />
        </div>
    );
};

export default InheritanceDiagram;
