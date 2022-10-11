import "@testing-library/jest-dom/extend-expect";
import ResizeObserverPolyfill from "resize-observer-polyfill";

global.ResizeObserver = ResizeObserverPolyfill;
