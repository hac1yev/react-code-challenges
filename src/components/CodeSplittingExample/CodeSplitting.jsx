import { lazy, Suspense } from "react";

const Coins = lazy(() => import("./Coins"));

const CodeSplitting = () => {
    return (
        <Suspense fallback={"Loading..."}>
            <Coins />
        </Suspense>
    );
};

export default CodeSplitting;