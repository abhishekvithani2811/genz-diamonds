"use client"
import { useState } from "react";
import ComparisonLayout from "./comparison-card";
import ComparisonHeader from "./comparison-header";
import Button from "../../layout/button";

export default function ProductDetailCompare() {
    const [selected, setSelected] = useState([])
    const [isComparison, setIsComparison] = useState(false)

    const handleCheckBox = (val) => {
        const isExist = selected.find(item => item.id === val.id)
        console.log("val", val, isExist);
        if (isExist === -1 || !isExist) {
            setSelected([...selected, val])
        } else {
            const tmp = selected.filter((item) => item.id !== val.id)
            if (tmp.length < 2) {
                setIsComparison(false)
            }
            setSelected(tmp)
        }

        console.log("selected", selected);
    }

    const comparisonToggle = () => selected.length >= 2 ? setIsComparison(!isComparison) : setIsComparison(false)
    return (
        <>
            <ComparisonHeader selected={selected?.map((item) => item.id)} setIsComparison={comparisonToggle} />

            {
                isComparison ? <div className="p-4 pb-0 flex justify-end"> <Button variant="primary" onClick={comparisonToggle} className="" >Close</Button>  </div> : null
            }

            <ComparisonLayout isComparison={isComparison} selected={selected?.map((item) => item.id)} setSelected={handleCheckBox} />
        </>
    );
};