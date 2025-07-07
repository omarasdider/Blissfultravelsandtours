'use client'

import { useRouter } from "next/navigation";


import Button from "./Button";
import Heading from "./Heading";

interface EmptySateProps{
    title?: string;
    subtitle?: string;
   
}



const EmptyState = ({title ="No exact match", subtitle = "Try changing or remove of your filters",}:EmptySateProps) => {
    const router = useRouter()
    return ( 
    <div className="
    h-[60vh]
    flex flex-col gap-2
    justify-center
    items-center">
        <Heading
         center
          title={title}
          subtitle={subtitle} />

        <div className="w-48 mt-4">
            <Button
            outline
            label="Remove all filters"
            onClick={()=>router.push("/")}
            />
        </div>
    </div>
        
     );
}
 
export default EmptyState;