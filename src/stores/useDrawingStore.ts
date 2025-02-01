import { defineStore } from "pinia";
interface DrawingState {
    color: string;
    lineWidth: number;
    isDrawing: boolean;
    isEraser: boolean;
}

export const useDrawingStore = defineStore("drawing", {
    state: (): DrawingState => ({
        color: "black",
        lineWidth: 5,
        isDrawing: false,
        isEraser: false,
    }),
    actions: {
        setColor(color: string) {
            this.color = color;
        },
        setLinewidth(lineWidth: number) {
            this.lineWidth = lineWidth;
        },
        setIsDrawing(isDrawing: boolean) {
            this.isDrawing = isDrawing;
        },
        setIsEraser(isEraser: boolean) {
            this.isEraser = isEraser;
        },
    },
});