import * as React from "react";
import { CarouselInternalState, CarouselProps } from "./types";
declare class Carousel extends React.Component<CarouselProps, CarouselInternalState> {
    static defaultProps: any;
    private readonly containerRef;
    onMove: boolean;
    initialPosition: number;
    lastPosition: number;
    isAnimationAllowed: boolean;
    direction: string;
    autoPlay?: any;
    constructor(props: CarouselProps);
    componentDidMount(): void;
    setItemsToShow(shouldCorrectItemPosition?: boolean): void;
    setContainerAndItemWidth(slidesToShow: number, shouldCorrectItemPosition?: boolean): void;
    correctItemsPosition(itemWidth: number): void;
    onResize(): void;
    componentDidUpdate({ keyBoardControl, autoPlay }: CarouselProps, { containerWidth }: CarouselInternalState): void;
    resetAllItems(): void;
    next(slidesHavePassed?: number): void;
    previous(slidesHavePassed?: number): void;
    componentWillUnmount(): void;
    resetMoveStatus(): void;
    handleDown(e: any): void;
    handleMove(e: any): void;
    handleOut(e: any): void;
    onKeyUp(e: any): void;
    handleEnter(): void;
    goToSlide(slide: number): void;
    getState(): any;
    renderLeftArrow(): React.ReactElement<any>;
    renderRightArrow(): React.ReactElement<any>;
    renderDotsList(): JSX.Element;
    render(): React.ReactNode;
}
export default Carousel;
