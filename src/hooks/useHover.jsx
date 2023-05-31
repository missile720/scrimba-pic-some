import {useState, useEffect, useRef} from "react"

function useHover() {
    const [hover, setHover] = useState(false);
    const ref = useRef(null);

    function onHover(){
        setHover(true);
    }

    function offHover(){
        setHover(false);
    }

    useEffect(() => {
        const node = ref.current;

        if(node){
            node.addEventListener("mouseenter", onHover);
            node.addEventListener("mouseleave", offHover);
    
            return () => {
                node.removeEventListener("mouseenter", onHover);
                node.removeEventListener("mouseleave", offHover);
            };
        }
    },[])

    return [hover, ref];
}

export default useHover