import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./Button";
import { categories } from "../data/home";

export function Category() {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [translate, setTranslate] = useState(0);
    const [isLeft, setIsLeft] = useState(false);
    const [isRight, setIsRight] = useState(true);
    const maxTranslate = (categories.length - 1) * 65;
    const disAmount = 200;
    const handleLeftClick = () => {
        setTranslate((prevTranslate) => Math.max(prevTranslate - disAmount, 0));
    };
    const handleRightClick = () => {
        setTranslate((prevTranslate) =>
        Math.min(prevTranslate + disAmount, maxTranslate)
        );
    };
    useEffect(() => {
        setIsLeft(translate > 0);
        setIsRight(translate < maxTranslate);
    }, [translate, maxTranslate]);
    return (
        <div className="relative overflow-x-hidden">
        <div className="flex gap-3 transition-transform"
            style={{ transform: `translateX(-${translate}px)` }}>
            {categories.map((category) => (
            <Button
                key={category}
                variant={selectedCategory === category ? "dark" : "default"}
                size="default"
                onClick={() => {
                setSelectedCategory(category);
                }}
                className="whitespace-nowrap w-[max-content] py-1 px-3 rounded-lg">
                {category}
            </Button>
            ))}
        </div>
        {isRight && translate !== maxTranslate && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex justify-end">
            <Button
                onClick={handleRightClick}
                variant="ghost"
                size="icon"
                className="h-full aspect-square w-auto p-1.5">
                <ChevronRight />
            </Button>
            </div>
        )}
        {isLeft && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full">
            <Button
                onClick={handleLeftClick}
                variant="ghost"
                size="icon"
                className="h-full aspect-square w-auto p-1.5">
                <ChevronLeft />
            </Button>
            </div>
        )}
        </div>
    );
}