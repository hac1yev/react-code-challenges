import { memo } from "react";

const Header = () => {
    console.log("HEADER");
    
    return (
        <div>Header</div>
    );
};

const MemoizedHeader = memo(Header); 

export default MemoizedHeader;